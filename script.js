document.querySelectorAll(".title").forEach(item => {
    item.addEventListener("click", () => {
        let content = item.nextElementSibling;

        content.style.display =
        content.style.display === "block" ? "none" : "block";
    });
});