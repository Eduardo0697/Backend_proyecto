
const PropertyResolver = require('./PropertyResolvers');
const PropertyReviewResolver = require('./PropertyReviewResolvers');
const UserResolver = require('./UserResolvers');
const ReservationResolver = require('./ReservationResolvers')
const { EmailAddressResolver, URLResolver } = require('graphql-scalars');

module.exports = {
    EmailAdd: EmailAddressResolver,
    URL: URLResolver,
    Query:{
        ...ReservationResolver.Query,
        ...PropertyResolver.Query,
        ...PropertyReviewResolver.Query,
        ...UserResolver.Query,
    },
    Mutation:{
        ...ReservationResolver.Mutation,
        ...PropertyResolver.Mutation,
        ...PropertyReviewResolver.Mutation,
        ...UserResolver.Mutation,
    },
};