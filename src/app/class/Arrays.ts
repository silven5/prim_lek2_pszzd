export class Arrays {
  a: number[] = [];
  //Генерація випадкових чисел
  getRandom(min: number, max: number) {
    return Math.floor(Math.random() * (max - min) + min);
  }
  genArray(n: number) {
    this.a = [];
    for (let i = 0; i < n; i++) {
      this.a.push(this.getRandom(-10, 10));
    }
  }
  //Конструктор
  constructor(n: number) {
    this.genArray(n);
  }
  //Розрахунок суми
  sum(): number {
    let s = 0;
    for (let number of this.a) {
      s += number;
    }
    return s;
  }
  //Перетворення масиву додатні  замінити їх коренями, а від’ємні квадратами
  number1(): number[] {
    return this.a.map((a) => (a > 0 ? Math.sqrt(a) : a * a));
  }
  //Перетворення масиву Видалити з масиву всі непарні елементи
  number2(): number[] {
    return this.a.filter((a) => a % 2 == 0);
  }
  //Обрахунок добутку
  dob(): number {
    return this.a.reduce((a, b) => a * b);
  }
}
