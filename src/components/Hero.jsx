import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import {SplitText} from "gsap/all";
import {useRef} from "react";
import {useMediaQuery} from "react-responsive";

const Hero = () => {

    const videoRef = useRef(null);
    //check device type by occupying screen width
    const isMobile = useMediaQuery({maxWidth: 770});

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
                trigger: "#hero",
                start: "top top",
                end: "bottom top",
                scrub: true,
                // markers: true, // turn this on for debugging
            },
        })
            .to('.right-leaf', {y: 200}, 0) //the animation will start at the beginning of the timeline (0 seconds)
            .to('.left-leaf', {y: -200}, 0) //the animation will start at the beginning of the timeline (0 seconds)

        //these values change on mobile devices due to width
        const startValue = isMobile ? 'top 50%' : 'center 60%'; //when top of the video element reaches 50% of the screen, the animation starts  for mobile
        const endValue = isMobile ? '120% top' : 'bottom top'; //when top of the video element reaches 120% past the screen, the animation ends

        let tlVideo = gsap.timeline({
            scrollTrigger: {
                trigger: "video",
                start: startValue,
                end: endValue,
                scrub: true,
                pin: true,
            },
        });

        videoRef.current.onloadedmetadata = () => {
            tlVideo.to(videoRef.current, {
                //ties the current time with the duration.
                currentTime: videoRef.current.duration,
            });
        };

    }, [])



    return (
        <>
        <section id="hero" className="">
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

            <div className="video absolute inset-0">
                <video
                    ref={videoRef}
                    src="/videos/hero-cocktail-video.mp4" muted playsInline preload="auto" //plays automatically when user opens the page
                />
            </div>
        </>
    );
}

export default Hero;
