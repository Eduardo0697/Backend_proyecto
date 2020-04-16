require('dotenv').config();
const { GraphQLServer } = require('graphql-yoga');
const { importSchema } = require('graphql-import');
const { makeExecutableSchema } = require('graphql-tools');
const verifyToken = require('./src/utils/verifyToken');
const AuthDirective = require('./src/resolvers/Directives/AuthResolver');
const resolvers = require('./src/resolvers');

const mongooose = require('mongoose');

const uri = process.env.NODE_ENV == 'test'
    ? process.env.MONGO_URL_TEST
    : process.env.MONGO_URL_DEVELOP;

mongooose.connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
});

const mongo = mongooose.connection;

mongo.on('error', error => console.log(error))
    .once('open', () => console.log('Connected'));

const typeDefs = importSchema(__dirname + '/schema.graphql');

const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
    schemaDirectives: {
        auth: AuthDirective,
    }
});

const  server = new GraphQLServer({
    schema,
    context: async (contextParams) => ({
        ...contextParams,
        userAuth: contextParams.request
            ? await verifyToken(contextParams.request)
            : {},
    }),
});

server.start(() => console.log('Server iniciado en puerto 4000'));

module.exports = { schema };