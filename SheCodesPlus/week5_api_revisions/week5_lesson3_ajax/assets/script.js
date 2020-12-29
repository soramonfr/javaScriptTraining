// Challenge 2

function displayComments(response) {
    console.log(response);
}

let apiUrl = "https://jsonplaceholder.typicode.com/comments";
axios.get(apiUrl).then(displayComments);

// 