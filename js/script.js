"use strict";
let mainDiv = document.getElementById('main');
let overlay = document.getElementById('overlay');
let body = document.getElementById ('body');
let button = document.querySelector('.fa-rectangle-xmark')
let plus = document.getElementById('plus')
let formOverlay = document.getElementById('overlayform')
let inputTitle = document.getElementById('titlefield')
let bodyinputTitle = document.getElementById('bodyfield')
let form = document.getElementById('form')
function ajax (url, callback){
    let requist = new XMLHttpRequest();
    requist.open('GET', url )
    requist.addEventListener('load', function(){
        let mosuliData = JSON.parse(this.responseText);
        callback(mosuliData);
    })
    requist.send();
}

// მთავარი ფუნქცია
ajax('https://jsonplaceholder.typicode.com/posts', function(mosuliData){
    mosuliData.forEach(element => {
        newPost(element);
        
    });

});


function newPost(element){
    let Div = document.createElement('div');
    Div.classList.add('post')
    Div.setAttribute('data-id', element.id);
    let h4 = document.createElement('h4')
    h4.innerText = element.id;
    let h2 = document.createElement('h2')
    h2.textContent = element.title;
    let deleteButton = document.createElement('i')
    deleteButton.classList.add('fa-solid');
    deleteButton.classList.add('fa-trash');
    deleteButton.setAttribute("data-id", element.id);
    Div.appendChild(h4);
    Div.appendChild(h2);
    mainDiv.appendChild(Div);
    Div.appendChild(deleteButton)

Div.addEventListener('click', function(event){
    let id = event.currentTarget.getAttribute("data-id");
    overlay.classList.add('click');

    let serverUrl = `https://jsonplaceholder.typicode.com/posts/${id}`;
    ajax(serverUrl, function (mosuliData) {
        bodyText(mosuliData)
      });
}) ;
   
deleteButton.addEventListener("click", function (element) {
    element.stopPropagation();
    let id = element.target.getAttribute("data-id");
    let serverUrl = `https://jsonplaceholder.typicode.com/posts/${id}`;
    fetch(serverUrl, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then(() => Div.remove());
  });
}


button.addEventListener('click', function(){
    overlay.classList.remove('click');
    text.innerText = '' ;

 });
    function bodyText(element) {
    text.innerText = element.body;
    }

    let text = document.createElement("p");
    text.classList.add('popuptext');
    overlay.appendChild(text); 


    



    plus.addEventListener('click', function(){
        formOverlay.classList.add('click');
          inputTitle.value = " ";
    })
    form.addEventListener('submit', function(event){
        event.preventDefault(); 

        let input = {
            title: event.target[0].value,
            body : event.target[1].value

          };
        //   console.log(input);
    

   
    
    
      fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        
        body: JSON.stringify(input),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((Newpost) => {
            newPost(Newpost);
            overlayform.classList.remove("click");
        });
    })
