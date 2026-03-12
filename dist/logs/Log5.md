# Log Entry \#5

# Week of March 4-11

## **Messing more with Datamoshing**

I messed around with the shader for datamoshing to try and get the texture fixed, but still no luck so far.  
I wanted to test out the effect on the headset, but my headset needs to be logged back in, so I will try and get to the technician before break to fix that.  
On top of fixing issues, I messed around more with properly transitioning from the pixel recycling back to normal video output. I took inspiration from the reddit post a couple of logs ago to compare the color differences and reset back to the original output.   
It sort of works but looks less impressive as the original effect.  
[Datamosh Progression](https://youtu.be/Jlj7s_XBQZs)   
Also, I messed around with noise and time in the shader and got this interesting effect.  
[Weird Effect (flashing lights warning)](https://youtu.be/tc0pyllGok8) 

## 

## **Bitcrushing**

Bitcrushing is an audio effect where you achieve a crunchy and lo-fi effect by reducing the sampling rate and sampling depth of the audio output.  
It was very confusing trying to learn how to add audio filters, but I figured out that you need to overload the OnAudioFilterRead function and manipulate the data array given.  
I followed this guide to create a bitcrushing filter.  
[Audio Filters in Unity3D – Martin Climatiano](http://www.mclimatiano.com/audio-filters-in-unity3d/)   
The result is pretty cool, and it will be interesting to hear the audio slowly decay. The looping is also really cool and can be used at the end of the experience.  
[Bitcrushing demo (Loud)](https://youtu.be/gQ85x-6u8tw) 

## **Looking forward**

It is doubtful I can make anything that can be called an MVP by the start of break, but I’d like to have something I can at least show to others for feedback by then. So I’m planning to at least include one component of my interaction system, the phonograph by the end of this week.