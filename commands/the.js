exports.run = (client, message, args, level) => {
    message.channel.send("game!").catch(console.error);
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: "User"
  };
  
  exports.help = {
    name: "the",
    category: "System",
    description: "test",
    usage: "test"
  };