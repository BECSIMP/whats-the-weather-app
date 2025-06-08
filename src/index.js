function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input");
  let cityElement = document.querySelector("#main-weather-city");
  cityElement.innerHTML = searchInput.value;
}

let searchFormElement = document.querySelector("#location-search");
searchFormElement.addEventListener("submit", handleSearchSubmit);
