addLoadEvent(prepareGallery);

function showPic(whichpic){
    if (!document.getElementById("placeholder")) return false;
    var source=whichpic.getAttribute("href");
    var placeholder=document.getElementById("placeholder");
    placeholder.setAttribute("src", source);

    if (document.getElementById("description")){
        var text=whichpic.getAttribute("title");
        var description=document.getElementById("description");
        description.firstChild.nodeValue=text;
    }
    return true;
}

function prepareGallery(){
    if (!document.getElementsByTagName || !document.getElementById) return false;
    if (!document.getElementById("imagegallery")) return false;
    var gallery=document.getElementById("imagegallery");
    var links=gallery.getElementsByTagName("a");
    for (var i=0;i<links.length;i++){
        links[i].onclick=function(){
            showPic(this);
            return false;
        };
    }

}

function countBodyChildren(){
    var body_element=document.getElementsByTagName("body")[0];
    alert(body_element.childNodes.length);
    alert(body_element.nodeType);
}

function addLoadEvent(func){
    var oldOnload=window.onload;
    if (typeof window.onload != "function"){
        window.onload=func;
    }else{
        window.onload=function(){
            oldOnload();
            func();
        }
    }
}