import { MdArrowOutward } from "react-icons/md";
import AnimateBtn from "./AnimateBtn";

const ReserveBtn = () => {
    return (
        <div className="fixed top-8 right-8 z-50 group">
            <div className="flex items-center gap-3 glass-refracted pl-6 pr-1.5 py-1.5 rounded-full transition-all duration-700 hover:scale-105 active:scale-95 shadow-xl cursor-pointer overflow-hidden border border-white/10">
                <div className="text-white font-bold tracking-tight text-[11px]">
                    <AnimateBtn btnName="CONSULT"/>
                </div>
                <div className="bg-gold w-10 h-10 flex items-center justify-center rounded-full transition-all duration-500 group-hover:bg-white">
                    <MdArrowOutward className="text-black transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" size={20} />
                </div>
            </div>
        </div>
    )
}

export default ReserveBtn;