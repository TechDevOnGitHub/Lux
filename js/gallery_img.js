
document.addEventListener("DOMContentLoaded", function() 
{
    let galleryImages = document.getElementsByClassName('gallery-img');
    for (let i = 0; i < galleryImages.length; i++) 
    {
        galleryImages[i].classList.remove('gallery-img-transition');
    }

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) 
            {
                entry.target.classList.add('gallery-img-transition');
            }
            else 
            {
                entry.target.classList.remove('gallery-img-transition');
            }
        });
    });

    for (let i = 0; i < galleryImages.length; i++) {
        observer.observe(galleryImages[i]);
    }
});