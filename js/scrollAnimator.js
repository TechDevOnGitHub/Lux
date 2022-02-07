
class ScrollAnimator
{
    animationElements = [];
    animationClassesDict = [];

    addAnimationElement(element, main_class, animation_class)
    {
        this.animationElements.push(element);
        if(!(main_class in this.animationClassesDict && this.animationClassesDict[main_class] == animation_class)) 
        {
            this.animationClassesDict[main_class] = animation_class;
        }
    }

    animate()
    {
        for (let i = 0; i < this.animationElements.length; i++) 
        {
            let animElem = this.animationElements[i];
            animElem.classList.remove(animElem.animation_class);
        }

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                for (let i = 0; i < Object.keys(this.animationClassesDict).length; i++) 
                {

                    let animation_class = Object.values(this.animationClassesDict)[i];

                    if (entry.isIntersecting) 
                        entry.target.classList.add(animation_class);
                    else
                        entry.target.classList.remove(animation_class);

                }
            })
        });

        for (let i = 0; i < this.animationElements.length; i++) 
        {
            observer.observe(this.animationElements[i]);
        }
    }
}