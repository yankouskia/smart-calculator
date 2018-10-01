let arr =[];
let b = 10;

    arr.push({
        name: 5,
        oper: 1,
        op : (a,b)=>a+b});

    arr.push({
        name: 10,
        oper: 2,
        op : (a,b)=>a*b});

    arr.push({
        name: 2,
        oper: 4,
        op : (a,b)=>a**b});    
   
console.log(arr);
arr.sort((a,b)=>b.oper-a.oper);
console.log(arr);
for(let i=0;i<arr.length;i++){
    let fun = arr[i].op;
    b=fun(b,arr[i].name);
}
console.log(b);

class SmartCalculator {
    constructor(initialValue) {
      this.val = initialValue;
      this.result = this.val;
      this.value = 0;
      this.oper = [];
     
    }
  
    add(number) {
       this.oper.push({
         num:number,
         op:(a,b)=>a+b,
         pr:1
       })
       return this;
    }
    
    subtract(number) {
      this.oper.push({
        num:number,
        op:(a,b)=>a-b,
        pr:0
      })
    return this;
    }
  
    multiply(number) {
      this.oper.push({
        num:number,
        op:(a,b)=>a*b,
        pr:3
      })
      return this;
    }
  
    devide(number) {
      this.oper.push({
        num:number,
        op:(a,b)=>a/b,
        pr:2
      })
      return this;
    }
  
    pow(number) {
      this.oper.push({
        num:number,
        op:(a,b)=>a*b,
        pr:4
      })
      return this;
    }
    valueOf(){
      let res = this.result;
      
      this.oper.sort((a,b)=>b.pr-a.pr);
      for(let i=0;i<this.oper.length;i++){
         let fun = this.oper[i].op;
         let num = this.oper[i].num;
         res = fun(res,num); 
      }
      this.value = res;
      return this.value;
    }
  }
  
  module.exports = SmartCalculator;


  console.log(2*9/3);