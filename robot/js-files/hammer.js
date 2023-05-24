class hammer{
  constructor(rotation=20, speed=100){
    this.rotation = rotation; //range between 20 and 75
    this.speed = speed;
  }
  display(){
    let lichtgrijs = color('#6A6A6A');
    let donkergrijs = color('#424242');
    let bruin = color('#8b4513');
    push();
    
    translate(mouseX, mouseY)
    scale(3);
    translate(85, 0);
    
    angleMode(DEGREES);
    rotate(this.rotation);
    strokeCap(SQUARE);
    
    stroke(lichtgrijs);
    strokeWeight(30);
    line(-25, -85, 25, -85)
    
    stroke(bruin);
    strokeWeight(6);
    line(0, -70, 0, 0);
    
    stroke(donkergrijs);
    line(-15, -100, -15, -70);
    line(15, -100, 15, -70);
    pop();
  }
}
