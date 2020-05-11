window.addEventListener('scroll', scrollFunction2);

function scrollFunction2() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    document.getElementById("navbar").style.height = "7vh";
    document.getElementById("logo").style.display = "none";
    document.getElementById("topline").style.height = "3vh";
  }else{
    document.getElementById("navbar").style.height = "11vh";
    document.getElementById("logo").style.display = "inline";
    document.getElementById("topline").style.height = "4vh";
  }
}