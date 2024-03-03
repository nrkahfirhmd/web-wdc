var element = document.querySelector('.review .card-wrapper');
var dot = document.querySelectorAll('.bullet .dot');
var transform = [
    80,
    0,
    -80
]
var index = 0;

function slideRight()
{
    index++;
    if (index >= transform.length)
    {
        index = 0;
    }

    element.style.transform = 'translateX(' + transform[index] + 'vw)';

    dot.forEach(function(element) {
        element.classList.remove('selected');
    });

    dot[index].classList.add('selected');
}

function slideLeft()
{
    index--;
    if (index < 0)
    {
        index = transform.length - 1;
    }

    element.style.transform = 'translateX(' + transform[index] + 'vw)';

    dot.forEach(function(element) {
        element.classList.remove('selected');
    });

    dot[index].classList.add('selected');
}