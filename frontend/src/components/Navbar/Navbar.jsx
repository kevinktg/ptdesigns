import { IoMdMenu } from "react-icons/io";
import AnimateBtn from "../Buttons/AnimateBtn";

const Navbar = () => {
  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 w-fit h-12 p-1.5 flex items-center justify-end gap-3 glass-refracted rounded-full z-50 cursor-pointer group transition-all duration-700 hover:scale-105 active:scale-95 shadow-2xl">
      <div className="pl-5 text-white font-bold tracking-tight">
        <AnimateBtn btnName="MENU" />
      </div>
      <div className="bg-gold rounded-full p-2.5 transition-all duration-500 group-hover:bg-white">
        <IoMdMenu className="text-black transition-transform duration-700 group-hover:rotate-180" size={18} />
      </div>
    </div>
  );
};

export default Navbar;
