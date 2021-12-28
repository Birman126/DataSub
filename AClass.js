class AClass {
    #_numbers=[];
    constructor(n) {
        //проверка что n - это число, если не число то выводить ошибку trowError
        this.#_numbers = new Array(n); //массив из n элементов
        this.#fill();

    }

    get numbers() {return this._numbers}
    #fill() { //метод fill можно вызывать только из класса AClass
        for (let i = 0; i <= _numbers.length; i++) {
            _numbers[i] =
            Math.floor(Math.random() * 100) //случайное число от 0 до 99. Для больших чисел - долгое выполнение
        }
        //заполняет массив Number случайными числамиg
    }

    factorial() {
        function factorialFunction(n) { //функция факториала
            return (n != 1) ? n * factorialFunction(n - 1) : 1;
        }
        return _numbers.map(factorialFunction)// метод преобразования массива создает из массива Numbers массив факториалов
        //метод factorial можно вызывать из класса AClass и его дочерних классов
    }
}

class Class1 extends AClass {

    sort(this._numbers) {
        for (let n = 0; n <= _numbers.length; n++) {

        }
    } //сортировка массива Numbers
}



class Class2 extends AClass {

    sort() { } //сортировка массива Numbers другим способом
}