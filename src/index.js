const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../env/.env.local') });
require('dotenv').config({ path: path.resolve(__dirname, '../env/.env.local.user') });

// Print all environment variables to check
console.log('Loaded Environment Variables:');
console.log(process.env);

// Extract the required environment variables
const botId = process.env.BOT_ID;
const botPassword = process.env.SECRET_BOT_PASSWORD;
const openAIKey = process.env.SECRET_OPENAI_API_KEY;

// Print the specific environment variables to check
console.log(`first Config Values:`);
console.log(`botId: ${botId}`);
console.log(`botPassword: ${botPassword}`);
console.log(`openAIKey: ${openAIKey}`);
console.log(`first Environment Variables:`);
console.log(`BOT_ID: ${process.env.BOT_ID}`);
console.log(`BOT_PASSWORD: ${process.env.SECRET_BOT_PASSWORD}`);
console.log(`OPENAI_API_KEY: ${process.env.SECRET_OPENAI_API_KEY}`);
// Import required packages
const restify = require("restify");

// This bot's adapter
const adapter = require("./adapter");

// This bot's main dialog.
const app = require("./app/app");

// Create HTTP server.
const server = restify.createServer();
server.use(restify.plugins.bodyParser());

server.listen(process.env.port || process.env.PORT || 3978, () => {
  console.log(`\nBot Started, ${server.name} listening to ${server.url}`);
});
// Print environment variables to console
console.log("second Environment Variables:");
console.log(`BOT_ID: ${process.env.BOT_ID}`);
console.log(`BOT_PASSWORD: ${process.env.SECRET_BOT_PASSWORD}`);
console.log(`OPENAI_API_KEY: ${process.env.SECRET_OPENAI_API_KEY}`);

// Listen for incoming server requests.
server.post("/api/messages", async (req, res) => {
  // Route received a request to adapter for processing
  await adapter.process(req, res, async (context) => {
    // Dispatch to application for routing
    await app.run(context);
  });
});
