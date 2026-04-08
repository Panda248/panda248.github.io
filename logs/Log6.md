# Log Entry \#6

# Week of March 11-25

# **Back from Break**

Coming back, I was very lethargic and didn’t feel like doing anything school related. However, at the time of writing, I’ve managed to recover some more motivation for this project

# **The Interaction System**

I’m finally close to finalizing the details of the interaction system.  
I’ve settled on making a pseudo file format that all devices in the game will read off of.  
These files will take the form of floppy disks scattered around the room that the player can grab and deposit into devices  
The data in these files will be stored as a list of numbers, with certain portions having various uses for each device.  
The first part of the list will be the “header”. Much like real file formats, the role of a header is to describe the type of the file. In my project, these will describe the device that is supposed to read this file.  
Following the header section, the meaning of the data is up to the interpretation of the device reading it. This is where interesting things can happen.   
Let’s say the audio player reads each number as a certain note. An “audio file” playing nice sounding music may have each number corresponding to a note within some chord (like the C major chord).  
Then, let’s say that the video player reads each number as a specific image to play at some time. If we took that file and put it into the audio player, what will play may be extremely discordant.  
One issue I have though is that I want to integrate decay into this. I was thinking that placing files with improper headers would “break” the device a little, causing serious glitching to occur like what I’ve been working on.  
However, I would like to create a “writer” device that lets the user directly manipulate the file. This would then allow the user to circumvent the possible damages of an illegal header by just rewriting that part of data.  
To remediate this, I plan on each device having a “critical point” in their data that, if mutated, can actually cause damage. For example, negative numbers is something that could break audio devices (what would a negative note be?).   
Another idea is to let the user choose which numbers are overridden, but the writer will randomly write a new number. This way, unexpected input is easier while still providing some creative agency to the user.

# 

# **Work**

With a better vision for the interaction system, I have more concrete expectations of mechanics and I can then start grinding out the programming of these systems.  
I’ve finished building out the floppy disk script which contains the data list and allows the player to grab it.  
I also have the audio device working reading the data of a sample disk.  
