var index = 0;
var regency = [
    'kupang', 
    'manggarai-barat', 
    'manggarai-timur',
    'sikka',
    'alor'
    ]
var query = document.querySelectorAll('.regency .content');
var query2 = document.querySelectorAll('.regency-page .hero');
var query3 = document.querySelectorAll('.regency .bg');
var destinasi = document.querySelectorAll('.destinasi');
var swipeDiv = document.querySelector('.regency-page .hero.active');

var startX;
var startY;
var distX;
var distY;
var threshold = 100;
var allowedTime = 300;

function changeRegency(navigation, newIndex)
{
    if (typeof newIndex === 'undefined')
    {
        if (navigation == "next")
        {
            index++;
            if (index >= regency.length)
            {
                index = 0;
            }
        }
        else 
        {
            index--;
            if (index < 0)
            {
                index = regency.length - 1;
            }
        }

        selected = regency[index];

        query.forEach(function(element) {
            if (element.classList.contains(selected))
            {
                element.classList.add('active');
            }
            else
            {
                element.classList.remove('active');
            }
        });

        query2.forEach(function(element) {
            if (element.classList.contains(selected))
            {
                element.classList.add('active');
            }
            else
            {
                element.classList.remove('active');
            }
        });

        query3.forEach(function(element) {
            if (element.classList.contains(selected))
            {
                element.classList.add('active');
            }
            else
            {
                element.classList.remove('active');
            }
        });

        destinasi.forEach(function(element) {
            if (element.classList.contains(selected))
            {
                element.classList.add('content-show');
            }
            else
            {
                element.classList.remove('content-show');
            }
        });

        swipeDiv = document.querySelector('.regency-page .hero.active');
    }
    else
    {
        index = newIndex;
        selected = regency[index];

        query.forEach(function(element) {
            if (element.classList.contains(selected))
            {
                element.classList.add('active');
            }
            else
            {
                element.classList.remove('active');
            }
        });

        query2.forEach(function(element) {
            if (element.classList.contains(selected))
            {
                element.classList.add('active');
            }
            else
            {
                element.classList.remove('active');
            }
        });

        query3.forEach(function(element) {
            if (element.classList.contains(selected))
            {
                element.classList.add('active');
            }
            else
            {
                element.classList.remove('active');
            }
        });

        destinasi.forEach(function(element) {
            if (element.classList.contains(selected))
            {
                element.classList.add('content-show');
            }
            else
            {
                element.classList.remove('content-show');
            }
        });

        swipeDiv = document.querySelector('.regency-page .hero.active');
    }
}

query2.forEach(function(element) {
    element.addEventListener('mousedown', function(e) {
        startX = e.clientX;
        startY = e.clientY;
    });

    element.addEventListener('mouseup', function(e) {
        distX = e.clientX - startX;
        distY = e.clientY - startY;
        if (Math.abs(distX) >= threshold && Math.abs(distY) <= 100) {
            if (distX > 0) {
                changeRegency('previous');
            } else {
                changeRegency('next');
            }
        }
    });

    element.addEventListener('touchstart', function(e) {
        var touchObj = e.changedTouches[0];
        startX = touchObj.pageX;
        startY = touchObj.pageY;
        startTime = new Date().getTime();
    }, false);

    element.addEventListener('touchmove', function(e) {
        var deltaY = e.touches[0].clientY - startY;

        if (Math.abs(deltaY) > 50) {
            e.preventDefault();
        }
    }, false);

    element.addEventListener('touchend', function(e) {
        var touchObj = e.changedTouches[0];
        distX = touchObj.pageX - startX;
        distY = touchObj.pageY - startY;
        var elapsedTime = new Date().getTime() - startTime;
        if (elapsedTime <= allowedTime) {
            if (Math.abs(distX) >= threshold && Math.abs(distY) <= 100) {
                if (distX > 0) {
                    changeRegency('prev');
                } else {
                    changeRegency('next');
                }
            }
        }
    }, false);
});

query3.forEach(function(element) {
    element.addEventListener('mousedown', function(e) {
        startX = e.clientX;
        startY = e.clientY;
    });

    element.addEventListener('mouseup', function(e) {
        distX = e.clientX - startX;
        distY = e.clientY - startY;
        if (Math.abs(distX) >= threshold && Math.abs(distY) <= 100) {
            if (distX > 0) {
                changeRegency('previous');
            } else {
                changeRegency('next');
            }
        }
    });

    element.addEventListener('touchstart', function(e) {
        var touchObj = e.changedTouches[0];
        startX = touchObj.pageX;
        startY = touchObj.pageY;
        startTime = new Date().getTime();
    }, false);

    element.addEventListener('touchmove', function(e) {
        var deltaY = e.touches[0].clientY - startY;

        if (Math.abs(deltaY) > 10) {
            e.preventDefault();
        }
    }, false);

    element.addEventListener('touchend', function(e) {
        var touchObj = e.changedTouches[0];
        distX = touchObj.pageX - startX;
        distY = touchObj.pageY - startY;
        var elapsedTime = new Date().getTime() - startTime;
        if (elapsedTime <= allowedTime) {
            if (Math.abs(distX) >= threshold && Math.abs(distY) <= 100) {
                if (distX > 0) {
                    changeRegency('prev');
                } else {
                    changeRegency('next');
                }
            }
        }
    }, false);
});