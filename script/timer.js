
let pause = true

let timer_interval = undefined

let timer_speed = 1000 // debug purpose only, must stand at 1000ms ~ 1s

function next_timer() {

    const actual_mode = get_active('mode-button').id.split('mode-')[1]

    const timer_counts_el = document.querySelector('#timer-counts')

    const actual_cycle = parseInt( timer_counts_el.innerText.split('/')[0] )

    if(actual_mode == 'break' || actual_mode == 'lbreak') {

        document.querySelector('#mode-focus').click()

        return true

    }

    // if focus ended

    if(actual_cycle+1 == 4) {

        document.querySelector('#mode-lbreak').click()
        
        timer_counts_el.innerText = '0/4'

        return true

    }

    document.querySelector('#mode-break').click()

    timer_counts_el.innerText = JSON.stringify(actual_cycle+1) + '/4'

    return true

}

function timer_ended() {

    if(get_settings('play_sounds')) {

        const end_audio = new Audio('./assets/sounds/timer-end.mp3')
        end_audio.volume = .7
        end_audio.play()

    }

    if(get_settings('send_notifications')) send_notification('your timer ended!')

    if(get_settings('auto_start_next')) {
    
        next_timer()
        document.querySelector('#control-play').click()

    } else document.querySelector('#control-stop').click()

}

function start_timer() {

    clearInterval(timer_interval)

    const timer_element = document.querySelector('#timer')

    let time_in_seconds = parseInt(timer_element.innerText.split(':')[0]) * 60 + parseInt(timer_element.innerText.split(':')[1])

    if(time_in_seconds <= 0) return

    timer_interval = setInterval( () => {

        if(!pause) {

            time_in_seconds--

            const minutes = Math.floor(time_in_seconds / 60)
            const seconds = time_in_seconds % 60
            timer_element.innerText = fill_timer(minutes, seconds)

            if(time_in_seconds == 0) {

                clearInterval(timer_interval)
                timer_ended()

            }

        }

    }, timer_speed )

}

function set_timer(value) {
    document.querySelector('#timer').innerText = value
}
