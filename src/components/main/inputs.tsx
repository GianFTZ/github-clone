import { ChevronRight } from "lucide-react";

export default function Inputs() {
    return (
        <div className="ml-4 flex flex-row justify-between gap-4">
            <div className="flex flex-row w-1/2">
                <input className="w-[45%] rounded-l-lg p-3 font-semibold" type="text" placeholder="Email address" />
                <button className="p-3 rounded-r-lg bg-purple-800 font-bold stroke-white text-white w-[55%]">Sign up for GitHub</button>
            </div>
            <div className="w-0.5 h-full border border-white/10"></div>
            <div className="w-1/2 flex items-center">
                <a className="p-3 flex flex-row justify-center gap-2 items-center border border-purple-600">
                    <h1 className="text-white">Start a free enterprise trial</h1>
                    <ChevronRight className="text-white"/>
                </a>
            </div>
        </div>
    )
}