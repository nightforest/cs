const actionsDropdown = () => {
    const body = document.querySelector('body');
    const actionsItemAll = document.querySelectorAll('.actions__item');
    

    actionsItemAll?.forEach(item => {
        const actionsToggle = item.querySelector('.actions__button');
        const actionsDropdown = item.querySelector('.actions__dropdown');
        
        actionsToggle?.addEventListener('click', function() {
            const activeDropdown = document.querySelector('.actions__dropdown.is-visible');

            if (activeDropdown != actionsDropdown) {
                activeDropdown?.classList.remove('is-visible');
            }
            
            actionsDropdown?.classList.toggle('is-visible');
        });
    });

    body.addEventListener('click', e => {
        const isActionItem = e.target.closest('.actions__item');

        if (!isActionItem) {
            actionsItemAll?.forEach(item => {
                const actionsDropdown = item.querySelector('.actions__dropdown');

                actionsDropdown?.classList.remove('is-visible');
            });
        }
    });
}

export default actionsDropdown;