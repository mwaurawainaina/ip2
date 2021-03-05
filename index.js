const maleNames = ['Kwasi','Kwadwo','Kwabena','Kwaku','Yaw','Kofi','Kwame']
const femalNames = ['Akosua','Adwoa','Abenaa','Akua','Yaa','Afua','Ama']
const birthDay = document.getElementById('setbirthday').value
const date = new Date(birthDay)
const CC = date.getFullYear()
const gender = document.getElementById('gender').value
const YY = document.getElementById('setbirthday').value
const MM = date.getMonth()
const DD = date.getDay()
const yy = YY.slice(8,9)
function he ()
   {
    if (date<1) {alert (invalid)}
    else if(date>31){alert(invalid)}
   else if(MM>12){alert(invalid)}
    else if(MM<1){alert(invalid)}
    else{console.log('null')}}
he()

document.getElementById("generatorForm").addEventListener(
    "submit",
    (generateName = (e) => {
      e.preventDefault();
      const getAnswer = ( ( ( (CC/4) -2*CC-1) + ((5*yy/4) ) + ((26*(MM+1)/10)) + DD ) ) 
    Math.round('getAnswer');
    function() {if }