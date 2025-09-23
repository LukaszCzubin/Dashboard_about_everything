const roomMap = {
  kitchen: 'kuchnia',
  bath: 'lazienka',
  saloon: 'salon',
  room: 'pokoj'
};


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
