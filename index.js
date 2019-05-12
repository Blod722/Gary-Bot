const Discord = require ('discord.js');
const bot = new Discord.Client();

const token = '';

const Activities = ['Soccer, what else?','The Bengals - SIKE!','Moomba and Chalupa make the 2019 Discord Scarf.','Music Hall complain about the stadium again.','Guido give out red cards.','Adi complain about "team identity".','Hoyte, he is open! Still open!','Bone take us to the zone.','Richey save another ball.','Koch get cut.','Damet attempt to recover the team.','Gary as he makes a press statement.','Whoever this new Blond Haired guy play.','Dennis go full on Denbot mode.','Buzz make another poop emote.','Mainframe love Jimmy from afar.','Ope Shirts sell out.','Ox edit more Wikipedia pages.','Blod as he says something stupid.','Fiddle win another FCC eMLS match.','Franklin Krum update Cincy Chants.','Fruity dominate another Rocket League match.'];

const GaryMsg = ['hello gary','howdy gary','hey gary','hola gary','hi gary']

var Gary = ["Waddup?","What's Good?","Hola","Howdy.","Whats good in the hood?","¿Cómo te va?","Hello","Hey, and before you ask. It's my name because thats what it is.","That's my name, don't wear it out!","Arrgg me boy, that's who me name is!"];


bot.on('ready', () =>{
    console.log('Bot Ready!');
        setInterval(() => {
            const index = Math.floor(Math.random() * (Activities.length - 1) + 1); // generates a random number between 1 and the length of the activities array list (in this case 5).
            bot.user.setActivity(Activities[index],{ type: 'WATCHING'}).catch(console.error); // sets bot's activities to one of the phrases in the arraylist.
        }, 25000); // Runs this every 25 seconds.
    });

bot.on ("message", (message) => {

    if (message.author.bot) return;

    msg = message.content.toLowerCase();

    if (msg.includes('hello gary')) {
        var GResponse = Gary[Math.floor(Math.random() * (Gary.length -1 ) + 1)]
            message.channel.send(message.author +', '+ GResponse)};

    if (msg.includes('howdy gary')) {
            var GResponse = Gary[Math.floor(Math.random() * (Gary.length -1 ) + 1)]
                message.channel.send(message.author +', '+ GResponse)};

    if (msg.includes('hey gary')) {
        var GResponse = Gary[Math.floor(Math.random() * (Gary.length -1 ) + 1)]
                message.channel.send(message.author +', '+ GResponse)};

    if (msg.includes('hola gary')) {
        var GResponse = Gary[Math.floor(Math.random() * (Gary.length -1 ) + 1)]
            message.channel.send(message.author +', '+ GResponse)};

    if (msg.includes('hi gary')) {
        var GResponse = Gary[Math.floor(Math.random() * (Gary.length -1 ) + 1)]
            message.channel.send(message.author +', '+ GResponse)};

    if (msg.includes('damn it'))
    message.react("🇩")
        .then(() => message.react("🇦")
        .then(() => message.react("🇲")
        .then(() => message.react("🇪")
        .then(() => message.react("🇹")
        )))); 

    if (msg.includes("test"))
        message.channel.send('Yup, this is working');

    if (message.content === 'pineapple on pizza is ok')
        message.reply("Please tell me why, just why? Why do you think Pineapple is okay on pizza? It's a purely tasteless and disgusting mess. When you get pineapple on pizza you literally ruin it for everyone else, no one will eat that nasty mess of Pinapple. They literally arn't suppose to be on it, the italians said so. The Late Great Gordan Ramsey himself even said 'You don't put fucking pineapple on pizza'. Quoted, word for word. Like how much of a disgusting human being to say that pineapple is okay on pizza, after one of the world's greatest chefs told you otherwise. It's wrong, Completely and udderly wrong. The Italians cry at what we've made pizza, just a disgusting mess of dough, cheese, and pizza sauce. Topped with whatever we want, no matter the flavor. If we want it, we get it on. Absolutely putrid.");

    if (msg.includes("koch bot"))
        message.channel.send('"The real reason we kicked Koch off the team was !pizza" - Gary');
    
    if (msg.includes('endgame'))
        message.channel.send('At the very end, Thanos finally wins, he snaps his fingers again and head coach Alan Koch is fired.');

    if (msg.includes("guido"))
        message.react("<:redcard:339963855906275329>")
//        message.react("<:yellowcard:339963858519195648>")

    if (msg.includes("ope"))
        message.react("<:ope:574319300228415498>");

    if (msg.includes("oi"))
        message.react("<:oi:339774761649438720>");

    if (msg.includes("oof"))
        message.react("<:oof:576523423237537843>");

    if (msg.includes(':upgary:'))
    (message.channel.send("", {file: "/home/blod/Gary/images/Upgary.png"}));

    if (msg.includes("name")) {
        if (msg.includes("gary"))
            message.reply("Cause that's what my name is.")};

});

bot.login(token)
