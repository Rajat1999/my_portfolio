// alert("this site is under construction! :)");



const url = "https://official-joke-api.appspot.com/jokes/random";
const setup = document.querySelector('.setup');
const punchline = document.querySelector('.punchline');

const res = fetch(url);
res.then(response => response.json())
.then(data => {
    setup.textContent = data.setup 
    punchline.textContent = data.punchline;
})
.catch(error => console.log(error));

//  <========================================<    GALLERY PAGE    >========================================>

const img = document.querySelectorAll("#img");
const blur = document.querySelector("#blur");
const bg = document.querySelector("#bg");

img.forEach((e) => {
    e.addEventListener("click", () => {
        blur.classList.toggle("display");
        bg.classList.toggle("display");
        // bg.style.display = "block";
        bg.style.backgroundImage = `url("../images/typing_keyboard.png")`;
        bg.style.backgroundPosition = "center";
        bg.style.backgroundRepeat = "no-repeat";
        bg.style.backgroundSize = "cover";
        bg.style.transition = "5s";
    });
});