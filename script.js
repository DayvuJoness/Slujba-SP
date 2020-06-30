$('.buttons__up__button-self').on('mouseover', function(e) 
{
    e.preventDefault;
    $(this).toggleClass('buttons__up__button-self_active');
});

$('.buttons__up__button-self').on('mouseout', function(e) 
{
    e.preventDefault;
    $(this).toggleClass('buttons__up__button-self_active');
});

document.querySelector("header .menu").style.height = '0';

document.querySelector("html").onclick = function(e)
{
    if (e.target.matches(".menu button a, .menu button a span, .menu ul a, .menu ul a li"))
    {
        if (!document.querySelector('.menu button').classList.contains('button-self_active'))
        {
            $('button').addClass('button-self_active');
            $('.menu ul a').addClass('active');
        }
        else //if (document.querySelector('.menu button').classList.contains('button-self_active') && !e.target.matches(".menu ul a, .menu ul a li"))
        {
            $('button').removeClass('button-self_active');
            $('.menu ul a').removeClass('active');
        }
    }
    else
    {
        $('button').removeClass('button-self_active');
        $('.menu ul a').removeClass('active');
    }
}

$('.messageform').on('click', function(e) 
{
    if (!e.target.matches(".messageform__form, p, input, textarea") && open == 1)
    {
        $('.messageform').removeClass('active');
        document.querySelector('.msg-active').style.zIndex = '9';
        open = 0;
    }
});

let open = 0;

$('.msg-active').on('click', function(e) 
{
    if (open == 0)
    {
        $('.messageform').toggleClass('active');
        document.querySelector('.msg-active').style.zIndex = '11';
        open = 1;
    }
    else if (open == 1)
    {
        $('.messageform').removeClass('active');
        document.querySelector('.msg-active').style.zIndex = '9';
        open = 0;
    }
});
function sleep(ms) 
{
    return new Promise(resolve => setTimeout(resolve, ms));
}

function click(e, timeSleep)
{
    $(e).toggleClass('click');
    sleep(timeSleep).then(() => 
    { 
        $(e).removeClass('click'); 
    });
}

$('.messageform__form .button').on('click', function(e) 
{
    click(this, 150);
});

$('.buttons .buttons__up').on('click', function(e) 
{
    click(this, 150);
    click('.buttons__up__button-self span', 500);
});

$('.msg-active').on('click', function(e) 
{
    click(this, 150);
    click('.msg-active__button-self', 700);
    click('.msg-active__button-self svg', 700);
});

$('.text-anim').on('click', function(e) 
{
    click(this, 500);
});

const slider = () =>
{
    let containerItem = document.querySelectorAll(".works .container__item"),
    html = document.querySelector(".content__block3__cont__top__block"),
    containerContent = document.querySelector(".container__content"),
    worksDots=document.querySelector(".works-dots"),
    oldDots=worksDots.querySelectorAll(".dots"),
    arrows = document.querySelectorAll(".works .arrow"),
    addClass = (items, index, classStyle) => 
    {
        items[index].classList.add(classStyle);
    },
    removeClass = (items, index, classStyle) => 
    {
        items[index].classList.remove(classStyle);
    },
    changeSlide = () => 
    {
        containerItem.forEach(e => 
        {
            e.style.display = "none";
            e.style.order = "0";
        });
        for (i = currentSlideIndex; i<=currentSlideIndex+0; i++)
        {
            c=i<containerItem.length?i:(i-containerItem.length);
            containerItem[c].style.display = "inline";
            containerItem[c].style.order = String(i);
        }
    },
    currentSlideIndex=0;

    for(let i=0;i<oldDots.length;i++)
    {
        oldDots[i].remove();
    };

    for(let i=0;i<containerItem.length;i++)
    {
        let newDot = document.createElement("li");
        newDot.classList.add("dots");
        worksDots.appendChild(newDot);
    };
    let dots = worksDots.querySelectorAll(".dots");
    dots[0].classList.add("dots-active");

    const animateSlide = () => 
    {
        removeClass(containerItem, currentSlideIndex, "container__item-active");
        removeClass(dots,currentSlideIndex,"dots-active");
        currentSlideIndex++;
        if (currentSlideIndex===containerItem.length) currentSlideIndex=0;
        addClass(containerItem, currentSlideIndex, "container__item-active");
        addClass(dots,currentSlideIndex,"dots-active");
        changeSlide();
    };
    changeSlide();
    let idAnimate = setInterval(animateSlide, 7000);

    html.addEventListener("click", (event) => 
    {
        event.preventDefault();
        let target = event.target;
        if (!target.matches(".arrow, .dots")) 
        {
            return;
        };
        if (target.matches(".arrow"))
        {  
            removeClass(containerItem, currentSlideIndex, "container__item-active");
            removeClass(dots,currentSlideIndex,"dots-active");
            if (target.matches(".left")) 
            {
                currentSlideIndex--; 
                if(currentSlideIndex===-1) 
                {
                    currentSlideIndex=containerItem.length-1;
                };
            }
            else
            {
                currentSlideIndex++; 
                if(currentSlideIndex===containerItem.length) 
                {
                    currentSlideIndex=0;
                };
            };
            addClass(containerItem, currentSlideIndex, "container__item-active");
            addClass(dots,currentSlideIndex,"dots-active");
            changeSlide();
        }
        else if (target.matches(".dots") && (!target.matches(".dots-active")))
        {
            removeClass(containerItem, currentSlideIndex, "container__item-active");
            removeClass(dots,currentSlideIndex,"dots-active");
            for (let i=0; i<containerItem.length;i++)
            {
                if(dots[i]==target)
                {
                    currentSlideIndex=i;
                    break;
                };
            };
            addClass(containerItem, currentSlideIndex, "container__item-active");
            addClass(dots,currentSlideIndex,"dots-active");
            changeSlide();
        };
    });
};
slider();