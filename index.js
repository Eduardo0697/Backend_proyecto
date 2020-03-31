require('dotenv').config();
const { GraphQLServer } = require('graphql-yoga');
const { importSchema } = require('graphql-import');
const resolvers = require('./src/resolvers');

const mongooose = require('mongoose');

mongooose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
});

const mongo = mongooose.connection;

mongo.on('error', error => console.log(error))
    .once('open', () => console.log('Connected'));

const typeDefs = importSchema(__dirname + '/schema.graphql');



/**
 * root: informacion del server de gpql
 * params: datos que envia el cliente y se definen en el type def
 * context: es un objeto por el cual se comunican los resorvers
 * info: es el query que se ejecuto por el cliente
 * 
 */
const server = new GraphQLServer({
    typeDefs,
    resolvers,
});

server.start(() => console.log('Server iniciado en puerto 4000'));