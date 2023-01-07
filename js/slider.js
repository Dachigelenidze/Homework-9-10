let Slider = document.getElementById('slider');
let ButtonRight = document.getElementById('buttonright');
let ButtonLeft = document.getElementById('buttonleft');
let  SliderContent = document.getElementById('slidercontent')

let Sliderindex = 0;
let data = [
    {
      id: 1,
      imageUrl:
      "https://editorial.uefa.com/resources/0252-0cdc468fca93-0bab87080246-1000/real_madrid_received_the_highest_payment.jpeg",
      title: "Real Madrid 2013/2014",
    },
    {
      id: 2,
      imageUrl:
        "https://www.realmadrid.com/cs/Satellite?blobcol=urldata&blobheader=image%2Fjpeg&blobkey=id&blobtable=MungoBlobs&blobwhere=1203374102029&ssbinary=true",
      title: "Real Madrid 2015/2016",
    },
    {
      id: 3,
      imageUrl:
        "https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt4c3acaebd5722c29/60dde6b3e1461d39eb936cdc/9acaec331c93fa729497509e967fd38c29a9e26c.jpg?auto=webp&format=jpg&quality=60&w=1280",
      title: "Real Madrid 2016/2017",
    },
    {
      id: 4,
      imageUrl:
        "https://library.sportingnews.com/styles/twitter_card_120x120/s3/2022-05/Real%20Madrid%202018%20Champions%20League%20trophy%20celebration%20052422.jpg?itok=gFxsWxbk",
      title: "Real Madrid 2017/2018",},

    {
      id: 5,
      imageUrl:
        "https://static.toiimg.com/photo/91887440.cms?imgsize=193242",
      title: "Real Madrid 2021/2022",
    },
  ];
function divCreate (){
    let divElement = document.createElement('div');
    return divElement;
}

function imgCreate (element){
    let imgElement = document.createElement('img');
    imgElement.setAttribute('src',element.imageUrl);
    return imgElement;
}
function h2Create (element){
    let h2Eelement = document.createElement('h2');
    h2Eelement.textContent = element.title
    return h2Eelement;
}
function leftClick(){
    if(Sliderindex == 0 ){
        Sliderindex = data.length - 1;;
        MainSlide ();
    return;
    }
    Sliderindex--;
    MainSlide ();
}

function rightClick(){
    if(Sliderindex == data.length - 1){
        Sliderindex = 0;
        MainSlide();
        return;
    }
    Sliderindex++;
    MainSlide();
}

ButtonLeft.addEventListener("click", leftClick);
ButtonRight.addEventListener("click", rightClick);
setInterval(() => {
    rightClick();
  }, 5000);

//   მთავარი ფუნქცია 
function MainSlide (){
    SliderContent.innerHTML = "";
    let divfunction = divCreate();
     let imgfunction = imgCreate(data[Sliderindex]);
     let h2function = h2Create(data[Sliderindex]);
 
     divfunction.appendChild(imgfunction);
     divfunction.appendChild(h2function);
     SliderContent.appendChild(divfunction);
 }
 
 MainSlide ();