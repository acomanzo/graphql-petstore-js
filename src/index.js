const fs = require('fs');
const path = require('path');
const Query = require('./resolvers/Query');
const Mutation = require('./resolvers/Mutation');
const { ApolloServer } = require('apollo-server');

let pets = [];
let orders = [];
let customers = [];
let addresses = [];
let users = [];
let categories = [];
let tags = [];
let apiResponses = [];

const resolvers = {
    Query,
    Mutation
};

const server = new ApolloServer({
    typeDefs: fs.readFileSync(
        path.join(__dirname, 'schema.graphql'), 
        'utf8'
    ),
    resolvers,
    context: { pets, orders, customers, addresses, users, categories, tags, apiResponses }
})

server.listen().then(({ url }) => {
    console.log(`Server is running on ${url}`);
});