class mole{
  constructor(molex=0, moley=0){
    this.molex = molex;
    this.moley = moley;
  }
  
  display(){
    let donkergrijs = color('#A6A6A6');
    let grijs = color('#D9D9D9');
    let rood = color('#FF0000');
    let wit = color('#FFFFFF');
    push();
      translate(this.molex, this.moley);
      scale(0.2);  
      stroke(donkergrijs);
      strokeWeight(10);
      beginShape();
      vertex(230, 200);
      vertex(260, 51.3);
      vertex(340, 30);
      vertex(260, 51.3);
      endShape(CLOSE);

      fill(donkergrijs);
      ellipse(340, 30, 60, 60);

      fill(grijs);
      strokeWeight(0);
      ellipse(225, 375, 450, 450);
      rect(0, 370, 450, 570);



      strokeCap(ROUND);
      stroke(donkergrijs);
      strokeWeight(120);
      line(120, 330, 120, 350);

      strokeWeight(0);
      fill(wit);
      ellipse(120, 350, 100, 100);
      fill(rood);
      ellipse(120, 350, 40, 40);

      stroke(donkergrijs);
      strokeWeight(120);
      line(330, 330, 330, 350);

      strokeWeight(0);
      fill(wit);
      ellipse(330, 350, 100, 100);
      fill(rood);
      ellipse(330, 350, 40, 40);

      stroke(donkergrijs);
      fill(donkergrijs)
      strokeWeight(120);
      line(120, 500, 330, 500);
      line(120, 520, 330, 520);

      strokeWeight(0);
      rect(60, 500, 330, 20);


      stroke('#FFFFFF');
      strokeWeight(100);
      line(120, 520, 330, 520);

      stroke(donkergrijs);
      strokeWeight(10);
      line(110, 470, 110, 570);
      line(167.5, 470, 167.5, 570);
      line(225, 470, 225, 570);
      line(282.5, 470, 282.5, 570);
      line(340, 470, 340, 570);

    pop();
  }
}