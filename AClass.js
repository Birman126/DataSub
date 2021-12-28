class AClass {
    #_numbers = [];
    constructor(n) {
        if (TypeOf(n) !== "number") { throw new Error("n is NaN"); }//проверка что n - это число, если не число то выводить ошибку trowError
        this.#_numbers = new Array(n); //массив из n элементов
        this.#fill();
    }
    get numbers() { return this._numbers }
    #fill() { //метод fill можно вызывать только из класса AClass
        for (let i = 0; i <= _numbers.length; i++) {
            _numbers[i] =
                Math.floor(Math.random() * 100) //случайное число от 0 до 99. Для больших чисел - долгое выполнение
        }
        //геттер заполняет массив Number случайными числами
    }
    factorial() {
        function factorialFunction(n) { //функция факториала
            return (n != 1) ? n * factorialFunction(n - 1) : 1;
        }
        return #_numbers.map(factorialFunction)// метод преобразования массива создает из массива Numbers массив факториалов
        //метод factorial можно вызывать из класса AClass и его дочерних классов
    }
}
class Class1 extends AClass {
    sort(#_numbers) {
        let acc = Numbers[0];
        let sorted = []
        for (let n = 1; n <= #_numbers.length - 1; n++) {
            for (let j = 1; j <= #_numbers.length - 1; j++)
                if (Numbers[n] < acc) { acc = Numbers[n] }
            sorted.push(acc);
        } //сортировка массива Numbers
    }
class Class2 extends AClass {
    sort() { return #_numbers.sort } //сортировка массива Numbers стандартным способом
}