const HostResolver = require('./HostResolvers');
const PropertyResolver = require('./PropertyResolvers');
const ReviewResolver = require('./ReviewResolvers');
const UserResolver = require('./UserResolvers');
const { EmailAddressResolver, URLResolver } = require('graphql-scalars');

module.exports = {
    EmailAdd: EmailAddressResolver,
    URL: URLResolver,
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