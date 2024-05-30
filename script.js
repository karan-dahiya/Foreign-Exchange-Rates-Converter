const base_url = "https://latest.currency-api.pages.dev/v1/currencies/";

const dropdowns = document.querySelectorAll(".dropdown select");
let button = document.querySelector("form button");
let fromCurr = document.querySelector(".from select");
let toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");
const secondMsg = document.querySelector(".second-msg");
const info = document.querySelector(".paddingPara");
const exchangeRates = document.querySelector(".exchangeRates");

// Function to generate dropdown options
function generateDropdownOptions() {
    for (let select of dropdowns) {
        for (let currencyCode in countryList) {
            let newOption = document.createElement("option");
            newOption.innerText = `${currencyCode} - ${countryList[currencyCode].name}`;
            newOption.value = currencyCode;
            if (select.name === "from" && currencyCode === "USD") {
                newOption.selected = "selected";
            } else if (select.name === "to" && currencyCode === "INR") {
                newOption.selected = "selected";
            }
            select.append(newOption);
        }

        select.addEventListener("change", (evt) => {
            updateFlag(evt.target);
        });
    }
}

// Function to update currency flag
function updateFlag(element) {
    let currencyCode = element.value;
    let countryCode = countryList[currencyCode].code;
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src = newSrc;
}


// Event listener for the button click
button.addEventListener("click", async (evt) => {
    evt.preventDefault();
    let amount = document.querySelector(".amount input");
    let amountValue = parseFloat(amount.value); // Convert input value to float

    // Check if the entered amount is valid
    if (isNaN(amountValue) || amountValue <= 0) {
        amountValue = 1;
        amount.value = "1";
    }

    // Fetch currency conversion data
    let fromCurrCode = fromCurr.value.toLowerCase();
    let toCurrCode = toCurr.value.toLowerCase();
    let URL = `${base_url}${fromCurrCode}.json`;
    let response = await fetch(URL);
    let data = await response.json();
    let rate = data[fromCurrCode][toCurrCode];

    function getCurrencyName(currencyCode) {
        // Check if the currency code exists in the countryList
        if (countryList.hasOwnProperty(currencyCode)) {
          return countryList[currencyCode].name;
        } else {
          return "Unknown";
        }
      }

    // Calculate converted amount
    // Apply animation to msg and secondMsg elements
    msg.style.transition = "opacity 1s";
    msg.style.opacity = "0";

    secondMsg.style.transition = "opacity 1s";
    secondMsg.style.opacity = "0";

    // Delay the update to allow the animation to take effect
    setTimeout(() => {
        let finalAmount = amountValue * rate;
        finalAmount = finalAmount.toFixed(5);
        msg.innerHTML = `${amountValue} ${fromCurr.value} = <br><span style="font-size: 1.8em;">${finalAmount} ${toCurr.value}</span>`;
        secondMsg.innerHTML = `<span style="color: grey;">1 ${toCurr.value} = ${(1 / rate).toFixed(5)} ${fromCurr.value}</span>`;

        // Trigger reflow to restart the animation
        msg.offsetHeight;
        secondMsg.offsetHeight;

        // Apply animation to fade in the updated content
        msg.style.opacity = "1";
        secondMsg.style.opacity = "1";
    }, 500); // Adjust the delay as needed to match the animation duration

    //Tables
    const tableTitle1 = document.querySelector(".tableTitle1");
    const tableTitle2 = document.querySelector(".tableTitle2");
    const headFrom = document.querySelector(".headFrom");
    const headFrom2 = document.querySelector(".headFrom2");
    const headTo = document.querySelector(".headTo");
    const headTo2 = document.querySelector(".headTo2");
    const tbody1 = document.querySelector(".tableBody1");
    const tbody2 = document.querySelector(".tableBody2");
    const tables = document.querySelector("#tables");
    const exchangeRates = document.querySelector("#exchangeRates");

    if (tables.style.display === "none" && exchangeRates.style.display === "none") {
        tables.style.display = "flex";
        exchangeRates.style.display = "flex";
      } else {
        tables.style.display = "none";
        exchangeRates.style.display = "none";
      }
    tableTitle1.innerHTML = `Convert ${getCurrencyName(fromCurr.value)} to ${getCurrencyName(toCurr.value)}`;
    tableTitle2.innerHTML = `Convert ${getCurrencyName(toCurr.value)} to ${getCurrencyName(fromCurr.value)}`;
    updateFlagInTableHeader(headFrom, fromCurr.value);
    updateFlagInTableHeader(headFrom2, fromCurr.value);
    tbody1.innerHTML = `
    <tr>
    <td>1 ${fromCurr.value}</td>
    <td>${(1*rate).toFixed(3)} ${toCurr.value}</td>
  </tr>
  <tr>
  <td>5 ${fromCurr.value}</td>
  <td>${(5*rate).toFixed(3)} ${toCurr.value}</td>
  </tr>
  <tr>
  <td>10 ${fromCurr.value}</td>
  <td>${(10*rate).toFixed(3)} ${toCurr.value}</td>
  </tr>
  <tr>
  <td>25 ${fromCurr.value}</td>
  <td>${(25*rate).toFixed(3)} ${toCurr.value}</td>
  </tr>
  <tr>
  <td>50 ${fromCurr.value}</td>
  <td>${(50*rate).toFixed(3)} ${toCurr.value}</td>
  </tr>
  <tr>
  <td>100 ${fromCurr.value}</td>
  <td>${(100*rate).toFixed(3)} ${toCurr.value}</td>
  </tr>
  <tr>
  <td>500 ${fromCurr.value}</td>
  <td>${(500*rate).toFixed(3)} ${toCurr.value}</td>
  </tr>
  <tr>
  <td>1000 ${fromCurr.value}</td>
  <td>${(1000*rate).toFixed(3)} ${toCurr.value}</td>
  </tr>`;
  updateFlagInTableHeader(headTo, toCurr.value);
  updateFlagInTableHeader(headTo2, toCurr.value); // Add this line for table 2
  tbody2.innerHTML = `
    <tr>
    <td>1 ${toCurr.value}</td>
    <td>${(1*(1/rate)).toFixed(3)} ${fromCurr.value}</td>
  </tr>
  <tr>
  <td>5 ${toCurr.value}</td>
  <td>${(5*(1/rate)).toFixed(3)} ${fromCurr.value}</td>
  </tr>
  <tr>
  <td>10 ${toCurr.value}</td>
  <td>${(10*(1/rate)).toFixed(3)} ${fromCurr.value}</td>
  </tr>
  <tr>
  <td>25 ${toCurr.value}</td>
  <td>${(25*(1/rate)).toFixed(3)} ${fromCurr.value}</td>
  </tr>
  <tr>
  <td>50 ${toCurr.value}</td>
  <td>${(50*(1/rate)).toFixed(3)} ${fromCurr.value}</td>
  </tr>
  <tr>
  <td>100 ${toCurr.value}</td>
  <td>${(100*(1/rate)).toFixed(3)} ${fromCurr.value}</td>
  </tr>
  <tr>
  <td>500 ${toCurr.value}</td>
  <td>${(500*(1/rate)).toFixed(3)} ${fromCurr.value}</td>
  </tr>
  <tr>
  <td>1000 ${toCurr.value}</td>
  <td>${(1000*(1/rate)).toFixed(3)} ${fromCurr.value}</td>
  </tr>`;
});


// Event listener for DOMContentLoaded event
document.addEventListener("DOMContentLoaded", async () => {
    await generateDropdownOptions(); // Generate dropdown options
    await fetchLastUpdatedDate(); // Fetch last updated date
});

// Function to fetch last updated date
async function fetchLastUpdatedDate() {
    let URL = `${base_url}${fromCurr.value.toLowerCase()}.json`;
    let refresh = await fetch(URL);
    let newData = await refresh.json();
    let lastUpdated = newData["date"];
    info.innerText += ` ${lastUpdated}`;


    fetch(URL)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });
}
function updateFlagInTableHeader(element, currencyCode) {
    let countryCode = countryList[currencyCode].code;
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let img = element.querySelector("img");
    img.src = newSrc;
}






/// Extra 












// Function to print flags on frequentSearch div
function printFlagsOnFrequentSearch() {
    const frequentSearch = document.querySelector("#frequentSearch");
    const details = document.querySelector(".details");
    const textMsg = document.querySelector(".text-msg");

    let flagClicked = false; // Flag to track if a flag was clicked
    
    // Function to update collapse component content
    function updateCollapseContent(countryName, currencyCode) {
        const countryDetail = countryList[currencyCode].detail;
        details.innerHTML = `<p style="font-size: 2rem; color: #003B85">${countryName}</p> Code - ${currencyCode}<br>
        ${countryDetail}`;

    // Scroll down to the details section
    details.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    // Default selected currency (UAE)
    let defaultCurrencyCode = "AED";
    let defaultCountryName = countryList[defaultCurrencyCode].name;

    // Display default currency details
    updateCollapseContent(defaultCountryName, defaultCurrencyCode);

    for (let currencyCode in countryList) {
        let countryCode = countryList[currencyCode].code;
        let countryName = countryList[currencyCode].name;
        let imgSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;

        let img = document.createElement("img");
        img.src = imgSrc;
        img.alt = `${currencyCode} flag`;

        let link = document.createElement("a");
        link.classList.add("btn", "btn-primary");
        link.dataset.bsToggle = "collapse";
        link.href = "#countryFlags";
        link.appendChild(img);

        link.addEventListener("click", () => {
            // Update collapse component content with selected currency details
            updateCollapseContent(countryName, currencyCode);
        });

        frequentSearch.appendChild(link);
    }
}

// Call the function to print flags on frequentSearch div
printFlagsOnFrequentSearch();
