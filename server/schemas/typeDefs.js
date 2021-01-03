const { gql } = require('apollo-server-express');

const typeDefs = gql`
   type Reaction {
      _id: ID
      reactionBody: String
      createdAt: String
      username: String
   }

   type Thought {
      _id: ID
      thoughtText: String
      createdAt: String
      username: String
      reactionCount: Int
      reactions: [Reaction]
   }

   type Query {
      thoughts(username: String): [Thought]
   }
`;

module.exports = typeDefs;