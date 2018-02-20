# smart-calculator

## Task

Your task is to implement class `SmartCalculator`. All methods in class should be *chainable*. The priority of different operations should be kept in mind. It means, that `2 + 2 * 2` is `6`, not `8`.

For example:
```js
  const calculator = new SmartCalculator(2);

  const value = calculator
    .add(2)
    .multiply(2);

  console.log(value); // 6
```

Constructor should take initial value.
Be sure, that all tests work with *integers*.
Write your solution in `src/index.js`
