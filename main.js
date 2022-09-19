function nav5() {

    document.getElementById('toggle_id').style.display = "none";
    document.getElementById("toggle_id2").style.display = "none";
    document.getElementById("toggle_id3").style.display = "none";
    document.getElementById("toggle_id4").style.display = "none";
}


var t = true;

function nav4() {
    document.getElementById('toggle_id').style.display = "none";
    document.getElementById("toggle_id2").style.display = "none";
    document.getElementById("toggle_id3").style.display = "none";
    let toggle_id4 = document.getElementById('toggle_id4');
    if (toggle_id4.style.display === "block") {
        toggle_id4.style.display = "none";
    } else {
        toggle_id4.style.display = "block";
    }

    if (t == true) {
        arrowicon2 = document.getElementById('arrowicon4.1');
        arrowicon2.style.display = 'block';
        arrowicon1 = document.getElementById('arrowicon4').style.display = 'none';
        t = false;
    }
    else {
        arrowicon1 = document.getElementById('arrowicon4');
        arrowicon1.style.display = 'block';
        arrowicon2 = document.getElementById('arrowicon4.1').style.display = 'none';
        t = true;
    }

}
var a = true;

function nav3() {
    document.getElementById('toggle_id').style.display = "none";
    document.getElementById("toggle_id4").style.display = "none";

    document.getElementById("toggle_id2").style.display = "none";
    let toggle_id3 = document.getElementById('toggle_id3');
    if (toggle_id3.style.display === "block") {
        toggle_id3.style.display = "none";
    } else {
        toggle_id3.style.display = "block";
    }

    if (a == true) {
        arrowicon2 = document.getElementById('arrowicon3.1');
        arrowicon2.style.display = 'block';
        arrowicon1 = document.getElementById('arrowicon3').style.display = 'none';
        a = false;
    }
    else {
        arrowicon1 = document.getElementById('arrowicon3');
        arrowicon1.style.display = 'block';
        arrowicon2 = document.getElementById('arrowicon3.1').style.display = 'none';
        a = true;
    }

}


var s = true;

function nav1() {
    document.getElementById("toggle_id2").style.display = "none";
    document.getElementById("toggle_id3").style.display = "none";
    document.getElementById("toggle_id4").style.display = "none";

    let toggle_id = document.getElementById('toggle_id');
    if (toggle_id.style.display === "block") {
        toggle_id.style.display = "none";
    } else {
        toggle_id.style.display = "block";
    }

    if (s == true) {
        arrowicon2 = document.getElementById('arrowicon2');
        arrowicon2.style.display = 'block';
        arrowicon1 = document.getElementById('arrowicon1').style.display = 'none';
        s = false;
    }
    else {
        arrowicon1 = document.getElementById('arrowicon1');
        arrowicon1.style.display = 'block';
        arrowicon2 = document.getElementById('arrowicon2').style.display = 'none';
        s = true;
    }

}

var x = true;
function nav2() {
    document.getElementById('toggle_id').style.display = "none";
    document.getElementById("toggle_id3").style.display = "none";
    document.getElementById("toggle_id4").style.display = "none";



    let toggle_id2 = document.getElementById("toggle_id2");

    if (toggle_id2.style.display === "block") {
        toggle_id2.style.display = "none";

    } else {
        toggle_id2.style.display = "block";
    }

    if (x == true) {
        arrowicon2 = document.getElementById('arrowicon2.2');
        arrowicon2.style.display = 'block';
        arrowicon1 = document.getElementById('arrowicon2.1').style.display = 'none';
        x = false;
    }
    else {
        arrowicon1 = document.getElementById('arrowicon2.1');
        arrowicon1.style.display = 'block';
        arrowicon2 = document.getElementById('arrowicon2.2').style.display = 'none';
        x = true;
    }
}

function getlang() {
    let allLang = document.getElementById('choose_language');
    if (allLang.style.display === "block") {
        allLang.style.display = "none";
        document.getElementById('full_body').style.display = "block";
    } else {
        allLang.style.display = "block";
        document.getElementById('full_body').style.display = "none";
    }
}


function cut() {

    document.getElementById('choose_language').style.display = "none";
    document.getElementById('full_body').style.display = "block";

}

let fullBody = document.getElementById('full_body');
fullBody.addEventListener('click', () => {
    document.getElementById('toggle_id').style.display = "none";
    document.getElementById("toggle_id2").style.display = "none";
    document.getElementById("toggle_id3").style.display = "none";
    document.getElementById("toggle_id4").style.display = "none";
})


function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}


let Hosting = document.getElementById('Hosting');
Hosting.addEventListener('click', () => {
    let hover_Drop = document.getElementById("hover_Drop");
    if (hover_Drop.style.display === "block") {
        hover_Drop.style.display = "none";
    } else {
        hover_Drop.style.display = "block";
    }
})
let Hosting2 = document.getElementById('Hosting2');
Hosting2.addEventListener('click', () => {
    let hover_Drop2 = document.getElementById("hover_Drop2");
    if (hover_Drop2.style.display === "block") {
        hover_Drop2.style.display = "none";
    } else {
        hover_Drop2.style.display = "block";
    }
})
let Hosting3 = document.getElementById('Hosting3');
Hosting3.addEventListener('click', () => {
    let hover_Drop3 = document.getElementById("hover_Drop3");
    if (hover_Drop3.style.display === "block") {
        hover_Drop3.style.display = "none";
    } else {
        hover_Drop3.style.display = "block";
    }
})




var deadline = new Date("sept 22, 2022 17:46:25").getTime(); 
  
var x = setInterval(function() { 
  
var now = new Date().getTime(); 
var t = deadline - now; 
var days = Math.floor(t / (1000*60*60*24)); 
var hours = Math.floor((t%(1000*60*60*24))/(1000 * 60 * 60)); 
var minutes = Math.floor((t%(1000*60*60)) / (1000 * 60)); 
var seconds = Math.floor((t%(1000*60)) / 1000); 
document.getElementById("day").innerHTML =days ; 
document.getElementById("hour").innerHTML =hours; 
document.getElementById("minute").innerHTML = minutes;  
document.getElementById("second").innerHTML =seconds;  
if (t < 0) { 
        clearInterval(x); 
        document.getElementById("demo").innerHTML = "TIME UP"; 
        document.getElementById("day").innerHTML ='0'; 
        document.getElementById("hour").innerHTML ='0'; 
        document.getElementById("minute").innerHTML ='0' ;  
        document.getElementById("second").innerHTML = '0'; } 
}, 1000); 