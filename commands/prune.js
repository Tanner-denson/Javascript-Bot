exports.run = (client, message, args) => {
  let messagecount = parseInt(args[0]) + 1;
  message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
}
