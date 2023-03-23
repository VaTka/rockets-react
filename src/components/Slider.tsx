import React, {useState} from "react";
import Dot from '../assets/dot.png'
import slides from "./Images";
import ScrollDown from "./ScrollDown";
import SliderSign from "./SliderSign";

const Slider = () => {
    const [currentImage, setCurrentImage] = useState(0)

    return (
        <div className="max-w-full h-[100%] w-full m-auto absolute text-white ">
            <div className="w-full h-full bg-center bg-cover duration-500 flex items-center justify-center"
                 style={{backgroundImage: `url(${slides[currentImage].url})`}}>
                <div className="flex top-4 justify-center py-2 z-50">
                    {slides.map((slide, slideIndex) => (
                        <div
                            key={slideIndex}
                            onClick={() => setCurrentImage(slideIndex)}
                            className="cursor-pointer"
                        >
                            <img src={Dot} alt="dot" className="mx-1"/>
                        </div>
                    ))}
                </div>
                <SliderSign />
                <ScrollDown />
            </div>
        </div>
    )
}

export default Slider
