var element = document.querySelector('.slider-wrapper');
var transform = -30;
var position = 0;

function slideRight()
{
    position += transform;

    if (position < -180)
    {
        position = 0;
    }

    element.style.transform = 'translateX(' + position + 'vw)';
}

function slideLeft()
{
    position -= transform;

    if (position > 0)
    {
        position = -180;
    }

    element.style.transform = 'translateX(' + position + 'vw)';
}