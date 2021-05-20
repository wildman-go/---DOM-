function getNewContent(){
    var request=new getHTTPObject();
    if(request){
        request.open("GET","example.txt", true);
        request.onreadystatechange=function(){
            if(request.readyState==4){
                alert("Response Received");
                var para=document.createElement("p");
                var txt=document.createTextNode(request.responseText);
                console.log(request.responseText);
                para.appendChild(txt);
                document.getElementById("new").appendChild(para);
            }
        };
        request.send(null);
    }else{
        alert("Sorry, your browser doesn\'t support XMLHttpRequest");}
    alert("Function Done");
}

addLoadEvent(getNewContent);