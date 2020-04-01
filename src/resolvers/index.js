
const PropertyResolver = require('./PropertyResolvers');
const PropertyReviewResolver = require('./PropertyReviewResolvers');
const UserResolver = require('./UserResolvers');
const { EmailAddressResolver, URLResolver } = require('graphql-scalars');

module.exports = {
    EmailAdd: EmailAddressResolver,
    URL: URLResolver,
    Query:{
        ...PropertyResolver.Query,
        ...PropertyReviewResolver.Query,
        ...UserResolver.Query,
    },
    Mutation:{
        ...PropertyResolver.Mutation,
        ...PropertyReviewResolver.Mutation,
        ...UserResolver.Mutation,
    },
};