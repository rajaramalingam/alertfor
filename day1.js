function demo(){
	alert("Today's Work")
}
function msge() {
	alert("have nice day")
}

function match() {
	var text;
	 var cricketer=document.getElementById("india").value;
	switch (cricketer){
	 case "Sachin":
    text="out";
    break;
    case "Sehwag":
    text="not out"
    break;
     case "Dhoni":
    text="not out"
    break;
     case "Kholi":
    text="yet too bat"
    break;
    case "Raina":
    text="yet too bat"
    break;
    default:
    text = "India win "
}
document.getElementById("score").innerHTML=text;
}
function findValue() {
	var arr=["1","2","3","1","2","3","12","1","4","1","5","6","7","8","3","4","1"];
	var a=document.getElementById('x').value;
	var b=0;
	var i;
	for(i=0; i<arr.length; i++){
		if(Number(arr[i])==a){
			b++;
		}
	}
	document.getElementById("x").innerHTML=a;
	document.getElementById("res").innerHTML=b;

}
  var a="";
  var b=0;
  while(b<8)
  {
  	a+="<br> the while loop is working for the time "+b;
  	b++;
  }
  document.getElementById("answer").innerHTML=a;


  var c="";
  var d=0;
 do
  {
  	c+="<br> the dowhile loop is working for the time "+d;
  	d++;
  } while(d<12)
  document.getElementById("answer1").innerHTML=c;

  function focused() {
    document.getElementById("demo1").style.backgroundColor = "blue";
 }
 function blurer() {
    document.getElementById("demo2").style.backgroundColor = "black";
 }