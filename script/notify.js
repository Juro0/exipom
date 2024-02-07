
function check_permission() {

    const permission = Notification.permission

    if(permission == 'granted') return true
    if(permission == 'default' || permission == 'denied') return false

}

function ask_for_permission() {

    Notification.requestPermission( result => {
        notify_permission = result == 'granted' ? true : false
    })

}

function send_notification(content) {

    const permission = check_permission()

    if(!permission) {
        alert('notification permission are denied for this page. please, check your browser settings.')
        ask_for_permission()
        return false
    }

    if(get_settings('send_notifications') && document.visibilityState=='hidden'){
        
        const img = './assets/img/favicon.png'
        const title = 'EXIPOM • take your time!'
        
        const notification = new Notification(
            title, {
                body: content,
                icon: img
            }
            )
            
            notification.addEventListener('click', ()=>{
                window.focus()
            })

    }
    
    return true

}
