const assert = require('assert');
Object.freeze(assert);
const SmartCalculator = require('./src/index');

describe('SmartCalculator', () => {
  it('1', () => {
    const calculator = new SmartCalculator(1);

    const value = calculator
      .add(5)
      .add(5);

    assert.equal(value, 11);
  });

  it('2', () => {
    const calculator = new SmartCalculator(2);

    const value = calculator
      .add(2)
      .multiply(2);

    assert.equal(value, 6);
  });

  it('3', () => {
    const calculator = new SmartCalculator(1);

    const value = calculator
      .add(5)
      .multiply(5)
      .add(5);

    assert.equal(value, 31);
  });

  it('4', () => {
    const calculator = new SmartCalculator(2);

    const value = calculator
      .add(2)
      .add(2)
      .multiply(2);

    assert.equal(value, 8);
  });

  it('5', () => {
    const calculator = new SmartCalculator(2);

    const value = calculator
      .add(2)
      .add(4)
      .devide(4);

    assert.equal(value, 5);
  });

  it('6', () => {
    const calculator = new SmartCalculator(2);

    const value = calculator
      .add(4)
      .devide(2)
      .add(4)
      .devide(4)
      .add(6)
      .devide(3);

    assert.equal(value, 7);
  });


  it('7', () => {
    
    const calculator = new SmartCalculator(3);

    const value = calculator
      .pow(1)
      .pow(1);
  
    assert.equal(value, 3);
  });
  
  it('8', () => {
  
    const calculator = new SmartCalculator(10);

    const value = calculator
      .multiply(2)
      .pow(2)
      .subtract(95)
      .subtract(56)
      .pow(2)
      .pow(2)
      .pow(1)
      .multiply(1);
  
    assert.equal(value, -9834551);
  });
  
  it('9', () => {
  
    const calculator = new SmartCalculator(9);

    const value = calculator
      .multiply(1)
      .subtract(73)
      .pow(2)
      .add(62)
      .multiply(1)
      .add(29)
      .add(60)
      .subtract(8)
      .subtract(83)
      .add(50);
  
    assert.equal(value, -5210);
  });
  
  it('10', () => {
  
    const calculator = new SmartCalculator(2);

    const value = calculator
      .multiply(1)
      .subtract(35)
      .add(34)
      .subtract(11)
      .add(18)
      .subtract(91)
      .pow(2)
      .add(5)
      .subtract(56)
      .add(36);
  
    assert.equal(value, -8288);
  });
  
  it('11', () => {
  
    const calculator = new SmartCalculator(7);

    const value = calculator
      .add(63)
      .subtract(54)
      .pow(2)
      .pow(1)
      .add(82)
      .add(89)
      .add(81)
      .multiply(1)
      .pow(1)
      .add(4);
  
    assert.equal(value, -2590);
  });
  
  it('12', () => {
  
    const calculator = new SmartCalculator(2);

    const value = calculator
      .subtract(100)
      .add(67)
      .add(27)
      .pow(2)
      .pow(1)
      .subtract(53);
  
    assert.equal(value, 645);
  });
  
  it('13', () => {
  
    const calculator = new SmartCalculator(1);

    const value = calculator
      .pow(1)
      .multiply(2);
  
    assert.equal(value, 2);
  });
  
  it('14', () => {
  
    const calculator = new SmartCalculator(8);

    const value = calculator
      .subtract(81)
      .subtract(45)
      .multiply(1)
      .subtract(27)
      .add(45);
  
    assert.equal(value, -100);
  });
  
  it('15', () => {
  
    const calculator = new SmartCalculator(8);

    const value = calculator
      .subtract(71)
      .multiply(2)
      .add(100)
      .subtract(74)
      .subtract(67);
  
    assert.equal(value, -175);
  });
  
  it('16', () => {
  
    const calculator = new SmartCalculator(2);

    const value = calculator
      .add(50)
      .multiply(2)
      .add(44)
      .pow(1)
      .add(5)
      .multiply(1)
      .multiply(2);
  
    assert.equal(value, 156);
  });
  
  it('17', () => {
  
    const calculator = new SmartCalculator(9);

    const value = calculator
      .pow(2)
      .multiply(1)
      .pow(1)
      .multiply(1);
  
    assert.equal(value, 81);
  });
  
  it('18', () => {
  
    const calculator = new SmartCalculator(4);

    const value = calculator
      .multiply(1);
  
    assert.equal(value, 4);
  });
  
  it('19', () => {
  
    const calculator = new SmartCalculator(7);

    const value = calculator
      .pow(2)
      .subtract(2)
      .multiply(1)
      .pow(2)
      .pow(1);
  
    assert.equal(value, 47);
  });
  
  it('20', () => {
  
    const calculator = new SmartCalculator(2);

    const value = calculator
      .multiply(2)
      .pow(1)
      .pow(1)
      .pow(2)
      .multiply(2)
      .multiply(2)
      .multiply(1);
  
    assert.equal(value, 16);
  });
  
  it('21', () => {
  
    const calculator = new SmartCalculator(1);

    const value = calculator
      .pow(1)
      .multiply(1)
      .add(95)
      .subtract(96);
  
    assert.equal(value, 0);
  });
  
  it('22', () => {
  
    const calculator = new SmartCalculator(4);

    const value = calculator
      .pow(1)
      .pow(1)
      .pow(1)
      .multiply(2)
      .add(80)
      .subtract(11)
      .multiply(1)
      .subtract(41)
      .subtract(65);
  
    assert.equal(value, -29);
  });
  
  it('23', () => {
  
    const calculator = new SmartCalculator(7);

    const value = calculator
      .subtract(73)
      .multiply(1);
  
    assert.equal(value, -66);
  });
  
  it('24', () => {
  
    const calculator = new SmartCalculator(5);

    const value = calculator
      .pow(1)
      .pow(2)
      .add(97);
  
    assert.equal(value, 102);
  });
  
  it('25', () => {
  
    const calculator = new SmartCalculator(10);

    const value = calculator
      .pow(1)
      .pow(1);
  
    assert.equal(value, 10);
  });
  
  it('26', () => {
  
    const calculator = new SmartCalculator(6);

    const value = calculator
      .subtract(62)
      .multiply(2)
      .subtract(55)
      .add(75)
      .multiply(2)
      .multiply(1)
      .subtract(1)
      .subtract(87)
      .pow(1)
      .pow(2);
  
    assert.equal(value, -111);
  });
  
  it('27', () => {
  
    const calculator = new SmartCalculator(5);

    const value = calculator
      .multiply(2)
      .subtract(35)
      .multiply(2)
      .pow(1)
      .add(18)
      .subtract(59)
      .multiply(2);
  
    assert.equal(value, -160);
  });
  
  it('28', () => {
  
    const calculator = new SmartCalculator(6);

    const value = calculator
      .add(14)
      .subtract(16)
      .add(36)
      .multiply(1)
      .subtract(46)
      .add(57)
      .pow(1);
  
    assert.equal(value, 51);
  });
  
  it('29', () => {
  
    const calculator = new SmartCalculator(6);

    const value = calculator
      .pow(1)
      .add(73)
      .multiply(1)
      .multiply(2);
  
    assert.equal(value, 152);
  });
  
  it('30', () => {
  
    const calculator = new SmartCalculator(7);

    const value = calculator
      .pow(2)
      .subtract(89)
      .pow(1)
      .subtract(49)
      .pow(1)
      .multiply(1)
      .pow(2);
  
    assert.equal(value, -89);
  });
  
  it('31', () => {
  
    const calculator = new SmartCalculator(6);

    const value = calculator
      .pow(2)
      .pow(1)
      .add(33)
      .pow(1)
      .multiply(2)
      .multiply(1)
      .add(39)
      .multiply(2)
      .multiply(2);
  
    assert.equal(value, 258);
  });
  
  it('32', () => {
  
    const calculator = new SmartCalculator(4);

    const value = calculator
      .multiply(1)
      .subtract(38)
      .pow(2);
  
    assert.equal(value, -1440);
  });
  
  it('33', () => {
  
    const calculator = new SmartCalculator(5);

    const value = calculator
      .subtract(44);
  
    assert.equal(value, -39);
  });
  
  it('34', () => {
  
    const calculator = new SmartCalculator(10);

    const value = calculator
      .pow(2)
      .pow(2)
      .add(82)
      .pow(2);
  
    assert.equal(value, 16724);
  });
  
  it('35', () => {
  
    const calculator = new SmartCalculator(2);

    const value = calculator
      .add(9);
  
    assert.equal(value, 11);
  });
  
  it('36', () => {
  
    const calculator = new SmartCalculator(3);

    const value = calculator
      .multiply(1)
      .add(37)
      .pow(1)
      .pow(1);
  
    assert.equal(value, 40);
  });
  
  it('37', () => {
  
    const calculator = new SmartCalculator(9);

    const value = calculator
      .subtract(2)
      .subtract(26)
      .add(26)
      .add(73)
      .multiply(1)
      .pow(1);
  
    assert.equal(value, 80);
  });
  
  it('38', () => {
  
    const calculator = new SmartCalculator(5);

    const value = calculator
      .multiply(2)
      .add(45)
      .subtract(55)
      .add(47)
      .add(48);
  
    assert.equal(value, 95);
  });
  
  it('39', () => {
  
    const calculator = new SmartCalculator(6);

    const value = calculator
      .multiply(1)
      .multiply(1)
      .pow(2)
      .add(96)
      .multiply(2);
  
    assert.equal(value, 198);
  });
  
  it('40', () => {
  
    const calculator = new SmartCalculator(9);

    const value = calculator
      .add(52)
      .add(15);
  
    assert.equal(value, 76);
  });
  
  it('41', () => {
  
    const calculator = new SmartCalculator(3);

    const value = calculator
      .subtract(94)
      .pow(1)
      .pow(1)
      .subtract(59)
      .pow(2)
      .subtract(68)
      .pow(1)
      .subtract(31);
  
    assert.equal(value, -3671);
  });
  
  it('42', () => {
  
    const calculator = new SmartCalculator(6);

    const value = calculator
      .multiply(1)
      .add(67)
      .add(24)
      .subtract(83)
      .add(23)
      .subtract(60)
      .multiply(2);
  
    assert.equal(value, -83);
  });
  
  it('44', () => {
  
    const calculator = new SmartCalculator(7);

    const value = calculator
      .subtract(94)
      .subtract(97)
      .multiply(1)
      .pow(1)
      .multiply(1)
      .pow(1)
      .subtract(65)
      .pow(1);
  
    assert.equal(value, -249);
  });
  
  it('45', () => {
  
    const calculator = new SmartCalculator(10);

    const value = calculator
      .add(83);
  
    assert.equal(value, 93);
  });
  
  it('46', () => {
  
    const calculator = new SmartCalculator(3);

    const value = calculator
      .pow(2)
      .subtract(25)
      .add(30)
      .add(82);
  
    assert.equal(value, 96);
  });
  
  it('47', () => {
  
    const calculator = new SmartCalculator(9);

    const value = calculator
      .add(1)
      .multiply(2)
      .pow(1)
      .subtract(97)
      .subtract(57)
      .add(42)
      .add(31)
      .multiply(2)
      .multiply(2)
      .multiply(2);
  
    assert.equal(value, 147);
  });
  
  it('48', () => {
  
    const calculator = new SmartCalculator(7);

    const value = calculator
      .subtract(83)
      .pow(1)
      .pow(1);
  
    assert.equal(value, -76);
  });
  
  it('49', () => {
  
    const calculator = new SmartCalculator(7);

    const value = calculator
      .subtract(96);
  
    assert.equal(value, -89);
  });
  
  it('50', () => {
  
    const calculator = new SmartCalculator(5);

    const value = calculator
      .multiply(1)
      .pow(1)
      .subtract(8)
      .add(84)
      .subtract(12)
      .add(20)
      .subtract(95)
      .subtract(72)
      .multiply(2)
      .subtract(77);
  
    assert.equal(value, -227);
  });
  
  it('51', () => {
  
    const calculator = new SmartCalculator(8);

    const value = calculator
      .multiply(2)
      .subtract(48)
      .subtract(25)
      .multiply(1)
      .pow(2)
      .multiply(1);
  
    assert.equal(value, -57);
  });
  
  it('52', () => {
  
    const calculator = new SmartCalculator(5);

    const value = calculator
      .subtract(88);
  
    assert.equal(value, -83);
  });
  
  it('53', () => {
  
    const calculator = new SmartCalculator(6);

    const value = calculator
      .pow(1)
      .subtract(93)
      .multiply(1)
      .pow(2);
  
    assert.equal(value, -87);
  });
  
  it('54', () => {
  
    const calculator = new SmartCalculator(5);

    const value = calculator
      .multiply(2)
      .add(68)
      .add(7)
      .multiply(2)
      .subtract(32)
      .pow(2)
      .subtract(93)
      .multiply(2)
      .add(61)
      .pow(1);
  
    assert.equal(value, -1057);
  });
  
  it('55', () => {
  
    const calculator = new SmartCalculator(8);

    const value = calculator
      .multiply(1)
      .add(66)
      .pow(1)
      .add(98);
  
    assert.equal(value, 172);
  });
  
  it('56', () => {
  
    const calculator = new SmartCalculator(3);

    const value = calculator
      .pow(2)
      .multiply(1)
      .multiply(2)
      .subtract(20)
      .multiply(2)
      .subtract(64);
  
    assert.equal(value, -86);
  });
  
  it('57', () => {
  
    const calculator = new SmartCalculator(1);

    const value = calculator
      .pow(1)
      .multiply(1)
      .subtract(7)
      .pow(2)
      .subtract(98)
      .add(77)
      .subtract(66)
      .add(11);
  
    assert.equal(value, -124);
  });
  
  it('58', () => {
  
    const calculator = new SmartCalculator(10);

    const value = calculator
      .multiply(2)
      .add(89);
  
    assert.equal(value, 109);
  });
  
  it('59', () => {
  
    const calculator = new SmartCalculator(5);

    const value = calculator
      .add(57)
      .subtract(93)
      .subtract(70)
      .add(88);
  
    assert.equal(value, -13);
  });
  
  it('60', () => {
  
    const calculator = new SmartCalculator(7);

    const value = calculator
      .subtract(43)
      .subtract(43)
      .multiply(1)
      .subtract(60)
      .add(8)
      .subtract(28);
  
    assert.equal(value, -159);
  });
  
  it('61', () => {
  
    const calculator = new SmartCalculator(5);

    const value = calculator
      .pow(2)
      .pow(2)
      .multiply(1)
      .pow(2)
      .add(75)
      .pow(1)
      .multiply(1)
      .pow(1)
      .subtract(89)
      .multiply(2);
  
    assert.equal(value, 522);
  });
  
  it('62', () => {
  
    const calculator = new SmartCalculator(9);

    const value = calculator
      .multiply(1)
      .pow(1)
      .subtract(12)
      .multiply(1)
      .pow(2)
      .multiply(2);
  
    assert.equal(value, -15);
  });
  
  it('63', () => {
  
    const calculator = new SmartCalculator(6);

    const value = calculator
      .add(18)
      .add(34);
  
    assert.equal(value, 58);
  });
  
  it('64', () => {
  
    const calculator = new SmartCalculator(1);

    const value = calculator
      .multiply(2);
  
    assert.equal(value, 2);
  });
  
  it('65', () => {
  
    const calculator = new SmartCalculator(3);

    const value = calculator
      .multiply(1)
      .subtract(29)
      .multiply(2);
  
    assert.equal(value, -55);
  });
  
  it('66', () => {
  
    const calculator = new SmartCalculator(2);

    const value = calculator
      .multiply(1)
      .subtract(67)
      .subtract(11)
      .add(61)
      .multiply(1)
      .multiply(1)
      .pow(2)
      .subtract(60);
  
    assert.equal(value, -75);
  });
  
  it('67', () => {
  
    const calculator = new SmartCalculator(7);

    const value = calculator
      .add(24)
      .add(2)
      .multiply(1);
  
    assert.equal(value, 33);
  });
  
  it('68', () => {
  
    const calculator = new SmartCalculator(3);

    const value = calculator
      .multiply(1)
      .add(92)
      .multiply(1)
      .pow(2)
      .add(25)
      .subtract(90)
      .multiply(2)
      .pow(2);
  
    assert.equal(value, -240);
  });
  
  it('69', () => {
  
    const calculator = new SmartCalculator(2);

    const value = calculator
      .multiply(1)
      .pow(2)
      .multiply(2)
      .pow(1)
      .multiply(2)
      .subtract(97)
      .subtract(52)
      .pow(1);
  
    assert.equal(value, -141);
  });
  
  it('70', () => {
  
    const calculator = new SmartCalculator(10);

    const value = calculator
      .pow(2)
      .multiply(2)
      .subtract(83)
      .multiply(1)
      .pow(2)
      .add(36);
  
    assert.equal(value, 153);
  });
  
  it('71', () => {
  
    const calculator = new SmartCalculator(4);

    const value = calculator
      .subtract(84)
      .subtract(88);
  
    assert.equal(value, -168);
  });
  
  it('72', () => {
  
    const calculator = new SmartCalculator(8);

    const value = calculator
      .add(93)
      .add(15)
      .add(98)
      .add(92)
      .multiply(2)
      .add(93)
      .add(67)
      .multiply(2)
      .subtract(72);
  
    assert.equal(value, 553);
  });
  
  it('73', () => {
  
    const calculator = new SmartCalculator(2);

    const value = calculator
      .pow(2)
      .pow(2)
      .multiply(1)
      .multiply(2)
      .pow(1)
      .add(7)
      .multiply(1)
      .subtract(74)
      .pow(1)
      .pow(1);
  
    assert.equal(value, -35);
  });
  
  it('74', () => {
  
    const calculator = new SmartCalculator(9);

    const value = calculator
      .subtract(18)
      .multiply(2)
      .subtract(97)
      .multiply(1)
      .subtract(62);
  
    assert.equal(value, -186);
  });
  
  it('75', () => {
  
    const calculator = new SmartCalculator(1);

    const value = calculator
      .subtract(10)
      .multiply(1)
      .multiply(2);
  
    assert.equal(value, -19);
  });
  
  it('76', () => {
  
    const calculator = new SmartCalculator(2);

    const value = calculator
      .pow(2)
      .subtract(31)
      .pow(1)
      .multiply(2)
      .add(48)
      .multiply(2)
      .pow(1)
      .subtract(42);
  
    assert.equal(value, -4);
  });
  
  it('77', () => {
  
    const calculator = new SmartCalculator(6);

    const value = calculator
      .subtract(20)
      .subtract(83)
      .multiply(1)
      .pow(2)
      .pow(2)
      .subtract(10)
      .add(96)
      .subtract(75)
      .add(49)
      .pow(2);
  
    assert.equal(value, 2315);
  });
  
  it('78', () => {
  
    const calculator = new SmartCalculator(3);

    const value = calculator
      .pow(2)
      .add(20)
      .subtract(76)
      .subtract(66)
      .multiply(1)
      .pow(1)
      .pow(1)
      .multiply(1)
      .multiply(2)
      .add(56);
  
    assert.equal(value, -123);
  });
  
  it('79', () => {
  
    const calculator = new SmartCalculator(9);

    const value = calculator
      .pow(1)
      .add(100)
      .pow(1)
      .subtract(75)
      .multiply(2)
      .pow(1)
      .multiply(2)
      .subtract(50)
      .subtract(23)
      .multiply(1);
  
    assert.equal(value, -264);
  });
  
  it('80', () => {
  
    const calculator = new SmartCalculator(8);

    const value = calculator
      .pow(1)
      .subtract(36)
      .add(84)
      .add(99)
      .add(71);
  
    assert.equal(value, 226);
  });
  
  it('81', () => {
  
    const calculator = new SmartCalculator(2);

    const value = calculator
      .pow(1)
      .subtract(6)
      .multiply(1);
  
    assert.equal(value, -4);
  });
  
  it('82', () => {
  
    const calculator = new SmartCalculator(8);

    const value = calculator
      .pow(2)
      .subtract(7)
      .pow(2)
      .multiply(1)
      .subtract(57)
      .multiply(1)
      .pow(1)
      .multiply(1);
  
    assert.equal(value, -42);
  });
  
  it('83', () => {
  
    const calculator = new SmartCalculator(9);

    const value = calculator
      .pow(1)
      .subtract(70);
  
    assert.equal(value, -61);
  });
  
  it('84', () => {
  
    const calculator = new SmartCalculator(10);

    const value = calculator
      .pow(1)
      .pow(2);
  
    assert.equal(value, 10);
  });
  
  it('85', () => {
  
    const calculator = new SmartCalculator(8);

    const value = calculator
      .pow(1)
      .pow(1);
  
    assert.equal(value, 8);
  });
  
  it('86', () => {
  
    const calculator = new SmartCalculator(6);

    const value = calculator
      .subtract(52)
      .add(53)
      .pow(2)
      .add(52)
      .subtract(64)
      .add(84);
  
    assert.equal(value, 2835);
  });
  
  it('87', () => {
  
    const calculator = new SmartCalculator(9);

    const value = calculator
      .pow(2)
      .pow(2)
      .subtract(90)
      .multiply(1)
      .pow(2)
      .multiply(1);
  
    assert.equal(value, 6471);
  });
  
  it('88', () => {
  
    const calculator = new SmartCalculator(10);

    const value = calculator
      .multiply(2)
      .subtract(38)
      .add(84)
      .multiply(1)
      .subtract(96)
      .multiply(1);
  
    assert.equal(value, -30);
  });
  
  it('89', () => {
  
    const calculator = new SmartCalculator(7);

    const value = calculator
      .pow(1)
      .pow(1)
      .multiply(1)
      .multiply(2)
      .subtract(76)
      .subtract(90);
  
    assert.equal(value, -152);
  });
  
  it('90', () => {
  
    const calculator = new SmartCalculator(8);

    const value = calculator
      .add(37)
      .pow(2)
      .pow(1)
      .subtract(1)
      .multiply(2)
      .pow(1)
      .subtract(4)
      .subtract(98);
  
    assert.equal(value, 1273);
  });
  
  it('91', () => {
  
    const calculator = new SmartCalculator(5);

    const value = calculator
      .multiply(2)
      .subtract(40)
      .add(58)
      .pow(2)
      .pow(1)
      .subtract(48);
  
    assert.equal(value, 3286);
  });
  
  it('92', () => {
  
    const calculator = new SmartCalculator(9);

    const value = calculator
      .add(2)
      .multiply(1)
      .multiply(1)
      .multiply(2)
      .multiply(2)
      .add(90);
  
    assert.equal(value, 107);
  });
  
  it('94', () => {
  
    const calculator = new SmartCalculator(10);

    const value = calculator
      .multiply(2)
      .multiply(2)
      .subtract(91)
      .multiply(2)
      .pow(2)
      .multiply(1)
      .pow(2);
  
    assert.equal(value, -324);
  });
  
  it('95', () => {
  
    const calculator = new SmartCalculator(2);

    const value = calculator
      .subtract(93)
      .multiply(1)
      .pow(1)
      .subtract(54)
      .subtract(21)
      .add(93)
      .pow(1);
  
    assert.equal(value, -73);
  });
  
  it('96', () => {
  
    const calculator = new SmartCalculator(4);

    const value = calculator
      .add(34)
      .pow(1)
      .pow(1);
  
    assert.equal(value, 38);
  });
  
  it('97', () => {
  
    const calculator = new SmartCalculator(8);

    const value = calculator
      .add(74)
      .multiply(1)
      .pow(2)
      .subtract(65)
      .multiply(2)
      .subtract(31)
      .pow(2)
      .add(57)
      .pow(1)
      .subtract(39);
  
    assert.equal(value, -991);
  });
  
  it('98', () => {
  
    const calculator = new SmartCalculator(8);

    const value = calculator
      .pow(2)
      .subtract(59)
      .multiply(1)
      .pow(2)
      .multiply(1)
      .subtract(34)
      .subtract(81)
      .add(4)
      .add(18)
      .pow(1);
  
    assert.equal(value, -88);
  });
  
  it('99', () => {
  
    const calculator = new SmartCalculator(2);

    const value = calculator
      .multiply(1)
      .multiply(2)
      .add(25)
      .pow(2);
  
    assert.equal(value, 629);
  });
  
  it('100', () => {
  
    const calculator = new SmartCalculator(3);

    const value = calculator
      .pow(1)
      .pow(1)
      .multiply(2)
      .subtract(58)
      .subtract(33)
      .multiply(1);
  
    assert.equal(value, -85);
  });
  
  it('101', () => {
  
    const calculator = new SmartCalculator(8);

    const value = calculator
      .multiply(2)
      .add(96)
      .pow(1)
      .pow(1)
      .multiply(1);
  
    assert.equal(value, 112);
  });
  
  it('102', () => {
  
    const calculator = new SmartCalculator(4);

    const value = calculator
      .subtract(31)
      .add(37)
      .add(45);
  
    assert.equal(value, 55);
  });
  
  it('103', () => {
  
    const calculator = new SmartCalculator(5);

    const value = calculator
      .pow(1)
      .pow(1);
  
    assert.equal(value, 5);
  });
  
  it('104', () => {
  
    const calculator = new SmartCalculator(9);

    const value = calculator
      .multiply(1);
  
    assert.equal(value, 9);
  });
  
  it('105', () => {
  
    const calculator = new SmartCalculator(3);

    const value = calculator
      .add(40)
      .multiply(2)
      .add(85);
  
    assert.equal(value, 168);
  });
  
  it('106', () => {
  
    const calculator = new SmartCalculator(10);

    const value = calculator
      .add(40)
      .subtract(47)
      .add(68)
      .subtract(96)
      .add(64)
      .multiply(1)
      .subtract(17)
      .multiply(1);
  
    assert.equal(value, 22);
  });
  
  it('107', () => {
  
    const calculator = new SmartCalculator(4);

    const value = calculator
      .multiply(1)
      .subtract(39)
      .multiply(2);
  
    assert.equal(value, -74);
  });
  
  it('109', () => {
  
    const calculator = new SmartCalculator(2);

    const value = calculator
      .pow(2)
      .add(97)
      .add(81)
      .subtract(54)
      .add(9)
      .multiply(1)
      .pow(2)
      .pow(1);
  
    assert.equal(value, 137);
  });
  
  it('110', () => {
  
    const calculator = new SmartCalculator(3);

    const value = calculator
      .add(3)
      .add(18)
      .add(85)
      .multiply(2)
      .subtract(24)
      .pow(1)
      .pow(2)
      .pow(2)
      .subtract(52);
  
    assert.equal(value, 118);
  });
  
  it('111', () => {
  
    const calculator = new SmartCalculator(7);

    const value = calculator
      .multiply(2)
      .multiply(2)
      .pow(2)
      .pow(1)
      .add(98)
      .add(76)
      .subtract(48);
  
    assert.equal(value, 182);
  });
  
  it('112', () => {
  
    const calculator = new SmartCalculator(4);

    const value = calculator
      .subtract(58)
      .multiply(1)
      .add(1)
      .multiply(1)
      .multiply(2)
      .pow(1)
      .pow(1)
      .multiply(1)
      .subtract(48)
      .subtract(55);
  
    assert.equal(value, -155);
  });
  
  it('113', () => {
  
    const calculator = new SmartCalculator(4);

    const value = calculator
      .subtract(89)
      .subtract(78);
  
    assert.equal(value, -163);
  });
  
  it('114', () => {
  
    const calculator = new SmartCalculator(3);

    const value = calculator
      .multiply(2)
      .multiply(2)
      .add(18)
      .pow(1)
      .multiply(2)
      .subtract(3)
      .subtract(86)
      .pow(1);
  
    assert.equal(value, -41);
  });
  
  it('115', () => {
  
    const calculator = new SmartCalculator(2);

    const value = calculator
      .multiply(2)
      .subtract(4)
      .subtract(88)
      .add(17)
      .pow(1)
      .subtract(19)
      .subtract(50)
      .subtract(61)
      .subtract(65);
  
    assert.equal(value, -266);
  });
  
  it('116', () => {
  
    const calculator = new SmartCalculator(7);

    const value = calculator
      .subtract(67)
      .add(79)
      .subtract(7)
      .multiply(1)
      .multiply(1)
      .multiply(2)
      .subtract(89);
  
    assert.equal(value, -84);
  });
  
  it('117', () => {
  
    const calculator = new SmartCalculator(4);

    const value = calculator
      .subtract(36)
      .multiply(1)
      .add(16)
      .multiply(2)
      .add(80);
  
    assert.equal(value, 80);
  });
  
  it('118', () => {
  
    const calculator = new SmartCalculator(9);

    const value = calculator
      .add(92)
      .subtract(39)
      .multiply(1)
      .pow(2)
      .pow(1)
      .pow(1)
      .pow(2)
      .add(71)
      .subtract(50)
      .multiply(2);
  
    assert.equal(value, 33);
  });
  
  it('119', () => {
  
    const calculator = new SmartCalculator(4);

    const value = calculator
      .add(96)
      .subtract(22)
      .pow(2)
      .multiply(2)
      .multiply(2)
      .add(4)
      .add(20)
      .add(99);
  
    assert.equal(value, -1713);
  });
  
  it('120', () => {
  
    const calculator = new SmartCalculator(6);

    const value = calculator
      .add(97)
      .subtract(3)
      .add(22)
      .subtract(25)
      .pow(2)
      .pow(2);
  
    assert.equal(value, -390503);
  });
  
  it('121', () => {
  
    const calculator = new SmartCalculator(4);

    const value = calculator
      .pow(1)
      .multiply(1)
      .multiply(2)
      .pow(1)
      .add(27)
      .multiply(1)
      .multiply(1);
  
    assert.equal(value, 35);
  });
  
  it('122', () => {
  
    const calculator = new SmartCalculator(1);

    const value = calculator
      .subtract(2)
      .multiply(2)
      .pow(1)
      .multiply(2)
      .add(88)
      .pow(2)
      .subtract(21)
      .subtract(38);
  
    assert.equal(value, 7678);
  });
  
  it('123', () => {
  
    const calculator = new SmartCalculator(6);

    const value = calculator
      .pow(2)
      .multiply(1)
      .subtract(22);
  
    assert.equal(value, 14);
  });
  
  it('124', () => {
  
    const calculator = new SmartCalculator(3);

    const value = calculator
      .pow(1)
      .add(27)
      .subtract(14)
      .subtract(24)
      .pow(2)
      .add(3)
      .subtract(48)
      .multiply(2)
      .add(58)
      .pow(1);
  
    assert.equal(value, -595);
  });
  
  it('125', () => {
  
    const calculator = new SmartCalculator(4);

    const value = calculator
      .add(65)
      .add(87)
      .add(94)
      .subtract(20)
      .pow(1)
      .pow(1)
      .subtract(56);
  
    assert.equal(value, 174);
  });
  
  it('126', () => {
  
    const calculator = new SmartCalculator(2);

    const value = calculator
      .add(63)
      .subtract(19)
      .add(41)
      .pow(1)
      .add(44)
      .subtract(37)
      .multiply(1)
      .multiply(1)
      .subtract(24);
  
    assert.equal(value, 70);
  });
  
  it('127', () => {
  
    const calculator = new SmartCalculator(4);

    const value = calculator
      .add(96)
      .add(36);
  
    assert.equal(value, 136);
  });
  
  it('128', () => {
  
    const calculator = new SmartCalculator(4);

    const value = calculator
      .pow(1);
  
    assert.equal(value, 4);
  });
  
  it('129', () => {
  
    const calculator = new SmartCalculator(6);

    const value = calculator
      .multiply(1)
      .subtract(93);
  
    assert.equal(value, -87);
  });
  
  it('130', () => {
  
    const calculator = new SmartCalculator(8);

    const value = calculator
      .multiply(1)
      .subtract(64);
  
    assert.equal(value, -56);
  });
  
  it('131', () => {
  
    const calculator = new SmartCalculator(1);

    const value = calculator
      .subtract(67)
      .add(59)
      .multiply(2);
  
    assert.equal(value, 52);
  });
  
  it('132', () => {
  
    const calculator = new SmartCalculator(8);

    const value = calculator
      .multiply(2)
      .pow(2)
      .multiply(2)
      .subtract(52)
      .pow(1)
      .pow(2)
      .add(9)
      .subtract(62)
      .subtract(82)
      .multiply(1);
  
    assert.equal(value, -123);
  });
  
  it('133', () => {
  
    const calculator = new SmartCalculator(8);

    const value = calculator
      .pow(2);
  
    assert.equal(value, 64);
  });
  
  it('134', () => {
  
    const calculator = new SmartCalculator(2);

    const value = calculator
      .subtract(95)
      .multiply(2)
      .subtract(81);
  
    assert.equal(value, -269);
  });
  
  it('135', () => {
  
    const calculator = new SmartCalculator(10);

    const value = calculator
      .multiply(2)
      .subtract(26)
      .add(75)
      .add(84)
      .multiply(2)
      .multiply(1)
      .pow(2)
      .subtract(84)
      .multiply(2)
      .subtract(43);
  
    assert.equal(value, 26);
  });
  
  it('136', () => {
  
    const calculator = new SmartCalculator(8);

    const value = calculator
      .multiply(2)
      .multiply(1)
      .add(32)
      .pow(1)
      .add(55)
      .multiply(2)
      .subtract(96);
  
    assert.equal(value, 62);
  });
  
  it('137', () => {
  
    const calculator = new SmartCalculator(10);

    const value = calculator
      .add(43)
      .multiply(1)
      .pow(1)
      .subtract(5)
      .add(31)
      .multiply(1)
      .add(59)
      .add(21)
      .subtract(48);
  
    assert.equal(value, 111);
  });
  
  it('138', () => {
  
    const calculator = new SmartCalculator(1);

    const value = calculator
      .add(38);
  
    assert.equal(value, 39);
  });
  
  it('139', () => {
  
    const calculator = new SmartCalculator(7);

    const value = calculator
      .multiply(2)
      .subtract(26)
      .pow(1)
      .add(78)
      .subtract(81)
      .multiply(1)
      .pow(2);
  
    assert.equal(value, -15);
  });
  
  it('140', () => {
  
    const calculator = new SmartCalculator(10);

    const value = calculator
      .add(73)
      .multiply(1)
      .multiply(2)
      .pow(1)
      .pow(2)
      .multiply(1);
  
    assert.equal(value, 156);
  });
  
  it('141', () => {
  
    const calculator = new SmartCalculator(10);

    const value = calculator
      .subtract(8)
      .subtract(69);
  
    assert.equal(value, -67);
  });
  
  it('142', () => {
  
    const calculator = new SmartCalculator(7);

    const value = calculator
      .add(69)
      .multiply(2)
      .multiply(2)
      .multiply(2)
      .pow(2)
      .subtract(28)
      .subtract(78)
      .pow(2);
  
    assert.equal(value, -5001);
  });
  
  it('143', () => {
  
    const calculator = new SmartCalculator(3);

    const value = calculator
      .multiply(2)
      .multiply(2)
      .subtract(69)
      .pow(1)
      .subtract(55)
      .subtract(92)
      .subtract(11);
  
    assert.equal(value, -215);
  });
  
  it('144', () => {
  
    const calculator = new SmartCalculator(5);

    const value = calculator
      .multiply(1)
      .pow(1)
      .subtract(60)
      .subtract(55);
  
    assert.equal(value, -110);
  });
  
  it('145', () => {
  
    const calculator = new SmartCalculator(3);

    const value = calculator
      .multiply(1)
      .add(40)
      .pow(2)
      .subtract(20);
  
    assert.equal(value, 1583);
  });
  
  it('146', () => {
  
    const calculator = new SmartCalculator(4);

    const value = calculator
      .subtract(7)
      .multiply(2)
      .multiply(1);
  
    assert.equal(value, -10);
  });
  
  it('147', () => {
  
    const calculator = new SmartCalculator(8);

    const value = calculator
      .subtract(93)
      .multiply(1)
      .pow(1)
      .subtract(94)
      .add(30);
  
    assert.equal(value, -149);
  });
  
  it('148', () => {
  
    const calculator = new SmartCalculator(8);

    const value = calculator
      .subtract(89)
      .multiply(2)
      .multiply(1)
      .multiply(1)
      .add(50)
      .subtract(47)
      .pow(1);
  
    assert.equal(value, -167);
  });
  
  it('149', () => {
  
    const calculator = new SmartCalculator(9);

    const value = calculator
      .subtract(42)
      .subtract(83)
      .multiply(2)
      .add(27)
      .pow(1)
      .add(8);
  
    assert.equal(value, -164);
  });
  
  it('150', () => {
  
    const calculator = new SmartCalculator(5);

    const value = calculator
      .subtract(61)
      .add(88)
      .subtract(86);
  
    assert.equal(value, -54);
  });
  
  it('151', () => {
  
    const calculator = new SmartCalculator(8);

    const value = calculator
      .multiply(1)
      .add(99);
  
    assert.equal(value, 107);
  });
  
  it('152', () => {
  
    const calculator = new SmartCalculator(2);

    const value = calculator
      .multiply(1)
      .subtract(67)
      .multiply(1)
      .add(8)
      .multiply(1)
      .subtract(28)
      .multiply(1)
      .subtract(15);
  
    assert.equal(value, -100);
  });
  
  it('153', () => {
  
    const calculator = new SmartCalculator(1);

    const value = calculator
      .pow(1)
      .add(97)
      .subtract(27)
      .add(38)
      .subtract(52)
      .subtract(58)
      .add(8)
      .subtract(55);
  
    assert.equal(value, -48);
  });
  
  it('154', () => {
  
    const calculator = new SmartCalculator(10);

    const value = calculator
      .pow(1)
      .multiply(2)
      .multiply(1)
      .subtract(89)
      .subtract(18)
      .pow(2)
      .multiply(1)
      .multiply(2)
      .subtract(64)
      .multiply(1);
  
    assert.equal(value, -781);
  });
  
  it('155', () => {
  
    const calculator = new SmartCalculator(8);

    const value = calculator
      .add(36)
      .multiply(2)
      .add(33)
      .add(49);
  
    assert.equal(value, 162);
  });
  
  it('156', () => {
  
    const calculator = new SmartCalculator(3);

    const value = calculator
      .add(49)
      .multiply(1)
      .add(28)
      .multiply(1)
      .subtract(46);
  
    assert.equal(value, 34);
  });
  
  it('157', () => {
  
    const calculator = new SmartCalculator(4);

    const value = calculator
      .subtract(28)
      .subtract(21)
      .pow(2)
      .multiply(1)
      .pow(2);
  
    assert.equal(value, -465);
  });
  
  it('158', () => {
  
    const calculator = new SmartCalculator(10);

    const value = calculator
      .add(99)
      .add(45)
      .add(65);
  
    assert.equal(value, 219);
  });
  
  it('159', () => {
  
    const calculator = new SmartCalculator(4);

    const value = calculator
      .add(41)
      .subtract(62)
      .subtract(93)
      .multiply(1)
      .add(55)
      .add(61)
      .subtract(40);
  
    assert.equal(value, -34);
  });
  
  it('160', () => {
  
    const calculator = new SmartCalculator(10);

    const value = calculator
      .subtract(41)
      .add(58)
      .multiply(2)
      .add(58)
      .subtract(61)
      .multiply(2);
  
    assert.equal(value, 21);
  });
  
  it('161', () => {
  
    const calculator = new SmartCalculator(3);

    const value = calculator
      .multiply(1)
      .subtract(74)
      .pow(1)
      .add(6);
  
    assert.equal(value, -65);
  });
  
  it('162', () => {
  
    const calculator = new SmartCalculator(4);

    const value = calculator
      .add(47)
      .subtract(4)
      .pow(2)
      .add(55)
      .add(39)
      .subtract(86)
      .multiply(1);
  
    assert.equal(value, 43);
  });
  
  it('163', () => {
  
    const calculator = new SmartCalculator(3);

    const value = calculator
      .subtract(57);
  
    assert.equal(value, -54);
  });
  
  it('164', () => {
  
    const calculator = new SmartCalculator(10);

    const value = calculator
      .add(100)
      .pow(1)
      .add(82)
      .multiply(2)
      .pow(2)
      .add(15)
      .subtract(24);
  
    assert.equal(value, 429);
  });
  
  it('165', () => {
  
    const calculator = new SmartCalculator(6);

    const value = calculator
      .subtract(34)
      .multiply(1)
      .subtract(36)
      .multiply(1)
      .subtract(65);
  
    assert.equal(value, -129);
  });
  
  it('166', () => {
  
    const calculator = new SmartCalculator(7);

    const value = calculator
      .subtract(45)
      .subtract(44)
      .pow(1)
      .add(4);
  
    assert.equal(value, -78);
  });
  
  it('167', () => {
  
    const calculator = new SmartCalculator(2);

    const value = calculator
      .pow(1)
      .multiply(2)
      .subtract(47)
      .add(89)
      .subtract(40)
      .pow(1)
      .add(15);
  
    assert.equal(value, 21);
  });
  
  it('168', () => {
  
    const calculator = new SmartCalculator(5);

    const value = calculator
      .multiply(2)
      .add(60)
      .subtract(72)
      .multiply(1)
      .multiply(1)
      .subtract(40)
      .multiply(1);
  
    assert.equal(value, -42);
  });
  
  it('169', () => {
  
    const calculator = new SmartCalculator(9);

    const value = calculator
      .subtract(25)
      .add(73);
  
    assert.equal(value, 57);
  });
  
  it('170', () => {
  
    const calculator = new SmartCalculator(7);

    const value = calculator
      .pow(1)
      .add(57)
      .subtract(34)
      .add(80);
  
    assert.equal(value, 110);
  });
  
  it('171', () => {
  
    const calculator = new SmartCalculator(5);

    const value = calculator
      .multiply(2)
      .pow(2)
      .add(25)
      .multiply(1)
      .pow(1);
  
    assert.equal(value, 45);
  });
  
  it('172', () => {
  
    const calculator = new SmartCalculator(10);

    const value = calculator
      .add(61)
      .multiply(2);
  
    assert.equal(value, 132);
  });
  
  it('173', () => {
  
    const calculator = new SmartCalculator(9);

    const value = calculator
      .add(26);
  
    assert.equal(value, 35);
  });
  
  it('174', () => {
  
    const calculator = new SmartCalculator(3);

    const value = calculator
      .subtract(57)
      .multiply(2)
      .subtract(46)
      .subtract(1)
      .pow(1)
      .add(32)
      .add(41)
      .pow(1);
  
    assert.equal(value, -85);
  });
  
  it('175', () => {
  
    const calculator = new SmartCalculator(6);

    const value = calculator
      .multiply(2)
      .multiply(1)
      .pow(1)
      .add(18)
      .add(4);
  
    assert.equal(value, 34);
  });
  
  it('176', () => {
  
    const calculator = new SmartCalculator(8);

    const value = calculator
      .pow(1)
      .subtract(83);
  
    assert.equal(value, -75);
  });
  
  it('177', () => {
  
    const calculator = new SmartCalculator(5);

    const value = calculator
      .subtract(80)
      .pow(1)
      .multiply(1)
      .subtract(66)
      .pow(2)
      .multiply(1)
      .multiply(2)
      .subtract(91)
      .add(16)
      .multiply(2);
  
    assert.equal(value, -8846);
  });
  
  it('178', () => {
  
    const calculator = new SmartCalculator(1);

    const value = calculator
      .pow(1);
  
    assert.equal(value, 1);
  });
  
  it('179', () => {
  
    const calculator = new SmartCalculator(9);

    const value = calculator
      .subtract(70)
      .multiply(2);
  
    assert.equal(value, -131);
  });
  
  it('180', () => {
  
    const calculator = new SmartCalculator(1);

    const value = calculator
      .pow(1)
      .add(65)
      .pow(1)
      .add(7)
      .pow(1)
      .pow(1)
      .subtract(26);
  
    assert.equal(value, 47);
  });
  
  it('181', () => {
  
    const calculator = new SmartCalculator(7);

    const value = calculator
      .subtract(38)
      .multiply(1);
  
    assert.equal(value, -31);
  });
  
  it('182', () => {
  
    const calculator = new SmartCalculator(5);

    const value = calculator
      .subtract(81)
      .pow(2)
      .multiply(2)
      .multiply(2)
      .pow(1)
      .add(37)
      .pow(2)
      .add(59)
      .multiply(1)
      .multiply(1);
  
    assert.equal(value, -24811);
  });
  
  it('183', () => {
  
    const calculator = new SmartCalculator(8);

    const value = calculator
      .pow(1)
      .multiply(1)
      .subtract(52)
      .subtract(66);
  
    assert.equal(value, -110);
  });
  
  it('184', () => {
  
    const calculator = new SmartCalculator(6);

    const value = calculator
      .multiply(1)
      .pow(2)
      .multiply(1)
      .subtract(3)
      .subtract(7)
      .multiply(2)
      .pow(1)
      .add(15)
      .multiply(2);
  
    assert.equal(value, 19);
  });
  
  it('185', () => {
  
    const calculator = new SmartCalculator(10);

    const value = calculator
      .pow(2);
  
    assert.equal(value, 100);
  });
  
  it('186', () => {
  
    const calculator = new SmartCalculator(10);

    const value = calculator
      .subtract(55)
      .multiply(2)
      .add(32)
      .pow(2)
      .subtract(90)
      .subtract(94)
      .multiply(1)
      .multiply(2)
      .subtract(11)
      .pow(1);
  
    assert.equal(value, 635);
  });
  
  it('187', () => {
  
    const calculator = new SmartCalculator(4);

    const value = calculator
      .multiply(1)
      .add(64)
      .subtract(60)
      .subtract(74)
      .add(92)
      .subtract(71)
      .pow(2);
  
    assert.equal(value, -5015);
  });
  
  it('188', () => {
  
    const calculator = new SmartCalculator(3);

    const value = calculator
      .pow(2)
      .subtract(39)
      .subtract(46)
      .subtract(96)
      .subtract(80)
      .subtract(32)
      .subtract(21)
      .add(4);
  
    assert.equal(value, -301);
  });
  
  it('189', () => {
  
    const calculator = new SmartCalculator(3);

    const value = calculator
      .subtract(92)
      .pow(2)
      .multiply(1);
  
    assert.equal(value, -8461);
  });
  
  it('190', () => {
  
    const calculator = new SmartCalculator(1);

    const value = calculator
      .multiply(2)
      .pow(1);
  
    assert.equal(value, 2);
  });
  
  it('191', () => {
  
    const calculator = new SmartCalculator(9);

    const value = calculator
      .subtract(55);
  
    assert.equal(value, -46);
  });
  
  it('192', () => {
  
    const calculator = new SmartCalculator(3);

    const value = calculator
      .multiply(2)
      .pow(1);
  
    assert.equal(value, 6);
  });
  
  it('193', () => {
  
    const calculator = new SmartCalculator(10);

    const value = calculator
      .add(19)
      .pow(1)
      .add(53)
      .add(52)
      .add(87)
      .subtract(9)
      .subtract(54)
      .add(33)
      .add(17)
      .pow(2);
  
    assert.equal(value, 480);
  });
  
  it('194', () => {
  
    const calculator = new SmartCalculator(2);

    const value = calculator
      .add(93)
      .add(78)
      .multiply(2);
  
    assert.equal(value, 251);
  });
  
  it('195', () => {
  
    const calculator = new SmartCalculator(1);

    const value = calculator
      .multiply(2)
      .add(96);
  
    assert.equal(value, 98);
  });
  
  it('196', () => {
  
    const calculator = new SmartCalculator(4);

    const value = calculator
      .pow(2)
      .multiply(1)
      .subtract(19)
      .add(70)
      .subtract(50)
      .multiply(1)
      .pow(2)
      .subtract(20);
  
    assert.equal(value, -3);
  });
  
  it('197', () => {
  
    const calculator = new SmartCalculator(4);

    const value = calculator
      .add(18)
      .multiply(1)
      .pow(1);
  
    assert.equal(value, 22);
  });
  
  it('198', () => {
  
    const calculator = new SmartCalculator(3);

    const value = calculator
      .multiply(2)
      .pow(2)
      .subtract(30);
  
    assert.equal(value, -18);
  });
  
  it('199', () => {
  
    const calculator = new SmartCalculator(9);

    const value = calculator
      .subtract(49)
      .pow(1)
      .multiply(2)
      .add(11);
  
    assert.equal(value, -78);
  });
  
  it('200', () => {
  
    const calculator = new SmartCalculator(10);

    const value = calculator
      .subtract(55)
      .subtract(12)
      .pow(2)
      .pow(2)
      .add(21);
  
    assert.equal(value, -20760);
  });
  
  it('201', () => {
  
    const calculator = new SmartCalculator(4);

    const value = calculator
      .pow(1)
      .add(78)
      .add(63)
      .subtract(89)
      .multiply(1)
      .add(68)
      .subtract(92)
      .add(27);
  
    assert.equal(value, 59);
  });
  
  it('202', () => {
  
    const calculator = new SmartCalculator(9);

    const value = calculator
      .add(38)
      .multiply(2)
      .subtract(50)
      .pow(1);
  
    assert.equal(value, 35);
  });
  
  it('203', () => {
  
    const calculator = new SmartCalculator(8);

    const value = calculator
      .add(48)
      .add(59)
      .multiply(1)
      .add(91)
      .multiply(2)
      .add(66)
      .add(97)
      .add(93);
  
    assert.equal(value, 553);
  });
  
  it('204', () => {
  
    const calculator = new SmartCalculator(5);

    const value = calculator
      .add(80)
      .subtract(99)
      .subtract(38)
      .multiply(2)
      .pow(1);
  
    assert.equal(value, -90);
  });
  
  it('205', () => {
  
    const calculator = new SmartCalculator(3);

    const value = calculator
      .subtract(35);
  
    assert.equal(value, -32);
  });
  
  it('206', () => {
  
    const calculator = new SmartCalculator(3);

    const value = calculator
      .pow(2)
      .add(47)
      .add(84);
  
    assert.equal(value, 140);
  });
  
  it('207', () => {
  
    const calculator = new SmartCalculator(4);

    const value = calculator
      .pow(2)
      .pow(2)
      .subtract(37)
      .add(77)
      .add(47);
  
    assert.equal(value, 343);
  });
  
  it('208', () => {
  
    const calculator = new SmartCalculator(8);

    const value = calculator
      .subtract(72)
      .subtract(79)
      .add(33);
  
    assert.equal(value, -110);
  });
  
  it('209', () => {
  
    const calculator = new SmartCalculator(3);

    const value = calculator
      .add(90)
      .subtract(24);
  
    assert.equal(value, 69);
  });
  
  it('210', () => {
  
    const calculator = new SmartCalculator(6);

    const value = calculator
      .add(62)
      .pow(1)
      .multiply(2);
  
    assert.equal(value, 130);
  });
  
  it('211', () => {
  
    const calculator = new SmartCalculator(9);

    const value = calculator
      .multiply(1)
      .subtract(54)
      .subtract(76)
      .add(68)
      .pow(1)
      .pow(1)
      .multiply(1)
      .add(35)
      .multiply(1)
      .subtract(25);
  
    assert.equal(value, -43);
  });
  
  it('212', () => {
  
    const calculator = new SmartCalculator(2);

    const value = calculator
      .multiply(2)
      .add(68);
  
    assert.equal(value, 72);
  });
  
  it('213', () => {
  
    const calculator = new SmartCalculator(1);

    const value = calculator
      .add(46);
  
    assert.equal(value, 47);
  });
  
  it('214', () => {
  
    const calculator = new SmartCalculator(9);

    const value = calculator
      .pow(2)
      .multiply(1)
      .add(52)
      .multiply(1)
      .multiply(1)
      .subtract(61)
      .pow(1)
      .subtract(31);
  
    assert.equal(value, 41);
  });
  
  it('215', () => {
  
    const calculator = new SmartCalculator(3);

    const value = calculator
      .multiply(2)
      .subtract(94)
      .add(9);
  
    assert.equal(value, -79);
  });
  
  it('216', () => {
  
    const calculator = new SmartCalculator(8);

    const value = calculator
      .add(31);
  
    assert.equal(value, 39);
  });
  
  it('217', () => {
  
    const calculator = new SmartCalculator(9);

    const value = calculator
      .add(3)
      .add(94)
      .subtract(13);
  
    assert.equal(value, 93);
  });
  
  it('218', () => {
  
    const calculator = new SmartCalculator(9);

    const value = calculator
      .multiply(2)
      .multiply(1)
      .subtract(25);
  
    assert.equal(value, -7);
  });
  
  it('219', () => {
  
    const calculator = new SmartCalculator(9);

    const value = calculator
      .subtract(25)
      .subtract(71)
      .add(65)
      .subtract(45);
  
    assert.equal(value, -67);
  });
  
  it('220', () => {
  
    const calculator = new SmartCalculator(6);

    const value = calculator
      .multiply(1);
  
    assert.equal(value, 6);
  });
  
  it('221', () => {
  
    const calculator = new SmartCalculator(8);

    const value = calculator
      .add(53)
      .pow(1)
      .add(22)
      .subtract(42)
      .multiply(1)
      .multiply(2);
  
    assert.equal(value, -1);
  });
  
  it('222', () => {
  
    const calculator = new SmartCalculator(6);

    const value = calculator
      .multiply(2)
      .pow(1)
      .pow(1)
      .subtract(99)
      .subtract(93)
      .pow(1);
  
    assert.equal(value, -180);
  });
  
  it('223', () => {
  
    const calculator = new SmartCalculator(1);

    const value = calculator
      .pow(2);
  
    assert.equal(value, 1);
  });
  
  it('224', () => {
  
    const calculator = new SmartCalculator(2);

    const value = calculator
      .pow(1)
      .pow(1)
      .pow(1)
      .subtract(93)
      .multiply(2)
      .multiply(2)
      .add(90)
      .subtract(13);
  
    assert.equal(value, -293);
  });
  
  it('225', () => {
  
    const calculator = new SmartCalculator(7);

    const value = calculator
      .multiply(1)
      .pow(1)
      .pow(1)
      .pow(2)
      .add(65)
      .pow(1);
  
    assert.equal(value, 72);
  });
  
  it('226', () => {
  
    const calculator = new SmartCalculator(8);

    const value = calculator
      .pow(2)
      .add(93)
      .subtract(89)
      .multiply(2)
      .pow(2)
      .multiply(2)
      .multiply(2)
      .multiply(2)
      .multiply(1)
      .pow(2);
  
    assert.equal(value, -2691);
  });
  
  it('227', () => {
  
    const calculator = new SmartCalculator(3);

    const value = calculator
      .subtract(47)
      .subtract(18)
      .multiply(1)
      .pow(1);
  
    assert.equal(value, -62);
  });
  
  it('228', () => {
  
    const calculator = new SmartCalculator(1);

    const value = calculator
      .add(40)
      .pow(2)
      .multiply(2)
      .multiply(1)
      .subtract(37)
      .add(54)
      .pow(2)
      .multiply(2)
      .add(16);
  
    assert.equal(value, 9012);
  });
  
  it('229', () => {
  
    const calculator = new SmartCalculator(3);

    const value = calculator
      .pow(2)
      .add(49)
      .add(55)
      .subtract(80)
      .multiply(2)
      .pow(1)
      .pow(1)
      .subtract(98)
      .subtract(90)
      .multiply(1);
  
    assert.equal(value, -235);
  });
  
  it('230', () => {
  
    const calculator = new SmartCalculator(3);

    const value = calculator
      .multiply(2)
      .multiply(2)
      .pow(2)
      .add(42)
      .subtract(59)
      .multiply(1)
      .pow(1)
      .subtract(22)
      .pow(1);
  
    assert.equal(value, -15);
  });
  
  it('231', () => {
  
    const calculator = new SmartCalculator(8);

    const value = calculator
      .pow(1)
      .multiply(1)
      .add(92)
      .multiply(2)
      .subtract(34)
      .multiply(2)
      .subtract(71);
  
    assert.equal(value, 53);
  });
  
  it('232', () => {
  
    const calculator = new SmartCalculator(3);

    const value = calculator
      .subtract(100)
      .add(37)
      .multiply(2)
      .subtract(65)
      .multiply(2)
      .subtract(55)
      .pow(1)
      .add(35);
  
    assert.equal(value, -173);
  });
  
  it('233', () => {
  
    const calculator = new SmartCalculator(1);

    const value = calculator
      .multiply(2)
      .pow(2)
      .subtract(6)
      .multiply(1)
      .add(85)
      .multiply(1)
      .multiply(1);
  
    assert.equal(value, 83);
  });
  
  it('234', () => {
  
    const calculator = new SmartCalculator(4);

    const value = calculator
      .subtract(24)
      .pow(2)
      .subtract(59)
      .subtract(89)
      .multiply(1);
  
    assert.equal(value, -720);
  });
  
  it('235', () => {
  
    const calculator = new SmartCalculator(1);

    const value = calculator
      .subtract(34)
      .subtract(64)
      .multiply(2)
      .subtract(49)
      .subtract(18)
      .subtract(88)
      .pow(1)
      .add(91);
  
    assert.equal(value, -225);
  });
  
  it('236', () => {
  
    const calculator = new SmartCalculator(6);

    const value = calculator
      .pow(1)
      .add(52)
      .subtract(8)
      .subtract(33)
      .multiply(1)
      .pow(1);
  
    assert.equal(value, 17);
  });
  
  it('237', () => {
  
    const calculator = new SmartCalculator(3);

    const value = calculator
      .pow(1);
  
    assert.equal(value, 3);
  });
  
  it('238', () => {
  
    const calculator = new SmartCalculator(5);

    const value = calculator
      .add(4);
  
    assert.equal(value, 9);
  });
  
  it('239', () => {
  
    const calculator = new SmartCalculator(8);

    const value = calculator
      .multiply(2)
      .multiply(1)
      .subtract(67)
      .add(6)
      .add(11)
      .pow(2);
  
    assert.equal(value, 76);
  });
  
  it('240', () => {
  
    const calculator = new SmartCalculator(10);

    const value = calculator
      .pow(1)
      .subtract(79)
      .multiply(2)
      .subtract(99)
      .pow(2)
      .add(95)
      .add(79)
      .multiply(2)
      .add(70)
      .multiply(2);
  
    assert.equal(value, -9556);
  });
  
  it('241', () => {
  
    const calculator = new SmartCalculator(4);

    const value = calculator
      .add(55)
      .pow(2);
  
    assert.equal(value, 3029);
  });
  
  it('242', () => {
  
    const calculator = new SmartCalculator(9);

    const value = calculator
      .pow(1)
      .multiply(1);
  
    assert.equal(value, 9);
  });
  
  it('243', () => {
  
    const calculator = new SmartCalculator(9);

    const value = calculator
      .add(71)
      .add(2)
      .add(63)
      .pow(1)
      .pow(1)
      .pow(2)
      .multiply(2)
      .add(24);
  
    assert.equal(value, 232);
  });
  
  it('244', () => {
  
    const calculator = new SmartCalculator(8);

    const value = calculator
      .subtract(47)
      .pow(2)
      .add(31)
      .pow(2)
      .subtract(69)
      .subtract(49)
      .multiply(1)
      .multiply(1)
      .add(34)
      .pow(2);
  
    assert.equal(value, -202);
  });
  
  it('245', () => {
  
    const calculator = new SmartCalculator(2);

    const value = calculator
      .add(86)
      .add(37)
      .add(78)
      .subtract(89)
      .subtract(33)
      .pow(1)
      .add(34);
  
    assert.equal(value, 115);
  });
  
  it('246', () => {
  
    const calculator = new SmartCalculator(1);

    const value = calculator
      .subtract(6)
      .pow(2)
      .pow(1)
      .multiply(1)
      .subtract(6)
      .subtract(79)
      .multiply(1)
      .add(9)
      .multiply(2)
      .add(24);
  
    assert.equal(value, -78);
  });
  
  it('247', () => {
  
    const calculator = new SmartCalculator(5);

    const value = calculator
      .subtract(87)
      .pow(1)
      .subtract(26)
      .pow(1)
      .pow(2);
  
    assert.equal(value, -108);
  });
  
  it('248', () => {
  
    const calculator = new SmartCalculator(2);

    const value = calculator
      .add(35)
      .pow(2)
      .subtract(28)
      .add(39)
      .pow(2)
      .add(83)
      .add(11)
      .pow(1);
  
    assert.equal(value, 2814);
  });
  
  it('249', () => {
  
    const calculator = new SmartCalculator(6);

    const value = calculator
      .multiply(2)
      .pow(2)
      .add(9)
      .subtract(70)
      .pow(2);
  
    assert.equal(value, -4867);
  });
  
  it('250', () => {
  
    const calculator = new SmartCalculator(2);

    const value = calculator
      .pow(1)
      .add(95)
      .pow(2)
      .multiply(2)
      .multiply(1);
  
    assert.equal(value, 18052);
  });
  
  it('251', () => {
  
    const calculator = new SmartCalculator(7);

    const value = calculator
      .add(3)
      .multiply(1)
      .add(66)
      .multiply(1)
      .add(7);
  
    assert.equal(value, 83);
  });
  
  it('252', () => {
  
    const calculator = new SmartCalculator(1);

    const value = calculator
      .pow(2)
      .add(2)
      .add(10)
      .pow(1)
      .pow(1)
      .subtract(94)
      .pow(2);
  
    assert.equal(value, -8823);
  });
  
  it('253', () => {
  
    const calculator = new SmartCalculator(6);

    const value = calculator
      .pow(1)
      .add(32)
      .add(64)
      .add(29)
      .multiply(2);
  
    assert.equal(value, 160);
  });
  
  it('254', () => {
  
    const calculator = new SmartCalculator(8);

    const value = calculator
      .subtract(17)
      .pow(2)
      .pow(1)
      .subtract(30)
      .subtract(4);
  
    assert.equal(value, -315);
  });
  
  it('255', () => {
  
    const calculator = new SmartCalculator(3);

    const value = calculator
      .subtract(25)
      .multiply(2)
      .subtract(32)
      .pow(2)
      .multiply(2)
      .pow(2)
      .add(21);
  
    assert.equal(value, -4122);
  });
  
  it('256', () => {
  
    const calculator = new SmartCalculator(5);

    const value = calculator
      .subtract(22)
      .pow(2)
      .multiply(1)
      .add(65)
      .add(85)
      .multiply(2)
      .add(98)
      .multiply(1)
      .add(77)
      .pow(2);
  
    assert.equal(value, 5783);
  });
  
  it('257', () => {
  
    const calculator = new SmartCalculator(2);

    const value = calculator
      .multiply(1)
      .add(67)
      .subtract(5)
      .add(77)
      .multiply(1)
      .subtract(11)
      .pow(2);
  
    assert.equal(value, 20);
  });
  
  it('258', () => {
  
    const calculator = new SmartCalculator(6);

    const value = calculator
      .add(34)
      .pow(1)
      .pow(2);
  
    assert.equal(value, 40);
  });
  
  it('259', () => {
  
    const calculator = new SmartCalculator(5);

    const value = calculator
      .pow(1)
      .pow(2)
      .add(37)
      .subtract(58)
      .multiply(1)
      .pow(2)
      .add(30)
      .subtract(38)
      .multiply(1)
      .subtract(93);
  
    assert.equal(value, -117);
  });
  
  it('260', () => {
  
    const calculator = new SmartCalculator(8);

    const value = calculator
      .subtract(67)
      .subtract(88)
      .subtract(28)
      .pow(2)
      .multiply(1)
      .multiply(2);
  
    assert.equal(value, -1715);
  });
  
  it('261', () => {
  
    const calculator = new SmartCalculator(10);

    const value = calculator
      .subtract(70)
      .add(23);
  
    assert.equal(value, -37);
  });
  
  it('262', () => {
  
    const calculator = new SmartCalculator(1);

    const value = calculator
      .add(86)
      .pow(2);
  
    assert.equal(value, 7397);
  });
  
  it('263', () => {
  
    const calculator = new SmartCalculator(3);

    const value = calculator
      .multiply(2)
      .subtract(84)
      .add(93)
      .multiply(1)
      .multiply(1)
      .subtract(28);
  
    assert.equal(value, -13);
  });
  
  it('264', () => {
  
    const calculator = new SmartCalculator(4);

    const value = calculator
      .add(49)
      .multiply(2)
      .pow(1)
      .pow(2)
      .pow(2)
      .subtract(48)
      .subtract(1)
      .pow(1);
  
    assert.equal(value, 53);
  });
  
  it('265', () => {
  
    const calculator = new SmartCalculator(9);

    const value = calculator
      .pow(2)
      .add(58);
  
    assert.equal(value, 139);
  });
  
  it('267', () => {
  
    const calculator = new SmartCalculator(4);

    const value = calculator
      .pow(1)
      .add(75)
      .add(5);
  
    assert.equal(value, 84);
  });
  
  it('269', () => {
  
    const calculator = new SmartCalculator(1);

    const value = calculator
      .multiply(2)
      .pow(2)
      .pow(2)
      .add(28)
      .subtract(86)
      .subtract(23)
      .add(35)
      .pow(2)
      .add(13);
  
    assert.equal(value, 1173);
  });
  
  it('270', () => {
  
    const calculator = new SmartCalculator(7);

    const value = calculator
      .pow(1)
      .subtract(25)
      .subtract(40)
      .pow(1)
      .pow(2)
      .pow(2)
      .multiply(1)
      .subtract(9);
  
    assert.equal(value, -67);
  });
  
  it('271', () => {
  
    const calculator = new SmartCalculator(9);

    const value = calculator
      .pow(2)
      .subtract(3);
  
    assert.equal(value, 78);
  });
  
  it('272', () => {
  
    const calculator = new SmartCalculator(1);

    const value = calculator
      .pow(1)
      .subtract(97)
      .add(46)
      .pow(1)
      .subtract(5)
      .add(5);
  
    assert.equal(value, -50);
  });
  
  it('273', () => {
  
    const calculator = new SmartCalculator(8);

    const value = calculator
      .pow(2)
      .add(4)
      .add(15)
      .add(29)
      .add(79)
      .add(8)
      .add(34)
      .add(9)
      .multiply(2);
  
    assert.equal(value, 251);
  });
  
  it('274', () => {
  
    const calculator = new SmartCalculator(2);

    const value = calculator
      .add(44)
      .subtract(22);
  
    assert.equal(value, 24);
  });
  
  it('275', () => {
  
    const calculator = new SmartCalculator(8);

    const value = calculator
      .multiply(1)
      .pow(1)
      .subtract(60)
      .pow(1)
      .pow(2)
      .add(50);
  
    assert.equal(value, -2);
  });
  
  it('276', () => {
  
    const calculator = new SmartCalculator(7);

    const value = calculator
      .pow(2)
      .multiply(1)
      .multiply(1)
      .pow(1)
      .pow(2)
      .add(48)
      .multiply(1)
      .subtract(8)
      .add(26)
      .subtract(93);
  
    assert.equal(value, 22);
  });
  
  it('277', () => {
  
    const calculator = new SmartCalculator(8);

    const value = calculator
      .pow(1)
      .pow(2)
      .pow(1);
  
    assert.equal(value, 8);
  });
  
  it('278', () => {
  
    const calculator = new SmartCalculator(5);

    const value = calculator
      .subtract(43)
      .add(33);
  
    assert.equal(value, -5);
  });
  
  it('279', () => {
  
    const calculator = new SmartCalculator(2);

    const value = calculator
      .add(80)
      .add(31);
  
    assert.equal(value, 113);
  });
  
  it('280', () => {
  
    const calculator = new SmartCalculator(7);

    const value = calculator
      .add(61)
      .pow(1)
      .pow(1)
      .add(40)
      .pow(1)
      .pow(1)
      .add(54)
      .pow(1);
  
    assert.equal(value, 162);
  });
  
  it('281', () => {
  
    const calculator = new SmartCalculator(3);

    const value = calculator
      .add(50)
      .pow(2);
  
    assert.equal(value, 2503);
  });
  
  it('282', () => {
  
    const calculator = new SmartCalculator(6);

    const value = calculator
      .pow(1)
      .subtract(96)
      .add(51)
      .multiply(2)
      .subtract(81)
      .multiply(2)
      .add(42)
      .multiply(2);
  
    assert.equal(value, -66);
  });
  
  it('283', () => {
  
    const calculator = new SmartCalculator(4);

    const value = calculator
      .subtract(30)
      .subtract(30)
      .add(98)
      .subtract(2)
      .subtract(80)
      .pow(1)
      .subtract(22)
      .multiply(1);
  
    assert.equal(value, -62);
  });
  
  it('284', () => {
  
    const calculator = new SmartCalculator(1);

    const value = calculator
      .multiply(1)
      .pow(1)
      .add(31)
      .multiply(1)
      .subtract(51)
      .subtract(33)
      .multiply(2)
      .subtract(6)
      .multiply(2);
  
    assert.equal(value, -97);
  });
  
  it('285', () => {
  
    const calculator = new SmartCalculator(1);

    const value = calculator
      .add(90)
      .subtract(38)
      .add(68)
      .multiply(1);
  
    assert.equal(value, 121);
  });
  
  it('286', () => {
  
    const calculator = new SmartCalculator(3);

    const value = calculator
      .pow(1)
      .subtract(21)
      .multiply(2);
  
    assert.equal(value, -39);
  });
  
  it('287', () => {
  
    const calculator = new SmartCalculator(3);

    const value = calculator
      .subtract(6);
  
    assert.equal(value, -3);
  });
  
  it('288', () => {
  
    const calculator = new SmartCalculator(5);

    const value = calculator
      .pow(1)
      .multiply(1)
      .multiply(1)
      .multiply(1)
      .pow(2)
      .pow(1)
      .subtract(67)
      .multiply(1);
  
    assert.equal(value, -62);
  });
  
  it('289', () => {
  
    const calculator = new SmartCalculator(6);

    const value = calculator
      .subtract(95)
      .add(58)
      .add(12)
      .pow(1)
      .subtract(14)
      .subtract(77)
      .add(87)
      .add(89)
      .add(27)
      .add(52);
  
    assert.equal(value, 145);
  });
  
  it('290', () => {
  
    const calculator = new SmartCalculator(4);

    const value = calculator
      .pow(2)
      .multiply(2)
      .multiply(1)
      .add(87)
      .multiply(1)
      .subtract(41)
      .add(26)
      .add(3)
      .subtract(60);
  
    assert.equal(value, 47);
  });
  
  it('291', () => {
  
    const calculator = new SmartCalculator(4);

    const value = calculator
      .add(9)
      .pow(2)
      .multiply(1)
      .pow(1)
      .add(58)
      .multiply(1)
      .subtract(54);
  
    assert.equal(value, 89);
  });
  
  it('292', () => {
  
    const calculator = new SmartCalculator(4);

    const value = calculator
      .add(61)
      .add(51)
      .pow(2)
      .add(82)
      .pow(2)
      .add(60)
      .pow(2)
      .pow(1)
      .subtract(25)
      .pow(1);
  
    assert.equal(value, 12965);
  });
  
  it('293', () => {
  
    const calculator = new SmartCalculator(4);

    const value = calculator
      .subtract(54)
      .add(72)
      .multiply(2);
  
    assert.equal(value, 94);
  });
  
  it('294', () => {
  
    const calculator = new SmartCalculator(4);

    const value = calculator
      .add(53)
      .subtract(74)
      .pow(1)
      .pow(2);
  
    assert.equal(value, -17);
  });
  
  it('295', () => {
  
    const calculator = new SmartCalculator(9);

    const value = calculator
      .pow(1)
      .multiply(1)
      .subtract(80)
      .multiply(2);
  
    assert.equal(value, -151);
  });
  
  it('296', () => {
  
    const calculator = new SmartCalculator(5);

    const value = calculator
      .add(57)
      .add(49);
  
    assert.equal(value, 111);
  });
  
  it('297', () => {
  
    const calculator = new SmartCalculator(5);

    const value = calculator
      .multiply(2)
      .add(92)
      .add(81)
      .subtract(71);
  
    assert.equal(value, 112);
  });
  
  it('298', () => {
  
    const calculator = new SmartCalculator(3);

    const value = calculator
      .multiply(2)
      .subtract(60)
      .pow(2);
  
    assert.equal(value, -3594);
  });
  
  it('299', () => {
  
    const calculator = new SmartCalculator(2);

    const value = calculator
      .subtract(28)
      .add(41)
      .multiply(2)
      .pow(2)
      .add(48)
      .add(15)
      .add(75);
  
    assert.equal(value, 276);
  });
  
  it('300', () => {
  
    const calculator = new SmartCalculator(9);

    const value = calculator
      .multiply(2)
      .pow(2)
      .multiply(1);
  
    assert.equal(value, 36);
  });
  
  it('301', () => {
  
    const calculator = new SmartCalculator(5);

    const value = calculator
      .multiply(2)
      .pow(2);
  
    assert.equal(value, 20);
  });
  
  it('302', () => {
  
    const calculator = new SmartCalculator(4);

    const value = calculator
      .pow(1)
      .pow(1);
  
    assert.equal(value, 4);
  });
  
  it('303', () => {
  
    const calculator = new SmartCalculator(9);

    const value = calculator
      .subtract(43)
      .add(21)
      .subtract(36)
      .subtract(6)
      .pow(1)
      .multiply(1)
      .subtract(74);
  
    assert.equal(value, -129);
  });
  
  it('304', () => {
  
    const calculator = new SmartCalculator(1);

    const value = calculator
      .subtract(30)
      .add(59)
      .add(42);
  
    assert.equal(value, 72);
  });
  
  it('305', () => {
  
    const calculator = new SmartCalculator(8);

    const value = calculator
      .subtract(84)
      .subtract(38)
      .pow(1)
      .add(38)
      .subtract(10)
      .add(27)
      .add(36)
      .add(70)
      .subtract(65)
      .add(92);
  
    assert.equal(value, 74);
  });
  
  it('306', () => {
  
    const calculator = new SmartCalculator(7);

    const value = calculator
      .multiply(1)
      .multiply(2)
      .multiply(1)
      .add(52);
  
    assert.equal(value, 66);
  });
});