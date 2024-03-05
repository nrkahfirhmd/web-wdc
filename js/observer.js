function observeElement(className, showClass) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add(showClass);
            }
            else {
                entry.target.classList.remove(showClass);
            }
        });
    });

    const hiddenElements = document.querySelectorAll(className);
    hiddenElements.forEach((el) => observer.observe(el));
}

observeElement('.era', 'observe-a');
observeElement('.era-resp', 'observe-a');
observeElement('.province-section', 'show-a')
observeElement('.traveltips-section', 'show-a')
observeElement('.showroom', 'show-a')
observeElement('.gallery', 'muncul-a')
observeElement('.line1', 'slide-a')
observeElement('.line2', 'slide-a')