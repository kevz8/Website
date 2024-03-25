const cursor = document.querySelector('.cursor');
const content = document.querySelector('.content');

document.addEventListener('mousemove', e => {
    const { clientX, clientY } = e;

    const cursorX = cursor.offsetLeft + cursor.offsetWidth / 2;
    const cursorY = cursor.offsetTop + cursor.offsetHeight / 2;

    const distance = Math.sqrt((clientX - cursorX) ** 2 + (clientY - cursorY) ** 2);

    const maxDistance = 100;
    const expansionFactor = Math.min(distance / maxDistance, 1);

    const newWidth = 20 + 20 * expansionFactor;
    const newHeight = 20 + 20 * expansionFactor;

    cursor.style.width = `${newWidth}px`;
    cursor.style.height = `${newHeight}px`;
    cursor.style.transform = `translate3d(${clientX - newWidth / 2}px, ${clientY - newHeight / 2}px, 0)`;
});

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        content.classList.add('visible');
        document.querySelector('.welcome').style.opacity = '0';
    } else {
        content.classList.remove('visible');
        document.querySelector('.welcome').style.opacity = '1';
    }
});