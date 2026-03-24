import {navLinks} from "../../constants/index.js";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import logo from "/images/logo.png";

const Navbar = () => {

    useGSAP(() => {
        const navTween = gsap.timeline({
            scrollTrigger: {
                trigger: "nav",
                // "when the bottom of the navbar reaches the top of the viewport"
                start: 'bottom top' //bottom:element's position  top: viewport's position
            }
        })

        navTween.fromTo('nav', {
            backgroundColor: 'transparent',
            //ease: 'easeOut',
        }, {
            backgroundColor: '#00000050',
            backgroundFilter: 'blur(10px)',
            duration: 1,
            ease: 'power1.inOut'
        })
    })

    return (
        <nav>
            <div>
                <a href="#home" className="flex items-center gap-2">
                    <img src={logo} alt="logo"/>
                    <p>Syzygy Juice Bar</p>
                </a>

                <ul>
                    {navLinks.map((link) => (
                        <li key={link.id}>
                            <a href={`#${link.id}`}>{link.title}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;