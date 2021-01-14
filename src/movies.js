// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(moviesArr){
    let directorsArr = moviesArr.map((movie) => movie.director)
    console.log(moviesArr.length)
    return directorsArr;
}
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(moviesArr){
     let directorsArr = moviesArr.filter((movie) =>{
          
        if(movie.director == "Steven Spielberg" && movie.genre.includes("Drama") ){
            return true;
        }
     })
    console.log(moviesArr.length)
    return directorsArr.length;
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals



       function ratesAverage(movies) {
        const nbMovie = movies.length;
        const sumRates = movies.reduce((acc, val) => {
        return acc + Number(val.rate)
    },0);
        if (movies == 0) {
            return 0;
          }
        return Number(Number(sumRates / nbMovie).toFixed(2));
      }
      

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(movies) {
    const dramaMovies = movies.filter(({ genre }) => genre.includes("Drama"));

    return ratesAverage(dramaMovies);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
    let releaseMovieYear = movies.sort(function (movie1, movie2) {
            if (movie1.year > movie2.year) {
                return 1;
            } else if (movie1.year < movie2.year) {
                return -1;
            } else
            return movie1.title >= movie2.title ? 1 : -1;
        });
  }
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
    const orderedMovies = movies.sort((movie1, movie2) => {
            if (movie1.title >= movie2.title) {
                return 1;
            }
            return -1;
        });
        let cloneMovies = JSON.parse(JSON.stringify(movies))
    
    return orderedMovies
    .map(({ title }) => title)
    .filter((movie, index) => index < 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
const data = require("./data/movies");

function convertStringTimeToMinutes(stringTime) {
  const splitPattern = new RegExp(/(\d*h)?\s?(\d*min)?/gim);
  const timeParts = splitPattern.exec(stringTime);

  const hours = timeParts[1] ? Number(timeParts[1].replace("h", "")) : 0;
  const minutes = timeParts[2] ? Number(timeParts[2].replace("min", "")) : 0;

  return hours * 60 + minutes;
}
function turnHoursToMinutes(movies) {
    return movies.map((film) => ({
      ...film,
      duration: convertStringTimeToMinutes(film.duration)
    }));
  }
// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
function bestYearAvg(movies) {
    return Object.keys(ratesByYear).reduce((avgByYear, year) => {
      const rateSumForYear = ratesByYear[year].reduce(
        (rateSumByYear, movieRate) => rateSumByYear + movieRate,
        0);
         const avgForYear = rateSumForYear / ratesByYear[year].length;
  
      return {
        ...avgByYear,
        [year]: avgForYear
      };
    },);
  }
  