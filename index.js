//NAVIGATION SIDE BAR DISPLAY
var navState = true;
function navDisplay(){
  if (navState == true){
    document.getElementById("closenav").style.display = "none"
  //  document.getElementById("menuicon").style.display = "block"
    //document.getElementById("closeicon").style.display = "none"
    navState = false;
  }
  else if (navState == false) {
    document.getElementById("closenav").style.display = "block"
  //  document.getElementById("menuicon").style.display = "none"
    //document.getElementById("closeicon").style.display = "block"
    navState = true;
  }
}


var navStatus = true;
function toggleNav(){

  if (navStatus == true){

    document.getElementById("closenav").style.left = "-300px";
    document.getElementById("menuicon").style.display = "block";
    document.getElementById("closeicon").style.display = "none";
    navStatus = false;
  }

  else if (navStatus == false){

    document.getElementById("closenav").style.left = "0px";
    document.getElementById("menuicon").style.display = "none";
    document.getElementById("closeicon").style.display = "block";
    navStatus = true;
  }
}


//LOGIN FORM DISPLAY
function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

//SHOW OR HIDE PASSWORD
let loginPwdStatus = false;

function changePwdView() {
  let getLoginInput = getElementById("loginPwdChange");

  if (loginPwdStatus === false) {
    getLoginInput.setAttribute("type", "text");

    loginPwdStatus = true;
  }

  else if (loginPwdStatus === true) {
      getLoginInput.setAttribute("type", "password");

      loginPwdStatus = false;
  }
}

//BANNER SLIDES DISPLAY
var bannerStatus = 1;
var bannerTimer = 5000;

window.onload = function(){
  bannerLoop();
}

var bannerLoopStart = setInterval(function() {
  bannerLoop();
}, bannerTimer);

document.getElementById("banner-slides").onmouseenter = function() {
  clearInterval(bannerLoopStart);

}

console.log(clearInterval);

document.getElementById("banner-slides").onmouseleave = function() {
  bannerLoopStart = setInterval(function(){
    bannerLoop();
  }, bannerTimer);
}

document.getElementById("toggle-prev").onclick = function() {
  if (bannerStatus === 1) {
    bannerStatus = 2;
  }

  else if (bannerStatus === 2) {
    bannerStatus = 3;
  }

  else if (bannerStatus === 3) {
    bannerStatus = 4;
  }

  else if (bannerStatus === 4) {
    bannerStatus = 5;
  }

  else if (bannerStatus === 5) {
    bannerStatus = 1;
  }

  bannerLoop();
}

document.getElementById("toggle-next").onclick = function() {
  bannerLoop();
}

function  bannerLoop(){
  if (bannerStatus === 1) {

    document.getElementById("slide2").style.opacity = "0";

    setTimeout(function(){
      document.getElementById("slide1").style.right = "0px";
      document.getElementById("slide1").style.zIndex = "1000";
      document.getElementById("slide2").style.right = "-1200px";
      document.getElementById("slide2").style.zIndex = "1500";
      document.getElementById("slide3").style.right = "-2400px";
      document.getElementById("slide3").style.zIndex = "2000";
      document.getElementById("slide4").style.right = "-3600px";
      document.getElementById("slide4").style.zIndex = "2500";
      document.getElementById("slide5").style.right = "1200px";
      document.getElementById("slide5").style.zIndex = "500";

    }, 500);

    setTimeout(function(){
      document.getElementById("slide2").style.opacity = "1";
    }, 1000);

    bannerStatus = 2;
  }

  else if (bannerStatus === 2) {

    document.getElementById("slide3").style.opacity = "0";

    setTimeout(function(){
      document.getElementById("slide2").style.right = "0px";
      document.getElementById("slide2").style.zIndex = "1000";
      document.getElementById("slide3").style.right = "-1200px";
      document.getElementById("slide3").style.zIndex = "1500";
      document.getElementById("slide4").style.right = "-2400px";
      document.getElementById("slide4").style.zIndex = "2000";
      document.getElementById("slide5").style.right = "-3600px";
      document.getElementById("slide5").style.zIndex = "2500";
      document.getElementById("slide1").style.right = "1200px";
      document.getElementById("slide1").style.zIndex = "500";

    }, 500);

    setTimeout(function(){
      document.getElementById("slide3").style.opacity = "1";
    }, 1000);

    bannerStatus = 3;
  }

  else if (bannerStatus === 3) {

    document.getElementById("slide4").style.opacity = "0";

    setTimeout(function(){
      document.getElementById("slide3").style.right = "0px";
      document.getElementById("slide3").style.zIndex = "1000";
      document.getElementById("slide4").style.right = "-1200px";
      document.getElementById("slide4").style.zIndex = "1500";
      document.getElementById("slide5").style.right = "-2400px";
      document.getElementById("slide5").style.zIndex = "2000";
      document.getElementById("slide1").style.right = "-3600px";
      document.getElementById("slide1").style.zIndex = "2500";
      document.getElementById("slide2").style.right = "1200px";
      document.getElementById("slide2").style.zIndex = "500";

    }, 500);

    setTimeout(function(){
      document.getElementById("slide4").style.opacity = "1";
    }, 1000);

    bannerStatus = 4;
  }

  else if (bannerStatus === 4) {

    document.getElementById("slide5").style.opacity = "0";

    setTimeout(function(){
      document.getElementById("slide4").style.right = "0px";
      document.getElementById("slide4").style.zIndex = "1000";
      document.getElementById("slide5").style.right = "-1200px";
      document.getElementById("slide5").style.zIndex = "1500";
      document.getElementById("slide1").style.right = "-2400px";
      document.getElementById("slide1").style.zIndex = "2000";
      document.getElementById("slide2").style.right = "-3600px";
      document.getElementById("slide2").style.zIndex = "2500";
      document.getElementById("slide3").style.right = "1200px";
      document.getElementById("slide3").style.zIndex = "500";

    }, 500);

    setTimeout(function(){
      document.getElementById("slide5").style.opacity = "1";
    }, 1000);

    bannerStatus = 5;
  }

  else if (bannerStatus === 5) {

    document.getElementById("slide1").style.opacity = "0";

    setTimeout(function(){
      document.getElementById("slide5").style.right = "0px";
      document.getElementById("slide5").style.zIndex = "1000";
      document.getElementById("slide1").style.right = "-1200px";
      document.getElementById("slide1").style.zIndex = "1500";
      document.getElementById("slide2").style.right = "-2400px";
      document.getElementById("slide2").style.zIndex = "2000";
      document.getElementById("slide3").style.right = "-3600px";
      document.getElementById("slide3").style.zIndex = "2500";
      document.getElementById("slide4").style.right = "1200px";
      document.getElementById("slide4").style.zIndex = "500";

    }, 500);

    setTimeout(function(){
      document.getElementById("slide1").style.opacity = "1";
    }, 1000);

    bannerStatus = 1;
  }

}
