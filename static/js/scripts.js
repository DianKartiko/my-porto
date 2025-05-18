document.addEventListener('DOMContentLoaded', ()=>{
    // Menu Button 
    const menu = document.getElementById("menu-button")
    const mobileMenu = document.getElementById('mobile-menu')
    const closeButton = document.getElementById('close-button')
    let isMenuOpen = false

    // 1. Toggle menu function 

    const toggleMenu = () => {
        isMenuOpen = !isMenuOpen
        mobileMenu.classList.toggle('hidden', !isMenuOpen)
        mobileMenu.classList.toggle('block', isMenuOpen)
        menu.setAttribute('aria-expanded', isMenuOpen)  
        closeButton.setAttribute('aria-expaded', !isMenuOpen)
    }

    // 2. Event Listener
    menu.addEventListener('click', toggleMenu);

    // // 3. Resize menu when hit the breakpoints
    // const resizeObserver = new ResizeObserver(entries =>{
    //     if(window.innerWidth >= 768) {// breakpoint tailwindcss
    //         mobileMenu.classList.add('hidden')
    //         menu.setAttribute('aria-expanded', 'false');
    //         isMenuOpen = false;
    //     }
    // })

    // 4. Click if not in target 
    document.addEventListener('click', (e)=>{
        if(isMenuOpen && !mobileMenu.contains(e.target) && !menu.contains(e.target) && !closeButton.contains(e.target)){
            toggleMenu()
        }
    })
})

