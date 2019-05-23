const Discord = require ('discord.js');
const bot = new Discord.Client();
const {discord_token} = require('./config.json');
const bonerpatrol = /^bone$|\s?[^a-z]+\bbone[^a-z]?\b|^bone[^a-z]$/i;

const token = discord_token;

const Activities = ['Soccer, what else?','The Bengals - SIKE!','Moomba and Chalupa make the 2019 Discord Scarf.','Music Hall complain about the stadium again.','Guido give out red cards.','Adi complain about "team identity".','Hoyte, he is open! Still open!','Bone take us to the zone.','Richey save another ball.','Koch get cut.','Damet attempt to recover the team.','Gary as he makes a press statement.','Whoever this new Blond Haired guy play.','Dennis go full on Denbot mode.','Buzz make another poop emote.','Mainframe love Jimmy from afar.','Ope Shirts sell out.','Ox edit more Wikipedia pages.','Blod as he says something stupid.','Fiddle win another FCC eMLS match.','Franklin Krum update Cincy Chants.','Fruity dominate another Rocket League match.'];

const GaryMsg = ['hello gary','howdy gary','hey gary','hola gary','hi gary']

var Starters = ['If you could sign any soccer player you wanted for FC Cincinnati, who would you sign?','If you had the choice, what previous FC Cincinnati Player would you sign?','What does FC Cincinnati need most?', "What's the best board game of all time, Why?", "What's the best video game of all time, Why?", "What's your favorite way to waste time?", "What's that one awkward high school experience?", "Other than KLR, what podcasts are you listening to (if any)?", "What's the best flavor of seed?", "So, what are you avoiding by talking to us on Discord?", "What did you eat for your last meal, was it good?", "What's the best gift you've ever gotten?", "All of a sudden, you are the new coach of the FC Cincinnati, what are you gonna do to make us MLS Cup Champions?", "One FC Cincinnati player has to go, who is it?", "You're given a million dollars, other than pay off debt, what are you gonna buy?", "Suddenly you win the lottery! What do you do with you're new found fortune?", "Xbox, Playstation, and Nintendo. Who's the best and why? (PC Can't be your answer :P)", "Favorite food, why?", "Favorite drink, why?", "Favorite Alcoholic drink, why?", "Favorite non-alcoholic drink, why?", "Favorite chain resturant, why?", "Favorite local resturant, why?", "If you could re-live one expience in your lifetime, what would it be?", "What's your second favorite for an MLS team? (Since FCC is your first :) )", "Suddenly you can make one thing legal, without getting too !politics, what would it be?", "Suddenly you can make one thing illegal, without getting too !politics, what would it be?", "What's on your mind?", "What are you up to? Other than Discord.", "You have enough money to buy any car you want, what's your choice?", "What's your favorite season, why?", "What's your favorite song, why?", "You get to spend an afternoon with 1 famous person, who do you choose? What do you ask them?", "What's one major goal in your life?", "You are given the oppertunity to travel anywhere in the world, where do you go?", "One day, you and your boss swap positions (You're the boss of him now), what's your next move?", "What's the 2nd best city in the world (Can't say Cincy since it's your favorite)?", "You get to go to (or head back to) college completely free, What major do you take?", "One MLS team ceases to exist because you want it to, Other than Columbus Crew, who would it be?", "Okay for real, why is his name Gary?"]

var Gary = ["Waddup?","What's Good?","Hola","Howdy.","Whats good in the hood?","¿Cómo te va?","Hello","Hey, and before you ask. It's my name because thats what it is.","That's my name, don't wear it out!","Arrgg me boy, that's who me name is!"];

var GaryMorning = ["Mornin'","Early bird gets the worm", "Match day? No? Bedtime.", "Coffee? Redbull? Cocaine? Whats the juice for today?", "Just woke up, and yes. Bots need to sleep as well."]

var GaryNight = ["Goodnight", "Time to hit the hay, is it not?", "Going to bed already?", "Can't win FCC games when you're tired.", "The night is young! Why go to bed so early?", "Don't let the bed bugs bite!"]

var Roast = ["I bet this dude wants Djiby back.", "You look like the kinda girl (or guy if thats how you identify) that likes the Columbus Crew.", "Yeah, you definitely think you're fancy by calling it Fussball.", "Looks like a straight up Louisville City FC fan.", "You probobly say that the Bailey doesn't sound loud enough after every game", '"Detroit City FC is on the come up" headass', ]

const prefix = "gary";

bot.on('ready', () =>{
    console.log('Bot Ready!');
        setInterval(() => {
            const index = Math.floor(Math.random() * (Activities.length - 1) + 1);
            bot.user.setActivity(Activities[index],{ type: 'WATCHING'}).catch(console.error);
        }, 25000);
    });

bot.on ("message", (message) => {

    if (message.author.bot) return;

    msg = message.content.toLowerCase();

    if (msg.includes('morning'))
        if (msg.includes("gary")) {
            var GMResponse = GaryMorning[Math.floor(Math.random() * (GaryMorning.length -1 ) + 1)]
                message.channel.send(message.author +', '+ GMResponse)};
    
//    if (msg.includes('night'))
//        if (msg.includes("gary")) {
//            var GNResponse = GaryNight[Math.floor(Math.random() * (GaryNight.length -1 ) + 1)]
//                message.channel.send(message.author +', '+ GNResponse)};

    if (msg.includes('hello'))
        if (msg.includes("gary")) {
            var GResponse = Gary[Math.floor(Math.random() * (Gary.length -1 ) + 1)]
                message.channel.send(message.author +', '+ GResponse)};

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
// remind me later to fix this i dont have time to atm
//  if (message.content.toLowerCase() == "hi") {
//        if (msg.includes("gary")) {
//            var GResponse = Gary[Math.floor(Math.random() * (Gary.length -1 ) + 1)]
//                message.channel.send(message.author +', '+ GResponse)}};
//

    if (msg.startsWith(prefix + ' github'))
        message.channel.send('The Github page can be found here https://github.com/Blod722/Gary-Bot - All documentations and explainations of Gary Bot can be found on the README.md. **If any bugs arise for Gary Bot, please report them to the "Issues" section of the Github Page**');
        
    if (msg.startsWith(prefix + ' cincy chants'))
        message.channel.send('Cincy Chants is an app developed by discord user <@124537337156730882> that displays all chants currently used by FC Cincinnati supporters. It also contains a "Real Time" feature that shows what chant is currently being sung by The Bailey during games. Download it for free on Apple and Android devices by searching "Cincy Chants" in your local app store!');

    if (msg.startsWith(prefix + ' cincychants'))
        message.channel.send('Cincy Chants is an app developed by discord user <@124537337156730882> that displays all chants currently used by FC Cincinnati supporters. It also contains a "Real Time" feature that shows what chant is currently being sung by The Bailey during games. Download it for free on Apple and Android devices by searching "Cincy Chants" in your local app store!');

    if (msg.startsWith(prefix + ' topic')) {
        var SResponse = Starters[Math.floor(Math.random() * (Starters.length -1 ) + 1)]
            message.channel.send(SResponse)};

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

    if (message.content.toLowerCase() == "ope") {
        const opeemoji = message.guild.emojis.find(emoji => emoji.name === 'ope');
            message.react(opeemoji)};

    if (message.content.toLowerCase() == "oi") {
        const oiemoji = message.guild.emojis.find(emoji => emoji.name === 'oi');
            message.react(oiemoji)};

    if (message.content.toLowerCase() == "oof") {
        const oofemoji = message.guild.emojis.find(emoji => emoji.name === 'oofgif');
            message.react(oofemoji)};

    //if (message.content.toLowerCase() == "bone") {
    if (bonerpatrol.test(message.content.toLowerCase())) {
        const boneemoji = message.guild.emojis.find(emoji => emoji.name === 'bone');
            message.react(boneemoji)};
    
    if (message.content.toLowerCase() == "oui") {
        const mathieudeplagneemoji = message.guild.emojis.find(emoji => emoji.name === 'mathieudeplagne');
            message.react(mathieudeplagneemoji)};

    if (message.content.toLowerCase() == "bmulley") {
        const mulleyemoji = message.guild.emojis.find(emoji => emoji.name === 'mulley');
            message.react(mulleyemoji)};  

    
    if (msg.startsWith('upgary'))
    (message.channel.send("", {file: "/home/blod/Gary/images/Upgary.png"}));

    if (msg.includes("name")) {
        if (msg.includes("gary"))
            message.reply("Cause that's what my name is.")};

});

bot.login(token)
