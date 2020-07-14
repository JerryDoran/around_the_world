const navButtons = Array.from(document.querySelectorAll('.nav-btn'));

navButtons.forEach((btn) => {
  btn.onclick = () => {
    btn.parentElement.parentElement.classList.toggle('change');
  };
});
