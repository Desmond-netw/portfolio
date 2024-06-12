$(document).ready(function () {
	$('.menu-toggler').on('click', function() {
		// console.log("Menu Toggler Clicked!");
		$(this).toggleClass('open');
		$('.top-nav').toggleClass('open');
		
	});
});


// ////////////////// social media list ///////////////
const list = document.querySelectorAll(".so_list");
function activeLink() {
	list.forEach((item) => item.classList.remove("active"));
	this.classList.add("active");
};
list.forEach((item) => item.addEventListener("click", activeLink))