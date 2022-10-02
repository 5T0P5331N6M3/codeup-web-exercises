'use strict';

/* LOADER */
// document.onreadystatechange = function () {
//     if (document.readyState !== "complete") {
//         document.querySelector("body").style.visibility = "hidden";
//         document.querySelector("#loader").style.visibility = "visible";
//     } else {
//         setTimeout(() => {
//             document.querySelector("#loader").style.display = "none";
//             document.querySelector("body").style.visibility = "visible";}, 1000);
//
//     }
// };

/* FETCH GLITCH API */
// function fetchFavoriteMovies() {
//     fetch('https://aluminum-coral-comic.glitch.me/movies')
//         .then(response => {
//             console.log(response);
//             // const data = response.json();
//             if (!response.ok) {
//                 throw Error('ERROR');
//             }
//             return response.json();
//         })
//         .then(data => {
//             console.log(data);
//             const favoriteHTML = data.map(favMovie => {
//                 return `
//                         <!-- Movie Card -->
//                     <div id="favCard" class="card" style="margin: 4rem;">
//                         <div class="fav-card-content">
//                         <h5 class="fav-title">${favMovie.title}</h5>
//                             <div class="fav-body">
//                                 <img class="fav-poster" src="${favMovie.poster}" alt="Movie Title" style="width: 250px; height: 30vh;">
//                                 <p class="fav-director">Director: ${favMovie.director}</p>
//                                 <p class="fav-rated">Rated: ${favMovie.rated}</p>
//                                 <p class="fav-genre">Genre: ${favMovie.genre}</p>
//                                  <p class="fav-rating">Rating: ${favMovie.rating}</p>
//                             </div>
//                             <div class=" card-footer fav-footer">
//                                 <button type="button" id="edit">Edit</button>
//                                 <button type="button" id="delete">Delete</button>
//                             </div>
//                         </div>
//                     </div>
//                 `;
//             })
//                 .join("");
//             // console.log(html);
//             $('#favoriteWatchlist').html(favoriteHTML);
//         });
// }
// fetchFavoriteMovies();

// function fetchFavoriteMovies() {
//     fetch('http://www.omdbapi.com/?apikey=${OMDB_KEY}&\n')
//          .then(response => {
//              console.log(response);
//              // const data = response.json();
//             if (!response.ok) {
//                  throw Error('ERROR');
//              }
//              return response.json();
//          })
//          .then(data => {
//              console.log(data);
//              const favoriteHTML = data.map(favMovie => {
//                  return `
// //                         <!-- Movie Card -->
//                      <div id="favCard" class="card" style="margin: 4rem;">
//                          <div class="fav-card-content">
//                          <h5 class="fav-title">${favMovie.title}</h5>
//                              <div class="fav-body">
//                                  <img class="fav-poster" src="${favMovie.poster}" alt="Movie Title" style="width: 250px; height: 30vh;">
//                                  <p class="fav-director">Director: ${favMovie.director}</p>
//                                  <p class="fav-rated">Rated: ${favMovie.rated}</p>
//                                  <p class="fav-genre">Genre: ${favMovie.genre}</p>
//                                   <p class="fav-rating">Rating: ${favMovie.rating}</p>
//                              </div>
//                              <div class=" card-footer fav-footer">
//                                  <button type="button" id="edit">Edit</button>
//                                  <button type="button" id="delete">Delete</button>
//                              </div>
//                          </div>
//                      </div>
//                  `;
//              })
//                  .join("");
//              // console.log(html);
//              $('#favoriteWatchlist').html(favoriteHTML);
//          });
//  }
//  fetchFavoriteMovies();