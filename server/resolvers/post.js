const { gql } = require('apollo-server-express');
const { posts } = require('../temp');

// queries
const totalPosts = () => posts.length;
const semuaPostingan = () => posts;

// mutation
const newPost = (parent, args) => {
    // console.log(args);
    // create a new post object
    const post = {
        id: posts.length + 1,
        ...args.input
    };
    // push new post object to posts array
    posts.push(post);
    return post;
};

module.exports = {
    Query: {
        totalPosts,
        semuaPostingan
    },
    Mutation: {
        newPost
    }
};
