const { ApolloEngineLauncher } = require('apollo-engine');

// Use this behind nginx w/ssl
// Define the Engine configuration.
const launcher = new ApolloEngineLauncher({
    logging: {
        level: 'DEBUG'   // Engine Proxy logging level. DEBUG, INFO, WARN or ERROR
        },
    // Enter your API key from step 2 above. You can also provide this
    // in the ENGINE_API_KEY environment variable.
    apiKey:  "" ,// YOUR Apollo-Engine API KEY HERE,
    origins: [{
        http: {
        // The URL that the Proxy should use to connect to your
        // GraphQL server.
        url: 'http://localhost:4000/graphiql',
        },
    }],
    // Tell the Proxy on what port to listen, and which paths should
    // be treated as GraphQL instead of transparently proxied as raw HTTP.
    // You can leave out the frontend section if you want: the default for
    // 'port' is process.env.PORT, and the default for endpoints is
    // ['/graphql'].
    frontends: [{
        port: 3000,
        endpoints: ['/graphiql'],
    }],
});

// Start the Proxy; crash on errors.
launcher.start().catch(err => { throw err; });