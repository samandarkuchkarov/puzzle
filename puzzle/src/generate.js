export function generate(){
    document.body.innerHTML = '<div class="video_button"><button class="unmute">Unmute</button><button class="skip">Skip</button></div> <video id="ocScreencapVideo" src="../src/img/gta_1.mp4" autoplay="autoplay" muted="muted"  playsinline="playsinline" preload="metadata" data-aos="fade-up"><source src="http://clips.vorwaerts-gmbh.de/VfE_html5.mp4" type="video/mp4"> Your browser does not support MP4 Format videos or HTML5 Video.</video><div class="menu"><div class="menu-position"><img class="level-photo" src="../src/img/1x.jpg" alt=""><img class="icon" src="../src/img/icons8-san-andreas-500.png" alt=""><button class="restart hover">New-game</button><button disabled class="continue hover">Continue</button><button class="settings hover">Settings</button><div class="level"><button class="mission hover">Easy</button></div><button class="addsound hover">Music off</button><button class="soundon hover">Sound on</button><button class="About hover">About</button><p class="checker"></p><button class="exit2 hover">Exit to menu</button><button class="exit hover">Exit</button></div></div> <div class="center"><div class="house"><img src="../src/img/hous.png" alt=""></div><div class="recordlist"><div class="ul"></div></div><div class="field"></div><div class="complete"><p class="result"></p><img class="scale" src="../src/img/pngfind.com-gta-png-2851262.png" alt=""></div><div class="wrapper"><button class="solution">solution</button><button class="solution2">solution</button> <h2 class="move">move 0</h2><p><span id="seconds">00</span>:<span id="tens">00</span></p><button id="button-start">Start</button><button id="button-stop">Stop</button></div></div> <audio class="first"   src="../src/img/gta.mp3"></audio><audio class="second" src="../src/img/respect.mp3"></audio><audio class="third" src="../src/img/button.mp3"></audio>';
}