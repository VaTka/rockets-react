import {Link, useParams} from "react-router-dom";
import Logo from '../assets/logo.png'
import Heart from '../assets/Heart.svg'
import Popup from "./Popup";
import {useState} from "react";

interface NavItemProps {
    to: string;
    label: string;
}

const Nav = () => {

    const link = useParams<{ sourceId?: string }>();

    console.log(link?.sourceId)

    const [showPopup, setShowPopup] = useState(false)

    const handlerPopupClick = () => {
        setShowPopup(!showPopup)
    }

    return (
        <nav className="fixed bg-[#1E1E1E7A] w-[100%] flex items-center justify-between px-[80px] py-3 z-50">
            <Link to="/"><img src={Logo} alt="logo"/></Link>
            <ul className="flex uppercase text-white font-lato">
                <NavItem to="/" label="Home" />
                <NavItem to="/tours" label="Tours" />
                <NavItem to="/about" label="About" />
                <NavItem to="/help" label="Help" />
            </ul>
            <div className="flex">
                {link?.sourceId === 'favorite' as string
                    ? <Link to="/favorite" className="bg-[#ECECEC] p-[15px] bg-[DD377D]"><img src={Heart} alt="Like"/></Link>
                    : <Link to="/favorite" className="bg-[#ECECEC] p-[15px] hover:bg-pink-100 duration-300"><img src={Heart} alt="Like"/></Link>
                }

                <button
                    className="bg-[#D3EAFF] p-[13px] uppercase font-bold ml-[10px] font-syne hover:bg-gray-600 hover:text-white duration-300"
                    onClick={handlerPopupClick}
                >
                    Sign In
                </button>
            </div>
            {showPopup && <Popup/>}
        </nav>
    )
}

const NavItem = ({ to, label }: NavItemProps) => {
    return (
        <li className="mx-[15px] hover:border-b-2 duration-100">
            <Link to={to}>{label}</Link>
        </li>
    )
}

export default Nav
