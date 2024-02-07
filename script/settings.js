
const default_settings = {
    'auto_start_next': true,
    'send_notifications': false,
    'play_sounds': true,
    'focus_duration': '25:00',
    'break_duration': '05:00',
    'lbreak_duration': '15:00'
}

// ============================================ FIRST TIME

function initialize_localstorage() {

    for(const [name, value] of Object.entries(default_settings)) {

        localStorage.setItem(name, value)

    }

}

function check_first_time() {

    if(localStorage.length == 0) initialize_localstorage()

}

// ============================================ GETTER/SETTER

function get_settings(key, is_str=false) {

    let value = localStorage.getItem(key)
    
    if(!is_str) value = JSON.parse(value)

    if(value == null) return default_settings[key]

    return value

}

function set_settings(key, value, is_str=false) {

    if(is_str) localStorage.setItem(key, value)
    else localStorage.setItem(key, JSON.stringify(value))

}

// ============================================ CHECK INPUTS

function check_inputs() {

    const numbers = document.querySelectorAll("input[type='number']")

    for(const input of numbers) {

        let value = parseInt(input.value)

        if( isNaN(value) ) {
            alert('you must use only number in the inputs')
            return false
        }

        if(value>60) {
            alert('the value of the timer duration must be under an hour')
            return false
        }

        if(value<1) {
            alert('the value of the timer duration must be at least one minute')
            return false
        }

    }

    return true

}

// ============================================ GET SETTINGS

function save_settings() {

    if(!check_inputs()) return false

    set_settings('auto_start_next', document.querySelector('#setting-1').checked)
    set_settings('send_notifications', document.querySelector('#setting-2').checked)
    set_settings('focus_duration', fill_timer(parseInt(document.querySelector('#setting-3').value), 0), true)
    set_settings('break_duration', fill_timer(parseInt(document.querySelector('#setting-4').value), 0), true)
    set_settings('lbreak_duration', fill_timer(parseInt(document.querySelector('#setting-5').value), 0), true)

    return true

}

// ============================================ APPLY SETTINGS

function apply_settings() {

    document.querySelector('#setting-1').checked = get_settings('auto_start_next')
    document.querySelector('#setting-2').checked = get_settings('send_notifications')
    get_settings('play_sounds') ? document.querySelector('#option-volume').classList.remove('active') : document.querySelector('#option-volume').classList.add('active')
    document.querySelector('#setting-3').value = get_settings('focus_duration', true).split(':')[0]
    document.querySelector('#setting-4').value = get_settings('break_duration', true).split(':')[0]
    document.querySelector('#setting-5').value = get_settings('lbreak_duration', true).split(':')[0]

    get_active('mode-button').click()

}
