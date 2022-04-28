/*
1*:
Преобразовать написанный код в 26-33 пунктах в функцию, 
принимающую на вход возраст.
Пример: const checkAge = function(age) {
Ваши преобразования
}
Вывести в консоль результат работы функции с возрастами 17, 18, 61
*/
let age_2 = 18;
let age_3 = 60;

let checkAge = function (age) {
    if (age < age_2) {
        return `You don't have access cause your age is ${age}, It's less then ${age_2}`;
    } else if (age >= age_2 && age <= age_3) {
        return 'Welcome  !';
    } else if (age > age_3) {
        return 'Keep calm and look Culture channel';
    } else {
        return "Technical work";
    }
}

checkSeventeen = checkAge(17);
console.log(checkSeventeen);
checkEighteen = checkAge(18);
console.log(checkEighteen);
checkSixtyOne = checkAge(61);
console.log(checkSixtyOne);

/*
2*:
Преобразовать задание 1* таким образом, чтобы первым делом 
в функции проверялся тип данных. И если он не Number - 
кидалась ошибка.
*/

let checkAgeOne = function (age) {
    if (typeof age != 'number') {
        return 'Error';
    } else if (age < age_2) {
        return `You don't have access cause your age is ${age}, It's less then ${age_2}`;
    } else if (age >= age_2 && age <= age_3) {
        return 'Welcome  !';
    } else if (age > age_3) {
        return 'Keep calm and look Culture channel';
    } else {
        return "Technical work";
    }
}

console.log(checkAgeOne(17));
console.log(checkAgeOne(18));
console.log(checkAgeOne(61));
console.log(checkAgeOne('q')); 

/*
3**:
Преобразовать 2* таким образом, чтобы значение '2' 
(строка в которой лежит ТОЛЬКО ЦИФРА) пропускалось, 
преобразовываясь в number
*/
let checkAgeTwo = function (age) {
    if (`${+age}` != age && typeof age != 'number') {
        return 'Error';
    } else if (age < age_2) {
        return `You don't have access cause your age is ${age}, It's less then ${age_2}`;
    } else if (age >= age_2 && age <= age_3) {
        return 'Welcome  !';
    } else if (age > age_3) {
        return 'Keep calm and look Culture channel';
    } else {
        return "Technical work";
    }
}

console.log(checkAgeTwo(17));
console.log(checkAgeTwo(18));
console.log(checkAgeTwo(61));
console.log(checkAgeTwo('q'));
console.log(checkAgeTwo('15'));

/*
4***:
Преобразовать задание 3* таким образом, чтобы возраст 
вводится используя функцию prompt в привязанной верстке
*/

let checkAgeThree = function (age) {
    if (`${+age}` != age && typeof age != 'number') {
        return 'Error';
    } else if (age < age_2) {
        return `You don't have access cause your age is ${age}, It's less then ${age_2}`;
    } else if (age >= age_2 && age <= age_3) {
        return 'Welcome  !';
    } else if (age > age_3) {
        return 'Keep calm and look Culture channel';
    } else {
        return "Technical work";
    }
}
let age = prompt('How old are You?');
console.log(checkAgeThree(age))
let textElement = document.getElementById('result');
textElement.innerHTML = checkAgeThree(age);

