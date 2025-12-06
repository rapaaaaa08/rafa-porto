feather.replace();
AOS.init();
card.addEventListener("mousemove", (e) => {
  const rect = card.getBoundingClientRect();
  const x = (e.clientX - rect.left) / rect.width;
  const y = (e.clientY - rect.top) / rect.height;

  const rotateX = (y - 0.5) * 10;
  const rotateY = (x - 0.5) * -10;

  card.style.transform = `
      rotateX(${rotateX}deg) 
      rotateY(${rotateY}deg) 
      scale(1.03)
    `;
});
const form = document.getElementById("contact-form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = new FormData(form);

  await fetch("https://formspree.io/f/mrbnlrno", {
    method: "POST",
    body: data,
    headers: { Accept: "application/json" },
  });
  console.log(data);

  location.reload();
});
const toggle = document.getElementById("menu-toggle");
const menu = document.getElementById("navbar-menu");

if (toggle && menu) {
  toggle.addEventListener("click", () => {
    menu.classList.toggle("active");
  });
}
