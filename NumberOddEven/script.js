
let numArray = [];

function addnumbers() {
    let input = Number(document.getElementById("exampleInputnumbers").value);

    if (input === 0) {
        alert("Enter numbers");
        return;
    }
    numArray.push(input);
    document.getElementById("exampleInputnumbers").value = "";
}
console.log(numArray)

function evennimbers() {

    let even = []
    for (i = 0; i < numArray.length; i++) {
        if (numArray[i] % 2 == 0) {
            even.push(numArray[i])
        }
         document.getElementById("exampleoutputeven").value = `${even.join(" ")}`
    }
}

function oddnumbers() {

    let odd = []
    for (i = 0; i < numArray.length; i++) {
        if (numArray[i] % 2 != 0) {
            odd.push(numArray[i])
        }
         document.getElementById("exampleoutputodd").value = `${odd.join(" ")}`
    }
}


function clearAll() {
    document.getElementById("exampleInputnumbers").value = '';
    document.getElementById("exampleoutputodd").value = '';
    document.getElementById("exampleoutputeven").value = '';
    numArray = [];
}