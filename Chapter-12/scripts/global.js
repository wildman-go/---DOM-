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

function insertAfter(newElement, targetElement){
    var parent=targetElement.parentNode;
    if(parent.lastChild==targetElement){
        parent.appendChild(newElement);
    }else{
        parent.insertBefore(newElement, targetElement.nextSibling);
    }
}

function addClass(element, value){
    if(!element.className){
        element.className=value;
    }else{
        newClassName=element.className;
        newClassName+=" ";
        newClassName+=value;
        element.className=newClassName;
    }
}

function highlightPage(){
    if (!document.getElementsByTagName) return false;
    if (!document.getElementById) return false;

    var headers=document.getElementsByTagName("header");
    if (headers.length==0) return false;
    var navs=headers[0].getElementsByTagName("nav");
    if(navs.length==0) return false;

    var links=navs[0].getElementsByTagName("a");
    var linkurl;
    for(var i=0;i<links.length;i++){
        linkurl=links[i].getAttribute("href");

        if(window.location.href.indexOf(linkurl) != -1){
            links[i].className="here";
            var linktext=links[i].lastChild.nodeValue.toLowerCase;
            document.body.setAttribute("id", linktext);
        }
    }
}


function moveElement(elementID, final_x, final_y, interval){
    if(!document.getElementById) return false;
    if(!document.getElementById(elementID)) return false;
    var elem=document.getElementById(elementID);
    if (elem.movement){
        clearTimeout(elem.movement);
    }

    //检查元素有无left、top的样式熟悉
    if(!elem.style.left){
        elem.style.left="0px";
    }
    if(!elem.style.top){
        elem.style.top="0px";
    }

    var xpos=parseInt(elem.style.left);
    var ypos=parseInt(elem.style.top);
    var dist;

    if(xpos==final_x && ypos==final_y){
        return true;
    }

    if(xpos<final_x){
        dist=Math.ceil((final_x-xpos)/10);
        xpos=xpos+dist;
    }

    if(xpos>final_x){
        dist=Math.ceil((xpos-final_x)/10);
        xpos=xpos-dist;
    }

    if(ypos<final_y){
        dist=Math.ceil((final_y-ypos)/10);
        ypos=ypos+dist;
    }

    if(ypos>final_y){
        dist=Math.ceil((ypos-final_y)/10);
        ypos=ypos-dist;
    }

    elem.style.left=xpos+"px";
    elem.style.top=ypos+"px";

    repeat="moveElement('"+elementID+"',"+ final_x+","+final_y+","+ interval+")";

    elem.movement=setTimeout(repeat,interval);

}


function prepareSlideshow(){
    if(!document.getElementById) return false;
    if(!document.getElementsByTagName) return false;
    if(!document.getElementById("intro")) return false;
    //获取article中的intro段落
    var intro=document.getElementById("intro");

    // 创建放preview图片的div容器
    var slideshow=document.createElement("div");
    slideshow.setAttribute("id", "slideshow");

    //创建frame
    var frame=document.createElement("img");
    frame.setAttribute("src", "images/frame.gif");
    frame.setAttribute("alt", "");
    frame.setAttribute("id", "frame");
    slideshow.appendChild(frame);
    
    // 创建preview 的img
    var preview=document.createElement("img");
    preview.setAttribute("src", "images/slideshow.gif");
    preview.setAttribute("alt", "a glimpse of what awaits you");
    preview.setAttribute("id", "preview");

    // 将preview添加进slideshow容器；将slideshow放到intro后面
    slideshow.appendChild(preview);
    insertAfter(slideshow, intro);

    //遍历intro中的链接
    var links=document.getElementsByTagName("a");
    var destination;
    for (var i=0;i<links.length;i++){
        links[i].onmouseover=function(){
            destination=this.getAttribute("href");
            if (destination.indexOf("index.html")!=-1){
                moveElement("preview",0,0,5);
            }
            if (destination.indexOf("about.html")!=-1){
                moveElement("preview",-150,0,5);
            }
            if (destination.indexOf("photos.html")!=-1){
                moveElement("preview",-300,0,5);
            }
            if (destination.indexOf("live.html")!=-1){
                moveElement("preview",-450,0,5);
            }
            if (destination.indexOf("contact.html")!=-1){
                moveElement("preview", -600, 0, 5);
            }
        }
    }


}


addLoadEvent(highlightPage);
addLoadEvent(prepareSlideshow);