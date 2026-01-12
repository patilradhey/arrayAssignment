let array = ["BMW", "TATA", "Mercedes", "Toyota", "Suzuki"]



function searchName(){
        let search = document.getElementById("exampleInput").value

        for(i= 0; i < array.length; i++){
            if(array[i] == search ){
                document.getElementById("display").innerHTML =` ${array[i]} found on ${i+1}`
                break;
            }
            else{
                document.getElementById("display").innerHTML = `Not found` 
            }
        }
}