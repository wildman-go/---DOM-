function positionMessage(){
    if(!document.getElementById) return false;
    if(!document.getElementById("message")) return false;
    var elem=document.getElementById("message");
    elem.style.position="absolute";
    elem.style.left="50px";
    elem.style.top="100px";


    if(!document.getElementById("message2")) return false;
    var elem=document.getElementById("message2");
    elem.style.position="absolute";
    elem.style.left="50px";
    elem.style.top="50px";

    moveElement("message2", 125,125,20);
    // movement=setTimeout("moveMessage()", 5000);
    moveElement("message",200,200,10);

}

addLoadEvent(positionMessage);