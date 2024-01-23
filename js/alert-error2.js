export const AlertError2 = {
    element: document.querySelector('.alert-error2'),
    open() {
        AlertError2.element.classList.add('open');
    },
    close() {
        AlertError2.element.classList.remove('open')
    }
}