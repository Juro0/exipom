let permission = Notification.permission;

let requestAndShowPermission = () => {
   if(permission === "default"){
      Notification.requestPermission();
   }
}
requestAndShowPermission()

let sendNotification = body => {
    let title = "| EXIPOM";
    let icon = "https://github.com/Juro0/exipom/blob/v1.0.0/assets/img/favicon.png?raw=true"
    let notification = new Notification(title, { body, icon });
    notification.onclick = () => { 
         notification.close();
         window.parent.focus();
    }
}