import Navbar from "../components/Navbar"
import TitleLanding from "../components/TitleLanding"
import Button from "../ui/Button"

const HeroSection = () => {
  return (
    <div className="min-h-screen justify-center p-2 dot-gradient-bg">
      <Navbar />
      <TitleLanding />
      <ButtonCTA />
    </div>
  );
};

export const ButtonCTA = () => {
    return (
            <div className="flex gap-10 mt-10 justify-center font-medium text-lg font-semibold">
                <Button className="px-10 p-2 rounded-xl bg-blue-500 text-white cursor-pointer hover:bg-blue-600 duration-300">Start Free</Button>
                <Button className="px-10 p-2 cursor-pointer rounded-xl bg-[#e8f8ff]   hover:bg-[#f2fbff] duration-300">Join Beta</Button>
            </div>
    )
}

export default HeroSection