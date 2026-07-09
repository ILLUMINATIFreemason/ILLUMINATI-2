// ILLUMINATI
// app.js


function showPage(pageId){


document.querySelectorAll(".page")
.forEach(function(page){

page.classList.remove("active");

});


let page =
document.getElementById(pageId);


if(page){

page.classList.add("active");

}


}
function showPage(pageId){

console.log("صفحه:", pageId);

document.querySelectorAll(".page")
.forEach(function(page){
page.classList.remove("active");
});


let page = document.getElementById(pageId);

if(page){
page.classList.add("active");
}

}
