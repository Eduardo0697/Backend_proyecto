const HostResolver = require('./HostResolvers');
const PropertyResolver = require('./PropertyResolvers');
const ReviewResolver = require('./ReviewResolvers');
const UserResolver = require('./UserResolvers');

module.exports = {
    Query:{
        ...HostResolver.Query,
        ...PropertyResolver.Query,
        ...ReviewResolver.Query,
        ...UserResolver.Query,

    },
    Mutation:{
        ...HostResolver.Mutation,
        ...PropertyResolver.Mutation,
        ...ReviewResolver.Mutation,
        ...UserResolver.Mutation,
    },
};