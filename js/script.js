"use strict";

let personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,

    // Добавляет количество просмотренных фильмов

    start: function() {
        let numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', '');

        while (this.checkQuestion(numberOfFilms)) {
            numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', '');
        }

        this.count = numberOfFilms;
    },

    // Добавляет информацию о фильме (название, оценка) в зависимости от количества просмотренных.

    rememberMyFilms: function() {
        for (let i = 0; i < this.count; i++) {

            const answerFilm = prompt('Один из просмотренных фильмов?', '');
            const markFilm = prompt('Во сколько оцените его?', '');
        
            if (this.checkAnswerFilms(answerFilm, markFilm)) {
                i--;
                continue;
            }
        
            this.movies[answerFilm] = markFilm;
        }
    },

    // Выводит на экран "уровень" в соответствии с количеством просмотреннх фильмов 

    detectPersonalLevel: function() {

        if (this.count < 10) {
            alert('Просмотрено довольно мало фильмов!');
        } else if (10 <= this.count && this.count < 30) {
            alert('Вы класический зритель!');
        } else if (this.count >= 30) {
            alert('Вы киноман');
        } else {
            alert('Произошла ошибка');
        }
    },

    // проверяет и выводит в консоль объект, в зависимости от доступа

    showMyDB: function() {

        if (this.privat === false) {
            console.log(personalMovieDB);
        }
    },

    // Добавляет 3 любимых жанра и выводит в консоль их в форматированном виде

    whiteYourGenres: function() {
        for (let i = 1; i < 4; i++) {
            const yourGenres = prompt(`Ваш любимы жанр под номером ${i}`, '');
        
            if (yourGenres === '' || yourGenres === null) {
                i--;
                continue;
            }
        
            this.genres.push(yourGenres);
        }
        this.genres.forEach((item, i) => {
            console.log(`Любимый жанр #${i+1} - это ${item}`);
        });
    },

    // Проверяет условия правильного ввода для метода Start

    checkQuestion: function(question) {
        return (question === 0 || question === null || isNaN(question)); 
    },

    // Проверяет условия правильного ввода для метода rememberMyFilms

    checkAnswerFilms: function(answerFilm, markFilm) {
        return (answerFilm === null || markFilm === null || answerFilm.length === 0 ||
            answerFilm.length > 50 || markFilm.length === 0);
    },

    // Запрещает/разрешает доступ к БД

    toggleVisibleMyDB: function() {
        if (this.privat) {
            this.privat = false;
        } else {
            this.privat = true;
        }
    }
};



