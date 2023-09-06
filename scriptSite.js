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
