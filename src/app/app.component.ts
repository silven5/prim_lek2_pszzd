import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Pizza } from './class/Pizza';
import { Arrays } from './class/Arrays';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'prim_lek2';
  //Приклад5
  pizza!: Pizza; //Поле не визначено, але обов'язково буде визначено потім
  array: Arrays = new Arrays(10);
  b1: number[] = [];
  b2: number[] = [];
  sumArray = 0;
  dob = 1;
  //Приклад1
  a: any = 'Hello';
  //Приклад 2
  example2() {
    let myTuple: [string, number, boolean];
    myTuple = ['hello', 42, true];
    console.log(myTuple[0]); // виведе 'hello'
    myTuple.push(false); // додає новий елемент типу boolean до Tuple
    console.log(myTuple);
  }
  //Приклад3
  example3() {
    enum Color {
      Red = 1,
      Green = 2,
      Blue = 4,
    }
    let myColor: Color = Color.Green;
    console.log(myColor); // виведе 2
    console.log(Color.Red); // виведе 1
  }
  //Приклад4
  sum(a: number, b: number) {
    return a + b;
  }
  sum1 = function (a: number, b: number) {
    return a + b;
  };
  sum2 = (a: number, b: number) => a + b;
  //Синхроне виготовлення піцци
  sync(namePizza: string) {
    this.pizza = new Pizza(namePizza);
    console.log(this.pizza.makePizza());
    console.log(this.pizza.cookPizza());
    console.log(this.pizza.cookedPizza());
  }
  //Асинхроне виготовлення піцци
  async(namePizza: string) {
    this.pizza = new Pizza(namePizza);
    console.log(this.pizza.makePizza());
    console.log(this.pizza.cookPizza());
    //Функція setTimeout() — це метод JavaScript,
    //  який дозволяє запланувати виконання функції після закінчення певного часу.
    setTimeout(() => console.log(this.pizza.cookedPizza()), 3000);
    console.log('Читаю книгу');
  }
  makeArray() {
    this.b1 = this.array.number1();
    this.b2 = this.array.number2();
    this.sumArray = this.array.sum();
    this.dob = this.array.dob();
  }
  genArray(n: string) {
    let nn = parseInt(n);
    this.array.genArray(nn);
  }
}
