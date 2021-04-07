// Iteration 1: All directors? - Get the array of all directors.

const getAllDirectors = (arr) => 
    [...new Set(arr.map((element) => 
        element.director))];


// OR

// const getAllDirectors = (arr) => [...new Set(arr.map((element) => element.director))];

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?


// function removeDuplicates (arr) {
//     return arr.filter( function( item, index, inputArray ) {
//              return inputArray.indexOf(item) == index;
//       });
//   }

//   removeDuplicates (getAllDirectors(movies))


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?


function howManyMovies(arr) {
  if (arr.length === 0) return 0;
      return arr.filter((element) => {
        return element.director == `Steven Spielberg` && element.genre.includes(`Drama`);
      }).length;
    }

// function howManyMovies(x) {
//     if (x.length === 0) return 0;
//     let SpielbergDrama = x.filter(element => element.director.includes('Steven Spielberg') && element.genre.includes('Drama'));
//     return SpielbergDrama.length
// }
    


// Iteration 3: All rates average - Get the average of all rates with 2 decimals


function ratesAverage(movies) {
	if (movies.length === 0) return 0;
	console.log(movies);
	let sum = movies.reduce((acc, value) => {
		console.log(acc, value);
		return acc + (value.rate || 0);
		// return value.rate ? acc + value.rate : acc + 0;
		// return value.rate == undefined || value.rate == '' ? acc + 0 : acc + value.rate;
	}, 0);
	console.log(sum);
	return Number((sum / movies.length).toFixed(2));
}



// Iteration 4: Drama movies - Get the average of Drama Movies


function dramaMoviesRate(arr) {
	const dramaMovies = arr.filter((ele) => {
		return ele.genre.includes(`Drama`);
	});
	return ratesAverage(dramaMovies);
}



// Iteration 5: Ordering by year - Order by year, ascending (in growing order)


function orderByYear(array) {
	let copy = [...array];

	copy.sort((a, b) => {
		// if (a.year === b.year) {
		// 	if (a.title < b.title) {
		// 		return -1
		// 	} return 1
		// }
		return (a.year - b.year) || (a.title.localeCompare(b.title))
	})
	return copy
}



// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles



function orderAlphabetically(arr) {
	let newArr = [...arr];
	newArr.sort(function(a,b){
		return (a.title.localeCompare(b.title))
		
	})
	console.log(newArr)

	let firstTwenty = newArr.slice(0,20).map((a  )=>{
		console.log(a)
		return a.title
		
	})
	return	firstTwenty;
}



// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
