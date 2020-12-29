// Challenge 1
console.log(axios);

// Challenge 2 & 3
function displayComments(response) {
    // Challenge 2
    console.log(response); 
    // Challenge 3
    console.log(response.data[0].email);
}

// First step is to define where and how to get our data, then call it via a function (displayComments for this case)
let apiUrl = "https://jsonplaceholder.typicode.com/comments";
axios.get(apiUrl).then(displayComments);