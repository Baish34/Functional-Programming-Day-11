const movies = [
  { id: 1, title: "Movie 1", rating: 4.5 },
  { id: 2, title: "Movie 2", rating: 3.8 },
  { id: 3, title: "Movie 3", rating: 4.2 },
  { id: 4, title: "Movie 4", rating: 3.5 }
]

const movieListContainer = document.querySelector("#moviesList")
const averageRatingContainer = document.querySelector("#averageRating")

const movieList = movies.reduce((acc, curr) => {
  acc.totalRating = acc.totalRating + curr.rating

  const listItem = document.createElement("li")
  listItem.textContent = `${curr.title} - Rating: ${curr.rating}`
  movieListContainer.appendChild(listItem)

  return acc

}, { totalRating: 0 })

const averageRating = movieList.totalRating / movies.length
averageRatingContainer.textContent = averageRating