const { gql } = require('apollo-server-express');

const me = () => 'Afrizal';

module.exports = {
    Query: {
        me
    }
};
