const form = document.getElementById("form")
const inputText = document.getElementById("inputText")
const msg = document.getElementById("msg")
let posts = document.getElementById("posts");

let setData = {}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    validationTextArea()
})

validationTextArea = () => {

    if (inputText.value !== "") {
        addData()
    } else {
        msg.innerHTML =  "Filed is Empty";
        console.log(" Filed is Empty ")
    }
}

addData = () => {
    setData["inputText"] = inputText.value;
    createPost()
}

// create data card 

let createPost = () => {
    posts.innerHTML += `
    <div>
      <p>${setData.inputText}</p>
      <span class="options">
        <i onClick="editPost(this)" class="fas fa-edit"></i>
        <i onClick="deletePost(this)" class="fas fa-trash-alt"></i>
      </span>
    </div>
    `;
    inputText.value = "";
};

// delete post

let deletePost = (e) => {
    e.parentElement.parentElement.remove();
};

// edit post

let editPost = (e) => {
    inputText.value = e.parentElement.previousElementSibling.innerHTML;
    e.parentElement.parentElement.remove();
};  