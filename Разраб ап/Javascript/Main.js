P$ = 0;
BIT = 0;
Goblets = Number(localStorage.getItem('Goblets'));
BIT = Number(localStorage.getItem("BIT"));
P$ = Number(localStorage.getItem("P$"));
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
		document.getElementById('123').textContent = P$;
		Number(localStorage.setItem("P$", P$));



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
		document.getElementById('123').textContent = P$;
		Number(localStorage.setItem("P$", P$));



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
	if (P$ >= 1000) {
		P$ -= 1000;
		Random = Math.ceil(Math.random() * 7000);
		RandomToGoblets = Math.ceil(Math.random() * 500)
		P$ += Random;
		document.getElementById('123').textContent = P$;
		Number(localStorage.setItem("P$", P$));



		alert('Ты Выйграл ' + Random + 'P$')

		if (RandomToGoblets >= 350) {
			RandomGoblets = Math.ceil(Math.random() * 50);
			Goblets += RandomGoblets;

			alert('Ты Выйграл ' + RandomGoblets + ' Кубка(ов)')
			Number(localStorage.setItem('Goblets', Goblets));
		}
	}
	
}