# Hobobot
Hobobot is a bot written using the Node.js module Discord.js. 

It mainly contains some useful commands and inside jokes for the gaming community that I frequent. 

Code in this repo is not pretty, and not well formatted. The bulk of this bot was written on the fly, while I was self teaching myself Javascript. While this bot is live on a Digital Ocean Droplet, I am not confident that it would be a simple pull and install project at this point.

I have stopped new development on the bot until I can rewrite it for V2.0, and plan to include a web interface for managing custom per server commands at that time. 

### So acknowledging that this code is a bit of a mess, what can it do?

* Music! The bot can connect to a discord voice channel and stream songs from youtube queries. 
  ```
  ++join : "Join the voice channel the message sender is currently in"
  ++add : "Add a song to the playlist, usage: '++add Reptilia The Strokes', this will search YouTube and add the first result to the playlist."
  ++playlist : "Shows the first 15 songs on the current playlist."
  ++play : "Plays the current playlist, if bot is in a voice channel"
  ++shuffle : "Shuffles the playlist"
  ++leave : "Clears the playlist and leaves the voice channel"

  While music is playing:
  ++pause : "Pauses the music"
  ++resume: "Resumes the music"
  ++skip : "Skips the current song"
  ++time : "Shows the playtime of the current song"
  volume+(+++): "Increases the volume by 5% per +"
  volume-(---): "Decreases the volume by 5% per -"
  ```
