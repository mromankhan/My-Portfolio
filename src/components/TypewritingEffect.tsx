"use client";

import { Typewriter } from "react-simple-typewriter";

const TypewriterEffect = () => {
    return (
        <p className="text-2xl lg:text-3xl font-semibold">
            <span className="text-2xl lg:text-3xl font-semibold text-blue-500">
                <Typewriter
                    words={[
                        "Full Stack Engineer",
                        "Agentic AI Engineer",
                        "Voice AI Developer",
                    ]}
                    loop={true}
                    cursor
                    cursorStyle="|"
                    typeSpeed={90}
                    deleteSpeed={50}
                    delaySpeed={2200}
                />
            </span>
        </p>
    );
};

export default TypewriterEffect;
