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
             not.createNotification("1.jpg","�Ǻ�","��������������Ϣ�°ɣ�").show();
        }else
        {
            not.requestPermission();
        }
    }
}






