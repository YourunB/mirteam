const cursor = document.createElement('div');
cursor.className = 'cursor unvisible';
document.body.prepend(cursor);

document.addEventListener('mousemove', (e) => {
  if (navigator.maxTouchPoints > 0) {
    cursor.classList.add('unvisible');
  } else {
    cursor.classList.remove('unvisible');
    const x = e.clientX;
    const y = e.clientY;
    cursor.style.transform = `translate(${x - 10}px, ${y - 10}px)`;
  }
});
