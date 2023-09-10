const btn = document.querySelector(".dark-btn");
btn.addEventListener("click", () => {
    const page = document.querySelector(".full-page");
    page.classList.toggle("dark"); // Use toggle to switch between dark and non-dark states
});
