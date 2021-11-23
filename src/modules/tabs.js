const tabs = () => {
  const tabPanel = document.querySelector('.service-header')
  const tabs = document.querySelectorAll('.service-header-tab')
  const tabContent = document.querySelectorAll('.service-tab')

  tabPanel.addEventListener('click', (e) => {
    
    if(e.target.closest('.service-header-tab')) {
      const tabBtn = e.target.closest('.service-header-tab')
      
      tabs.forEach((tab, i) => { 
        if(tab === tabBtn) {
          tab.classList.add('active')
          tabContent[i].classList.remove('d-none')
        } else {
          tab.classList.remove('active')
          tabContent[i].classList.add('d-none')
        }
      })

    }
  })
}

export default tabs