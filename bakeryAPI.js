//Select input value element
//Select container elements (name, website, location)
const inputValue = document.querySelector("#input-search");
const nameContainer = document.querySelector('.main__profile-name');
const websiteContainer = document.querySelector('.main__profile-website');
const locationContainer = document.querySelector('.main__profile-location');

//Fetch bakery data using the async and await method
//fetchBakeries function accepts a parameter
const fetchBakeries = async(city) => {
  const api_call = await fetch(`https://my-bakery-api.herokuapp.com/bakeries/${city}`);
  const data = await api_call.json();
  return { data }
};

//showData function uses the fetchBakeries function to fetch data
//the argument used in fetchBakeries is the inputValue variable
//inputValue variable is the input field element retrieved by querySelector
//inputValue.value is the current value in the input field
//use a promise .then method to get a response back
//write html inside the containers by using the ES6 string literal method
const showData = () => {
  fetchBakeries(inputValue.value).then((res) => {
    console.log(res);
    nameContainer.innerHTML = `Name: <span class="main__profile-value">${res.data.name}</span>`;
    websiteContainer.innerHTML = `Website: <span class="main__profile-value">${res.data.website}</span>`;
    locationContainer.innerHTML = `Location: <span class="main__profile-value">${res.data.location}</span>`;
  })
}

//Select search bakeries button
//Add a click event to the button and use the showData function 
const searchBakeriesBtn = document.getElementById("getBakeries")
searchBakeriesBtn.addEventListener("click",  () => {
  showData();
});







