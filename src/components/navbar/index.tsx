import { Github, Menu } from "lucide-react";

export default function NavBar() {
    return (
        <div className="flex flex-row  w-full py-2 px-10 justify-between absolute">
            <div className="inline-block rounded-lg px-[8px] py-[4px] border border-white">
                <a className="text-white text-sm" href="">Sign up</a>
            </div>
            <div className="rounded-full bg-white p-2 items-center">
                <Github />
            </div>
            <Menu className="text-white"/>
        </div>
    )
}