"use strict";

/*
const obj = {
  b: {
    c: 1
  }
};

И есть путь в виде строки

const path = 'b.c';

Необходимо написать функцию
const result = (obj, path) => {
  ...
}

Которая принимает объект и путь и возвращает значение последнего ключа в пути.
Для объекта obj и path в переменной result должно быть 1.
*/

const obj = {
    b: {
      c: 1
    },
};
  
const path = 'b.c';

// 1 вариант решения
let arrPath = path.split(".");

const result = function (obj, arrPath) {
  // пришлось отказаться от идеи цикла через for... of, ибо
  // второй итерацией мы получим undefined.
  // Как раз об этом Вы спрашивали на собеседовании, но я не уловил суть вопроса, думал о другом.
  // Ставлю ограничение "i", чтобы мы получили только первый элемент массива
        for (let i = 0; i < 1; i++) {
            // и еще одно решение, о котором Вы намекали - введение новой переменной
            let some = obj[arrPath[i]];

            // а вот теперь реализую как раз то, что крутилось в голове на нашей встрече,
            // а именно - вложенный цикл
            for (let n = 1; n < 2; n++) {
                console.log( some[arrPath[n]] );
            }
    }
};

result(obj, arrPath);


