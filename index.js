const { GraphQLServer } = require('graphql-yoga');

const typeDefs = `
    type Query{
        hello(name : String!): String!
        getUsers:[User]!
        getUser(id: Int! ) : User!
    }

    type Mutation{
        createUser( name:String!, age:Int): User!
        deleteUser( id: Int!) : String!
        updateUser( id: Int!, name:String!, age:Int) : [User]!
    }

    type User{
        id: Int!
        name: String!
        age: Int
    }
`;

const users = [];

const resolvers = {
    Query:{
        hello: (root, params, context, info) => `Hola ${params.name} 🥶`,
        getUsers: (root, params, context, info) =>  users,
        getUser: (root, { id }, context, info) => users.find(u => u.id === id)
    },
    Mutation:{
        createUser: (root, { name, age}, context, info) => {
            const user = {
                id: users.length + 42454,
                name,
                age,
            };

            users.push(user);
            return user;
        },
        deleteUser: (root, { id }, context, info) => {
            users.splice(users.indexOf(users.find(u => u.id === id)),1)
            return `Se Elimino con exito el usuario con id ${ id }`
        },
        updateUser: (root, { id, name, age}, context, info) => {
            const user = users.find(u => u.id === id);
            const newUser = {
                id: user.id,
                name : name,
                age : age
            }
            users.splice(users.indexOf(user),1,newUser)
            return users;
        }
    }
};

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