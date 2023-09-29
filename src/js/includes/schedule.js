const schedule = () => {
    const body = document.querySelector('body');
    const scheduleSelect = document.querySelector('.schedule-select');
    const scheduleToggle = scheduleSelect?.querySelector('.schedule-select__toggle');
    const scheduleDropdown = scheduleSelect?.querySelector('.schedule-select__dropdown');
    const scheduleLinkAll = scheduleDropdown?.querySelectorAll('.schedule-select__link');

    scheduleToggle?.addEventListener('click', function() {
        scheduleDropdown?.classList.toggle('is-visible');
        this.classList.toggle('is-active');
    });

    scheduleLinkAll.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();

            const scheduleID = item.getAttribute("href");
            const scheduleItem = document.getElementById(scheduleID);
            const visibleItem = document.querySelector('.schedule-list__item.is-visible');

            scheduleToggle.querySelector('span').innerHTML = item.innerText;
            scheduleDropdown?.classList.remove('is-visible');
            scheduleToggle?.classList.remove('is-active');

            visibleItem?.classList.remove('is-visible');
            scheduleItem?.classList.add('is-visible');
        });
    });

    body.addEventListener('click', e => {
        if (!e.target.closest('.schedule-select')) {
            scheduleDropdown?.classList.remove('is-visible');
            scheduleToggle?.classList.remove('is-active');
        }
    });
}

export default schedule;