let cryptoDetail = document.getElementById("crypto-top");
let crypto = document.getElementById("crypto");
fetch(
  "https://api.unsplash.com/photos/random?query=nature&client_id=E6DD2AcR_rPkdoJeru95g7rSfXkqyolMy-8u6xi4xLw&orientation=landscape"
)
  .then((res) => res.json())
  .then((dat) => {
    (document.body.style.background = `url('${dat.urls.regular})'`),
      (document.getElementById("user").textContent = `by:${dat.user.name}`);
  })
  .catch((err) => {
    document.body.style.background = `url('https://images.unsplash.com/photo-1476908965434-f988d59d7abd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMTk3MjV8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTAwMTI5MDQ&ixlib=rb-1.2.1&q=80&w=1080')`;
    document.getElementById("user").textContent = "Karsten wurth";
  });

fetch("https://api.coingecko.com/api/v3/coins/dogecoin")
  .then((res) => {
    if (!res.ok) {
      throw Error("Something went wrong");
    }
    return res.json();
  })
  .then((dat) => {
    let currentData = `<p>$${dat.market_data.current_price.usd}</p>`;
    let high24 = `<p>${dat.market_data.high_24h.usd}</p>`;
    let low24 = `<p>${dat.market_data.low_24h.usd}</p>`;
    cryptoDetail.innerHTML = `<img src="${dat.image.thumb}" alt='dogecoin image'><span>${dat.name}</span>`;
    crypto.innerHTML += currentData + high24 + low24;
  })
  .catch((err) => {
    console.log(err);
  });

let showTime = document.getElementById("displayTime");
function displayTime() {
  let time = new Date();
  let hr = time.getHours();

  let timeformat = "AM";
  let minutes = time.getMinutes();
  if (hr > 12) {
    hr = hr - 12;
    timeformat = "PM";
  }

  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  showTime.innerText = hr + ":" + minutes + " " + timeformat;
}

setInterval(displayTime, 1000);

navigator.geolocation.getCurrentPosition((posi) => {
  let lat = posi.coords.latitude;
  let lon = posi.coords.longitude;

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=ad40b689bbc270059e7ca074b91d0509&units=metric `
  )
    .then((res) => {
      if (!res.ok) {
        throw Error("Oops something wrong");
      }
      return res.json();
    })
    .then((dat) => {
      console.log(dat);
      console.log();
      let icon_id = dat.weather[0].icon;
      let url = `https://openweathermap.org/img/w/${icon_id}.png`;
      console.log(url);

      document.getElementById(
        "weather-top"
      ).innerHTML = `<img src=${url}> <p>${Math.round(
        dat.main.temp
      )}<sup>O</sup>c</p>`;
      document.getElementById("weather").innerHTML += `
         <p>${dat.name}</p>`;
    })
    .catch((err) => console.log(err));
});
