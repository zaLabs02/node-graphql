const { gql } = require('apollo-server-express');

module.exports = gql`
    type Post {
        id: ID!
        judul: String!
        deskripsi: String!
        kategori: String!
    }
    # input type
    input PostInput {
        title: String!
        description: String!
    }
    type Query {
        totalPosts: Int!
        semuaPostingan: [Post!]!
    }
    # mutations
    type Mutation {
        newPost(input: PostInput!): Post!
    }
`;
