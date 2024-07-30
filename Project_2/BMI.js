
const form=document.querySelector('form');

form.addEventListener('submit' , function(e){
    e.preventDefault();

    const height=parseInt(document.querySelector('#height').value);
    const weight=parseInt(document.querySelector('#weight').value);

    const result=document.querySelector('#res');
    const guid=document.querySelector('#guid');

    if(height=== ' ' || height < 0 || isNaN(height)){
        result.innerHTML=`<h3> ${height} is not a valid height </h3>`;
        guid.innerHTML="";
    }
    else if(weight=== ' ' || weight < 0 || isNaN(weight)){
        result.innerHTML=`<h3>${weight} is not a valid weight </h3>`;
        guid.innerHTML=""
    }
    else{

        const bmi=(weight / ((height*height)/10000)).toFixed(2);

        result.innerHTML=`<h2>Your BMI is : ${bmi} </h2>`;


        if(bmi<18){
            guid.innerHTML="<h3>You are Underweight</h3>";
            guid.style.backgroundColor="Yellow";
            
        }

        else if(bmi>=18 && bmi<25){
            guid.innerHTML="<h3>You have normal weight</h3>";
            guid.style.backgroundColor="green";
        }

        else if(bmi>=25 && bmi<31){
            guid.innerHTML="<h3>You are Overweight</h3>";
            guid.style.backgroundColor="orange";
        }

        else{
            guid.innerHTML="<h3>You have Obesity</3>";
            guid.style.backgroundColor="red"
        }


    }

 
    

})