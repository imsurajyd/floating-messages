const romanticShort = [
  { text: "My Love 💖" },
  { text: "Miss U ❤️" },
  { text: "Forever 💞" },
  { text: "Only U ❤️" },
  { text: "My Jaan ❤️" },
  { text: "Love U 💗" },
  { text: "You & Me 💕" },
  { text: "My Heart 💓" },
  { text: "Always ❤️" },
  { text: "My Life 💖" },
  { text: "Soulful ❤️" },
  { text: "My Baby 💗" },
  { text: "Warm Hug 🤗" },
  { text: "Sweet U 💞" },
  { text: "My Star ⭐" },
  { text: "My Moon 🌙" },
  { text: "You Mine ❤️" },
  { text: "My Angel 😇" },
  { text: "Dear U 💖" },
  { text: "Cute U 🥺" },
  { text: "My Bliss 💗" },
  { text: "My Joy ❤️" },
  { text: "With U ❤️" },
  { text: "My Safe ❤️" },
  { text: "My Wish 💫" },
  { text: "My Dream 💞" },
  { text: "My Feel ❤️" },
  { text: "Hold Me 🤲" },
  { text: "My One ❤️" },
  { text: "Be Mine 💗" },
  { text: "My Gem 💎" },
  { text: "Warmth ❤️" },
  { text: "My Soft 💕" },
  { text: "My Sky ☁️" },
  { text: "My Sun ☀️" },
  { text: "Your Joy ❤️" },
  { text: "My Hug 🤗" },
  { text: "Near U 💗" },
  { text: "My Soul ❤️" },
  { text: "My Kiss 😘" },
  { text: "Hey Love 💞" },
  { text: "Sweet ❤️" },
  { text: "Cutie ❤️" },
  { text: "Baby ❤️" },
  { text: "Loveya 💗" },
  { text: "Only Me 💕" },
  { text: "Feel U ❤️" },
  { text: "My Vibe 💖" },
  { text: "My Glow ✨" },
  { text: "True U ❤️" },
];

let btn = document.querySelector("button");
let main = document.querySelector("main");
let img = document.querySelector("img");

function addRandomText() {
  let h1 = document.createElement("h1");
  let randomIndex = Math.floor(Math.random() * romanticShort.length);
  h1.innerText = romanticShort[randomIndex].text;

  h1.style.position = "absolute";
  h1.style.whiteSpace = "nowrap";
  h1.style.fontSize = Math.random() * 5 + 10 + "px";

  main.appendChild(h1);

  const maxX = window.innerWidth - h1.offsetWidth;
  const maxY = window.innerHeight - h1.offsetHeight;

  let overlapping = true;
  let attempts = 0;
  let x, y;

  let existingElements = main.querySelectorAll("h1");

  while (overlapping && attempts < 50) {
    x = Math.random() * maxX;
    y = Math.random() * maxY;
    overlapping = false;

    const newRect = {
      left: x,
      right: x + h1.offsetWidth,
      top: y,
      bottom: y + h1.offsetHeight,
    };

    for (let el of existingElements) {
      if (el === h1) continue;
      const oldRect = el.getBoundingClientRect();

      if (
        !(
          newRect.right < oldRect.left ||
          newRect.left > oldRect.right ||
          newRect.bottom < oldRect.top ||
          newRect.top > oldRect.bottom
        )
      ) {
        overlapping = true;
        break;
      }
    }
    attempts++;
  }

  if (!overlapping) {
    h1.style.left = `${x}px`;
    h1.style.top = `${y}px`;
    return true;
  } else {
    h1.remove();
    return false;
  }
}

btn.addEventListener("click", function () {
    img.style.display = "none";
  btn.style.pointerEvents = "none";
  btn.disabled = true;
  btn.innerText = "Babu... ❤️";

  let timer = setInterval(() => {
    let success = addRandomText();

    if (!success) {
      clearInterval(timer);
      btn.innerText = "Love You Babu.💕";
      btn.style.color = "#193b60";
      btn.style.fontWeight = "600";
      btn.style.boxShadow = "none";
      btn.style.backgroundColor = "#ffdfea";

    }
  }, 300);
});
