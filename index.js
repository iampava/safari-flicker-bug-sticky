const header = document.querySelector('header');
const scrollBottomRef = document.querySelector('#bottomEl');

if (header !== null && scrollBottomRef !== null) {
    header.addEventListener('click', () => {
        scrollBottomRef.scrollIntoView();
    })
}