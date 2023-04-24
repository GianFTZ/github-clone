"use client"
import { ArrowRight, ChevronRight, Gitlab } from "lucide-react";
import { useState } from "react";

export default function Card() {
    const [hover, setHover] = useState(false)
    return (
        <a onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} href="/" className="mt-12 mx-4 w-fit border border-white/20 rounded-full p-4 flex flex-row justify-center items-center gap-4 space-y-1 bg-gradient-to-r from-black/60 to-black/20">
            <div className="rounded-full bg-white p-2 ml-2 flex justify-center items-center">
                <Gitlab className="rounde" />
            </div>
            <div>
                <h1 className="text-white font-semibold">Introducing GitHub Copilot X</h1>
                <h1 className="ml-1 text-white/50 ">Your AI pair programming is leveling up</h1>
            </div>
            {hover ? (
                <ArrowRight className="text-white font-bold p-1 ease-in duration-700" />
            ) : (
                <ChevronRight className="text-white font-bold p-1 ease-in duration-700" />
            )}
        </a>
    )
}