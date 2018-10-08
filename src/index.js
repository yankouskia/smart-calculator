class SmartCalculator {
  constructor(initialValue) {
    this.val = initialValue + '';   
  }

  add(number) {
     this.val = `${this.val} + ${number}`;
     return this;
  }
  
  subtract(number) {
    this.val = `${this.val} - ${number}`;
  return this;
  }

  multiply(number) {
    this.val = `${this.val} * ${number}`;
    return this;
  }

  devide(number) {
    this.val = `${this.val} / ${number}`;
    return this;
  }

  pow(number) {
    this.val = `${this.val} ** ${number}`;
    return this;
  }
 toString(){
   return eval(this.val);
 }
}
module.exports = SmartCalculator;
