function positionMessage(){
    if(!document.getElementById) return false;
    if(!document.getElementById("message")) return false;
    var elem=document.getElementById("message");
    elem.style.position="absolute";
    elem.style.left="50px";
    elem.style.top="100px";

    // movement=setTimeout("moveMessage()", 5000);
    moveElement("message",200,200,10);

}

addLoadEvent(positionMessage);