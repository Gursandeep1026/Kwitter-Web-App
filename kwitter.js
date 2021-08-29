function fn_adduser(){
    var name=document.getElementById("input_1").value;
    localStorage.setItem("user_name",name);
    window.location="kwitter_room.html";
}