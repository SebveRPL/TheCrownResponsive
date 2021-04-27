// $(document).ready(function () {
// 	$(".ham_menu").click(function () {
// 		if (
// 			$(".navigation").hasClass("on") ||
// 			$(".navigation").hasClass("off")
// 		) {
// 			$(".navigation").toggleClass("on");
// 			$(".navigation").toggleClass("off");
// 		} else {
// 			$(".navigation").toggleClass("on");
// 		}
// 		$(".line").toggleClass("animate");
// 	});
// });

const btnHam = document.querySelector(".ham_menu");
const spanLines = document.querySelectorAll(".line");

btnHam.addEventListener("click", function () {
	for (let i = 0; i < spanLines.length; i++) {
		spanLines[i].classList.toggle("animate");
	}
	document.querySelector(".navigation").classList.toggle("on");
});
