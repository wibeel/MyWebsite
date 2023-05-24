class molehill{
  constructor(molehillx=0, molehilly=0){
    this.molehillx = molehillx;
    this.molehilly = molehilly;
  }
  
  display(){
    let bruin = color('#6c513c')
    push();
      translate(this.molehillx, this.molehilly);
      scale(0.2);  
      strokeWeight(30);
      stroke(bruin);
      fill(bruin)
      quad(-100, 940, 0, 150, 450, 150, 550, 940)
    pop();
  }
}