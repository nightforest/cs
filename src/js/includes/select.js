import Choices from 'choices.js';
import 'choices.js/public/assets/styles/choices.min.css';

const select = () => {    
    const selectAll = document.querySelectorAll('.select');
    const multipleSelectAll = document.querySelectorAll('.multiple-select');
    const sortSelectAll = document.querySelectorAll('.sort-select');

    selectAll?.forEach(item => {
        const select = new Choices(item, {
            allowHTML: true,
            placeholder: true,
            searchEnabled: true,
            shouldSort: false,
        });

        const placeholder = item.closest('.form__group')?.querySelector('.form__placeholder');

        item.addEventListener(
            'choice',
            function() {
                placeholder?.classList.add('is-active');
            },
            false,
        );

        placeholder?.addEventListener('click', () => {
            select.showDropdown();
        });
    });

    sortSelectAll?.forEach(item => {
        new Choices(item, {
            allowHTML: true,
            placeholder: false,
            shouldSort: false,
            searchEnabled: false,
        });
    });

    multipleSelectAll?.forEach(item => {
        new Choices(item, {
            allowHTML: true,
            searchEnabled: true,
            shouldSort: false,
            removeItemButton: true,
            // maxItemCount: 5,
        });
    });
}

export default select;