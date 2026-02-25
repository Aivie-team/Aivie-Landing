import Button from "../ui/Button"
import { BsSoundwave, BsFillPeopleFill } from "react-icons/bs";
import { GiAvoidance } from "react-icons/gi";
import { FaBrain } from "react-icons/fa";

const TitleLanding = () => {
    return (
        <div className="flex flex-col justify-center mt-32 items-center">
            <Title />
            <div className="text-[#808080] mt-2 text-lg">
                <p>AI Interview Assistant with Real-Time Translation & Coaching.</p>
            </div>
                <CardAbsolute className="p-3 px-7 -mt-28 rounded-xl -ml-[70%] rotate-5 ">
                <h1 className="flex"> <BsSoundwave className="mt-1 mr-3" /> Tone sounds confident </h1>
            </CardAbsolute>
            <CardAbsolute className="p-3 px-7g mt-10 rounded-xl -ml-[70%] -rotate-2">
                <h1 className="flex"> <GiAvoidance className="mt-1 mr-3" /> Avoid filler words</h1>
            </CardAbsolute>
            <CardAbsolute className="p-3 px-7g mt-50 rounded-xl -ml-[70%] rotate-4">
                <h1 className="flex"> <FaBrain className="mt-1 mr-3" /> Using Ai</h1>
            </CardAbsolute>
        </div>
    )
}

export const CardAbsolute = ({children, className = ""}) => {
    return (
        <div className={`backdrop-blur-md bg-white/60   absolute shadow-xl ${className} hover:scale-105 transition-transform duration-300 ease-out hidden sm:block`}>
                <div className="ml-2">
                    {children}
                </div>
            </div>
    )
}

export const Title = () => {
    return (
            <div className="text-6xl font-extrabold justify-center">
                <h1>Real Skills & <br /> <span className="-mt-3">Real Confidence.</span></h1>
            </div>
    )
}

export default TitleLanding