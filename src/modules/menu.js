// const menu = () => {
//   const menuBtn = document.querySelector('.menu')
//   const menu = document.querySelector('menu')

//   const toggleMenu = () => {
//     menu.classList.toggle('active-menu')
//   }

//   menuBtn.addEventListener('click', toggleMenu)
//   menu.addEventListener('click', (e) => {
//     console.log(e.target.closest('menu'));
//     if(e.target.tagName === 'A' || e.target.classList.contains('.close-btn')) {
//       toggleMenu()
//     }
//   })
// }

// export default menu


//Попытка допа
const menu = () => {
  const menu = document.querySelector('menu')

  const handleMenu = () => {
    menu.classList.toggle('active-menu')
  }
  
  document.addEventListener('click', (e) => {
    // console.log(e.target);
    // console.log(e.target.classList.contains('dot'));

    
    if(e.target.closest('.menu')) {
      handleMenu()
    } else if (e.target.tagName === 'A' && !e.target.classList.contains('portfolio-btn') || e.target.classList.contains('.close-btn')) {
      handleMenu()
    } else if (!e.target.closest('.active-menu') && menu.classList.contains('active-menu') ) {
      handleMenu()
    }
  })
}

export default menu