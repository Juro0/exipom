let permission = Notification.permission;

let requestAndShowPermission = () => {
   Notification.requestPermission(function (permission) {
      if (permission === "granted") {
            showNotification();
      }
   });
}

if(permission === "default"){
   requestAndShowPermission();
}

let sendNotification = body => {
    let title = "EXIPOM";
    icon = "file:///C:/Users/Hp/Dropbox/LE CARTELLE NON ELIMINARE/informatica/siti/exipom/site/assets/img/favicon.png"
    let notification = new Notification(title, { body, icon });
    notification.onclick = () => { 
         notification.close();
         window.parent.focus();
    }
}