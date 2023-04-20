var prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
var currentTheme = localStorage.getItem("theme");


function setTheme(mode) {
	if (mode == "dark") {
		localStorage.setItem("theme", "dark");
		document.documentElement.setAttribute('data-theme', 'dark')

	}
	else if (mode == "light") {
		localStorage.setItem("theme", "light");
		document.documentElement.setAttribute('data-theme', 'light')
	}

	currentTheme = localStorage.getItem("theme");
}


if (currentTheme == null) {
	if (prefersDarkMode) {
		setTheme("dark");
	}
	else {
		setTheme("light");
	}
}
else {
	if (prefersDarkMode && currentTheme === "light") {
		setTheme("light");
	}
	else if (!prefersDarkMode && currentTheme === "dark") {
		setTheme("dark");
	}
}


document.addEventListener("DOMContentLoaded", function(event){
	themeBtns = document.getElementsByClassName("theme-btn");
	for (let i = 0; i < themeBtns.length; i++) {
		let btn = themeBtns[i];
		btn.addEventListener('click', () => {
			if (localStorage.getItem("theme") === "dark") {
				setTheme("light");
			}
			else {
				setTheme("dark")
			}
		});
	}

	toTopBtn = document.getElementsByClassName("top-btn")[0];
	toTopBtn.addEventListener('click', () => {
		window.scrollTo(0, 0);
	})
});