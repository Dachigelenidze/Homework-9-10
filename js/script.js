"use strict";
let mainDiv = document.getElementById('main');
let overlay = document.getElementById('overlay');
let body = document.getElementById ('body');
let button = document.querySelector('.fa-rectangle-xmark')
function ajax (url, callback){
    let requist = new XMLHttpRequest();
    requist.open('GET', url )
    requist.addEventListener('load', function(){
        let mosuliData = JSON.parse(this.responseText);
        callback(mosuliData);
    })
    requist.send();
}


function newPost(element){
    let Div = document.createElement('div');
    Div.classList.add('post')
    Div.setAttribute('data-id', element.id);
    let h4 = document.createElement('h4')
    h4.innerText = element.id;
    let h2 = document.createElement('h2')
    h2.textContent = element.title;

    Div.appendChild(h4);
    Div.appendChild(h2);
    mainDiv.appendChild(Div);

Div.addEventListener('click', function(event){
    let id = event.currentTarget.getAttribute("data-id");
    overlay.classList.add('click');

    let serverUrl = `https://jsonplaceholder.typicode.com/posts/${id}`;
    ajax(serverUrl, function (mosuliData) {
        bodyText(mosuliData)
      });
}) ;
   
}


button.addEventListener('click', function(){
    overlay.classList.remove('click');
    text.innerText = '' ;

 });
    function bodyText(element) {
    text.innerText = element.body;
    }
    let text = document.createElement("p");
    text.classList.add('popuptext')
    overlay.appendChild(text);

ajax('https://jsonplaceholder.typicode.com/posts', function(mosuliData){
    mosuliData.forEach(element => {
        newPost(element);
        
    });

});


