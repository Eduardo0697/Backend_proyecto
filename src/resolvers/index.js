const HostResolver = require('./HostResolvers');

module.exports = {
    Query:{
        ...HostResolver.Query
    },
    /*Mutation:{
        ...HostResolver.Mutation
    },*/
};