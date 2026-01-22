// buttonEl - елемент кнопки
const btnEl = document.getElementById("btn")

// outline result - константа с полям результата
const Bmi_input = document.getElementById("bmi-result")


// result - конечный результат
const weight_condition = document.getElementById("weight-condition")


function calculateBMI(){
    
    // height = value
    const heightValue = document.getElementById("height").value / 100
    
    // wight = value
    const weightValue = document.getElementById("weight").value


    // store calculator result - расчет результата
    const btnValue = weightValue / (heightValue * heightValue)
    


    // store calculator result to outline - расчетный результат засововаем в нашу поля результат
    Bmi_input.value = btnValue
    


    // condition - условия
    if(btnValue < 18.5){
        weight_condition.innerText = "Under Weight"
    }else if (btnValue >= 18.5 && btnValue <= 24.9){
        weight_condition.innerText = "Normal Weight"
    }else if (btnValue >= 25 && btnValue <= 29.9){
        weight_condition.innerText = "Over Weight"
    }else{
        weight_condition.innerText = "obesite"
    }

}

// event click = use function("calculateBMI") - обработчик события который при клике делает то что находитья на нашей функции
btnEl.addEventListener("click", calculateBMI)