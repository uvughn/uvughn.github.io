const handleClick = (name) => {
  location.href = `https://uvughn.github.io/availableInstructors.html`;
};

const data = [
  {
    name: "Tina",
    description: "Tina guides you to find balance and strength in every pose",
    image: "tina2.avif", // image for Tina
  },
  {
    name: "Amy",
    description: "Amy inspires mindfulness and flexibility in her yoga practice",
    image: "amy.avif", // image for Amy
  },
  {
    name: "Crystal",
    description: "Crystal helps you connect your body, mind, and breath",
    image: "crystal.avif", // image for Crystal
  },
];

let str = "";
for (let i in data) {
  str += `<div class="card">
                <img src="${data[i].image}" alt="${data[i].name}">
                <h2>${data[i].name}</h2>
                <p>${data[i].description}</p>
                <button onclick="handleClick('${data[i].name.toLowerCase()}')">Book a session</button>
            </div>`;
}

const div = document.getElementById("cards");
// console.log(div.innerHTML);
div.innerHTML = str;
