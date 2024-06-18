const config = {
  botId: process.env.BOT_ID,
  botPassword: process.env.SECRET_BOT_PASSWORD,
  openAIKey: process.env.SECRET_OPENAI_API_KEY,
  openAIModelName: "gpt-3.5-turbo",
};
console.log(`Config Values from config.js:`);
console.log(`botId: ${config.botId}`);
console.log(`botPassword: ${config.botPassword}`);
console.log(`openAIKey: ${config.openAIKey}`);

module.exports = config;
