const userInput = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const resultsDiv = document.getElementById("results-div");

checkBtn.addEventListener("click", () => {
  const regExp = /^(1\s?)?(\(\d{3}\)|\d{3})([\s/-]?)\d{3}([\s-]?)\d{4}$/;

  if(!userInput.value){
    alert("Please provide a phone number");
  }else if (regExp.test(userInput.value)){
    resultsDiv.innerText = `Valid US number: ${userInput.value}`;
  }else{
    resultsDiv.innerText = `Invalid US number: ${userInput.value}`;
  }
})

clearBtn.addEventListener("click", () => resultsDiv.innerText = "");