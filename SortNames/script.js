
 let array2 = [];

function addnumbers() {
    let input =  document.getElementById("exampleInputnumbers").value;
     if (input === "") {
        alert("Enter name");
        return;
    }
    array2 = input.split(" ");
}

function sortname(){
    array2.sort()
    document.getElementById("output").innerHTML = array2.join(" ")
}



function clearAll() {
    array2 = []
    document.getElementById("exampleInputnumbers").value = '';
    document.getElementById("output").innerHTML = ""
   
}
