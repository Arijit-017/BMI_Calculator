const form = document.querySelector("form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");

  if (height === "" || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    function cheking(bmi){
        if (bmi < 18.6) {
            const underweightElement = document.querySelector("#underweight");
            underweightElement.innerHTML = `Your BMI is ${bmi}. You are underweight.`;
          } else if (bmi >= 18.6 && bmi < 25) {
            const normalWeightElement = document.querySelector("#normal-weight");
            normalWeightElement.innerHTML = `Your BMI is ${bmi}. You have a normal weight.`;
          } else {
            const overweightElement = document.querySelector("#overweight");
            overweightElement.innerHTML = `Your BMI is ${bmi}. You are overweight.`;
          }
    }
    cheking(bmi);

    results.innerHTML = `<span class="input-group-text" id="basic-addon1">${bmi}</span>`;
    
    
  }
});
