const cube= document.querrySelector('.cube');
cube.addEventListener('mouseover', () => {
    cube.style.animationPlayState = 'paused';
});

cube.addEventListener('mouseout', () => {
    cube.style.animationPlayState ='running';
});