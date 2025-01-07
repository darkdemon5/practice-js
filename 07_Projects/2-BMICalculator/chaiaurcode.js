const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const h = parseFloat(document.getElementById("height").value);
  const w = parseFloat(document.getElementById("weight").value);
  const result = document.getElementById("results");

  if (h === "" || h < 0 || isNaN(h)) {
    result.innerHTML = `<span>Please enter normal value height: ${h}</span>`;
  } else if (w === "" || w < 0 || isNaN(w)) {
    result.innerHTML = `<span>Please enter normal value weight: ${w}</span>`;
  } else {
    const bmi = (w / ((h * h) / 10000)).toFixed(2);
    console.log(bmi);

    

    if(bmi<18.6){
      result.innerHTML = `<span>Your BMI is: ${bmi} <span style="color: yellow; font-weight: bold;">Under Weight</span> </span>`;
    }
    else if (bmi > 18.6 && bmi < 24.9) {
      result.innerHTML = `<span>Your BMI is: ${bmi} <span style="color: green; font-weight: bold;">Normal Bmi</span> </span>`;
    }
    else if(bmi > 24.9){
      result.innerHTML = `<span>Your BMI is: ${bmi} <span style="color: red; font-weight: bold;">Over Weight</span> </span>`;
    }
    else{
      result.innerHTML = `<span>Your BMI is: ${bmi}</span>`;
    }
  }
  
});
