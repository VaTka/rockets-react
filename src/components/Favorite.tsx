import SectionBanner from "./SectionBanner";
import Card from "./Card";
import {Swiper, SwiperSlide} from "swiper/react";
import {A11y, Navigation, Pagination, Scrollbar} from "swiper";
import {useQuery} from "@apollo/client";
import {ROCKETS_QUERY} from "./queries";
import {useRecoilState} from "recoil";
import {favoriteRocketIdsState} from "./recoill";


const Favorite = () => {

    interface CardProps {
        description: string;
        name: string;
        id: number;
        handleAddToFavorites?: (rocket: any) => void;
    }

    const {loading, data} = useQuery(ROCKETS_QUERY)

    const [favorites, setFavorites] = useRecoilState(favoriteRocketIdsState)

    return (
        <div>
            <div className="h-[40vh]">
                <SectionBanner/>
            </div>
            <div className="flex justify-center mt-12">
                <div className="w-[1280px] text-end">
                    <h2 className="font-lato text-[24px] text-[#556B84] mb-5 cursor-pointer" onClick={() => {setFavorites([])}}>Clear all</h2>
                    <div className="flex justify-between">
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
                                        { favorites.find(element => element === rocket.id) &&
                                            <Card
                                                description={rocket.description}
                                                name={rocket.name}
                                                id={rocket.id}
                                            />
                                        }
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Favorite
