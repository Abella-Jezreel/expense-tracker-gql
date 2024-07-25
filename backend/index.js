import { ApolloServer } from "@apollo/server"
import { startStandaloneServer } from "@apollo/server/standalone"
import mergedResolvers from "./resolvers/index"
import mergedTypeDefs from "./typeDefs/index"
 
const server = new ApolloServer({
  typeDefs: mergedTypeDefs,
  resolvers: mergedResolvers,
})
 
const { url } = await startStandaloneServer(server)
 
console.log(`🚀 Server ready at ${url}`)