const citiesList = document.getElementById("total");
const search = document.getElementById("search");
const endpoint =
  "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

const cities = [];

fetch(endpoint)
  .then((response) => response.json())
  .then((data) => {
    cities.push(...data);
  });

function findMAtch(word, cities) {
  return cities.filter((place) => {
    const regex = new RegExp(word, "gi");

    return place.city.match(regex) || place.state.match(regex);
  });
}
function numberCommas(number) {
  return number.toString().replace(/\B(?=(\d{3})*(?!\d))/g, ",");
}
search.addEventListener("keyup", (e) => {
  let found = findMAtch(search.value, cities);

  const html = found
    .map((place) => {
      let regex = new RegExp(search.value, "gi");

      let match = place.city.replace(
        regex,
        `<span class=hl>${search.value}</span>`
      );

      let match2 = place.state.replace(
        regex,
        `<span class=hl>${search.value}</span>`
      );
      return `
        <li>
            <span class="name">${match}, ${match2}</span>
            <span class="population">${numberCommas(place.population)}</span>
        </li>

        `;
    })
    .join("");

  citiesList.innerHTML = html;
});
