var numField1 = document.getElementById('numField1');
var numField2 = document.getElementById('numField2');
var resultField = document.getElementById('resultField');
var form = document.getElementById('percentageForm');

function choice(){
    var option = document.getElementById("selection").value;
    
    if(option ==='1' || '5'){
        document.getElementById("phrase").innerHTML = "<= % * X =>";
    }
    if(option === '2'){
        document.getElementById("phrase").innerHTML = "<= X / Y% =>";
    }
    if(option == '3'){
        document.getElementById("phrase").innerHTML = "<= X Y =>";
    }
    if(option === '4'){
        document.getElementById("phrase").innerHTML = "<= X% Y =>";
    }
    
    form.addEventListener('submit', function(event) {
        var selected = document.getElementById('selection').value;
        
        if(!numField1.value || !numField2.value) {
            alert("Please fill out all fields");
        }
        
        var x = parseFloat(numField1.value);
        var y = parseFloat(numField2.value);
        
        if(option === '1' || '5'){
            document.getElementById("resultField").value = x * y;
        }
        if(option === '2'){
            document.getElementById("resultField").value = x / y;
        }
        if(option === '3'){
            document.getElementById("resultField").value = (y / x)*100 + "%";
        }
        if(option === '4'){
            document.getElementById("resultField").value = y / x;
        }
        event.preventDefault();
    });
    

}
          
function clearFunction(){
    document.getElementById("percentageForm").reset();
    phrase.innerText="---";
}
                                    