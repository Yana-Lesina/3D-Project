const menu = () => {
  const menu = document.querySelector('menu')

  const handleMenu = () => {
    menu.classList.toggle('active-menu')
  }
  
  document.addEventListener('click', (e) => {
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