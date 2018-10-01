class SmartCalculator {
  constructor(initialValue) {
    this.val = initialValue;
    this.result = this.val;
    this.value = 1;
    this.oper = [];
   
  }

  add(number) {
     this.oper.push({
       num:number,
       op:(a,b)=>a+b,
       pr:2
     })
     return this;
  }
  
  subtract(number) {
    this.oper.push({
      num:number,
      op:(a,b)=>a-b,
      pr:1
    })
  return this;
  }

  multiply(number) {
    this.oper.push({
      num:number,
      op:(a,b)=>a*b,
      pr:4
    })
    return this;
  }

  devide(number) {
    this.oper.push({
      num:number,
      op:(a,b)=>a/b,
      pr:3
    })
    return this;
  }

  pow(number) {
    this.oper.push({
      num:number,
      op:(a,b)=>a**b,
      pr:5
    })
    return this;
  }
  operation(num,ind){
    let fun = this.oper[ind-1].op;
    return fun(this.oper[ind].num,num);
  }
  valueOf(){
   let res = 0;
    
    
    if(this.oper.length===0){this.value =  this.result;}
    if(this.oper.length===1){
      let fun = this.oper[0].op;
      this.result = fun(this.result,this.oper[0].num);
      this.value =  this.result;
    }
    if (this.oper.length>1){
      this.oper.unshift({
        num:this.result,
        op: null,
        pr:0
      });
      console.log(this.oper);
     
      for(let p=5;p>=1;p--){
        for(let i=1;i<this.oper.length;i++){
          if(this.oper[i].pr===p){
            let fun = this.oper[i].op;
            this.oper[i-1].num = fun(this.oper[i-1].num,this.oper[i].num);
            this.oper.splice(i,1);
            i--;
          }
         
        }
      }
     
      
      
      
        this.value = this.oper[0].num; 
    }
    return this.value;
    
  }
}
module.exports = SmartCalculator;
