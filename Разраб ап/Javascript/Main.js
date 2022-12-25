P$ = 0;
BIT = 0;
Goblets = Number(localStorage.getItem('Goblets'));
BIT = Number(localStorage.getItem("BIT"));
P$ = Number(localStorage.getItem("P$"));
XP =  Number(localStorage.getItem('XP'));
Level = Number(localStorage.getItem('Level'));
document.getElementById('123').textContent = P$;
document.getElementById('BIT').textContent = BIT;


function AddP$(){
	P$ += 1;
	Number(localStorage.setItem("P$", P$));
	document.getElementById('123').textContent = P$;
}

function Buy1BIT() {
	if (P$ >= 1000) {
		P$ -= 1000;
		BIT += 1;
		alert("Вы Купили 1 BIT!!!!")
		Number(localStorage.setItem("BIT", BIT))
		Number(localStorage.setItem("P$", P$));
		document.getElementById('123').textContent = P$;
		document.getElementById('BIT').textContent = BIT;
	}
	else{
		alert("Тебе Не Хватает P$!!!")
	}
}

function BuyBronseCase() {
	if (P$ >= 300) {
		P$ -= 300;
		Random = Math.ceil(Math.random() * 500);
		RandomToGoblets = Math.ceil(Math.random() * 500)
		P$ += Random;
		XP += 5;
		document.getElementById('123').textContent = P$;
		Number(localStorage.setItem("P$", P$));
		Number(localStorage.setItem("XP", XP));



		alert('Ты Выйграл ' + Random + 'P$')

		if (RandomToGoblets >= 300) {
			RandomGoblets = Math.ceil(Math.random() * 5);
			Goblets += RandomGoblets;

			alert('Ты Выйграл ' + RandomGoblets + ' Кубка(ов)')
			Number(localStorage.setItem('Goblets', Goblets));
		}
	}
	
}

function BuySliverCase() {
	if (P$ >= 1000) {
		P$ -= 1000;
		Random = Math.ceil(Math.random() * 1500);
		RandomToGoblets = Math.ceil(Math.random() * 500)
		P$ += Random;
		XP += 10;
		document.getElementById('123').textContent = P$;
		Number(localStorage.setItem("P$", P$));
		Number(localStorage.setItem("XP", XP));



		alert('Ты Выйграл ' + Random + 'P$')

		if (RandomToGoblets >= 300) {
			RandomGoblets = Math.ceil(Math.random() * 20);
			Goblets += RandomGoblets;

			alert('Ты Выйграл ' + RandomGoblets + ' Кубка(ов)')
			Number(localStorage.setItem('Goblets', Goblets));
		}
	}
	
}

function BuyGoldenCase() {
	if (P$ >= 5000) {
		P$ -= 5000;
		Random = Math.ceil(Math.random() * 7000);
		RandomToGoblets = Math.ceil(Math.random() * 500)
		P$ += Random;
		XP += 50;
		document.getElementById('123').textContent = P$;
		Number(localStorage.setItem("P$", P$));
		Number(localStorage.setItem("XP", XP));



		alert('Ты Выйграл ' + Random + 'P$')

		if (RandomToGoblets >= 350) {
			RandomGoblets = Math.ceil(Math.random() * 50);
			Goblets += RandomGoblets;

			alert('Ты Выйграл ' + RandomGoblets + ' Кубка(ов)')
			Number(localStorage.setItem('Goblets', Goblets));
		}
	}
	
}

// Уровень

if (XP >= 1000) {
	XP = 0;
	Level += 1;
	Number(localStorage.setItem("XP", XP));
	Number(localStorage.setItem("Level", Level));
}

function Add10P$(){
	if (Level >= 3) {
		P$ += 10;
		Number(localStorage.setItem("P$", P$));
		document.getElementById('123').textContent = P$;
	}
	else {
		alert('У Тебя Нету 3 Уровня!!')
	}
}