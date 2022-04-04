// what-we-do section

let expand = document.querySelector(".text-area .expand");
let description = document.querySelector(".text-area .description");

expand.addEventListener("click", function() {
	description.classList.toggle("enabled");
	expand.classList.toggle("enabled");
});