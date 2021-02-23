const maleNames = ['kwaski', 'kwadwo', 'kwabena', 'kwaku', 'yaw', 'kofi' ];
const femaleNames = ['Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama'];
const state = {gender: null,
    birthDate: null,
birthDay: null,
name: null,
selectedNamesPool:[]};
const nameDisplay = document.getElementById("nameDisplay");
const setGender = () => {
  state.gender = document.getElementById("gender").value;
  state.selectedNamesPool = state.gender === "male" ? maleNames : femaleNames;
  console.log(state.gender);
  console.log(state.selectedNamesPool);
};
const setBirthDate = () => {
  const date = new Date(document.getElementById("setdate").value);
  state.birthDate = date;
  state.birthDay = date.getDay();
  console.log(state);
};
document.getElementById("getsuga").addEventListener(
    "submit",
    (generateName = (e) => {
      e.preventDefault();
      const selectedNamesPool = state.selectedNamesPool;
      let name;
      switch (state.birthDay) {
        case 0:
          name = selectedNamesPool[0];
          console.log(name);
  
        case 1:
          name = selectedNamesPool[1];
          console.log(name);
          break;
  
        case 2:
          name = selectedNamesPool[2];
          console.log(name);
          break;
  
        case 3:
          name = selectedNamesPool[3];
          console.log(name);
          break;
  
        case 4:
          name = selectedNamesPool[4];
          console.log(name);
          break;
  
        case 5:
          name = selectedNamesPool[5];
          console.log(name);
          break;
  
        case 6:
          name = selectedNamesPool[6];
          console.log(name);
          break;
  
        default:
          break;
      }
      nameDisplay.innerText = `Your Ghanaian name is ${name}`;
    })
  );