// script.js
function updateClock() {
  const timezone = document.getElementById('timezone').value;
  const now = new Date();
  
  // Převod do vybrané časové zóny
  const options = { timeZone: timezone, hour: '2-digit', minute: '2-digit', second: '2-digit' };
  const formatter = new Intl.DateTimeFormat('cs-CZ', options);
  document.getElementById('time').textContent = formatter.format(now);

  // Změna pozadí podle časové zóny
  const backgrounds = {
    "Europe/Prague": "url('https://www.vyletnik.cz/wp-content/uploads/2021/02/praha_pixabay_free.jpg')",
    "America/New_York": "url('https://www.cksen.cz/modules/articles/images/Central-Park-aerial-view.jpg')",
    "Asia/Tokyo": "url('https://img.static-kl.com/images/media/216337E7-BFE5-4AA6-9C9E180C3E5AC6A2')",
    "Australia/Sydney": "url('https://www.go2australia.cz/sites/default/files/pruvodce/sydney.jpg')",
    "Africa/Cairo": "url('https://media.cntraveler.com/photos/655cdf1d2d09a7e0b27741b5/16:9/w_2560%2Cc_limit/Cairo%2520Egypt_GettyImages-1370918272.jpg')",
  };

  document.body.style.backgroundImage = backgrounds[timezone];
}

// Aktualizace času každou sekundu
setInterval(updateClock, 1000);

// Okamžitá inicializace
updateClock();

function getGreeting() {
  const hours = new Date().getHours();
  if (hours < 12) return "Dobré ráno!";
  if (hours < 18) return "Dobré odpoledne!";
  return "Dobrý večer!";
}

document.getElementById('greeting').textContent = getGreeting();

