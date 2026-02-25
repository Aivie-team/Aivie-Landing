import { IoIosArrowDown } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";



const Navbar = () => {
    return (
        <div className="flex flex-col justify-center items-center font-semibold gap-5 backdrop-blur-lg">
            <div className="mt-2 pb-2 hidden sm:block">
                <div className="flex gap-4 w-full items-center">
                    <img src="/img/aivie-logo.jpg" alt="Logo" className="w-10 h-10 object-contain mr-3" />
                    @Aivie     |
                    <List>Features
                        <Titles>Features</Titles>
                    </List>
                    <List>Pricing</List>
                    <List>Docs <IoIosArrowDown className="mt-1 ml-2" size={20} /></List>
                    <List>FAQ</List>
                    <List>How it Work</List>
                </div>
            </div>
            <div className="absolute mt-10 -mr-[90%] block sm:hidden">
                <button><RxHamburgerMenu size={25} />
                </button>
            </div>
        </div>
    )
}

export const List = ({children, className = ""}) => {
    return <span className={`${className} px-2 flex p-1 pl-5 pr-5 cursor-pointer rounded-xl hover:bg-[#00000005] duration-300`}>{children}</span>
}

export const Titles = ({className = "", children}) => {
    return (
        <div className={`${className} absolute hidden hover:block duration-300`}>
            {children}
        </div>
    )
}

export const HumbergerMenu = ({className = "", children}) => {
    return (
        <div className={`${className} `}>
            {children}
        </div>
    )
}


export default Navbar