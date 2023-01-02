document.addEventListener('mousemove', (e) => {
  console.log(e.clientX, e.clientY);
  const R = Math.round((e.pageX * 255) / window.innerWidth);
  const B = Math.round((e.pageY * 255) / window.innerHeight);
  const color = `rgb(${R},0,${B})`;
  console.log(color);
  document.body.style.backgroundColor = color;
  // rgb(0,0,0)
});
