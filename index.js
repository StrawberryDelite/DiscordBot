const Discord = require("discord.js");
const client = new Discord.Client();
const { token, prefix} = require("./config.json");

//test

client.on("ready", () => {
  console.log("I am ready!");
});

client.on("message", (message) => {
    
    if (message.content.startsWith("the")) {
        message.channel.send("game!");
    }

    if (!message.content.startsWith(prefix) || message.author.bot) return;

    if (message.content.startsWith(prefix + "ping")) {
        message.channel.send("pong!");
    }
});
 
client.login(token);