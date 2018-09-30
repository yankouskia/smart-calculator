class SmartCalculator {
  constructor(initialValue) {
    this.val = initialValue;
    this.result = this.val;
    this.value = 0;
   
  }

  add(number) {
     this.result+=number;
     return this;
  }
  
  subtract(number) {
  this.result-=number;
  return this;
  }

  multiply(number) {
    this.result*=number;
    return this;
  }

  devide(number) {
    this.result/=number;
    return this;
  }

  pow(number) {
    this.result=Math.pow(this.result,number);
    return this;
  }
  valueOf(){
    this.value = this.result;
    return this.value;
  }
}

module.exports = SmartCalculator;
