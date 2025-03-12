const textContent = document.querySelector(".card-text");
const button = document.querySelector("a");

button.addEventListener("click", async () => {
  await fetch("https://icanhazdadjoke.com", {
    method: "GET",
    headers: { accept: "application/json" },
  })
    .then((res) => res.json())
    .then((data) => {
      textContent.innerText = data.joke;
    })
    .catch((Err) => {
      console.log(Err);
    });
});
