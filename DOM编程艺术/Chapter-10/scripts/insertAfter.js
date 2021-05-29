function insertAfter(newElement, targetElement){
    var parent=targetElement.parentElement;
    if(parent.lastChild==targetElement){
        parent.appendChild(newElement);
    }else{
        parent.insertBefore(newElement, targetElement.nextSibling);
    }
}