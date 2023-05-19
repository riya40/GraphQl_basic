const express = require('express')
const expressGraphQL = require('express-graphql').graphqlHTTP

const{
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
} = require('graphql')

const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name:'HelloWorld',
        fields:()=>({
            message:{
                type:GraphQLString,
                resolve:()=>'Hello World'
            }
        })

    })
})

const app = express()

app.use('/',expressGraphQL({
    schema:schema,
    graphiql:true,
}))

const PORT = 8080
app.listen(PORT,()=> console.log('GraphQL Server is Running!'))