var name=[];
function Submit(){
    var name_1= document.getElementById("name-1").value;
    var name_2= document.getElementById("name-2").value;
    var name_3= document.getElementById("name-3").value;
    var name_4= document.getElementById("name-4").value;
    name.push(name_1);
    name.push(name_2);
    name.push(name_3);
    name.push(name_4);
    console.log(name);
    document.getElementById("names").innerHTML=name;
    document.getElementById("submit").style.display="none";
    document.getElementById("sort").style.display="inline-block";
}
function Sort(){
name.sort();
console.log(name);
document.getElementById("names").innerHTML=name;
}