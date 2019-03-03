const button = document.getElementById('btn');
const div = document.getElementById('animal-info');
btn.addEventListener('click', (e) => {
	let ourRequest = new XMLHttpRequest();
	ourRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-1.json');
	ourRequest.onload = function(){
		const data = JSON.parse(ourRequest.responseText);
		for(let i = 0; i < data.length; i += 1){
			const li = document.createElement('li');
			li.textContent= data[i];
			div.appendChild(li);
		}
	}
	ourRequest.send();
});



