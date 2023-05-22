window.addEventListener("load",()=>{
  // main
  const portfolio = document.querySelector(".portfolio")
  const main = document.querySelector(".main_page")
  const mouseScroll = document.querySelector(".scroll")
  const header = document.querySelector(".header")
  const maintext = document.querySelector(".maintext")
  const h1 = document.querySelectorAll(".main_page h1 span")
  
  portfolio.classList.add("intro")
  maintext.classList.add("on")
  h1[1].classList.add("on")
  
  setTimeout(()=>{
    main.classList.add("on")
    header.classList.add("on")
    header.classList.add("mainpage")
  },7000)

  setTimeout(()=>{
    mouseScroll.classList.add("on")
    portfolio.classList.remove("intro")
  },8500)

  const menuLi = document.querySelectorAll(".menu>ul>li");
  const menubtn = document.querySelector(".portfolio_menu");
  const menu = document.querySelector(".menu");
  const close = document.querySelector(".menu .close");
  let height = window.innerHeight;
  const div = document.querySelectorAll(".portfolio_container>div")
  const project = document.querySelectorAll(".projects>div")
  const footer = document.querySelector(".footer")

  for(let el of div){
    el.addEventListener("mouseover",e=>{
      el.classList.add("on")
    })
  }

  menubtn.addEventListener("click",e=>{
    e.preventDefault();
    menu.classList.add("on")
  })
  close.addEventListener("click",e=>{
    e.preventDefault();
    menu.classList.remove("on")
  })

  for(let i=0; i<menuLi.length; i++){
    menuLi[i].addEventListener("click",e=>{
      e.preventDefault()
      for(let el of menuLi){
        el.classList.remove("on")
      }
      menuLi[i].classList.add("on")

      if(i == 4){
        window.scroll({
          top:height * `${i*1.1}`,
          left:0,
          behavior:"smooth"
        })
      }else if(i == 5){
        window.scroll({
          top:height * `${i+7}`,
          left:0,
          behavior:"smooth"
        })
        footer.classList.add("on")
      }else{
        window.scroll({
          top:height * i,
          left:0,
          behavior:"smooth"
        })
      }
      menu.classList.remove("on")
    })
  }

  for(let p=0; p<project.length; p++){
    project[p].addEventListener("mouseover",()=>{
      for(let el of project){
        el.classList.remove("on")
      }
      project[p].classList.add("on")
    })
  }
  //scroll

  window.addEventListener("scroll",()=>{
    let scroll = document.querySelector("html").scrollTop;
    let height = window.innerHeight - 200;

    if(scroll < height){
      header.classList.add("mainpage")
      main.classList.add("on")
      mouseScroll.classList.add("on")
      for(let a=0; div.length; a++){
        div[a].classList.remove("on")
      }
      footer.classList.remove("on")
    }
    else{
      header.classList.remove("mainpage")
      main.classList.remove("on")
      mouseScroll.classList.remove("on")
    }

    if(scroll >= height && scroll < height * 2.5){
      div[0].classList.add("on")
      for(let el of menuLi){
        el.classList.remove("on")
      }
      menuLi[1].classList.add("on")
      footer.classList.remove("on")
    }
    if(scroll >= height * 2 && scroll < height * 3.5){
      div[1].classList.add("on");
      for(let el of menuLi){
        el.classList.remove("on")
      }
      menuLi[2].classList.add("on")
      footer.classList.remove("on")
    }
    if(scroll >= height * 3 && scroll < height * 4){
      div[2].classList.add("on");
      div[1].classList.remove("scrollDown");
      for(let el of menuLi){
        el.classList.remove("on")
      }
      menuLi[3].classList.add("on")
      footer.classList.remove("on")
    }
    if(scroll >= height * 4.2 && scroll < height * 5){
      div[3].classList.add("on");
      for(let el of menuLi){
        el.classList.remove("on")
      }
      menuLi[3].classList.add("on")
      footer.classList.remove("on")
    }
    if(scroll >= height * 5.5 && scroll < height * 12){
      div[4].classList.add("on");
      for(let el of menuLi){
        el.classList.remove("on")
      }
      menuLi[4].classList.add("on")
      footer.classList.remove("on")
    }

    if(scroll > height * 10){
      footer.classList.add("on");
      for(let el of menuLi){
        el.classList.remove("on")
      }
      menuLi[5].classList.add("on")
    }

    for(let i=0; i<project.length; i++){
      if(scroll >= height * `${6+i}`+ 500 && scroll <= height * `${7+i}`+600){
        for(let el of project){
          el.classList.remove("on")
        }
        project[i].classList.add("on")
      }
    }

 //wheel
  div[0].addEventListener("wheel",e=>{
    if(e.deltaY < 0){
      window.scroll({
        top:0,
        left:0,
        behavior:"smooth"
      })
    }
    else if(e.deltaY > 0){
      window.scroll({
        top: div[1].offsetTop + div[1].offsetHeight,
        left:0,
        behavior:"smooth"
      })
    }
  })

  div[1].addEventListener("wheel",e=>{
    if(e.deltaY < 0){
      window.scroll({
        top: div[0].offsetTop + div[0].offsetHeight,
        left:0,
        behavior:"smooth"
      })
      div[1].classList.remove("scrollDown")
      div[2].classList.remove("on")

    }else if(e.deltaY > 0){
      div[1].classList.add("scrollDown")
      div[2].classList.add("on")
      setTimeout(()=>{
        window.scroll({
          top: div[2].offsetTop + div[2].offsetHeight,
          left:0,
          behavior:"smooth"
        })
      },1500)
    }
  })
  })

  main.addEventListener("wheel",e=>{
    if(e.deltaY > 0){
      window.scroll({
        top:main.offsetHeight,
        left:0,
        behavior:"smooth"
      })
    }
  })
  const more = document.querySelectorAll(".more");
  const sub = document.querySelectorAll(".sub");
  const subX = document.querySelectorAll(".sub .close");

  for(let m=0; m<more.length; m++){
    more[m].addEventListener("click",e=>{
      e.preventDefault();
      sub[m].classList.add("on")
      header.classList.remove("on")
      setTimeout(()=>{
        header.style.top= "-100px"
      },1000)
    })
  }

  for(let x=0; x<subX.length; x++){
    subX[x].addEventListener("click",e=>{
      e.preventDefault();
      sub[x].classList.remove("on")
      header.style.top= "0px"
      setTimeout(()=>{
        header.classList.add("on")
      },1000)
    })
  }

  function activation(index,list){
    for(let el of list){
      el.classList.remove("on");
    }
    list[index].classList.add("on")
  }

  const subList2 = project[1].querySelectorAll(".video_list>li");
  const subList3 = project[2].querySelectorAll(".video_list>li");
  const subList5 = project[4].querySelectorAll(".video_list>li");

  const subVideo2 = project[1].querySelectorAll(".videos>li");
  const subVideo3 = project[2].querySelectorAll(".videos>li");
  const subVideo5 = project[4].querySelectorAll(".videos>li");


  for(let s=0; s<subList2.length; s++){
    subList2[s].addEventListener("click",e=>{
      e.preventDefault();
      activation(s,subList2)
      activation(s,subVideo2)
    })
  }
  for(let s=0; s<subList3.length; s++){
    subList3[s].addEventListener("click",e=>{
      e.preventDefault();
      activation(s,subList3)
      activation(s,subVideo3)
    })
  }
  for(let s=0; s<subList5.length; s++){
    subList5[s].addEventListener("click",e=>{
      e.preventDefault();
      activation(s,subList5)
      activation(s,subVideo5)
    })
  }

  const subhref = document.querySelectorAll(".info_href")
  const subDiv = document.querySelectorAll(".sub_info>div")
  const subSpan = document.querySelectorAll(".sub_info>div>span")
 

  for(let i=0; i<subhref.length; i++){
    let hrefList = subhref[i].querySelectorAll("li>a");
    hrefList[1].addEventListener("click",e=>{
      e.preventDefault();
      subDiv[i].classList.add("on")
    })
    subSpan[i].addEventListener("click",e=>{
      e.preventDefault();
      subDiv[i].classList.remove("on")
    })
  }

})