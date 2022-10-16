Goblets = 1000;
Goblets = Number(localStorage.getItem('Goblets'));
document.getElementById('goblet').textContent = Goblets;

if (Goblets < 300) {
	document.getElementById('Rank').textContent = 'Бронзовый';
	document.getElementById('Rank').style.color = 'brown';
}

if (Goblets >= 300) {
	document.getElementById('Rank').textContent = 'Серебреный';
	document.getElementById('Rank').style.color = 'grey';
}

if (Goblets >= 1000) {
	document.getElementById('Rank').textContent = 'Золотой';
	document.getElementById('Rank').style.color = 'yellow';
}

if (Goblets >= 2000) {
	document.getElementById('Rank').textContent = 'Рубиновый';
	document.getElementById('Rank').style.color = '#9f003d';
}

if (Goblets >= 3000) {
	document.getElementById('Rank').textContent = 'Платиновый';
	document.getElementById('Rank').style.color = '#c5ede7';
}

if (Goblets >= 5000) {
	document.getElementById('Rank').textContent = 'Алмазный';
	document.getElementById('Rank').style.color = '#36ffe1';
}

if (Goblets >= 10000) {
	document.getElementById('Rank').textContent = 'Космический';
	document.getElementById('Rank').style.color = 'black';
}

// Вложение Кубков

inp1 = document.getElementById('Input');

function Function1() {
	WinGobletsOrLose = Math.ceil(Math.random() * 100)
	YouWin = inp1.value;

	if (YouWin > Goblets) {
		alert('Вложить Больше Кубков Чем У Тебя Есть Нельзя!!')
		return 1
	}

	if (YouWin <= 0) {
		alert('Нельзя Вложить 0 Кубков И Нельзя Вложить Минусовое Число Кубков!!')
		return 1
	}

    if (WinGobletsOrLose >= 80) {
    	YouWin1 = YouWin * 2;
    	Goblets += YouWin1;
    	Number(localStorage.setItem('Goblets', Goblets));
    	document.getElementById('goblet').textContent = Goblets;

    	alert('Ты Выйграл ' + YouWin1 + ' Кубков')

    	if (Goblets < 300) {
			document.getElementById('Rank').textContent = 'Бронзовый';
			document.getElementById('Rank').style.color = 'brown';
		}

		if (Goblets >= 300) {
			document.getElementById('Rank').textContent = 'Серебреный';
			document.getElementById('Rank').style.color = 'grey';
		}

		if (Goblets >= 1000) {
			document.getElementById('Rank').textContent = 'Золотой';
			document.getElementById('Rank').style.color = 'yellow';
		}

		if (Goblets >= 2000) {
			document.getElementById('Rank').textContent = 'Рубиновый';
			document.getElementById('Rank').style.color = '#9f003d';
		}

		if (Goblets >= 3000) {
			document.getElementById('Rank').textContent = 'Платиновый';
			document.getElementById('Rank').style.color = '#c5ede7';
		}

		if (Goblets >= 5000) {
			document.getElementById('Rank').textContent = 'Алмазный';
			document.getElementById('Rank').style.color = '#36ffe1';
		}

		if (Goblets >= 10000) {
			document.getElementById('Rank').textContent = 'Космический';
			document.getElementById('Rank').style.color = 'black';
		}

    }
    else{
    	Goblets -= YouWin;
    	Number(localStorage.setItem('Goblets', Goblets));
    	document.getElementById('goblet').textContent = Goblets;

    	if (Goblets < 300) {
			document.getElementById('Rank').textContent = 'Бронзовый';
			document.getElementById('Rank').style.color = 'brown';
		}

		if (Goblets >= 300) {
			document.getElementById('Rank').textContent = 'Серебреный';
			document.getElementById('Rank').style.color = 'grey';
		}

		if (Goblets >= 1000) {
			document.getElementById('Rank').textContent = 'Золотой';
			document.getElementById('Rank').style.color = 'yellow';
		}

		if (Goblets >= 2000) {
			document.getElementById('Rank').textContent = 'Рубиновый';
			document.getElementById('Rank').style.color = '#9f003d';
		}

		if (Goblets >= 3000) {
			document.getElementById('Rank').textContent = 'Платиновый';
			document.getElementById('Rank').style.color = '#c5ede7';
		}

		if (Goblets >= 5000) {
			document.getElementById('Rank').textContent = 'Алмазный';
			document.getElementById('Rank').style.color = '#36ffe1';
		}

		if (Goblets >= 10000) {
			document.getElementById('Rank').textContent = 'Космический';
			document.getElementById('Rank').style.color = 'black';
		}
    }
}