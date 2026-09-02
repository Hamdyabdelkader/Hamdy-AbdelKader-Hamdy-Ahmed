const URL = "https://jsonplaceholder.typicode.com/posts";

const input = document.getElementById("input");
const addBtn = document.getElementById("addBtn");
const container = document.getElementById("container");


//GET--------------------------------------------------------------------------------------------

const xhr = new XMLHttpRequest();
xhr.open("GET", URL);

xhr.addEventListener("load", () => {

    const posts = JSON.parse(xhr.responseText);
    posts.slice(0, 5).forEach((post) => {
        container.innerHTML += `
            <div id="post-${post.id}">

                <h2>${post.title}</h2>

                <button onclick="editPost(${post.id})">
                    Edit
                </button>

                <button onclick="deletePost(${post.id})">
                    Delete
                </button>

            </div>
        `;
    });
});

xhr.send();

//POST--------------------------------------------------------------------------------------------

addBtn.addEventListener("click", () => {

    const xhr = new XMLHttpRequest();
    xhr.open("POST", URL, true);
    xhr.setRequestHeader("Content-Type","application/json; charset=UTF-8");

    xhr.addEventListener("load", () => {
        console.log("[load] status =", xhr.status);

        if (xhr.status >= 200 && xhr.status < 300) {
            const post = JSON.parse(xhr.responseText);
            console.log("Success! Server response:", post);

            container.innerHTML += `
                <div>
                    <h2 id="post-${post.id}">
                        ${post.title}
                    </h2>
                    <button onclick="editPost(${post.id})">
                        Edit
                    </button>
                    <button onclick="deletePost(${post.id})">
                        Delete
                    </button>
                </div>
            `;
            input.value = "";
        } else {
            console.error("Failed with status:",xhr.status);
            container.innerHTML =
                '<div>Failed to add post.</div>';
        }
    });
    //Network Error--------------------------------------------------------------------------------------------
    xhr.addEventListener("error", () => {
        console.error("[error] Network problem");
        container.innerHTML =
        '<div class="alert alert-danger">Network error.</div>';
    });
    xhr.send(JSON.stringify({title: input.value}));
});



//PUT--------------------------------------------------------------------------------------------

function editPost(id) {
    const newTitle = prompt("Enter new title:");
    
    if (newTitle === null || newTitle === "") {
        return;
    }

    const xhr = new XMLHttpRequest();
    xhr.open("PUT", URL + "/" + id);
   xhr.setRequestHeader("Content-Type", "application/json; charset=UTF-8");

    xhr.addEventListener("load", function () {
        if (xhr.status === 200) {
            const data = JSON.parse(xhr.responseText);
            const title = document.getElementById("post-" + id);
            title.innerText = data.title;
        }
    });
    xhr.send(JSON.stringify({
        title: newTitle
    }));
}

//DELETE--------------------------------------------------------------------------------------------

function deletePost(id) {
    const xhr = new XMLHttpRequest();
    xhr.open("DELETE", URL + "/" + id);

    xhr.addEventListener("load", () => {
        document.getElementById("post-" + id).remove();
    });
    xhr.send();
}