// Challenge 2

function displayComments(response) {
    console.log(response.data[0].email);
}

let apiUrl = "https://jsonplaceholder.typicode.com/comments";
axios.get(apiUrl).then(displayComments);

// Challenge 3
