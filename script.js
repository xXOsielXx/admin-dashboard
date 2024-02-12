const toggleBtn = document.getElementById('toggle');
const toggleIcon = document.getElementById('toggle-icon');
const header = document.getElementById("header");
const aside = document.getElementById("aside");
const container = document.getElementById("container");
const cards = document.querySelectorAll(".card");
const announcements = document.getElementById("announcements-list");

toggleBtn.addEventListener("click", () => {
	if (toggleIcon.classList.contains('fa-moon')) {
		header.style.cssText = `
		background-color: var(--dark-mode-primary-color);
		color: var(--secondary-font-color)`;
		aside.style.backgroundColor = "var(--dark-mode-secondary-color)";
		container.style.cssText = `
		background-color: var(--dark-mode-terciary-color);
		color: var(--secondary-font-color)`;
		for (let i = 0; i < cards.length; i++) {
			cards[i].style.cssText = `
			background-color: var(--dark-mode-primary-color);
			color: var(--secondary-font-color)`;
		}
		announcements.style.cssText = `
		background-color: var(--dark-mode-primary-color);
		color: var(--secondary-font-color)`;
		
		toggleIcon.classList.remove("fa-moon");
    	toggleIcon.classList.add("fa-sun")
	}
	else {
		header.style.cssText = `
		background-color: var(--primary-color);
		color: var(--primary-font-color)
		`;
		aside.style.backgroundColor = "var(--secondary-color)";
		container.style.cssText = `
		background-color: var(--terciary-color);
		color: var(--primary-font-color)`;
		for (let i = 0; i < cards.length; i++) {
			cards[i].style.cssText = `
			background-color: var(--primary-color);
			color: var(--primary-font-color)`;
		}
		announcements.style.cssText = `
		background-color: var(--primary-color);
		color: var(--primary-font-color)`;

		toggleIcon.classList.remove("fa-sun");
    	toggleIcon.classList.add("fa-moon")
	}
})