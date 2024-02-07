
const open_settings = () => document.querySelector('#settings-menu').classList.add('active')

const close_settings = () => document.querySelector('#settings-menu').classList.remove('active')

const shake_settings = () => {
    document.querySelector('#settings-menu').classList.add('shake')
    setTimeout(()=>{
        document.querySelector('#settings-menu').classList.remove('shake')
    }, 1000)
}

// ================================================================================ FILL TIMER

function fill_timer(minutes, seconds) {

    const formatted_minutes = minutes < 10 ? '0' + minutes : minutes;
    const formatted_seconds = seconds < 10 ? '0' + seconds : seconds;
    
    // Concatena i minuti e i secondi formattati con ':'
    return `${formatted_minutes}:${formatted_seconds}`;
}

// ================================================================================ LISTENERS

// ------------------- options

add_listener('#option-settings', ()=>{ 
    open_settings()
})

add_listener('#option-themes', ()=>{
    alert('themese feature coming soon...')
})

one_toggler('#option-volume')

add_listener('#option-volume', ()=>{
    set_settings('play_sounds', !document.querySelector('#option-volume').classList.contains('active'))
})

add_listener('#option-credits', ()=>{
    url_handler('https://juro0.github.io/', false)
})

// ------------------- mode

flowing_toggler('mode-button')

add_listeners('mode-button', ()=>{
    document.querySelector('#control-stop').click()
})

add_listener('#mode-focus', ()=>{
    set_timer( get_settings('focus_duration', true) )
})

add_listener('#mode-break', ()=>{
    set_timer( get_settings('break_duration', true) )
})

add_listener('#mode-lbreak', ()=>{
    set_timer( get_settings('lbreak_duration', true) )
})

// ------------------- controller

flowing_toggler('timer-control')

add_listener('#control-play', ()=>{
    if(pause){
        pause = false
        start_timer()
    }
})

add_listener('#control-pause', ()=>{
    pause = true
})

add_listener('#control-stop', ()=>{
    pause = true
    clearInterval(timer_interval)
    get_active('mode-button').click()
})

// ================================================================================ LOCAL STORAGE

check_first_time()
apply_settings()

// ================================================================================ SETTINGS

add_listener('#menu-close', ()=>{
    close_settings()
})

add_listener('#settings-save', ()=>{
    if(save_settings()) {
        apply_settings()
        close_settings()
    } else {
        shake_settings()
    }
})

add_listener('#settings-reset', ()=>{
    
    if( confirm('you\'re about to reset the settings. this action cannot be revoked.') ) {

        initialize_localstorage()
        location.reload()

    }

})

