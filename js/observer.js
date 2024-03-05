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

observeElement('.era', 'observe-a')