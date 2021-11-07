// NAVBAR FUNCTIONALITY SETUP
const burgerMenu = document.querySelector(".burger-menu");
const navBarLinks = document.querySelector(".navbar-links");
const burgerIcon = document.querySelector(".burger-icon");
const closeIcon = document.querySelector(".close-icon");
const navlink = document.querySelectorAll(".nav-link");

burgerMenu.addEventListener("click", () => {
	navBarLinks.classList.toggle("active");
	burgerIcon.classList.toggle("no-show");
	closeIcon.classList.toggle("show");
});

//JAVASCRIPT CAROUSEL FUNCTIONALITY

const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const dot = document.querySelectorAll(".dot");

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
prevBtn.addEventListener("click", function () {
	plusSlides(-1);
});
nextBtn.addEventListener("click", function () {
	plusSlides(1);
});

function plusSlides(n) {
	showSlides((slideIndex = slideIndex + n));
}

// Thumbnail image controls
dot.forEach((item) => {
	item.addEventListener("click", () => {
		if (item.classList.contains("first-dot")) {
			currentSlide(1);
		}
		if (item.classList.contains("second-dot")) {
			currentSlide(2);
		}
		if (item.classList.contains("third-dot")) {
			currentSlide(3);
		}
		if (item.classList.contains("fourth-dot")) {
			currentSlide(4);
		}
		if (item.classList.contains("fifth-dot")) {
			currentSlide(5);
		}
	});
});

function currentSlide(n) {
	showSlides((slideIndex = n));
}

function showSlides(apple) {
	let i;
	const slides = document.getElementsByClassName("myslides");
	const dots = document.getElementsByClassName("dot");
	if (apple > slides.length) {
		slideIndex = 1;
	}
	if (apple < 1) {
		slideIndex = slides.length;
	}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");
	}
	slides[slideIndex - 1].style.display = "block";
	dots[slideIndex - 1].className += " active";
}

// DYNAMIC DATE SET UP

const date = document.querySelector(".date");
date.innerHTML = new Date().getFullYear();


const navbar = document.querySelector(".navbar");
const topLink = document.querySelector(".top-link-btn");

// SCROLL EVENT FUNCTIONALITY
window.addEventListener("scroll", () => {
	const scrollHeight = window.pageYOffset;

	if (scrollHeight > 600) {
		topLink.classList.add("show-link");
	} else {
		topLink.classList.remove("show-link");
	}
});

// NAVLINK SCROLL FUCNTIONALITY

navlink.forEach((navitem) => {
	navitem.addEventListener("click", (e) => {
		// hamburger fucntionality
		navBarLinks.classList.remove("active");
		burgerIcon.classList.toggle("show");
		closeIcon.classList.toggle("no-show");
		// preventDefault
		e.preventDefault();
		// navigate to specific spot
		const id = e.currentTarget.getAttribute("href").slice(1);
		const element = document.getElementById(id);

		const navHeight = navbar.getBoundingClientRect().height;

		let position = element.offsetTop - navHeight;
		window.scrollTo({
			left: 0,
			top: position,
		});
	});
});
