var canvas,backgroundImage
var gameState = 0
var playerCount
var database

var form,player,game

function setup(){
  database = firebase.database();
  
 canvas = createCanvas(1000,500);
 
 game = new Game()
 game.getState() 
 game.start()


 
}

function draw(){
//  background(0)
  
}

