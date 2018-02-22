class SmartCalculator {
  constructor(initialValue) {
    this.exprArr = [];
    this.exprArr.push(initialValue);
  }

  add(number) {
    this.exprArr.push('+');
    this.exprArr.push(number);
    return this;
  }

  subtract(number) {
    this.exprArr.push('-');
    this.exprArr.push(number);
    return this;
  }

  multiply(number) {
    this.exprArr.push('*');
    this.exprArr.push(number);
    return this;
  }

  devide(number) {
    this.exprArr.push('/');
    this.exprArr.push(number);
    return this;
  }

  pow(number) {
    this.exprArr.push('^');
    this.exprArr.push(number);
    return this;
  }

  static getPriority(symb) {
    switch(symb) {
      case '^':
        return 3;
      case '*':
      case '/':
        return 2;
      case '+':
      case '-':
        return 1;
      default:
        return 0;
    }
  }

  // 1 + 5 + 5

  get postfixNotation() {
    let res = [];
    let operStack = [];
    let prior;
    for(let i = 0; i < this.exprArr.length; i++) {
      prior = SmartCalculator.getPriority(this.exprArr[i]);
      if(!prior) { // if num
        res.push(this.exprArr[i]);
      } else { // if oper
        let pervOper = operStack.pop();
        if(prior > SmartCalculator.getPriority(pervOper)) {
          if(pervOper != undefined)
            operStack.push(pervOper);
          operStack.push(this.exprArr[i]);
        } else {
          res.push(pervOper);
          let tmp;
          while(tmp = operStack.pop()) {
            if(SmartCalculator.getPriority(tmp) >= prior)
              res.push(tmp);
            else {
              operStack.push(tmp);
              break;
            }
          }
          operStack.push(this.exprArr[i]);
        }
      }
    }
    while(prior = operStack.pop()) {
      res.push(prior);
    }
    return res;
  }

  calculate() {
    let postfix = this.postfixNotation;
    console.log('postfix: ' + postfix);
    let numStack = [];
    let res;
    for(let i = 0; i < postfix.length; i++) {
      if(!SmartCalculator.getPriority(postfix[i])) {
        numStack.push(postfix[i]);
      } else {
        let oper2 = numStack.pop();
        let oper1 = numStack.pop();
        switch(postfix[i]) {
          case '^':
            res = Math.pow(oper1, oper2);
            break;
          case '*':
            res = oper1 * oper2;
            break;
          case '/':
            res = Math.floor(oper1 / oper2);
            break;
          case '+':
            res = oper1 + oper2;
            break;
          case '-':
            res = oper1 - oper2;
            break;
        }
        numStack.push(res);
      }
    }
    return res;
  }

  toString() {
    return this.calculate();
  }
}

// 1 + 2 * 2

//     const calculator = new SmartCalculator(4);

//     const value = calculator
//       .add(53)
//       .subtract(74)
//       .pow(1)
//       .pow(2);


// console.log(''+value);

module.exports = SmartCalculator;
