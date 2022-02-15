window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "flex";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
function viewDiv(){
    document.getElementById("basket_hovering").style.display = "block";
    document.getElementById("section-3").style.backgroundColor="#47B39C";
  }
function burger(){
    document.getElementById("hidenned").style.display = "block";
}
  

