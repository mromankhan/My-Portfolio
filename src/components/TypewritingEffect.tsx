"use client";

import { Typewriter } from "react-simple-typewriter";

const TypewriterEffect = () => {
    return (
        <p className="text-3xl lg:text-4xl font-semibold">I&apos;m a {" "}
            <span className="text-3xl lg:text-4xl font-semibold text-blue-500">
                <Typewriter
                    words={["Full Stack Developer", "Agentic AI Engineer", "Cloud Native Architect", "DevOps Engineer"]}
                    loop={true}
                    cursor
                    cursorStyle="|"
                    typeSpeed={140}
                    deleteSpeed={110}
                    delaySpeed={3000}
                />
            </span>
        </p>
    );
};

export default TypewriterEffect;
