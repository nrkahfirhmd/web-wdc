var pegunungan = [
    '/img/gunung_kelimutu.jpg',
    '/img/gunung_inerie.jpg',
    '/img/gunung_egon.jpg',
    '/img/wolobobo_hill.jpg',
    '/img/gunung_ebulobo.jpg'
]
var pantai = [
    'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/a9/ee/30/pink-beach-dans-le-komodo.jpg?w=1200&h=-1&s=1',
    'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/d1/97/3c/nihiwatu-beach-2.jpg?w=1200&h=-1&s=1',
    'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/63/bf/8b/photo2jpg.jpg?w=1200&h=-1&s=1',
    'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/dc/d4/5c/nikmatnya-pantai-nan.jpg?w=1200&h=-1&s=1',
    'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/d6/71/17/that-dancing-tree.jpg?w=1200&h=-1&s=1'
]
var kebudayaan = [
    'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/eb/c8/71/charming.jpg?w=1200&h=-1&s=1',
    'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/2e/56/a3/bena-traditional-village.jpg?w=600&h=-1&s=1',
    'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/76/8d/63/kampung-tarung.jpg?w=1200&h=-1&s=1',
    'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/6a/02/ae/praijing-cultural-village.jpg?w=900&h=-1&s=1',
    'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/84/db/d4/ngada.jpg?w=800&h=-1&s=1'
]
var kepulauan = [
    'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/cc/4a/d7/komodo-adala-sala-satu.jpg?w=800&h=-1&s=1',
    'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/e6/4a/ed/love-is-what-you-think.jpg?w=1200&h=-1&s=1',
    'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/51/ea/1e/kelor-is-the-best.jpg?w=1000&h=-1&s=1',
    'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/b3/f3/5e/kanawa-island.jpg?w=1200&h=-1&s=1',
    'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/22/73/09/rinca-island-from-the.jpg?w=1200&h=-1&s=1'
]

var nPegunungan = [
    'kelimutu',
    'inerie',
    'egon',
    'wolobobo',
    'ebulobo'
]
var nPantai = [
    'pink',
    'nihiwatu',
    'koka',
    'nemberala',
    'walakiri'
]
var nKebudayaan = [
    'wae-rebo',
    'bena',
    'tarung',
    'praijing',
    'ngada'
]
var nKepulauan = [
    'komodo',
    'padar',
    'kelor',
    'kanawa',
    'rinca'
]

var image = []
var nama = []
var after = document.querySelector('.carousel .after');
var show = document.querySelector('.hero .carousel');
var content = document.querySelectorAll('main .content');
var prev = image.length - 1;
var index = 0;

function changeContent(identifier, navigation)
{
    switch (identifier) {
        case 0:
            image = pegunungan;
            nama = nPegunungan;
            break;
        case 1:
            image = pantai;
            nama = nPantai;
            break;
        case 2:
            image = kebudayaan;
            nama = nKebudayaan;
            break;
        case 3:
            image = kepulauan;
            nama = nKepulauan;
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
        isi = nama[index];

        after.style.backgroundImage = 'url(' + placeholder + ')';
        show.style.backgroundImage = 'url(' + current + ')';

        after.classList.add('slide-right');
        
        setTimeout(function() {
            after.style.backgroundImage = 'url(' + current + ')';
            after.classList.remove('slide-right')
        }, 200)

        content.forEach(function(element) {
            if (element.classList.contains(isi)) {
                element.classList.add('active');
            }
            else {
                element.classList.remove('active');
            }
        });
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
        isi = nama[index];
        
        after.style.backgroundImage = 'url(' + current + ')';
        show.style.backgroundImage = 'url(' + placeholder + ')';

        after.classList.add('slide-left');

        setTimeout(function() {
            after.classList.remove('slide-left')
        }, 250)

        content.forEach(function(element) {
            if (element.classList.contains(isi)) {
                element.classList.add('active');
            }
            else {
                element.classList.remove('active');
            }
        });
    }
}