//tabele js do bloków z domu

const dni = ["Niedziela", "Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota"];

const d = new Date();
let day = dni[d.getDay()];
console.log(day)
let blok1 = document.getElementById("dzien");
blok1.textContent = `${day}`;

const temperatura = [25,28,16,17,16,15,30];
let temperature_show = temperatura[d.getDay()];
console.log(temperature_show);
let blok2 = document.getElementById("temp")
blok2.textContent = `${temperature_show}°C`

// kuchnia łazienka salon pokój

  const House_temp = [
    { name: 'kuchnia', temp: 32 },
    { name: 'lazienka', temp: 40 },
    { name: 'salon', temp: 18 },
    { name: 'pokoj', temp: 14 }
  ];

  const suma = House_temp.reduce((s, r) => s + r.temp, 0);
  const average = suma / House_temp.length;

  const maxTemp = 50; 
  const percent = Math.min(100, (average / maxTemp) * 100);

  const circle = document.getElementById("temp_circle");
  circle.style.background = `conic-gradient(
    from 190deg,
    orange 0% ${percent}%,
    #ddd ${percent}% 100%
  )`;

  document.getElementById("temp_value").textContent = `${average.toFixed(0)}°C`;

