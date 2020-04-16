const { graphql } = require('graphql');
const  { schema } = require('../../index');
const { createOneUser } = require('../services/UserService');

const setUpTest = require('./helpers');

const MUTATION_CREATE_USER = `
    mutation createUser($data:UserCreateInput){
        createUser(data:$data){
            _id
            email
            is_active
        }
    }
`;

const MUTATION_UPDATE_USER = `
    mutation updateUser($data:UserUpdateInput){
        updateUser(data:$data){
            _id
            email
            is_active
        }
    }
`;

const MUTATION_DELETE_USER = `
    mutation deleteUser{
        deleteUser
    }
`;

describe('Test Create User Mutation', () => {
    beforeEach( async () => await setUpTest());

    test('Mi primer prueba de tests :O', () => {
        //eslint-disable-next-line no-undef
        expect(3).toBe(3);
    });
    it('Should Create an user', (done) =>{
        const makeTest = async () => {
            const data = {
                first_name: 'Usuario',
                last_name: 'Apellido',
                email: 'email@test.com',
                password: 'qwerty'
            };

            graphql(schema, MUTATION_CREATE_USER, null, {}, {data})
                .then( res => {
                    //eslint-disable-next-line no-undef
                    expect(res.data.createUser).toHaveProperty('_id');
                    //eslint-disable-next-line no-undef
                    expect(res.data.createUser).toHaveProperty('email', data.email);
                    expect(res.data.createUser).toHaveProperty('is_active', true);
                    done();
                });
        };
        makeTest();
    }, 300000);

    it('Should not create an user', (done) => {
        const makeTest = async () => {
            const data = {
                first_name: 'Usuario',
                last_name: 'Apellido',
                email: 'email@test.com',
                password: 'qwerty'
            };


        await createOneUser(data);
        graphql(schema, MUTATION_CREATE_USER, null, {}, {data})
                .then(res => {
                    //eslint-disable-next-line no-undef
                    expect(res).toHaveProperty('errors');
                    done();
                });
        };
        makeTest();
    },30000);

});

//eslint-disable-next-line no-undef
describe('Test Update user Mutation', () => {
    //eslint-disable-next-line no-undef
    beforeEach( async () => await setUpTest());
    //eslint-disable-next-line no-undef
    it('Should update user', (done) => {
       const makeTest = async () => {
           const user = {
               first_name: 'Usuario',
               last_name: 'Apellido',
               email: 'email@test.com',
               password: 'qwerty'
           };

           const userAuth = await createOneUser(user);

           const data = {
               email: 'modified@email.com',
           };

           graphql(schema,MUTATION_UPDATE_USER, null, {userAuth}, {data})
               .then( res => {
                   expect(res.data.updateUser).toHaveProperty('email', data.email);
                   done();
               });
       };
       makeTest();
    });

    it('Should not update user', (done) => {
        const makeTest = async () => {

            const userAuth = {};
            const data = {
                email: 'modified@test.com'
            };

            graphql(schema,MUTATION_UPDATE_USER, null, {userAuth}, {data})
                .then( res => {
                    expect(res).toHaveProperty('errors');
                    done();
                });
        };
        makeTest();
    });

});

//eslint-disable-next-line no-undef
describe('Test delete user Mutation', () => {
    //eslint-disable-next-line no-undef
    beforeEach( async () => await setUpTest());
    //eslint-disable-next-line no-undef
    it('Should delete user', (done) => {
        const makeTest = async () => {
            const user = {
                first_name: 'Usuario',
                last_name: 'Apellido',
                email: 'email@test.com',
                password: 'qwerty'
            };

            const userAuth = await createOneUser(user);

            graphql(schema,MUTATION_DELETE_USER, null, {userAuth})
                .then( res => {
                    expect(res.data).toHaveProperty('deleteUser', 'User deleted');
                    done();
                });
        };
        makeTest();
    });

    it('Should not delete user', (done) => {
        const makeTest = async () => {
            const user = {
                first_name: 'Usuario',
                last_name: 'Apellido',
                email: 'email@test.com',
                password: 'qwerty'
            };

            const userAuth = {};

            graphql(schema,MUTATION_DELETE_USER, null, {userAuth})
                .then( res => {
                    expect(res).toHaveProperty('errors');
                    done();
                });
        };
        makeTest();
    });

});