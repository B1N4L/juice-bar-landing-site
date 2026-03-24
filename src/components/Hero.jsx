import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import {SplitText} from "gsap/all";

const Hero = () => {

    useGSAP(()=>{
        //to animate text pieces individually to both chars & words using classnames
        const heroSplit = new SplitText('.title', {type: 'chars, words'});
        const paragraphSplit = new SplitText('.subtitle', {type: 'lines'});

        //apply a grey color text gradient for each character(text-gradient is from index.css utility class)
        heroSplit.chars.forEach((char) => {char.classList.add('text-gradient')})

        gsap.from(heroSplit.chars, {
            opacity: 0,
            yPercent: 100,
            duration: 1.8,
            ease: 'expo.out',
            stagger: 0.06,
        })

        gsap.from(paragraphSplit.lines, {
            opacity: 0,
            yPercent: 100,
            duration: 1.8,
            ease: 'expo.out',
            stagger: 0.06,
            delay: 1,
        });

        gsap.timeline({
            scrollTrigger: {
                trigger: '#hero', //watch the trigger on the hero section
                start: 'top top', //start when top of homepage hit top of the screen
                end: 'top bottom', //stop when bottom of the homepage hit the top of the screen
                scrub: true, //animations will be directly related to the scroll
            }
        })
            .to('.right-leaf', {y: 200}, 0) //the animation will start at the beginning of the timeline (0 seconds)
            .to('.left-leaf', {y: -200}, 0) //the animation will start at the beginning of the timeline (0 seconds)
    }, [])



    return (
        // used id so you can scroll to it
        <section id="hero" className="noisy">
            <h1 className="title">MOJITO</h1>

            <img src="/images/hero-left-leaf.png" alt="left-leaf" className="left-leaf" />
            <img src="/images/hero-right-leaf.png" alt="right-leaf" className="right-leaf" />

            <div className="body">
                <div className="content">
                    {/*hidden in smaller devices, visible in medium and larger devices*/}
                    <div className="space-y-5 hidden md:block">
                        <p>Cool. Crisp. Classic</p>
                        <p className="subtitle">
                            Sip the Spirit <br/> of Summer
                        </p>
                    </div>
                </div>

                <div className="view-cocktails">
                    <p className="subtitle">
                        Every cocktail in our menu is a blend of premium ingredients, creative flair, and timeless recipes - prepared fresh to delight your senses.
                    </p>
                    <a href="#cocktails"></a>
                </div>
            </div>
        </section>
    );
}

export default Hero;