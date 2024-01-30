export class Pizza {
  name: string = '';
  constructor(name: string) {
    this.name = name;
  }
  makePizza() {
    return (
      'Замовлення на виготовлення піцци ' +
      this.name +
      ' отримано. Починаємо готувати'
    );
  }
  cookPizza() {
    return 'Піцца готується ...';
  }
  cookedPizza() {
    return 'Піцца ' + this.name + ' вже готова';
  }
}
