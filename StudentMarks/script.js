 let array2 = [];

function addnumbers() {
    let input =  document.getElementById("exampleInputnumbers").value;
     if (input === "") {
        alert("Enter numbers");
        return;
    }
    array2 = input.split(" ");
    for(i = 0; i < array2.length; i++)
        array2[i]= Number(array2[i])
}

function hightst(){
    array2.sort()
    document.getElementById("hightst").innerHTML = `Highest Mark: ${array2[array2.length-1]}`
}

function lowest(){
    array2.sort()
    document.getElementById("lowest").innerHTML = `Lowest Mark: ${array2[0]}`
}

let sum = 0;
let sumOg = 0
function total(){
    for(i = 0; i < array2.length; i++)
        sum = sum + array2[i]
    
    sumOg = sum
    document.getElementById("total").innerHTML = `Total Marks: ${sum}`
    sum = 0
}

function calculate(){
    total();
    Average(sumOg)
    hightst()
    lowest()
}
let average = 0
function Average(sumOg){
    if(sumOg > 0){
    average = sumOg/(array2.length)
     document.getElementById("average").innerHTML = `Average Marks: ${average.toFixed(2)}`
    average = 0
    } 
}

function clearAll() {
    array2 = []
    document.getElementById("exampleInputnumbers").value = '';
    document.getElementById("total").innerHTML = "Total Marks:";
     document.getElementById("average").innerHTML = "Average Marks:";
     document.getElementById("hightst").innerHTML = "Highest Mark:";
      document.getElementById("lowest").innerHTML = "Lowest Mark:";
}