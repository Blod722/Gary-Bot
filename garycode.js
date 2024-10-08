//Pulling Discord.js Library and Starting Bot from Token
const Discord = require ('discord.js');
const bot = new Discord.Client();
const fetch = require('node-fetch');
const {discord_token} = require('./config.json'); 
var fs = require('fs');

const token = discord_token;


////////////////////// 	VERSION INFO - Add version number and patch notes here
const garyversion	=	"1.5.4"
const garyversionnote	=	"Updated game dates for the rest of the 2024 season, fixed a few bugs preventing certain commands from executing, removed information related to cincy chants as it is dead"
const garylastupdate    =       "08/09/2024"
const garylocation      =       `Gary directory: ${process.cwd()}`+"\nGary file: "+ __filename

//Bot Wide Variables & Constants

//this little piggie put all the activities in a file and reads them
const Activities = fs.readFileSync("./Gary-Bot/Files/Activities.txt").toString().split("\n");
for (i in Activities) {
	console.log(Activities[i]);
}

//and this little piggie put all the game day dates in a file and reads them
const GameDayDates = fs.readFileSync("./Gary-Bot/Files/GameDayDates.txt").toString().split("\n");
for (i in GameDayDates) {
	console.log(GameDayDates[i]);
}
//all this code does not work, ill fix it a different day
//welcome messages from file
//const Welcome = fs.readFileSync("./Gary-Bot/Files/WelcomeMessages.txt").toString().split("\n");
//for (i in Welcome) {
//	console.log(Welcome[i]);
//}
//game day welcome messages from file
//const GDWelcome = fs.readFileSync("./Gary-Bot/Files/GameDayWelcomeMessages.txt").toString().split("\n");
//for (i in GDWelcome) {
//	console.log(GDWelcome[i]);
//}
//goodbye messages from file
//const Left = fs.readFileSync("./Gary-Bot/Files/GoodbyeMessages.txt").toString().split("\n");
//for (i in Left) {
//	console.log(Left[i]);
//}

//This next part is specifically code to check what day it is.
//This code only checks once each time gary reloads
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();
today = mm + '/' + dd + '/' + yyyy;

//Turns on Gary Bot and sends 'Bot Ready!' in the console that gary is run on.
bot.on('ready', () =>{
    console.log('`Logged in as ${client.user.tag}!`');
    console.log(garylocation);
    var garybottestchannel = bot.channels.get('577326593639317525');
    const garydabemoji = bot.emojis.find(emoji => emoji.name === "garydab");

    garybottestchannel.sendMessage(`${garydabemoji}${garydabemoji}${garydabemoji}${garydabemoji}${garydabemoji}${garydabemoji}${garydabemoji}`+"\n__**"+garyversion+" Patch Notes**__\n"+garyversionnote);
	
	//This entire section randomizes the Activity that Gary is doing with something in the Activities Constant
        setInterval(() => {
            const index = Math.floor(Math.random() * (Activities.length - 1) + 1);
            bot.user.setActivity(Activities[index],{ type: 'WATCHING'}).catch(console.error);
        }, 25000);
    });

//When someone joins it'll check to see if it's game day, if not, it'll send a regualar welcome message - 456926862405271554 is the Channel ID for #Roster-Signings - 336914522747174922 is the Channel ID for #matchthreads
bot.on ("guildMemberAdd", member => {

//Define the current date as 'today' in mm/dd/yyyy format
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();
today = mm + '/' + dd + '/' + yyyy;
    
    if (GameDayDates.includes(today)) {
        var GDWelcome = ["Congratulations " + member + ", You've been signed to a contract by **/r/FCCincinnati**! Welcome to the team! We're currently in <$336914522747174922> if you wanna discuss the on-going FCC game!", "It's official! " + member + ", Is now now playing for **/r/FCCincinnati**! We're currently in <#336914522747174922> if you wanna discuss the on-going FCC game!", "Welcome to the club " + member + ", We're currently in <#336914522747174922> if you wanna hop in and talk about the current FCC Game!", "This just in, " + member + " was just traded to **/r/FCCincinnati**! We're currently in <#336914522747174922> if you wanna hop in and talk about the current FCC Game!"] 
        var GDWResponse = GDWelcome[Math.floor(Math.random() * (GDWelcome.length -1 ) + 1)]
            member.guild.channels.get('456926862405271554').send(GDWResponse)}
    else {
    var Welcome = ["Congratulations " + member + ", You've been signed to a contract by **/r/FCCincinnati!** Welcome to the team!", "It's offical! " + member + ", Is now playing for **/r/FCCincinnati**!", "This just in, " + member + " was just traded to **/r/FCCincinnati**!"]
    var WResponse = Welcome[Math.floor(Math.random() * (Welcome.length -1 ) + 1)]
    member.guild.channels.get('456926862405271554').send(WResponse)}});

//When someone leave it will respond with a message in the Left Varable - 456926862405271554 is the Channel ID for #Roster-Signings - 336914522747174922 is the Channel ID for #matchthreads
bot.on ("guildMemberRemove", member => {
    var Left = [member.user.username + " ripped their contract in half, I guess that mean's it's no longer valid.", member.user.username + "'s contract has not been renewed for **/r/FCCincinnati**.", member.user.username + " decided to go play for /r/TheMassive."]
    var LResponse = Left[Math.floor(Math.random() * (Left.length -1 ) + 1)]
    member.guild.channels.get('456926862405271554').send(LResponse)});


// Message Constants and Varibles
const GaryMsg = ['hello gary','howdy gary','hey gary','hola gary','hi gary']
var Starters = ['If you could sign any soccer player you wanted for FC Cincinnati, who would you sign?','If you had the choice, what previous FC Cincinnati Player would you sign?','What does FC Cincinnati need most?', "What's the best board game of all time, Why?", "What's the best video game of all time, Why?", "What's your favorite way to waste time?", "What's that one awkward high school experience?", "Other than KLR, what podcasts are you listening to (if any)?", "What's the best flavor of seed?", "So, what are you avoiding by talking to us on Discord?", "What did you eat for your last meal, was it good?", "What's the best gift you've ever gotten?", "All of a sudden, you are the new coach of the FC Cincinnati, what are you gonna do to make us MLS Cup Champions?", "One FC Cincinnati player has to go, who is it?", "You're given a million dollars, other than pay off debt, what are you gonna buy?", "Suddenly you win the lottery! What do you do with you're new found fortune?", "Xbox, Playstation, and Nintendo. Who's the best and why? (PC Can't be your answer :P)", "Favorite food, why?", "Favorite drink, why?", "Favorite Alcoholic drink, why?", "Favorite non-alcoholic drink, why?", "Favorite chain resturant, why?", "Favorite local resturant, why?", "If you could re-live one expience in your lifetime, what would it be?", "What's your second favorite for an MLS team? (Since FCC is your first :) )", "Suddenly you can make one thing legal, without getting too !politics, what would it be?", "Suddenly you can make one thing illegal, without getting too !politics, what would it be?", "What's on your mind?", "What are you up to? Other than Discord.", "You have enough money to buy any car you want, what's your choice?", "What's your favorite season, why?", "What's your favorite song, why?", "You get to spend an afternoon with 1 famous person, who do you choose? What do you ask them?", "What's one major goal in your life?", "You are given the oppertunity to travel anywhere in the world, where do you go?", "One day, you and your boss swap positions (You're the boss of him now), what's your next move?", "What's the 2nd best city in the world (Can't say Cincy since it's your favorite)?", "You get to go to (or head back to) college completely free, What major do you take?", "One MLS team ceases to exist because you want it to, Other than Columbus Crew, who would it be?", "Okay for real, why is his name Gary?", "Do you read reviews about a movie before deciding whether to watch it or not?", "What would you do differently if you could relive the past year?", "What is the best thing about school/work?", "Where is your favorite place to shop? Why?", "What is your favorite pizza topping? (Pineapple is the incorrect answer)", "What is your favorite candy?", "If you could choose your last meal, what would it be?", "If you could meet anybody in history, past or present, who would it be?", "What did you have for lunch yesterday?", "If you could give one piece of advice to the whole world, what would it be?", "Would you prefer to live in an urban area or a rural area?", "At what age would you consider someone to be old?", "What is something new that you've learned in the past week?", "If you could acquire any skill, what would you choose?", "What was the biggest life change you've gone through?", "Do you prefer cats or dogs?", "What is the worst job you ever had?", "What accomplishment are you most proud of?", "What is your favorite party game (or board game)?", "Have you ever been in any YouTube videos?"]
var GaryMorning = ["Mornin'","Early bird gets the worm", "Match day? No? Bedtime.", "Coffee? Redbull? Cocaine? Whats the juice for today?", "Just woke up, and yes. Bots need to sleep as well."]
const bonerpatrol = /^bone\b|\s?[^a-z]+\bbone[^a-z]?\b|^bone[^a-z]$/i;
const operoni = /^ope\b|\s?[^a-z]+\bope[^a-z]?\b|^ope[^a-z]$/i;
const hoperoni = /^hope\b|\s?[^a-z]+\bhope[^a-z]?\b|^hope[^a-z]$|^hopeful\b|\s?[^a-z]+\bhopeful[^a-z]?\b|^hopeful[^a-z]$|^hopefully\b|\s?[^a-z]+\bhopefully[^a-z]?\b|^hopefully[^a-z]$|^hoped\b|\s?[^a-z]+\bhoped[^a-z]?\b|^hoped[^a-z]$|^hoping\b|\s?[^a-z]+\bhoping[^a-z]?\b|^hoping[^a-z]$|^hopefulness\b|\s?[^a-z]+\bhopefulness[^a-z]?\b|^hopefulness[^a-z]$|^hopefuls\b|\s?[^a-z]+\bhopefuls[^a-z]?\b|^hopefuls[^a-z]$|^hopeless\b|\s?[^a-z]+\bhopeless[^a-z]?\b|^hopeless[^a-z]$|^hopelessly\b|\s?[^a-z]+\bhopelessly[^a-z]?\b|^hopelessly[^a-z]$|^hopelessness\b|\s?[^a-z]+\bhopelessness[^a-z]?\b|^hopelessness[^a-z]$|^hopes\b|\s?[^a-z]+\bhopes[^a-z]?\b|^hopes[^a-z]$|^hoper\b|\s?[^a-z]+\bhoper[^a-z]?\b|^hoper[^a-z]$/i;
const barreloflaughs = /^barrel\b|\s?[^a-z]+\bbarrel[^a-z]?\b|^barrel[^a-z]$/i;
const ooftastic = /^oof\b|^o+oof\b|\s?[^a-z]+\boof[^a-z]?\b|\s?[^a-z]o+oof[^a-z]?\b|^oof[^a-z]$/i;
const prefix = "gary";
var morningmsg = ["morning","morning.","morning!","morn","mornin","mornin'","mourning","mourning.","morning all","morning all.","morning all!","morning?","good morning","good morning.","it is morning","it's morning"]

//Command hook
bot.on ("message", (message) => {
    
//Check for the current hour on each message
var msgdate = new Date()
var msghr = msgdate.getHours();

//Builds Datetime string forF Debug Embed
var garytime = new Date()
var garydd = String(garytime.getDate()).padStart(2, '0');
var garymm = String(garytime.getMonth() + 1).padStart(2, '0'); //January is 0!
var garyyyyy = garytime.getFullYear();
var garyhr = garytime.getHours();
var garymsghr = garytime.getHours();
var garymin = ((garytime.getMinutes()<10?'0':'')+garytime.getMinutes());
var garysec = garytime.getSeconds();
garytime = garymm + '/' + garydd + '/' + garyyyyy + " " + garyhr + ":" + garymin + ":" + garysec;
    
//Makes sure gary bot doesn't talk to himself.
    if (message.author.bot) return;
    
//Any command starting with 'msg.' makes the command case-insensitive.
    msg = message.content.toLowerCase();
	
//Parse the zipCode from a message by starting right after "weather[space]"
let zipCode = message.content.split("weather ")[1];
  
//Prefixed commands
if ( (msg.startsWith(prefix + ' github') &&
	(message.member.roles.some(r => ["Practice Squad","Benchwarmers","Starters","Team Captains","All Stars","Commissioners"].includes(r.name))))){
		message.channel.send('The Github page can be found here https://github.com/Blod722/Gary-Bot - All documentations and explainations of Gary Bot can be found on the README.md. **If any bugs arise for Gary Bot, please report them to the "Issues" section of the Github Page**')};
if ( (msg.startsWith(prefix + ' topic') &&
	(message.member.roles.some(r => ["Practice Squad","Benchwarmers","Starters","Team Captains","All Stars","Commissioners"].includes(r.name))))){
	var SResponse = Starters[Math.floor(Math.random() * (Starters.length -1 ) + 1)]
		message.channel.send(SResponse)};

if ( (msg.startsWith(prefix + ' debug') &&
(message.member.roles.some(r => ["Gary-Bot Developers","Admins","Commissioners"].includes(r.name)))) ){
	debug = new Discord.RichEmbed ()
	.setAuthor("Gary Bot Debug Menu")
.setDescription ("Last Update - ", garylastupdate)
	.setFooter("Created by Bmulley, Blod, and Buzz for /r/FCCincinnati Discord.")
	.addField (garyversion, garyversionnote)
.addField ("Current Time", garytime)
	.setThumbnail ("https://cdn.discordapp.com/attachments/535191274697785356/581657193489629194/518082374576111627.png")
	.setColor ("F26522");
		message.channel.send({embed:debug})};

//When someone says 'Damn It' it reacts in letters saying 'Damet'
if (msg.includes('damn it'))
message.react("🇩")
	.then(() => message.react("🇦")
	.then(() => message.react("🇲")
	.then(() => message.react("🇪")
	.then(() => message.react("🇹")
)))); 

//this should respond to Pat Noonan Bot when he says 'pineapple on pizza is ok'. (8/9/24: I think this function is broken. Two bots talking to each other is annoying anyway.)
if ( (msg.includes('pineapple on pizza is ok') &&
	(message.member.roles.some(r => ["Practice Squad","Benchwarmers","Starters","Team Captains","All Stars","Commissioners","Mee6"].includes(r.name))))){
		message.reply("Please tell me why, just why? Why do you think Pineapple is okay on pizza? It's a purely tasteless and disgusting mess. When you get pineapple on pizza you literally ruin it for everyone else, no one will eat that nasty mess of pineapple. They literally aren't supposed to be on it, the Italians said so. The Late Great Gordon Ramsay himself even said 'You don't put fucking pineapple on pizza'. Quoted, word for word. Like how much of a disgusting human being must you be to say that pineapple is okay on pizza, after one of the world's greatest chefs told you otherwise? It's wrong. Completely and utterly wrong. The Italians cry at what we've made pizza, just a disgusting mess of dough, cheese, and pizza sauce. Topped with whatever we want, no matter the flavor. If we want it, we get it on. Absolutely putrid.")};

//this should respond to anyone that says 'koch bot'
if ( (msg.includes("koch bot") &&
	(message.member.roles.some(r => ["Practice Squad","Benchwarmers","Starters","Team Captains","All Stars","Commissioners"].includes(r.name))))){
		message.channel.send('"The real reason we kicked Koch off the team was !pizza" - Gary')};
    
//Emoting commands
    if (msg.includes("guido")){
    const redemoji = message.guild.emojis.find(emoji => emoji.name === 'redcard');
        message.react(redemoji);
    const yellowemoji = message.guild.emojis.find(emoji => emoji.name === 'yellowcard');
        message.react(yellowemoji)};

    if (operoni.test(message.content.toLowerCase())) {
        const opeemoji = message.guild.emojis.find(emoji => emoji.name === 'ope');
            message.react(opeemoji)};   
    
    if (hoperoni.test(message.content.toLowerCase())) {
        const donthopeemoji = message.guild.emojis.find(emoji => emoji.name === 'dont_hope');
            message.react(donthopeemoji)};   
	
    if (barreloflaughs.test(message.content.toLowerCase())) {
        const barrelemoji = message.guild.emojis.find(emoji => emoji.name === 'alvaro_barrel');
            message.react(barrelemoji)};   
 
    if (message.content.toLowerCase() == "oi") {
        const oiemoji = message.guild.emojis.find(emoji => emoji.name === 'oi');
            message.react(oiemoji)};
    
    if (ooftastic.test(message.content.toLowerCase())) {
        const oofemoji = message.guild.emojis.find(emoji => emoji.name === 'oofgif');
            message.react(oofemoji)};
    
    if (bonerpatrol.test(message.content.toLowerCase())) {
        const boneemoji = message.guild.emojis.find(emoji => emoji.name === 'bone');
            message.react(boneemoji)};
    
    if (message.content.toLowerCase() == "oui") {
        const mathieudeplagneemoji = message.guild.emojis.find(emoji => emoji.name === 'mathieudeplagne');
            message.react(mathieudeplagneemoji)};

    if (msg.includes("bmulley")) {
        const mulleyemoji = message.guild.emojis.find(emoji => emoji.name === 'mulley');
            message.react(mulleyemoji)};
    
    if ((morningmsg.includes(msg)) && (msghr >= 12))
	    {const redcardemoji = message.guild.emojis.find(emoji => emoji.name === 'redcard');
        message.react(redcardemoji)};    

//if user 'Lost' posts a link or attachment, react with lost_link emoji	
	if(message.author.id == "100401933273038848")
		if (message.attachments.size > 0 || message.embeds.length > 0)
		{
			const lostlinkemoji = message.guild.emojis.find(emoji => emoji.name === 'lost_link');
		    message.react(lostlinkemoji)
	    };

//WEATHER FUNCTION
if (msg.startsWith(prefix + ' weather') && message.author.bot === false)
	if (zipCode === undefined || zipCode.length !=5 || parseInt(zipCode) === NaN)
		{
			message.author.send("`Invalid Zip Code. Please follow the format: gary weather <#####>`");
			const gthinkemoji = message.guild.emojis.find(emoji => emoji.name === 'garythink');
				message.react(gthinkemoji);
				//.catch(console.error);
					//return;
		}
	else
		{
		fetch(`http://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&units=imperial&APPID=2b19beebbb6cec5207fee68549772e4f`)
			.then
				(response =>
					{
						return response.json();
					}
				)
		.then
			(parsedWeather =>
				{
					if (parsedWeather.cod === '404')
						{
							message.author.send("`This zip code does not exist or there is no information available.`");
							const gthinkemoji = message.guild.emojis.find(emoji => emoji.name === 'garythink');
								message.react(gthinkemoji);
						}
					else
						{
							var sunrisedate = new Date(parsedWeather.sys.sunrise*1000);
							//var srdd = String(sunrisedate.getDate()).padStart(2, '0');
							//var srmm = String(sunrisedate.getMonth() + 1).padStart(2, '0'); //January is 0!
							//var sryyyy = sunrisedate.getFullYear();
							var srhr = sunrisedate.getHours();
							var srampm = srhr >= 12 ? 'pm' : 'am';
							srhr = srhr % 12;
							srhr = srhr ? srhr : 12;
							var srmin = ((sunrisedate.getMinutes()<10?'0':'')+sunrisedate.getMinutes());
							//var srsec = sunrisedate.getSeconds();
							var sunrisedatetime = /*srmm + '/' + srdd + '/' + sryyyy + " " + */srhr + ":" + srmin +srampm/* + ":" + srsec*/;
							var sunsetdate = new Date(parsedWeather.sys.sunset*1000);
							//var ssdd = String(sunsetdate.getDate()).padStart(2, '0');
							//var ssmm = String(sunsetdate.getMonth() + 1).padStart(2, '0'); //January is 0!
							//var ssyyyy = sunsetdate.getFullYear();
							var sshr = sunsetdate.getHours();
							var ssampm = sshr >= 12 ? 'pm' : 'am';
							sshr = sshr % 12;
							sshr = sshr ? sshr : 12;
							var ssmin = ((sunsetdate.getMinutes()<10?'0':'')+sunsetdate.getMinutes());
							//var sssec = sunsetdate.getSeconds();
							var sunsetdatetime = /*ssmm + '/' + ssdd + '/' + ssyyyy + " " + */sshr + ":" + ssmin +ssampm/* ":" + sssec;*/;
							var icon1 = 'http://openweathermap.org/img/wn/';
							var icon2 = parsedWeather.weather[0].icon;
							var icon3 = '@2x.png';
							var weathericon = icon1 + icon2 + icon3;
				const embed = {
				  "title": "Weather",
				  "description": "Conditions: **"+parsedWeather.weather[0].main+"**",
				  "color": 16729856,
				  "footer": {
				    "icon_url": "https://www.pngrepo.com/png/40154/170/sunset.png",
				    "text": "Describe The Atmosphere"
				  },
				  "thumbnail": {
				    "url": weathericon.toString()
				  },								    
				  "image": {
				    "url": "https://i.imgur.com/P0OMKg2.png"
				  },
				  "author": {
				    "name": parsedWeather.name+", "+parsedWeather.sys.country+" ("+zipCode+")",
				    "icon_url": "https://i.imgur.com/P0OMKg2.png"
				  },
				  "fields": [
				    {
				      "name": "Temperature",
				      "value": "Current: **"+Math.round(parsedWeather.main.temp)+"° F**\nHigh: "+Math.round(parsedWeather.main.temp_max)+"° F\nLow: "+Math.round(parsedWeather.main.temp_min)+"° F\nHumidity: "+parsedWeather.main.humidity+"%",
				      "inline": true
				    },
				    {
				      "name": "Wind",
				      "value": "Speed: **"+Math.round(parsedWeather.wind.speed)+" mph**",
				      "inline": true
				    },
				    {
				      "name": "Cloud Cover",
				      "value": "Cloudiness: **"+parsedWeather.clouds.all+"%**",
				      "inline": true
				    },									    									    
				    {
				      "name": "Sunrise | Sunset",
				      "value": sunrisedatetime+" **|** "+sunsetdatetime,
				      "inline": true
				    }
					  ]
					};
				message.author.send("Here's the weather!");
				message.author.send({ embed });}
				const upgemoji = message.guild.emojis.find(emoji => emoji.name === 'upgary');
				message.react(upgemoji);
				}
			);
		}
});

bot.login(token)
