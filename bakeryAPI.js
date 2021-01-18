//Fetches bakery data by adding functionality to elementId "getUsers"
document.getElementById("getUsers").addEventListener("click", getUsers);

//Callback function to get bakery data
function getUsers(e) {
  e.preventDefault();

  //Fetch bakery data

  fetch("https://my-bakery-api.herokuapp.com/bakeries")
    .then((res) => res.json())
    .then((data) => {
      let output = '<h2 class="mb-4">Bakeries Found</h2>';
      data.forEach(function (bakery) {
        output += `
                            <ul class="list-group mb-3">
                                <li class="list-group-item">Bakery Name: ${bakery.name}</li>
                                <li class="list-group-item">Website: ${bakery.website}</li>
                                <li class="list-group-item">Location: ${bakery.location}</li>
                            </ul>
                        `;
        document.getElementById("output").innerHTML = output;
      });
    });
}
