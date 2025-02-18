const cursor = document.getElementById('cursor');

document.addEventListener('mousemove', (e) => {
  if (navigator.maxTouchPoints > 0) {
    cursor.classList.add('unvisible');
    return;
  }
  if (navigator.maxTouchPoints === 0) {
    const x = e.clientX;
    const y = e.clientY;
    cursor.style.transform = `translate(${x - 10}px, ${y - 10}px)`;
  }
});
