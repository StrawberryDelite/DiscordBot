module.exports = async client => {
  // Log that the bot is online.
  client.logger.log(`${client.user.tag}, ready to serve ${client.users.size} users in ${client.guilds.size} servers.`, "ready");

  // Make the bot "play the game" which is the help command with default prefix.
  client.user.setActivity(`${client.config.defaultSettings.prefix}help`, {type: "PLAYING"});

  //Ready message to joined servers
  var guildList = client.guilds.array();
  try {
    guildList.forEach(guild => guild.defaultChannel.send("Bot is ready for action!").catch(console.error));
  } catch (err) {
    console.log("Failed to send ready message to " + guild.name);
  }
};
