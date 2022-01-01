// Задание 1
// Создать абстрактный класс “AClass” у которого будет свойство “Numbers” типа Array,
// который будет содержать n натуральных чисел. Также AClass должен иметь метод “fill”, который
// заполняет массив Numbers случайными числами; метод “factorial”, который возвращает
// массив факториалов из массива Numbers; и абстрактный метод “sort”. Конструктор принимает
// один параметр “n” и вызывает метод “fill”. Метод “fill” можно вызывать только из методов класса
// “AClass”. Метод “factorial” может вызываться из класса AClass и из дочерних классов.
// Реализовать два дочерних класса “Class1” и “Class2” с методом “sort” который сортирует
// массив Numbers, а затем выдает массив факториалов. Способы сортировки в классах “Class1” и “Class2” должны различаться.

class AClass {
    numbers = [];
    constructor(n) {
        if (typeof (n) !== "number") { throw new Error("n is NaN"); }//проверка что n - это число, если не число то выводить ошибку trowError
        this.numbers = new Array(n); //массив из n элементов
        this.#fill();
    }



    #fill() { //метод fill можно вызывать только из класса AClass
        for (let i = 0; i <= this.numbers.length - 1; i++) {
            this.numbers[i] =
                Math.floor(Math.random() * 100) //случайное число от 0 до 99. Для больших чисел - долгое выполнение
        }
        //метод fill заполняет массив Number случайными числами
    }

    factorial() {
        function factorialFunction(n) { //функция факториала
            return (n != 1) ? n * factorialFunction(n - 1) : 1;
        }
        return this.numbers.map(factorialFunction)// метод преобразования массива создает из массива Numbers массив факториалов
        //метод factorial можно вызывать из класса AClass и его дочерних классов
    }
}
class Class1 extends AClass {
    sort() {
        var copy = [...this.numbers];
        this.numbers.forEach(() => {
            for (let j = 0; j < this.numbers.length - 1; j++) {
                const a = copy[j];
                const b = copy[j + 1];

                if (a < b) {
                    continue;
                }

                var max = a;
                copy[j] = b;
                copy[j + 1] = max;
            }
        })
        this.numbers = copy;
        return this.factorial();
    }

}

class Class2 extends AClass { // Сортировка массива вторым способом
    sort() {
        for (let i = 1, l = this.numbers.length; i < l; i++) {
            const mem = this.numbers[i];
            let j = i;
            while (j > 0 && this.numbers[j - 1] > mem) {
                this.numbers[j] = this.numbers[j - 1];
                j--;
            }
            this.numbers[j] = mem;
        }
        return this.factorial();
    };
}

console.log(new Class1(s).sort());

