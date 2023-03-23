import slides from "./Images";

const SectionBanner = () => {
    return (
        <div className="h-[100%] w-full m-auto">
            <div
                className="w-full h-full bg-center bg-cover flex items-center justify-center text-white font-syne text-center font-extrabold leading-[150px] text-[48px] uppercase"
                style={{backgroundImage: `url(${slides[2].url})`}}> favourites
            </div>
        </div>
    )
}

export default SectionBanner
