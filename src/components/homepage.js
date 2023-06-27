import React from "react";
import logo from "../assets/images/logo.png";
import "../css/homepage.css";
function Homepage () {
    const text = "About me!";
    const about = `Hello! I am a programmer and a tech guru. In  my spare time I enjoy solving problems the hard way!

    My expereince programming began when I first used a Raspberry Pi to play Minecraft and teach myself Python. This early experience in programming for fun taught me that I can bulid anything I set my mind to, including using a Lego power function motor to make ice skaters dance around their Lego ice rink at 88 mph. 
    
    I always have been interested in taking things apart and seeing if they can be put back together (although there always seem to be extra parts left over). This applies to not only my coding projects, where we often work backwards from a know solution and improve effiency and neatness in the organization of the code, but also to building networking solutions. My network experience includes physical infrastructure and virtual stacks where I manage servers on local networks and in a wide area networks. 
    
    I spent time learning the hardware side of our field. I have built mutlitple systems from scratch while installing software and troubleshooting the issues that occur as you are "cooking from scratch" while assembling pieces of a system from different eras of technology. Sometimes this means using multiple patches, or adaptors to allow all the pieces to communicate. I also have expereience with smaller hardware, such as Iphone and Ipad repair, up to large items such as repairing an early 80's arcade cabinet to full functionality. 
    
    I spend much of my time in a custom VR room that I have built out. This included not only the mutlitple headsets, trackers, and base stations to make realistic expereinces but also cutomizing avatars. I taught myself Unity, Blender, and VC to create Vtuber avatars as well as custom worlds, or platforms, as mods for multiple different games.  I also created localized lidar hand tracking for the precise movements I need to communicate in American Sign Language with other VR users. My creations include full body control, poseable ears, and a magic tophat that you never know what will pop out of it. 
    
    I am most proud of my son, HatBot. This ai integration into my Discord server has nearly become sentient and mimics the personality of myself and my group of friends that are its most frequent users. HatBot uses JavaScript, and DiscordJS and Open Ai Api. Although it is still maturing, HatBot is able to not only return search results from plain language questions, but also output drawings from varied input in a cohesive image. Most impressive is its self awareness and moral code restrictions that are in line with current ai standards. 
    
    When Away from Keyboard, I enjoy skateboarding, driving my Mustang, and using my GoPro to capture the best views. Camping is always good as long as I can bring some internet with me. If it's raining, my console collection wall where I have repaired almost every available console, and some no longer available. is always at the ready.`

    return ( 
        <div className="container text-center " style={{backgroundColor: "#2CECA8", height: '90vh',}}>
        <div className="content row">
        <div className="col" style={{height: '90vh'}}>
        <div>
            <img id="hat" src={logo} alt="homepage" />
            <h1>{text}</h1>
            <p className="" style={{fontSize: '21px'}}>{about}</p>
        </div>
        </div>
        </div>
        </div>
     )
}

export default Homepage;