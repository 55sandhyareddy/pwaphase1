function loadjson(file,callback){
  var xhr= new XMLHttpRequest();
  xhr.overrideMimeType("application/json");
  xhr.open("GET",file,true);
  xhr.onreadystatechange=function() {
    if(xhr.readyState=== 4 && xhr.status=="200"){
      callback(xhr.responseText);
      }
  }
  xhr.send();
}

loadjson("dynamic.json",function(text){
  let data=JSON.parse(text);
  console.log(data);
  profile(data.profile);
  carrer(data.carrer);
  education(data.education);
  skills(data.skills);
})
var left=document.querySelector(".left");
function profile(p){
var image=document.createElement("img");
image.src=p.image;
left.append(image);
var h2=document.createElement("h2");
h2.textContent=p.name;
left.append(h2);
var h3=document.createElement("h3");
h3.textContent=p.design;
left.append(h3);
var h4=document.createElement("h4");
h4.textContent=p.mobile;
left.append(h4);
var h5=document.createElement("h5");
h5.textContent=p.email;
left.append(h5);
}
var right=document.querySelector(".right");
function carrer(c){
var h1=document.createElement("h1");
h1.textContent="CareerObjective";
right.append(h1);
var hr=document.createElement("hr");
right.append(hr);
var p=document.createElement("p");
p.textContent=c.info;
right.append(p);
}
function education(edu){
  var h1=document.createElement("h1");
  h1.textContent="Education Details";
  right.append(h1);
  var hr=document.createElement("hr");
  right.append(hr);
  var table=document.createElement("table");
  //table.border="2";
   right.append(table);
  var tr1="<tr><th>Sno</th><th>nameoftheinstitute</th><th>affliated</th><th>qualification</th><th>percentage</th></tr>";

var tr2=" ";
for(var i=0;i<edu.length;i++)
{
  tr2=tr2+"<tr><td>"+edu[i].Sno+"</td><td>"+edu[i].nameoftheinstitute+"</td><td>"+edu[i].affliated+"</td><td>"+edu[i].qualification+"</td><td>"+edu[i].percentage+"</td></tr>";
}
table.innerHTML=tr1+tr2;
right.append(table);
}
function skills(s){
  var rr=document.createElement("h2");
  rr.textContent="skill set";
  right.append(rr);
  // right.append(h2);
    var ul=document.createElement("u1");
  for(var i in s){
    var li=document.createElement("li");
    li.innerHTML=s[i].name+":"+s[i].info;
    ul.append(li);
  }
  right.append(ul);
}
