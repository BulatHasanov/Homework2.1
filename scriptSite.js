const getmonthNumber = function(n = prompt('Введите номер месяца')) {
    if ((n == 12) || (n > 0) && (n <= 2) ) {
        alert('Сезон Зима');
        console.log('Сезон Зима');
        contin = confirm('Продолжить?');
        if (contin == true) {
            getmonthNumber();
        }
    } else if((n >= 3) && (n <= 5)) {
        alert('Сезон Весна');
        console.log('Сезон Весна');
        contin = confirm('Продолжить?');
        if (contin == true) {
            getmonthNumber();
        }
    } else if((n >= 6) && (n <= 8)) {
        alert('Сезон Лето');
        console.log('Сезон Лето');
        contin = confirm('Продолжить?');
        if (contin == true) {
            getmonthNumber();
        }
    } else if((n >= 9) && (n <= 11)) {
        alert('Сезон Осень');
        console.log('Сезон Осень');
        contin = confirm('Продолжить?');
        if (contin == true) {
            getmonthNumber();
        }
    } else if((n > 12) && (typeof(n) == 'string')) {
        alert('Ввел что-то не то');
        console.log('Ввел что-то не то');
        return getmonthNumber();
    }
}

const rememberWord = function() {
    let task = alert("Запомните слова в следующем списке");
    let words = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
    words = words.sort(() => Math.random() - 0.5);
    alert(words);
    let firstWord = words[0].toLowerCase();
    let secndWord = words[words.length - 1].toLowerCase();

    let firstUserAnswer = prompt("Назовите первое слово из списка");
    let secndUserAnswer = prompt("Назовите второе слово из списка");
    firstUserAnswer = firstUserAnswer.toLowerCase();
    secndUserAnswer = secndUserAnswer.toLowerCase();

    if ((firstUserAnswer == firstWord) && (secndUserAnswer == secndWord)) {
        alert("Оба ответа правильные! Вы молодец!");
        contin = confirm('Продолжить?');
        if (contin == true) {
            rememberWord();
        }
    } else if (((firstUserAnswer == firstWord) && (secndUserAnswer != secndWord)) || ((firstUserAnswer != firstWord) && (secndUserAnswer == secndWord))) {
        alert("Вы были близки к победе!");
        contin = confirm('Продолжить?');
        if (contin == true) {
            rememberWord();
        };
    } else {
        alert("К сожалению, вы ответили неправильно");
        contin = confirm('Продолжить?');
        if (contin == true) {
            rememberWord();
        }; 
    }

}
