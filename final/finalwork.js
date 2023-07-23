let obj = {
    classic : {
        title : [
            "Aram Khachaturyan - Maskarad",
            "Ludwig an Bethoven - Moonlight sonata",
            "Georges Bizet - Les Toreadors"
        ],
        song : [
            "music/khachaturyan.mp3",
            "music/bethoven.mp3",
            "music/bizet.mp3"
        ],
    },
    r_b : {
        title : [
            "Aloe Blacc - I Need Dollar",
            "John Legend - Actions ",
            "Rey Charles - Hit the road jack "
        ],
        song :[
            "music/dollar.mp3",
            "music/actions.mp3",
            "music/hit.mp3"
        ],
    },
    pop : {
        title : [
            "Imagine Dragons - Dream",
            "Dua Lipa - Phisical",
            "Billie Elish - Ocean Eyes",
            "21 pilots - Lane Boy"
        ],
        song : [
            "music/dream.mp3",
            "music/dua.mp3",
            "music/eyes.mp3",
            "music/laneBoy.mp3"
        ],
    },
    jazz : {
        title : [
            "Louis Armstrong - What A Wonderful World",
            "Frank Sinatra - Jingle Bells",
            "Louis Armstrong - Hello! Dolly!"
        ],
        song : [
            "music/world.mp3",
            "music/bells.mp3",
            "music/dolly.mp3"
        ],
    },
};

    let musicCl = function(){

    let div1 = document.getElementsByClassName("div1");
    let audio = document.createElement("div");
    div1[0].appendChild(audio);
    audio.style.marginTop = 40 + "px";
    audio.style.marginLeft = 80 + "px";
    audio.style.width = 300 + "px";
    audio.style.height = 120 + "px";
    audio.style.border = "1px solid grey";

    let songTitle = document.createElement("div");
    audio.appendChild(songTitle)
    songTitle.style.backgroundColor = "#eb9560";
    songTitle.style.width = 300 + "px";
    songTitle.style.height = 30 + "px";
    
    let row = document.createElement("div");
    audio.appendChild(row);
    row.style.backgroundColor = "white";
    let row1 = document.createElement("div");
    row.appendChild(row1);
    row1.style.backgroundColor = "white";
    row1.style.width = 300+"px"
    row1.style.height = 50 + "px";

    let row2 = document.createElement("div");
    row.appendChild(row2);
    row2.style.backgroundColor = "white";
    row2.style.width = 300+"px"
    row2.style.height = 40 + "px";

    let prev = document.createElement("img");
    row1.appendChild(prev);
    prev.src = "imgs/prev.png";
    prev.style.marginTop = 10 + "px";
    prev.style.marginLeft = 70 + "px";

    let play = document.createElement("img");
    row1.appendChild(play);
    play.src = "imgs/played.png";
    let nexT = document.createElement("img");
    row1.appendChild(nexT);
    nexT.src = "imgs/next.png"
    let currentTime = document.createElement("p");
    row2.appendChild(currentTime);

    let handle = document.createElement("div");
    row2.appendChild(handle);
    handle.style.width = 200 +"px";
    handle.style.height = 5 + "px";
    handle.style.marginTop = 8 + "px";
    handle.style.marginLeft = 50 + "px";
    handle.style.backgroundColor = "grey";
    handle.style.borderRadius = "30px";

    let fill = document.createElement("div");
    handle.appendChild(fill);
    fill.style.height = 8 + "px";
    fill.style.width = 8 + "px";
    fill.style.borderRadius = "40px";
    fill.style.backgroundColor = "#eb9560";
    let song = new Audio();
    let currentSong = 0;
        playSong();
    
    function playSong(){
        song.src= obj.classic.song[currentSong];
        songTitle.innerHTML = obj.classic.title[currentSong];
        song.play();
        play.src = "imgs/played.png";
    } 
    play.onclick = function playOrPause(){
        if(song.paused){
            song.play();
            play.src = "imgs/played.png";
        }else{
            song.pause();
            play.src = "imgs/paused.png";
        }
    }
    nexT.onclick = function next(){
        currentSong ++;
        if(currentSong >= obj.classic.song.length){
            currentSong = 0;
        }
        playSong();
        play.src = "imgs/played.png";
    }
    song.addEventListener("timeupdate", function(){
        let position = song.currentTime/song.duration;
        fill.style.width = position * 100 + "%";
        convertTime(song.currentTime);
        if(song.ended){
            next();
        }
    })
    function convertTime(seconds){
        let min = Math.floor(seconds/60);
        let sec = Math.floor(seconds%60);
        min = (min<10)? "0"+min: min;
        sec = (sec<10)? "0"+sec: sec;
        totalTime(Math.round(song.duration)) ;
    }
    function totalTime(seconds){
        min = Math.floor(seconds/60);
        sec = Math.floor(seconds%60);
        min = (min<10)? "0"+min: min;
        sec = (sec<10)? "0"+sec: sec;
    }

    prev.onclick = function pre(){
        currentSong--;
        if(currentSong < 0){
            currentSong = obj.classic.song.length - 1;
        }
        playSong();
        play.src = "imgs/played.png";
    }
    function getP(event){
        let p = (event.clientX - handle.offsetLeft)/handle.clientWidth;
        return p;
    }

    let mouseDown = false;
    handle.addEventListener("mousedown",function(event){
        mouseDown = true;
        let p = getP(event);
        fill.style.width = p * 100 + "%";
    })
    handle.addEventListener("mouseup",function(event){
        if(!mouseDown) return;
        mouseDown = false;
        p = (event.clientX - handle.offsetLeft)/handle.clientWidth;
        fill.style.width = p * 100 + "%";
        song.currentTime = p * song.duration;
    }) 
    }
  /////////////////////////////////////////////////////////
    let musicP = function(){
        let div1 = document.getElementsByClassName("div1");
        let audio = document.createElement("div");
        div1[0].appendChild(audio);
        audio.style.marginTop = 40 + "px";
        audio.style.marginLeft = 80 + "px";
        audio.style.width = 300 + "px";
        audio.style.height = 120 + "px";
        audio.style.border = "1px solid grey";
    
        let songTitle = document.createElement("div");
        audio.appendChild(songTitle)
        songTitle.style.backgroundColor = "#eb9560";
        songTitle.style.width = 300 + "px";
        songTitle.style.height = 30 + "px";
        
        let row = document.createElement("div");
         audio.appendChild(row);
         row.style.backgroundColor = "white";
        let row1 = document.createElement("div");
        row.appendChild(row1);
        row1.style.backgroundColor = "white";
        row1.style.width = 300+"px"
        row1.style.height = 50 + "px";
    
        let row2 = document.createElement("div");
        row.appendChild(row2);
        row2.style.backgroundColor = "white";
        row2.style.width = 300+"px"
        row2.style.height = 40 + "px";
    
        let prev = document.createElement("img");
        row1.appendChild(prev);
        prev.src = "imgs/prev.png";
        prev.style.marginTop = 10 + "px";
        prev.style.marginLeft = 70 + "px";
    
        let play = document.createElement("img");
        row1.appendChild(play);
        play.src = "imgs/played.png";
        let nexT = document.createElement("img");
        row1.appendChild(nexT);
        nexT.src = "imgs/next.png"
        let currentTime = document.createElement("p");
        row2.appendChild(currentTime);
    
        let handle = document.createElement("div");
        row2.appendChild(handle);
        handle.style.width = 200 +"px";
        handle.style.height = 5 + "px";
        handle.style.marginTop = 8 + "px";
        handle.style.marginLeft = 50 + "px";
        handle.style.backgroundColor = "grey";
        handle.style.borderRadius = "30px";
    
        let fill = document.createElement("div");
        handle.appendChild(fill);
        fill.style.height = 8 + "px";
        fill.style.width = 8 + "px";
        fill.style.borderRadius = "40px";
        fill.style.backgroundColor = "#eb9560";
        let song = new Audio();
        let currentSong = 0;
            playSong();
        
        function playSong(){
            song.src= obj.pop.song[currentSong];
            songTitle.innerHTML = obj.pop.title[currentSong];
            song.play();
            play.src = "imgs/played.png";
        } 
        play.onclick = function playOrPause(){
            if(song.paused){
                song.play();
                play.src = "imgs/played.png";
            }else{
                song.pause();
                play.src = "imgs/paused.png";
            }
        }
        nexT.onclick = function next(){
            currentSong ++;
            if(currentSong >= obj.pop.song.length){
                currentSong = 0;
            }
            playSong();
            play.src = "imgs/played.png";
        }
        song.addEventListener("timeupdate", function(){
            let position = song.currentTime/song.duration;
            fill.style.width = position * 100 + "%";
            convertTime(song.currentTime);
            if(song.ended){
                next();
            }
        })
        function convertTime(seconds){
            let min = Math.floor(seconds/60);
            let sec = Math.floor(seconds%60);
            min = (min<10)? "0"+min: min;
            sec = (sec<10)? "0"+sec: sec;
            totalTime(Math.round(song.duration)) ;
        }
        function totalTime(seconds){
            min = Math.floor(seconds/60);
            sec = Math.floor(seconds%60);
            min = (min<10)? "0"+min: min;
            sec = (sec<10)? "0"+sec: sec;
        }
    
        prev.onclick = function pre(){
            currentSong--;
            if(currentSong < 0){
                currentSong = obj.pop.song.length - 1;
            }
            playSong();
            play.src = "imgs/played.png";
        }
        function getP(event){
            let p = (event.clientX - handle.offsetLeft)/handle.clientWidth;
            return p;
        }
    
        let mouseDown = false;
        handle.addEventListener("mousedown",function(event){
            mouseDown = true;
            let p = getP(event);
            fill.style.width = p * 100 + "%";
        })
        handle.addEventListener("mouseup",function(event){
            if(!mouseDown) return;
            mouseDown = false;
            p = (event.clientX - handle.offsetLeft)/handle.clientWidth;
            fill.style.width = p * 100 + "%";
            song.currentTime = p * song.duration;
        }) 
        }
    //////////////////////////////////////////////////////////
    let musicJ = function(){
        let div1 = document.getElementsByClassName("div1");
    let audio = document.createElement("div");
    div1[0].appendChild(audio);
    audio.style.marginTop = 40 + "px";
    audio.style.marginLeft = 80 + "px";
    audio.style.width = 300 + "px";
    audio.style.height = 120 + "px";
    audio.style.border = "1px solid grey";

    let songTitle = document.createElement("div");
    audio.appendChild(songTitle)
    songTitle.style.backgroundColor = "#eb9560";
    songTitle.style.width = 300 + "px";
    songTitle.style.height = 30 + "px";
    
    let row = document.createElement("div");
    audio.appendChild(row);
    row.style.backgroundColor = "white";
    let row1 = document.createElement("div");
    row.appendChild(row1);
    row1.style.backgroundColor = "white";
    row1.style.width = 300+"px"
    row1.style.height = 50 + "px";

    let row2 = document.createElement("div");
    row.appendChild(row2);
    row2.style.backgroundColor = "white";
    row2.style.width = 300+"px"
    row2.style.height = 40 + "px";

    let prev = document.createElement("img");
    row1.appendChild(prev);
    prev.src = "imgs/prev.png";
    prev.style.marginTop = 10 + "px";
    prev.style.marginLeft = 70 + "px";

    let play = document.createElement("img");
    row1.appendChild(play);
    play.src = "imgs/played.png";
    let nexT = document.createElement("img");
    row1.appendChild(nexT);
    nexT.src = "imgs/next.png"
    let currentTime = document.createElement("p");
    row2.appendChild(currentTime);

    let handle = document.createElement("div");
    row2.appendChild(handle);
    handle.style.width = 200 +"px";
    handle.style.height = 5 + "px";
    handle.style.marginTop = 8 + "px";
    handle.style.marginLeft = 50 + "px";
    handle.style.backgroundColor = "grey";
    handle.style.borderRadius = "30px";

    let fill = document.createElement("div");
    handle.appendChild(fill);
    fill.style.height = 8 + "px";
    fill.style.width = 8 + "px";
    fill.style.borderRadius = "40px";
    fill.style.backgroundColor = "#eb9560";
    let song = new Audio();
    let currentSong = 0;
        playSong();
    
    function playSong(){
        song.src= obj.jazz.song[currentSong];
        songTitle.innerHTML = obj.jazz.title[currentSong];
        song.play();
        play.src = "imgs/played.png";
    } 
    play.onclick = function playOrPause(){
        if(song.paused){
            song.play();
            play.src = "imgs/played.png";
        }else{
            song.pause();
            play.src = "imgs/paused.png";
        }
    }
    nexT.onclick = function next(){
        currentSong ++;
        if(currentSong >= obj.jazz.song.length){
            currentSong = 0;
        }
        playSong();
        play.src = "imgs/played.png";
    }
    song.addEventListener("timeupdate", function(){
        let position = song.currentTime/song.duration;
        fill.style.width = position * 100 + "%";
        convertTime(song.currentTime);
        if(song.ended){
            next();
        }
    })
    function convertTime(seconds){
        let min = Math.floor(seconds/60);
        let sec = Math.floor(seconds%60);
        min = (min<10)? "0"+min: min;
        sec = (sec<10)? "0"+sec: sec;
        totalTime(Math.round(song.duration)) ;
    }
    function totalTime(seconds){
        min = Math.floor(seconds/60);
        sec = Math.floor(seconds%60);
        min = (min<10)? "0"+min: min;
        sec = (sec<10)? "0"+sec: sec;
    }

    prev.onclick = function pre(){
        currentSong--;
        if(currentSong < 0){
            currentSong = obj.jazz.song.length - 1;
        }
        playSong();
        play.src = "imgs/played.png";
    }
    function getP(event){
        let p = (event.clientX - handle.offsetLeft)/handle.clientWidth;
        return p;
    }

    let mouseDown = false;
    handle.addEventListener("mousedown",function(event){
        mouseDown = true;
        let p = getP(event);
        fill.style.width = p * 100 + "%";
    })
    handle.addEventListener("mouseup",function(event){
        if(!mouseDown) return;
        mouseDown = false;
        p = (event.clientX - handle.offsetLeft)/handle.clientWidth;
        fill.style.width = p * 100 + "%";
        song.currentTime = p * song.duration;
    }) 
    }
    ////////////////////////////////////////////////
    let musicR = function(){
        let div1 = document.getElementsByClassName("div1");
    let audio = document.createElement("div");
    div1[0].appendChild(audio);
    audio.style.marginTop = 40 + "px";
    audio.style.marginLeft = 80 + "px";
    audio.style.width = 300 + "px";
    audio.style.height = 120 + "px";
    audio.style.border = "1px solid grey";

    let songTitle = document.createElement("div");
    audio.appendChild(songTitle)
    songTitle.style.backgroundColor = "#eb9560";
    songTitle.style.width = 300 + "px";
    songTitle.style.height = 30 + "px";
    
    let row = document.createElement("div");
    audio.appendChild(row);
    row.style.backgroundColor = "white";
    let row1 = document.createElement("div");
    row.appendChild(row1);
    row1.style.width = 300+"px"
    row1.style.height = 50 + "px";

    let row2 = document.createElement("div");
    row.appendChild(row2);
    row2.style.width = 300+"px"
    row2.style.height = 40 + "px";

    let prev = document.createElement("img");
    row1.appendChild(prev);
    prev.src = "imgs/prev.png";
    prev.style.marginTop = 10 + "px";
    prev.style.marginLeft = 70 + "px";

    let play = document.createElement("img");
    row1.appendChild(play);
    play.src = "imgs/played.png";
    let nexT = document.createElement("img");
    row1.appendChild(nexT);
    nexT.src = "imgs/next.png"
    let currentTime = document.createElement("p");
    row2.appendChild(currentTime);

    let handle = document.createElement("div");
    row2.appendChild(handle);
    handle.style.width = 200 +"px";
    handle.style.height = 5 + "px";
    handle.style.marginTop = 8 + "px";
    handle.style.marginLeft = 50 + "px";
    handle.style.backgroundColor = "grey";
    handle.style.borderRadius = "30px";

    let fill = document.createElement("div");
    handle.appendChild(fill);
    fill.style.height = 8 + "px";
    fill.style.width = 8 + "px";
    fill.style.borderRadius = "40px";
    fill.style.backgroundColor = "#eb9560";
    let song = new Audio();
    let currentSong = 0;
        playSong();
    
    function playSong(){
        song.src= obj.r_b.song[currentSong];
        songTitle.innerHTML = obj.r_b.title[currentSong];
        song.play();
        play.src = "imgs/played.png";
    } 
    play.onclick = function playOrPause(){
        if(song.paused){
            song.play();
            play.src = "imgs/played.png";
        }else{
            song.pause();
            play.src = "imgs/paused.png";
        }
    }
    nexT.onclick = function next(){
        currentSong ++;
        if(currentSong >= obj.r_b.song.length){
            currentSong = 0;
        }
        playSong();
        play.src = "imgs/played.png";
    }
    song.addEventListener("timeupdate", function(){
        let position = song.currentTime/song.duration;
        fill.style.width = position * 100 + "%";
        convertTime(song.currentTime);
        if(song.ended){
            next();
        }
    })
    function convertTime(seconds){
        let min = Math.floor(seconds/60);
        let sec = Math.floor(seconds%60);
        min = (min<10)? "0"+min: min;
        sec = (sec<10)? "0"+sec: sec;
        totalTime(Math.round(song.duration)) ;
    }
    function totalTime(seconds){
        min = Math.floor(seconds/60);
        sec = Math.floor(seconds%60);
        min = (min<10)? "0"+min: min;
        sec = (sec<10)? "0"+sec: sec;
    }

    prev.onclick = function pre(){
        currentSong--;
        if(currentSong < 0){
            currentSong = obj.r_b.song.length - 1;
        }
        playSong();
        play.src = "imgs/played.png";
    }
    function getP(event){
        let p = (event.clientX - handle.offsetLeft)/handle.clientWidth;
        return p;
    }

    let mouseDown = false;
    handle.addEventListener("mousedown",function(event){
        mouseDown = true;
        let p = getP(event);
        fill.style.width = p * 100 + "%";
    })
    handle.addEventListener("mouseup",function(event){
        if(!mouseDown) return;
        mouseDown = false;
        p = (event.clientX - handle.offsetLeft)/handle.clientWidth;
        fill.style.width = p * 100 + "%";
        song.currentTime = p * song.duration;
    }) 
    }
    
    
    


