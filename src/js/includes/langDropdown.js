const langDropdown = () => {
    const body = document.querySelector('body');
    const langAll = document.querySelectorAll('.lang');
    

    langAll?.forEach(item => {
        const langToggle = item.querySelector('.lang__toggle');

        langToggle?.addEventListener('click', function() {
            item.classList.toggle('is-active');
        });
    
        body.addEventListener('click', e => {
            if (!e.target.closest('.lang')) {
                item.classList.remove('is-active');
            }
        });
    });

}

export default langDropdown;