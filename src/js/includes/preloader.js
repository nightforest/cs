const preloader = () => {
    const preloaderItem = document.getElementById('preloader');

    setTimeout(() => {
        preloaderItem?.classList.add('is-fade');
        
        setTimeout(() => {
            preloaderItem?.remove();
        }, 1000);
    }, 2000);
}

export default preloader;
