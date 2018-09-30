class SmartCalculator {
    constructor(initialValue) {
      this.val = initialValue;
      this.result = this.val;
      
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
      return this.result;
    }
  }
  const a = new SmartCalculator(1);
  value = a
    .add(5)
    .add(5)
    .multiply(2)
    .valueOf();
  console.log(value);
