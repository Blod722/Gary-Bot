# Gary Bot
"Because that's what his name is."

Created with love by Blod#6563, Bmulley#4379, BzzLghtyr#0001, pw8164#8056, and hensonb3#2843 for /r/FCCincinnati's Discord https://discord.gg/Bt6ytSQ

# What Is Gary Bot?
Gary bot is a meme-y and functional bot to be used for /r/FCCincinnati's Discord server. The intended use is to be a replacement for an old bot that is no longer hosted, as well as a easily customizable bot that can add or remove code as needed by the Discord. Written in JavaScript using Discord.JS, Gary Bot is the first fully functional code that I (Blod) has written and been used publicly. A lot of help as well as server hosting was done by Bmulley.

# How Does Gary Bot Run?
Gary Bot is ran on Ubuntu 18.04.2 LTS based VM graciously hosted for free by Bmulley using Microsoft Azure. The server has regularly scheduled git pulls to determine if the master branch has changed, and if so pulls down and applies those changes.  It utilizes pm2 for service uptime and monitoring, to ensure that the service will restart if it dies for any reason.

# Current Commands & Functions
**gary github** - Brings up an info box about this github page, as well as a link.

**gary cincy chants** - Info box about Cincy Chants.

**gary cincychants** - Same as above.

**gary topic** - Brings up a topic to talk about.

**gary debug** - Debug menu for gary.

Everything else is secret, discover it or read the code.

# Licensing
Although the bot is Open Source, I do request that you don't recopy the code in its entirety. I have no issue with you using bits and pieces for your own projects.
