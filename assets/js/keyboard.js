document.addEventListener('keydown', event => {
    code = event.code
    if(code=='Space'){
        controlTimer('pause')
    }
    if(code=='Enter'){
        controlTimer('play')
    }
    if(code=='KeyX'){
        controlTimer('stop')
    }
    if(code=='Escape'){
        hideTheme()
    }
    if(code=='KeyT'){
        toggleTheme()
    }
})