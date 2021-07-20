## packages used

- **Express**: Express is a fast, essential, and the most famous web framework of Node.js, designed for building web applications and APIs. It has been called the de facto standard server framework for Node.js.
- **Mongoose**: Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js. It manages relationships between data, provides schema validation, and is used to translate between objects in code and the representation of those objects in MongoDB.
- **Dotenv**: In the production systems, we should not hardcode the sensitive data like API Keys, Secret Tokens, etc directly within the codebase (based on the Twelve factor App method). We will pass them as environment variables. This module helps us to load environment variables from a .env file into process.env
- **UUID**: We need to generate a unique id for some stuff, regardless of the application. Whatever may be the core logic, we will need to generate unique ids in our application like “userId”, “ordered”, “articleId” and so on. So this is a popular package to create random unique ids in our application
- **Mongo-Sanitize**: This module is used to secure our application from query selector injection attacks. The sanitize function will strip out any keys that start with ‘$’ in the input, so we can pass it to MongoDB without worrying about malicious users overwriting query selectors.
- **Morgan**: It is an HTTP request logger middleware. We will use this package to log the requests that hit our server. This module supports various options.
- **nodemon**: Reduces a lot of development time by automatically restarting our application whenever any file related to our project is altered and saved.
  
