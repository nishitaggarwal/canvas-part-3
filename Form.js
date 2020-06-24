class Form {

constructor(){

}


display(){

var title = createElement("h2")

title.html("car racing game")

title.position(130,0)

var input = createInput("name")
input.position(130,160)

var button = createButton("play")
button.position(250,200)

var greeting  = createElement("h3")

/////////////////////////////////////////////////////////////////////////////////////////////////////
var backgroundChange = createButton("colour change")
var square = createButton("SQUARE")
var triangles = createButton("Triangles")
var circle = createButton("circles")
var heart = createButton("Heart")
var hexagon = createButton("haxagon")



button.mousePressed(function() {


input.hide()
button.hide()

var name = input.value()

playerCount += 1

player.update(name)
player.updateCount(playerCount)

greeting.html("hello " + name)
greeting.position(130,160)

backgroundChange.position(570,20)
square.position(670,20)
triangles.position(670,50)
circle.position(570,50)
hexagon.position(750,20)
heart.position(830,20)
})


backgroundChange.mousePressed(function() {

background(random(0,255),random(0,255),random(0,255))

})


 square.mousePressed(function() {

 text("🔳",random(100,1000),random(0,500))
 //text("🔻",random(200,1000),random(0,500))
})

 triangles.mousePressed(function() {

  //  text("🔳",random(200,1000),random(0,500))
    text("🔻",random(100,1000),random(0,500))
    
 })

// //⚫🔺🔻🔸🔷🔳🔘♾️💱💱💱💱♦️♥️

    circle.mousePressed(function() {

  //  text("🔳",random(200,1000),random(0,500))
    text("😁",random(100,1000),random(0,500))
    
 })

 hexagon.mousePressed(function() {

    //  text("🔳",random(200,1000),random(0,500))
      text("🔷",random(100,1000),random(0,500))
      
   })

   heart.mousePressed(function() {

    //  text("🔳",random(200,1000),random(0,500))
      text("♥️♥️♥️",random(100,1000),random(0,500))
      
   })

   




 }



 }