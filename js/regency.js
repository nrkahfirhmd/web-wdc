var index = 0;
var regency = [
    'kupang', 
    'manggarai-barat', 
    'manggarai-timur',
    'sikka',
    'alor'
    ]
var query = document.querySelectorAll('.regency .content');

function changeRegency(navigation)
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
}