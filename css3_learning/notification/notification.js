/*window.onload = function(){
    alert(1111)
}*/

document.onreadystatechange = function()
{
    if(document.readyState == 'complete')
    {
        if(!window.webkitNotifications)
        {
            console.log("Your brower not support notifications.");
            return;
        }
        var not = window.webkitNotifications;
        if(not.checkPermission() == 0)
        {
             not.createNotification("1.jpg","呵呵","扯淡的人生，休息下吧！").show();
        }else
        {
            not.requestPermission();
        }
    }
}






