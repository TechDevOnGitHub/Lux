
function clamp(value, min, max) 
{
    return Math.min(Math.max(value, min), max);
}

function doSlide(btnElement)
{
    let isNext = btnElement.className === 'project-card-slide-next-btn';
    let parent = btnElement.parentNode.querySelector('.project-card-slide-container');
    let imgElements = parent.children;
    let maxSlideIndex = imgElements.length - 1;

    if (isNext) parent.slideIndex = clamp(parent.slideIndex + 1, 0, maxSlideIndex);
    else        parent.slideIndex = clamp(parent.slideIndex - 1, 0, maxSlideIndex);

    for (let i = 0; i < imgElements.length; i++) 
    {
        imgElements[i].style.transform = `translateX(-${parent.slideIndex * 800}px)`;
    }
    
}

document.addEventListener("DOMContentLoaded", function() 
{
    document.querySelectorAll('.project-card-slide-container').forEach(function(slideContainer) 
    {
        slideContainer.slideIndex = 0;
    });

    document.querySelectorAll('.project-card-slide-next-btn').forEach(function(element) 
    {
        element.addEventListener("click", () => doSlide(element));
    });

    document.querySelectorAll('.project-card-slide-back-btn').forEach(function(element) 
    {
        element.addEventListener("click", () => doSlide(element));
    });
});