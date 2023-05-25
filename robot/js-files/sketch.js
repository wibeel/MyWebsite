

let myhammer;
let mymole = [];
let mymolehill = [];

let timer = 0; 

let choice = 0;
let moleactive = 0;
let timerappear = 0; 

let sound;

let grassimg;
let puddleimg

let weatherData;
let raining = false; 

let choices = [0, 1, 2];
let difficulty = 2000;

function preload() {
grassimg = loadImage('robot/assets/grass.jpg');
puddleimg = loadImage('robot/assets/puddle.png');
sound = loadSound('robot/assets/hammer.mp3');
}


function setup() {
    
    createCanvas(windowWidth, windowHeight);
    myhammer = new hammer();
    timer = millis();
  
  //mollen en molhopen tekenen
   for (let i = 0; i<3; i++){
      mymole[i] = new mole();
      mymole[i].molex = (i+1)*windowWidth/4;
      mymole[i].moley = windowHeight/2;
      mymolehill[i] = new molehill();
      mymolehill[i].molehillx = (i+1)*windowWidth/4;
      mymolehill[i].molehilly = windowHeight/2;
      } 
  
  
  //weerdata ophalen
    let cityID = 2794055; //Kortrijk
    let apiKey = "350fd45a54d053cd7f85ebf11b24d098"; 
  
    let url = `https://api.openweathermap.org/data/2.5/weather?id=${cityID}&appid=${apiKey}`;
  
    httpGet(url, 'json', false, function(response) {
    weatherData = response;
    
    // Controleer of het regent in Kortrijk
    if (weatherData.weather[0].main === 'Rain') {
      raining = true;
    } else {
      raining = false;
    }
    });

    
  }
  

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  for (let i = 0; i<3; i++){
    mymole[i].molex = (i+1)*windowWidth/4;
    mymolehill[i].molehillx = (i+1)*windowWidth/4;
  }
}

function draw() {
  background(255);
  image(grassimg, 0, 0, width, height, 0, 0, grassimg.width, grassimg.height, COVER);
  puddle();
  
  for (let i = 0; i<3; i++){
  mymole[i].display();
  mymolehill[i].display();
  }
  
  
  hammermovement();
  molemovement();
}

function puddle(){
  if (raining) {
    image(puddleimg, windowWidth/4.5, windowHeight/5)
  
  } 
}

function hammermovement(){
  let lastclick = millis()-timer; //tijd sinds laatste klik

  if (mouseIsPressed == true && lastclick>myhammer.speed*2) {
    timer = millis();
    sound.play();
  }
  
  
  if (lastclick <= myhammer.speed*2 && millis() > myhammer.speed*2){
    if (lastclick<myhammer.speed){
      myhammer.rotation = -20 - lastclick* (55/myhammer.speed);
    }
    else{
      myhammer.rotation = -75 + (lastclick - myhammer.speed)*(55/myhammer.speed);
    }
  }
  else{
    myhammer.rotation = -20;
    
  }
  
  
  myhammer.rotation = myhammer.rotation;
  myhammer.display();
}

function molemovement(){
  let lastmoleappear = millis()-timerappear;
  
  
  if (millis() < 20000){
    difficulty = 4000000 / (millis()+2000);
  }
  else{
    difficulty = 180;
  }
  
  if (lastmoleappear > (difficulty) && moleactive == 0){
    timerappear = millis();
    choice = random(choices);
    mymole[choice].moley = windowHeight/2 - 100;
    moleactive = 1;
  }else if(lastmoleappear > (2*difficulty) && moleactive == 1){
    timerappear = millis();
    mymole[choice].moley = windowHeight/2;
    moleactive = 0;
  }
  
  checkhit();
    
  
}

function checkhit(){
  
  for (let i = 0; i<3; i++){
    let Xmin = (i+1)*windowWidth/4;
    let Ymin = windowHeight/2 + 30;
    if (mouseIsPressed == true && mouseX > Xmin && mouseX < Xmin + 90 && mouseY < Ymin && mouseY > Ymin -100){
      timerappear = millis();
      mymole[i].moley = windowHeight/2;
      moleactive = 0;
    }
  }
}