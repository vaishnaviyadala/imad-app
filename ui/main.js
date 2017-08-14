//counter code
var button = document.getElementById("counter");
button.onclick=function (){
  counter=counter+1;
   var request = new XHTMLhttpRequest();
   
   request.onreadystatechange =function (){
    if(request.readystate==XHTMLhttpRequest.DONE){
         if(request.status==200) {
             var counter=request.responceText;
             var span = document.getElementById("count");
             span.innerHTML = counter.toString();
         }
    }
};

requset.open('GET','http://vaishuyadala1997.imad.hasura-app.io/counter',true);
request.send(null);

};