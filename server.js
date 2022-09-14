

const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const {
  graphql,
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
} = require('graphql');

var schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'HelloWorld',
    fields: {
      message: {
        type: GraphQLString,
        resolve: () => 'Hello World'
      },
    },
  }),
});


const app = express();

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}))
app.listen(5000, () => console.log('server running'))
