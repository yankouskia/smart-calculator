class SmartCalculator {
  
    constructor(initialValue) {
        this.value = 0;
        this.order = {'**':0, '*':1, '/':1, '+':2, '-':2}
        this.stack    = [];
        this.operands = [initialValue];
    }

    testWithStackTop(a){
        if (this.stack.length==0) return 0;
        if (this.order[a]   > this.order[this.stack[this.stack.length-1]]) {
            return -1;
        } if (this.order[a] < this.order[this.stack[this.stack.length-1]]) {
            return 1
        }
        return 0;
    }

    add(number) {
        while (this.testWithStackTop('+')!=1 && (this.stack.length!=0) ){
           this.operands.push(this.stack.pop());   
        }
        this.operands.push(number);
        this.stack.push('+'); 
        return this;
    }


    subtract(number) {
        while (this.testWithStackTop('-')!=1 && (this.stack.length!=0)){
           this.operands.push(this.stack.pop());
           
        }
        this.operands.push(number);
        this.stack.push('-');
        return this;
    }

    multiply(number) {
        while (this.testWithStackTop('*')!=1 && (this.stack.length!=0)){
           this.operands.push(this.stack.pop());   
        }
        this.operands.push(number);
        this.stack.push('*'); 
        return this;
    }

    devide(number) {
        while (this.testWithStackTop('/')!=1 && (this.stack.length!=0)){
           this.operands.push(this.stack.pop());   
        }
        this.operands.push(number);
        this.stack.push('/'); 
        return this;
    }

    pow(number) {
        while (this.testWithStackTop('**')==-1 && (this.stack.length!=0)){ 
           this.operands.push(this.stack.pop());  /* ==-1 ? check later */
        }
        this.operands.push(number);
        this.stack.push('**'); 
        return this;
    }

    calcStep(stackOP){
        let op = stackOP.pop();
        let b  = stackOP.pop();
        let a  = stackOP.pop();
        switch(op){
            case "**":
                a **= b; break;
            case "*":
                a *= b;  break;
            case "/":
                a /= b;  break;
            case "+": 
                a += b;  break;
            case "-":
                a -= b;  break;
            default:
                console.log(`ERROR ${op}`)
                break;  
        }
        stackOP.push(a);
    }

    calculate(stackOP){
        let tempOP =[];

        while(stackOP.length !=0){ 
            
            tempOP.push(stackOP.shift());
            
            switch(tempOP[tempOP.length-1]){
                case "**":
                case "*" :
                case "/" :
                case "+" : 
                case "-" :
                    this.calcStep(tempOP);
                    break;
                default:
                    break;
            }   
        }
        return tempOP[0];
    }

    valueOf() {
        let st = Array(...this.stack);   // copy of stack
        let op = Array(...this.operands);
        
        while (st.length>0){
            op.push(st.pop());           // complete stack
        }
        
        this.value =  this.calculate(op); // lazy calculation
        return this.value;
    }
}


const a = new SmartCalculator(1);
  value = a
    .add(5)
    .add(5)
    .multiply(2)
    
  console.log(value);