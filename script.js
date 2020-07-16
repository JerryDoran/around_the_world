const navButtons = Array.from(document.querySelectorAll('.nav-btn'));
const navLinks = Array.from(document.querySelectorAll('.nav-link'));

const colors = ['#6495ed', '#7fffd4', '#ffa07a', '#f08080', '#afeeee'];
let i = 0;

navButtons.forEach((btn) => {
  btn.onclick = () => {
    btn.parentElement.parentElement.classList.toggle('change');
  };
});

navLinks.forEach((link) => {
  link.style.cssText = `background-color: ${colors[i]}`;
  i += 1;
});
