import { ApolloServer } from "apollo-server";
import { ApolloGateway } from "@apollo/gateway";

const gateway = new ApolloGateway({
  serviceList: [{ name: "login", url: "http://login:4000" }],
});
const server = new ApolloServer({ gateway, introspection: false });

server
  .listen()
  .then(({ url }) => console.log(`${url}`))
  .catch((err) => {
    console.error(err);
  });
