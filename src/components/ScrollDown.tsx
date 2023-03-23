import React from "react";

const ScrollDown = () => {

    const scrollDown = () => {
        window.scrollTo({
            top: 1920,
            behavior: "smooth"
        })
    }

    return (
        <div className="absolute bottom-20">
            <button
                className="font-lato text-[32px] after:content-arrow after:ml-4 hover:text-gray-300 duration-500"
                onClick={scrollDown}
            >
                Explore tours
            </button>
        </div>
    )
}

export default ScrollDown
