window.addEventListener('scroll', () => {
  document.querySelectorAll('.progress').forEach(bar => {
    const barTop = bar.getBoundingClientRect().top;
    if (barTop < window.innerHeight) {
      bar.style.width = bar.getAttribute('style').split(':')[1];
    }
  });
});
