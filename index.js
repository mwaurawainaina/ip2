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
