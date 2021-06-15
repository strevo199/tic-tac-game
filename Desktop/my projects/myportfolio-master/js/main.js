//Selcet Dom items;
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menu-branding");
const navitems = document.querySelectorAll(".nav-item");
//Set Inital state on the menu;

let showMenu = false;

menuBtn.addEventListener('click',toggleMenu)

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add('close')
    menu.classList.add('show')
    menuNav.classList.add('show')
    menuBranding.classList.add('show')
    navitems.forEach(item =>{
      item.classList.add('show')
    })

    //reset Manu sate;
    showMenu = true;
  } else {
    menuBtn.classList.remove('close')
    menu.classList.remove('show')
    menuNav.classList.remove('show')
    menuBranding.classList.remove('show')
    navitems.forEach(item =>{
      item.classList.remove('show')
    })

    //reset Manu sate;
    showMenu = false;
  }
}


//images;

const handleInages =() =>{
  const parent = document.querySelector('.about-infro');
  const bio =document.querySelector('.bio');
  const images = ['https://res.cloudinary.com/stephyll/image/upload/v1623758407/myProtifolio/port2_lngnrn.jpg',
  'https://res.cloudinary.com/stephyll/image/upload/v1623756010/myProtifolio/port3_xhceer.jpg',
  'https://res.cloudinary.com/stephyll/image/upload/v1623756009/myProtifolio/port4_d9tvlh.jpg']
  const randomImage = images[Math.floor(Math.random() * 3 )]
  const newImage = document.createElement('img')
  newImage.className='bio-image'
  newImage.src = `${randomImage}`   
  newImage.style.height = '250px';

  parent.insertBefore(newImage,bio)
}

handleInages()

//mode ;
