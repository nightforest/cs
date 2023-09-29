const closeAlert = () => {
    const alertAll = document.querySelectorAll('.alert');
    

    alertAll?.forEach(item => {
        const alertClose = item.querySelector('.alert__close');

        alertClose.addEventListener('click', function() {
            item.classList.remove('is-visible');
        });
    });
}

export default closeAlert;