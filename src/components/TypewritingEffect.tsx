"use client";

import { Typewriter } from "react-simple-typewriter";

const TypewriterEffect = () => {
    return (
        <p className="text-3xl lg:text-4xl font-semibold">I&apos;m a {" "}
            <span className="text-3xl lg:text-4xl font-semibold text-blue-500">
                <Typewriter
                    words={["Full Stack Developer", "Cloud Native Agentic AI Engineer", "DevOps Engineer", "React & Next.js Expert", "Python Developer"]}
                    loop={true}
                    cursor
                    cursorStyle="|"
                    typeSpeed={180}
                    deleteSpeed={100}
                    delaySpeed={2000}
                />
            </span>
        </p>
    );
};

export default TypewriterEffect;
