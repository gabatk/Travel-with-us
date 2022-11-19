const nav = document.querySelector('.nav');
const navBtn = document.querySelector('.burger-btn');
const allNavItems = document.querySelectorAll('.nav__item');

function handleNav() {
	nav.classList.toggle('nav--active');

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

navBtn.addEventListener('click', handleNav);
