

document.querySelector("#a").addEventListener("click" , function(){
  document.querySelector("#job-opportunites").classList.remove("make-block") ;
  document.querySelector("#research-grants").classList.remove("make-block") ;
  document.querySelector("#scholarships").classList.remove("make-block") ;
  document.querySelector("#learning-section").classList.toggle("make-block") ;
});

document.querySelector("#b").addEventListener("click" , function(){
  document.querySelector("#learning-section").classList.remove("make-block") ;
  document.querySelector("#research-grants").classList.remove("make-block") ;
  document.querySelector("#scholarships").classList.remove("make-block") ;
  document.querySelector("#job-opportunites").classList.toggle("make-block") ;
});


document.querySelector("#c").addEventListener("click" , function(){
  document.querySelector("#learning-section").classList.remove("make-block") ;
  document.querySelector("#job-opportunites").classList.remove("make-block") ;
  document.querySelector("#scholarships").classList.remove("make-block") ;
  document.querySelector("#research-grants").classList.toggle("make-block") ;
});

document.querySelector("#d").addEventListener("click" , function(){
  document.querySelector("#job-opportunites").classList.remove("make-block") ;
  document.querySelector("#research-grants").classList.remove("make-block") ;
  document.querySelector("#learning-section").classList.remove("make-block") ;
  document.querySelector("#scholarships").classList.toggle("make-block") ;
});
