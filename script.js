function checkAnswer(ans) {
  const result = document.getElementById("quizResult");

  if (ans === "a") {
    result.innerHTML = "✅ Correct! Once a week is a healthy habit.";
  } else {
    result.innerHTML = "⚠️ Try once a week for better hair health.";
  }
}

function showPerson(name) {
  const display = document.getElementById("personDisplay");

  let title = "";
  let image = "";

  if (name === "zendaya") {
    title = "Zendaya";
    image = "https://upload.wikimedia.org/wikipedia/commons/3/3e/Zendaya_2019_by_Glenn_Francis.jpg";
  }

  if (name === "taylor") {
    title = "Taylor Swift";
    image = "https://upload.wikimedia.org/wikipedia/commons/f/f2/Taylor_Swift_Red_Tour_5%2C_2013.jpg";
  }

  if (name === "billie") {
    title = "Billie Eilish";
    image = "https://upload.wikimedia.org/wikipedia/commons/3/3f/Billie_Eilish_2019_by_Glenn_Francis.jpg";
  }

  display.innerHTML = `
    <h3>${title}</h3>
    <img src="${image}" alt="${title}">
  `;
}
