import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client";
import cors from "cors";

const httpLink = createHttpLink({
  uri: "http://15.207.24.23/graphql",
});

// TRY

// const authLink = setContext((_, { headers }) => {
//   return {
//     headers: {
//       ...headers,
//       "Access-Control-Allow-Origin": "*",
//     },
//   };
// });


// const client = new ApolloClient({
//   link: authLink.concat(httpLink),
//   cache: new InMemoryCache(),
// });

// TRY

// const client = new ApolloClient({
//   uri: "http://65.2.143.51/graphql",
//   cache: new InMemoryCache(),
//   // credentials: 'include',
//   headers: {
//     "Access-Control-Allow-Origin": "*"
//   }
// });

// TRY

const client = new ApolloClient({
  uri: "http://15.207.24.23/graphql",
  cache: new InMemoryCache(),
  headers: {
    // authorization: localStorage.getItem('token'), TRY
    "Access-Control-Allow-Origin": "*"
  }
});


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
