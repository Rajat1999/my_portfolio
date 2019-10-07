// alert("this site is under construction! :)");



const url = 'https://official-joke-api.appspot.com/jokes/random';
const setup = document.querySelector('.setup');
const punchline = document.querySelector('.punchline');

const res = fetch(url);
res.then(response => response.json())
.then(data => {
    setup.textContent = data.setup 
    punchline.textContent = data.punchline;
})
.catch(error => console.log(error))

 