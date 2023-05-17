window.addEventListener("load",()=>{
  const listItems = document.querySelectorAll('.loading_img>li');
  const loadingPage = document.querySelector('.loading_page');
  const intro = document.querySelector(".intro")
  const start_text = document.querySelectorAll(".start_btn>p>span")


  setInterval(function() {
    const randomNumber = Math.floor(Math.random() * 9) + 1;
    listItems.forEach(function(item, index) {
      if (index + 1 === randomNumber) {
        item.style.opacity = '1';
      } else {
        item.style.opacity = '0';
      }
    });
  }, 240);
  
  setTimeout(function() {
    loadingPage.style.display = 'none';
    intro.style.opacity = '1';
  },4000);

  window.addEventListener("keydown",event=>{
    if(event.key == "Enter"){
      start_text[1].style.opacity = "0"
      
      setTimeout(()=>{
        intro.classList.add("off")
      },2000)

      setTimeout(()=>{
        intro.style.display = 'none';
        location.href="./main.html"
      },7000)
    }
  })

  window.addEventListener("click",()=>{
    start_text[0].style.opacity = "0"
  
    setTimeout(()=>{
      intro.classList.add("off")
    },2000)

    setTimeout(()=>{
      intro.style.display = 'none';
      location.href="./main.html"
    },4000)
  })
})