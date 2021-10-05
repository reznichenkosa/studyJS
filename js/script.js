"use strict";

let numberOfFilms;
let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', '');

    while (checkQuestion(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', '');
    }

    personalMovieDB.count = numberOfFilms;
}

function checkQuestion(question) {
    return (question === '' || question === null || isNaN(question)); 
}

function checkAnswerFilms(answerFilm, markFilm) {
    return (answerFilm === null || markFilm === null || answerFilm.length === 0 ||
        answerFilm.length > 50 || markFilm.length === 0);
}

function rememberMyFilms() {

    for (let i = 0; i < numberOfFilms; i++) {

        const answerFilm = prompt('Один из просмотренных фильмов?', '');
        const markFilm = prompt('Во сколько оцените его?', '');
    
        if (checkAnswerFilms(answerFilm, markFilm)) {
            i--;
            continue;
        }
    
        personalMovieDB.movies[answerFilm] = markFilm;
    }
}

function detectPersonalLevel() {

    if (personalMovieDB.count < 10) {
        alert('Просмотрено довольно мало фильмов!');
    } else if (10 <= personalMovieDB.count && personalMovieDB.count < 30) {
        alert('Вы класический зритель!');
    } else if (personalMovieDB.count >= 30) {
        alert('Вы киноман');
    } else {
        alert('Произошла ошибка');
    }
}

function showMyDB() {
    if (personalMovieDB.privat === false) {
        console.log(personalMovieDB);
    }
}

function whiteYourGenres() {
    for (let i = 1; i < 4; i++) {
        const yourGenres = prompt(`Ваш любимы жанр под номером ${i}`, '');
    
        if (yourGenres === '' || yourGenres === null) {
            i--;
            continue;
        }
    
        personalMovieDB.genres.push(yourGenres);
    }
}

start();
rememberMyFilms();
detectPersonalLevel();
whiteYourGenres();
showMyDB();


// *First way with WHILE

// while (numberOfFilms > 0) {

//     const answerFilm = prompt('Один из просмотренных фильмов?', '');
//     const markFilm = prompt('Во сколько оцените его?', '');

//     if (answerFilm == null || markFilm === null || answerFilm.length === 0 ||
//         answerFilm.length > 50 || markFilm.length === 0) {
//         continue;
//     }

//     personalMovieDB.movies[answerFilm] = markFilm;
//     numberOfFilms--;
// }

// *Second way with FOR










