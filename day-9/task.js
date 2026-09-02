const URL ="https://jsonplaceholder.typicode.com/posts";

const xhr = new XMLHttpRequest();

xhr.open("GET",URL);

xhr.addEventListener("load" , function () {
    console.log("load event fired",xhr.response);
})

xhr.send();