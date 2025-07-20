const { gql } = require('apollo-server');

const typeDefs = gql`
    type Book {
        title: String
        author: String
    }
	
	type Human {
        title: String
        author: String
    }

    type Query {
        books: [Book],
		human(id: ID!): Human
    }
`;

module.exports = typeDefs;