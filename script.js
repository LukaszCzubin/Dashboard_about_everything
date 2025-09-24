const roomMap = {
  kitchen: 'kuchnia',
  bath: 'lazienka',
  saloon: 'salon',
  room: 'pokoj'
};

const dni = ["Niedziela", "Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota"];

const d = new Date();
let day = dni[d.getDay()];
console.log(day)
let blok1 = document.getElementById("dzien");
blok1.textContent = `${day}`;

const temperatura = [25, 28, 16, 17, 16, 15, 30];
let temperature_show = temperatura[d.getDay()];
console.log(temperature_show);
let blok2 = document.getElementById("temp")
blok2.textContent = `${temperature_show}°C`


const baseData = {

  temperature: {
    kuchnia: 32,
    lazienka: 40,
    salon: 18,
    pokoj: 14
  },
  electricity: {
    kuchnia: 45,
    lazienka: 78,
    salon: 50,
    pokoj: 88
  },
  lights: {
    kuchnia: 30,
    lazienka: 30,
    salon: 10,
    pokoj: 30
  },
  humadity: {
    kuchnia: 20,
    lazienka: 30,
    salon: 40,
    pokoj: 50
  }
};
  
var aMonths = new Array('styczeń','luty','marzec','kwiecień','maj','czerwiec','lipiec','sierpień','wrzesień','październik','listopad','grudzien');

var date = new Date();


Calendar();


document.querySelector('#prev').addEventListener('click', PrevMonth);
document.querySelector('#next').addEventListener('click', NextMonth);


function PrevMonth() {

    date = new Date(date.getFullYear(), date.getMonth() - 1, 1);
    Calendar(); 
}


function NextMonth() {
 
    date = new Date(date.getFullYear(), date.getMonth() + 1, 1);
    Calendar(); 
}


function Calendar() {
    let  td = document.querySelectorAll('#calendar tbody td'); 
    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1); 
    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0); 
    const day = firstDay.getDay() ? firstDay.getDay() - 1 : 6; 


    document.querySelector('#calendar_top').innerHTML = aMonths[date.getMonth()] + ' ' + date.getFullYear();

    let dzien = 1; 
    for (let i = 0; i < td.length; i++) {

        td[i].innerHTML = (i >= day && dzien <= lastDay.getDate()) ? dzien++ : '';
  
        if (i >= 35) td[i].style.display = (day + dzien - 1 < 36) ? 'none' : '';
    }
    

};
function updateData() {
  let tempSum = 0;
  let lightSum = 0;
  let roomsCount = 0;

  for (let [id, name] of Object.entries(roomMap)) {
    const isChecked = document.getElementById(id).checked;

    const temp = isChecked ? baseData.temperature[name] : 0;
    const usage = isChecked ? baseData.electricity[name] : 0;
    const light = isChecked ? baseData.lights[name] : 0;


    const bar = document.getElementById(name);
    if (bar) bar.style.width = `${usage}%`;

    tempSum += temp;
    lightSum += light;
    roomsCount++;
  }


  const avgTemp = tempSum / roomsCount;
  const tempPercent = Math.min(100, avgTemp / 50 * 100);
  document.getElementById("temp_value").textContent = `${avgTemp.toFixed(0)}°C`;
  document.getElementById("temp_circle").style.background = `
    conic-gradient(from 190deg, #ffcc40 0% ${tempPercent}%, #ffeeb6 ${tempPercent}% 100%)`;


  const lightPercent = Math.min(100, lightSum);
  document.getElementById("usage_value").textContent = `${lightSum.toFixed(0)}%`;
  document.getElementById("usage_circle").style.background = `
    conic-gradient(from 190deg, #906eff 0% ${lightPercent}%, #c9c3fe ${lightPercent}% 100%)`;
}


for (let id of Object.keys(roomMap)) {
  document.getElementById(id).addEventListener('change', updateData);
}


updateData();
