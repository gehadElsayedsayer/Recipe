//api  ,  ajax  >> technique

// ajax >> async js and xml

// 99 >> ms >> ActiveXObject

// 2004 >> XMLhttpRequest()

//XMLHttpRequest

/**
 * method 
 * 
 * get >> get data
 * post >>send data
 * put  >> update 
 * patch >> update
 * delete >> delete
 * 
 * 
 * //chech req
 * 
 * readyState = 0  >> req not statblished
 * readyState = 1  >> req stablished
 * readyState = 2 >> req recieved
 * readyState = 3 >> req processing
 * readyState = 4  >> req successful , responce ready
 *
 * 
 * status = 404 >> error 
 * 
 * statuse = 403 >> forbidden 
 * 
 * status = 500 >> inernal server error
 * 
 * 
 * status >> 200 ok
 * 
 * 


 */

console.log("first");

var links = document.querySelectorAll("nav .nav-link");

for (var i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function (eventInfo) {
    console.log(eventInfo.target);

    var innerWord = eventInfo.target.innerHTML;//el klma

  

    getRecipies(innerWord);
  });
}

var DataContainer = [];

var row = document.getElementById("rowData");

getRecipies("tomato");

/*function getRecipies(x) {
  var req = new XMLHttpRequest(); //oop

  req.open("GET", `https://forkify-api.herokuapp.com/api/search?q=${x}`); //make conenction

  req.send(); //send req

  req.addEventListener("readystatechange", function () {
    if (req.readyState == 4 && req.status == 200) {
      console.log(req.response);
      //DataContainer = req.response; // string

      DataContainer = JSON.parse(req.response).recipes; // string
      console.log(DataContainer);

      displayData();
    }
  });
}*/
async function  getRecipies(x){
  let respo=await fetch( `https://forkify-api.herokuapp.com/api/search?q=${x}`);
  let myData=await respo.json();
  DataContainer=myData.recipes;
  
  displayData();
}
let recipeData;
async function  geSingletRecipie(id){
  let res=await fetch( `https://forkify-api.herokuapp.com/api/get?rId=${id}`);
   recipeData=await res.json();
   recipeData=recipeData.recipe;
  console.log(recipeData)
   displaySingletRecipie();
}
let rowDetail=document.getElementById('rowDetail');
 function  displaySingletRecipie(){
 let str=`  <img src='${recipeData.image_url}' class='w-100' />
 <h2>${recipeData.title}</h2>
 <p>${recipeData.ingredients}</p>`
 rowDetail.innerHTML=str;
}


function displayData() {
  var div = "";

  for (var i = 0; i < DataContainer.length; i++) {
    div += ` <div class="col-md-4">
        <div class="item">
     
        <img src='${DataContainer[i].image_url}' class='w-100' onclick="geSingletRecipie(${DataContainer[i].recipe_id})" data-toggle="modal" data-target="#staticBackdrop"/>
        
          <h2>${DataContainer[i].title}</h2>
          <p>publisher: ${DataContainer[i].publisher}</p>
        </div>
      </div>`;
  }

  row.innerHTML = div;
}

console.log("second");

//asyncronous code (time)  غير متزامن

//syncronous code   متزامن





//es6