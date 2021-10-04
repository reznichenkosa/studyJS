"use strict";

const numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', '');

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

let answerFilm = prompt('Один из просмотренных фильмов?', '');
let markFilm = prompt('Во сколько оцените его?','');

personalMovieDB.movies[answerFilm] = markFilm;

console.log(personalMovieDB);

