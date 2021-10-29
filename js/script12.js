let weight = document.querySelector('#weight')
let height = document.getElementById('height')
let calBMI = document.getElementById('calBMI')
let bmiValue = document.getElementById('bmiValue')
let bmiResult = document.getElementById('bmiResult')

function calculrateBMI(){
    if( weight.value.trim().length == 0){
        alert('ป้อนน้ำหนักด้วย')
    }else if(weight.value.trim().length == 0){
        alert('ป้อนส่วนสูงด้วย')
    }else {

        //คำนวณ  BMI

        let bmiValueShow = Number(weight.value) / ((Number(height.value)/100)**2)
        bmiValue.innerHTML = bmiValueShow.toFixed(2)

        //เอาค่า BMI มาแปลผล
        if( bmiValueShow < 18.50){
            bmiResult.innerHTML = 'น้ำน้อย / ผอม'
        }else if( bmiValueShow <= 22.90){
            bmiResult.innerHTML = 'ปกติ (สุขภาพดี)'
        }else if( bmiValueShow <= 22.90){
            bmiResult.innerHTML = 'ท้วม (โรคอ้วนระดับ1)'
        }else if( bmiValueShow <= 22.90){
            bmiResult.innerHTML = 'อ้วน (โรคอ้วนระดับ2)'
        }else{  
            bmiResult.innerHTML = 'อ้วนมาก (โรคอ้วนระดับ3)'
        }




    }
    
}

calBMI.addEventListener('click' ,calculrateBMI)

calBMI.addEventListener('mouseover' , ()=>{
    bmiResult.innerHTML = 'SAU IoT DTI'
})



