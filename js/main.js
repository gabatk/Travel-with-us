const nav = document.querySelector('.nav');
const navBtn = document.querySelector('.burger-btn');
const allNavItems = document.querySelectorAll('.nav__item');
const navBtnBars = document.querySelector('.burger-btn__bars');
const allSections = document.querySelectorAll('.section');
const footerYear = document.querySelector('.footer__year');

function handleNav() {
	nav.classList.toggle('nav--active');

	navBtnBars.classList.remove('black-bars-color');

	allNavItems.forEach(navItem => {
		navItem.addEventListener('click', () => {
			nav.classList.remove('nav--active');
		});
	});

	handleNavItemsAnimation();
}

const handleNavItemsAnimation = () => {
	let delayTime = 0;

	allNavItems.forEach(navItem => {
		navItem.classList.toggle('nav-items-animation');
		navItem.style.animationDelay = '.' + delayTime + 's';
		delayTime++;
	});
};

const deleteAnimation = () => {
	allNavItems.forEach(navItem => {
		navItem.classList.remove('nav-items-animation');
	});
};

const handleCurrentYear = () => {
	const year = new Date().getFullYear();
	footerYear.innerText = year;
};

const handleObserver = () => {
	const currentSection = window.scrollY;
	allSections.forEach(section => {
		if (
			section.classList.contains('white-section') &&
			section.offsetTop <= currentSection + 60
		) {
			navBtnBars.classList.add('black-bars-color');
		} else if (
			!section.classList.contains('white-section') &&
			section.offsetTop <= currentSection + 60
		) {
			navBtnBars.classList.remove('black-bars-color');
		}
	});
};

handleCurrentYear();
navBtn.addEventListener('click', handleNav);
window.addEventListener('scroll', handleObserver);
