import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import {SplitText} from "gsap/all";
import {featureLists, goodLists} from "../../constants/index.js";

const Art = () => {
    return (
        <section id="art" >
            <div className="container mx-auto h-full pt-20">
                <h2 className='will-fade'>The ART</h2>
                <div className="content">
                    <ul className='space-y-4 will-fade'>
                        {
                            goodLists.map((feature, index) => (
                                <li key={index} className='flex items-center gap-2'>
                                    <img src={`/images/check.png`} alt='check'/>
                                    <p className='text-sm text-white-100'>{feature}</p>
                                </li>
                            ))
                        }
                    </ul>

                    <div className="cocktail-img">
                        <img src="/images/under-img.jpg" alt="cocktail" className="masked-img abs-center size-full object-contain"/>
                    </div>

                    <ul className='space-y-4 will-fade'>
                        {
                            featureLists.map((feature, index) => (
                                <li key={index} className='flex items-center justify-start gap-2'>
                                    <img src={`/images/check.png`} alt='check'/>
                                    <p className='md:w-fit w-60'>{feature}</p>
                                </li>
                            ))
                        }
                    </ul>
                </div>

                <div className='masked-container'>
                    <h2 className='will-fade'>Sip-Worthy Perfection</h2>
                    <div id='masked-content'>
                        <h3>Made with Craft, Poured with Passion</h3>
                        <p>This isn't just a drink, It's carefully crafted moment made just for you...</p>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Art;