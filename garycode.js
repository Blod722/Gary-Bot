const Discord = require ('discord.js');
const bot = new Discord.Client();

const token = '';

const Activities = ['Soccer, what else?','The Bengals - SIKE!','Moomba and Chalupa make the 2019 Discord Scarf.','Music Hall complain about the stadium again.','Guido give out red cards.','Adi complain about "team identity".','Hoyte, he is open! Still open!','Bone take us to the zone.','Richey save another ball.','Koch get cut.','Damet attempt to recover the team.','Gary as he makes a press statement.','Whoever this new Blond Haired guy play.','Dennis go full on Denbot mode.','Buzz make another poop emote.','Mainframe love Jimmy from afar.','Ope Shirts sell out.','Ox edit more Wikipedia pages.','Blod as he says something stupid.','Fiddle win another FCC eMLS match.','Franklin Krum update Cincy Chants.','Fruity dominate another Rocket League match.'];

const GaryMsg = ['hello gary','howdy gary','hey gary','hola gary','hi gary']

var Roast = ["I bet this dude wants Djiby back.", "You look like the kinda girl (or guy if thats how you identify) that likes the Columbus Crew.", "Yeah, you definitely think you're fancy by calling it Fussball.", "Looks like a straight up Louisville City FC fan.", "You probobly say that the Bailey doesn't sound loud enough after every game", '"Detroit City FC is on the come up" headass', ]

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

if (msg.includes('hello')) {
        if (msg.includes("gary")) {
            var GResponse = Gary[Math.floor(Math.random() * (Gary.length -1 ) + 1)]
                message.channel.send(message.author +', '+ GResponse)}};

    if (msg.includes('howdy')) {
        if (msg.includes("gary")) {
            var GResponse = Gary[Math.floor(Math.random() * (Gary.length -1 ) + 1)]
                message.channel.send(message.author +', '+ GResponse)}};

    if (msg.includes('hey')) {
        if (msg.includes("gary")) {
            var GResponse = Gary[Math.floor(Math.random() * (Gary.length -1 ) + 1)]
                message.channel.send(message.author +', '+ GResponse)}};

    if (msg.includes('hola')) {
        if (msg.includes("gary")) {
            var GResponse = Gary[Math.floor(Math.random() * (Gary.length -1 ) + 1)]
                message.channel.send(message.author +', '+ GResponse)}};

    if (msg.includes('hi')) {
        if (msg.includes("gary")) {
            var GResponse = Gary[Math.floor(Math.random() * (Gary.length -1 ) + 1)]
                message.channel.send(message.author +', '+ GResponse)}};
    
    if (message.content === '!github')
        message.channel.send('The Github page can be found here https://github.com/Blod722/Gary-Bot - All documentations and explainations of Gary Bot can be found on the README.md **If any bugs arise for Gary Bot, please report them to the "Issues" section of the Github Page**');

    if (message.content === '!Github')
        message.channel.send('The Github page can be found here https://github.com/Blod722/Gary-Bot - All documentations and explainations of Gary Bot can be found on the README.md **If any bugs arise for Gary Bot, please report them to the "Issues" section of the Github Page**');
    
    if (message.content === '!GITHUB')
        message.channel.send('The Github page can be found here https://github.com/Blod722/Gary-Bot - All documentations and explainations of Gary Bot can be found on the README.md **If any bugs arise for Gary Bot, please report them to the "Issues" section of the Github Page**');

    if (message.content === '!CincyChants')
        message.channel.send('Cincy Chants is an app developed by discord user <@124537337156730882> that displays all chants currently used by FC Cincinnati supporters. It also contains a "Real Time" feature that shows what chant is currently being sung by The Bailey during games. Download it for free on Apple and Android devices by searching "Cincy Chants" in your local app store!');

    if (message.content === '!Cincychants')
        message.channel.send('Cincy Chants is an app developed by discord user <@124537337156730882> that displays all chants currently used by FC Cincinnati supporters. It also contains a "Real Time" feature that shows what chant is currently being sung by The Bailey during games. Download it for free on Apple and Android devices by searching "Cincy Chants" in your local app store!');

    if (message.content === '!cincychants')
        message.channel.send('Cincy Chants is an app developed by discord user <@124537337156730882> that displays all chants currently used by FC Cincinnati supporters. It also contains a "Real Time" feature that shows what chant is currently being sung by The Bailey during games. Download it for free on Apple and Android devices by searching "Cincy Chants" in your local app store!');

    if (message.content === '!CINCYCHANTS')
        message.channel.send('Cincy Chants is an app developed by discord user <@124537337156730882> that displays all chants currently used by FC Cincinnati supporters. It also contains a "Real Time" feature that shows what chant is currently being sung by The Bailey during games. Download it for free on Apple and Android devices by searching "Cincy Chants" in your local app store!');

    if (message.content === '!cincyChants')
        message.channel.send('Cincy Chants is an app developed by discord user <@124537337156730882> that displays all chants currently used by FC Cincinnati supporters. It also contains a "Real Time" feature that shows what chant is currently being sung by The Bailey during games. Download it for free on Apple and Android devices by searching "Cincy Chants" in your local app store!');

//    if (msg.includes('roast me gary')) {
//        message.reply(message.author.avatarURL)
//            var RResponse = Roast[Math.floor(Math.random() * (Roast.length -1 ) + 1)]
//                message.channel.send(RResponse)};
    
    if (msg.includes('damn it'))
    message.react("🇩")
        .then(() => message.react("🇦")
        .then(() => message.react("🇲")
        .then(() => message.react("🇪")
        .then(() => message.react("🇹")
        )))); 

    if (message.content === 'pineapple on pizza is ok')
        message.reply("Please tell me why, just why? Why do you think Pineapple is okay on pizza? It's a purely tasteless and disgusting mess. When you get pineapple on pizza you literally ruin it for everyone else, no one will eat that nasty mess of Pinapple. They literally arn't suppose to be on it, the italians said so. The Late Great Gordan Ramsey himself even said 'You don't put fucking pineapple on pizza'. Quoted, word for word. Like how much of a disgusting human being to say that pineapple is okay on pizza, after one of the world's greatest chefs told you otherwise. It's wrong, Completely and udderly wrong. The Italians cry at what we've made pizza, just a disgusting mess of dough, cheese, and pizza sauce. Topped with whatever we want, no matter the flavor. If we want it, we get it on. Absolutely putrid.");

    if (msg.includes("koch bot"))
        message.channel.send('"The real reason we kicked Koch off the team was !pizza" - Gary');
    
    if (msg.includes('endgame'))
        message.channel.send('At the very end, Thanos finally wins, he snaps his fingers again and head coach Alan Koch is fired.');


    if (msg.includes("guido")){
    const redemoji = message.guild.emojis.find(emoji => emoji.name === 'redcard');
        message.react(redemoji);
    const yellowemoji = message.guild.emojis.find(emoji => emoji.name === 'yellowcard');
        message.react(yellowemoji)};

    if (msg.includes("ope")) {
        const opeemoji = message.guild.emojis.find(emoji => emoji.name === 'ope');
            message.react(opeemoji)};

    if (msg.includes("oi")) {
        const oiemoji = message.guild.emojis.find(emoji => emoji.name === 'oi');
            message.react(oiemoji)};

    if (msg.includes("oof")) {
        const oofemoji = message.guild.emojis.find(emoji => emoji.name === 'oofgif');
            message.react(oofemoji)};

    if (msg.includes(':upgary:'))
    (message.channel.send("", {file: "/home/blod/Gary/images/Upgary.png"}));

    if (msg.includes("name")) {
        if (msg.includes("gary"))
            message.reply("Cause that's what my name is.")};

});

bot.login(token)
