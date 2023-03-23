import slides from "./Images";
import React from "react";
import Heart from "../assets/Heart.svg";

interface CardProps {
    description: string;
    name: string;
    id: number;
    handleAddToFavorites?: (id: number) => void;
}

const Card = ({ description, name, id, handleAddToFavorites }: CardProps) => {
    return (
        <div className="max-w-[400px] font-syne" style={{ border: "1px solid #D3EAFF" }}>
            <img src={slides[0].url} alt="card bg" />
            <div className="p-[20px] text-center flex flex-col items-stretch">
                <div>
                    <h3 className="uppercase font-bold text-2xl">{name}</h3>
                    <div className="font-lato text-gray-500">{description}</div>
                </div>
                <div className="flex justify-between mt-[50px]">
                    <button className="bg-[#D3EAFF] p-[13px] uppercase font-bold ml-[10px] w-[80%] hover:bg-gray-600 hover:text-white duration-300">
                        buy
                    </button>
                    <button
                        className="bg-[#ECECEC] p-[15px] hover:bg-pink-100 duration-300"
                        onClick={() => handleAddToFavorites && handleAddToFavorites(id)}
                    >
                        <img src={Heart} alt="Like" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Card;
