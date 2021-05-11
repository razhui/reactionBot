const Discord = require("discord.js");
const client = new Discord.Client();
const config = require('./config.json');

////////////////START CLIENT/////////////////

client.once("ready", () => {
    console.log("Ready");
});

////////////////WEBHOOK CODE/////////////////

const webhook = new Discord.WebhookClient(config.webhook_id, config.webhook_token);

////////////////MESSAGE CODE/////////////////

client.on("message", message => {
    //Assigns user to role, shortly deletes message after
    // if (message.content.toLowerCase() === "academy student") {

    //     let userInput = message.content.toLowerCase();
    //     let role = message.guild.roles.cache.find(role => role.name.toLowerCase() === userInput);
    //     if (role) {
    //         if (message.member.roles.cache.has(role.id)) {
    //             message.reply("You are already in the academy.").then(message => {message.delete({timeout: 5000})})
    //             message.delete({timeout: 5000});
    //         } else {
    //             message.member.roles.add(role)
    //             message.reply("Welcome to the Academy").then(message => {message.delete({timeout: 5000})});
    //             message.delete({timeout: 5000});
    //         }
    //     }
    // }

    //BOT REACTS WITH YOUSORO
    if (message.content.toLowerCase() === "yousoro") {
        const reactYousoro = message.guild.emojis.cache.find(emoji => emoji.name === "Yousoro7")
        message.react(reactYousoro);
    }

    //AUTO DELETE USER MESSAGES
    // else if (message.channel.id === config.channel_id) {
    //    message.delete({timeout: 5000});
    // }

    //EMBED TEXT PEKO
    if (message.content.toLowerCase() === "peko") {

        //WEBHOOK CONTENT
        const embed = new Discord.MessageEmbed()
            .setTitle("This world shall know peko.")
            .setDescription("Feel peko, think peko, accept peko, know peko...")
            .setColor("#dcd6f7")
            .setImage("https://cdn.discordapp.com/attachments/740633711665610752/772521970943524954/image0.jpg");
    
        
        //WEBHOOK DETAIL AND SEND FUNCTION
        webhook.send(null, {
            username: "Pekora Usada",
            avatarURL: "https://staticdelivery.nexusmods.com/mods/2531/images/thumbnails/2721/2721-1583430189-1782774948.png",
            embeds: [embed]
            });

        // message.channel.send(embed);

    }

    //

    if (message.author.bot) {
        if (message.embeds) {

            const embed3dtalent = message.embeds.find(msg => msg.title === "hololive 3D Talents");
            const embed2dtalent = message.embeds.find(msg => msg.title === "hololive 2D Talent");
            const embed1stGen = message.embeds.find(msg => msg.title === "hololive 1st Generation");

            if (embed3dtalent) {
                message.react("🐻")
                .then(reaction => reaction.message.react("🤖"))
                .then(reaction => reaction.message.react("🌸"))
                .catch (err => console.log)
            } else if (embed2dtalent) {
                message.react("☄️")
            } else if (embed1stGen) {
                message.react("🌟")
                .then(reaction => reaction.message.react("🌽"))
                .then(reaction => reaction.message.react("🏮"))
                .then(reaction => reaction.message.react("🍎"))
                .then(reaction => reaction.message.react("❣️"))
            }
        };
    }

    if (message.content.toLowerCase() === "embedhololive") {

        
        const embed3dTalent = new Discord.MessageEmbed()
        .setTitle("hololive 3D Talents")
        .setDescription(
            ":bear: Tokino Sora\n" +
            ":robot: Robosa\n" +
            ":cherry_blossom: Sakura Miko"
        )

        const embed2dTalent = new Discord.MessageEmbed()
        .setTitle("hololive 2D Talent")
        .setDescription(
            ":comet: Hoshimachi Suisei"
        )

        const embed1stGen = new Discord.MessageEmbed()
        .setTitle("hololive 1st Generation")
        .setDescription(
            ":star2: Yozora Mel\n" +
            ":corn: Shirakami Fubuki\n" +
            ":izakaya_lantern: Natsuiro Matsuri\n" +
            ":apple: Aki Rosenthal\n" +
            ":heart: Akai Haato"
        )

        // webhook.send(null, {
        //     username: "Choose your fandoms",
        //     embeds: [embed3dTalent]
        // });

        webhook.send(null, {
            username: "Choose your fandoms",
            embeds: [embed2dTalent]
        });

        // webhook.send(null, {
        //     username: "Choose your fandoms",
        //     embeds: [embed1stGen]
        // });

    }

});

client.on("messageReactionAdd", (reaction, user) => {
    let roleName = "☄️";
    // let role = "773784018680414228"
    // let role = reaction.message.guild.roles.cache.find(role => role.name.substring(0) === roleName)
    console.log(reaction.emoji.guild.roles.cache)
    let emojiIdentifier = reaction.emoji.identifier;

    let member = reaction.message.guild.members.cache.find(member => member.id === user.id);
    // console.log(reaction.emoji.identifier);
    if (roleName === emojiIdentifier) {
        member.roles.add(role);
    } 
    // else {
    //     console.log(err)
    // }
})

client.login(config.token);

    // if (message.content.toLowerCase() === "academy student") {

    //     let userInput = message.content.toLowerCase();
    //     let role = message.guild.roles.cache.find(role => role.name.toLowerCase() === userInput);
    //     if (role) {
    //         if (message.member.roles.cache.has(role.id)) {
    //             message.reply("You are already in the academy.").then(message => {message.delete({timeout: 5000})})
    //             message.delete({timeout: 5000});
    //         } else {
    //             message.member.roles.add(role)
    //             message.reply("Welcome to the Academy").then(message => {message.delete({timeout: 5000})});
    //             message.delete({timeout: 5000});
    //         }
    //     }
    // }