exports.run = (client, message, args) => {
    if(message.author.dmChannel == null)
    {
      message.author.dmChannel.send('Commands:\n help: Displays commands\n pfp: Sends link to your profile picture\n ping: Responds with Pong!\n say: Makes the bot say what you type after it').catch(console.error);
    }
    else
    {
        message.author.createDM().send('Commands:\n help: Displays commands\n pfp: Sends link to your profile picture\n ping: Responds with Pong!\n say: Makes the bot say what you type after it').catch(console.error);
    }
}
