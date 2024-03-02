var pegunungan = []
var pantai = []
var kebudayaan = []
var kepulauan = [
    'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/cc/4a/d7/komodo-adala-sala-satu.jpg?w=800&h=-1&s=1',
    'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/e6/4a/ed/love-is-what-you-think.jpg?w=1200&h=-1&s=1',
    'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/51/ea/1e/kelor-is-the-best.jpg?w=1000&h=-1&s=1',
    'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/b3/f3/5e/kanawa-island.jpg?w=1200&h=-1&s=1',
    'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/22/73/09/rinca-island-from-the.jpg?w=1200&h=-1&s=1'
]

var image = []
var after = document.querySelector('.carousel .after');
var show = document.querySelector('.hero .carousel');
var prev = image.length - 1;
var index = 0;

function changeContent(identifier, navigation)
{
    switch (identifier) {
        case 0:
            image = pegunungan;
            break;
        case 1:
            image = pantai;
            break;
        case 2:
            image = kebudayaan;
            break;
        case 3:
            image = kepulauan;
            break;
        default:
            break;
    }

    if (navigation == 'next')
    {
        prev = index;
        index++;

        if (index >= image.length)
        {
            index = 0;
        }
        
        placeholder = image[prev];
        current = image[index];

        after.style.backgroundImage = 'url(' + placeholder + ')';
        show.style.backgroundImage = 'url(' + current + ')';

        after.classList.add('slide-right');
        
        setTimeout(function() {
            after.style.backgroundImage = 'url(' + current + ')';
            after.classList.remove('slide-right')
        }, 200)
    }
    else
    {
        prev = index;
        index--;

        if (index < 0)
        {
            index = image.length - 1;
        }

        placeholder = image[prev];
        current = image[index];
        
        after.style.backgroundImage = 'url(' + current + ')';
        show.style.backgroundImage = 'url(' + placeholder + ')';

        after.classList.add('slide-left');

        setTimeout(function() {
            after.classList.remove('slide-left')
        }, 250)
    }
}