//fetch bakery data
let bakeryAPI = fetch('https://my-bakery-api.herokuapp.com/bakeries')
    .then(res => {
        if (res.ok) {
            console.log('Successful')
            return res.json();
        } else {
            console.log("Not successful")
        }
    })
    .then(data => console.log(data))
    .catch(error => console.log('Error'))