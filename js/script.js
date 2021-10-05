"use strict";

let numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', '');

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

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

// for (let i = 0; i < numberOfFilms; i++) {

//     const answerFilm = prompt('Один из просмотренных фильмов?', '');
//     const markFilm = prompt('Во сколько оцените его?', '');

//     if (answerFilm === null || markFilm === null || answerFilm.length === 0 ||
//         answerFilm.length > 50 || markFilm.length === 0) {
//         i--;
//         continue;
//     }

//     personalMovieDB.movies[answerFilm] = markFilm;
// }


if (personalMovieDB.count < 10) {
    alert('Просмотрено довольно мало фильмов!');
} else if (10 <= personalMovieDB.count && personalMovieDB.count < 30) {
    alert('Вы класический зритель!');
} else if (personalMovieDB.count >= 30) {
    alert('Вы киноман');
} else {
    alert('Произошла ошибка');
}

console.log(personalMovieDB.count);


