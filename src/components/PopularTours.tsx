import Card from "./Card";
import {useQuery} from '@apollo/client';
import {ROCKETS_QUERY} from "./queries";
import Arrow from '../assets/Arrow.svg'
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination, Scrollbar, A11y} from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import {useRecoilState} from "recoil";
import {favoriteRocketIdsState} from "./recoill";


const PopularTours = () => {
    const {loading, data} = useQuery(ROCKETS_QUERY)

    const [favorites, setFavorites] = useRecoilState(favoriteRocketIdsState)

    const handleAddToFavorites = (id: number) => {
        setFavorites([...favorites, id]);
        console.log(favorites)
    };

    interface CardProps {
        description: string;
        name: string;
        id: number;
        handleAddToFavorites?: (rocket: any) => void;
    }

    return (
        <div className="flex justify-center mt-12">
            <div className="w-[1280px]">
                <div className="flex justify-between items-center">
                    <h2 className="uppercase self-start my-[40px] font-syne font-extrabold text-3xl">popular tours</h2>
                    <div className="flex font-extrabold items-center">
                        <button
                            className="p-[20px] bg-[#ECECEC] rotate-90 block text-center hover:bg-gray-600 duration-300 mr-[20px]">
                            <img src={Arrow} alt="arrow"/></button>
                        <button
                            className="p-[20px] bg-[#ECECEC] rotate-[270deg] block text-center hover:bg-gray-600 duration-300">
                            <img src={Arrow} alt="arrow"/></button>
                    </div>
                </div>
                {loading && 'Loading...'}

                {data && (
                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={50}
                        slidesPerView={3}
                        pagination={{clickable: true}}
                    >
                        {data.rockets.map((rocket: CardProps) => (
                            <SwiperSlide key={rocket.id}>
                                <Card
                                    description={rocket.description}
                                    name={rocket.name}
                                    id={rocket.id}
                                    handleAddToFavorites={handleAddToFavorites}/>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                )}

            </div>
        </div>
    )
}

export default PopularTours
