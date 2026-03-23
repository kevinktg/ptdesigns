import { useState } from "react";
import ClickIndicator from "./ClickIndicator";

const MapLink = () => {
    const [active, setActive] = useState(false);

    return (
        <section className="w-screen h-[90vh] bg-[#131313] flex flex-col justify-center items-center text-center">
            <div>
                <p className="text-[0.69rem] font-bold text-[#BFA77A] choose-subtitle">
                    Based in Perth, WA
                </p>

                <h1 className="text-[5vw] leading-15 tracking-tight mt-5 text-[#f4f4f4]">
                    Parm Tjhung Designs studio is located<br />
                    in Perth, WA — with easy<br />
                </h1>
            </div>

            <ClickIndicator active={active} />

            <a
                href="#"
                onMouseEnter={() => setActive(true)}
                onMouseLeave={() => setActive(false)}
                className="text-[#BFA77A] text-[5vw] underline hover:text-[#f4f4f4]"
            >
                access by appointment.
            </a>
        </section>
    );
};

export default MapLink;