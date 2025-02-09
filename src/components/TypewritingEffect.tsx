"use client";

import React from "react";
import { Typewriter } from "react-simple-typewriter";

const TypewriterEffect = () => {
    return (
        <>
            <p className="text-3xl lg:text-4xl font-semibold">I&apos;m a {" "}
                <span className="text-3xl lg:text-4xl font-semibold text-blue-500">
                    <Typewriter
                        words={["Full Stack Developer", "Mern Stack Developer", "Frontend Engineer", "Backend Engineer"]}
                        loop={true}
                        cursor
                        cursorStyle="|"
                        typeSpeed={140}
                        deleteSpeed={110}
                        delaySpeed={3000}
                    />
                </span>
            </p>
        </>
    );
};

export default TypewriterEffect;
