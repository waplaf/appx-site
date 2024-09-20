import { useEffect, useState } from "react";
import LogoIcon from "../logo";

type ListType = { name: string; href: string };

const Links: ListType[] = [
    { name: "Sobre", href: "#about" },
    { name: "Serviços ", href: "#services" },
    { name: "Equipe", href: "#team" },
    { name: "Contacto", href: "#contact" }
];

export default function Nav() {

    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        // Limpar o ouvinte de eventos quando o componente for desmontado
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);



    return (
        <header className="w-ful z-50 fixed top-0 right-0 left-0 text-green-500">
            <nav className={`${scrollY > 100 ? ' shadow-md' : "b"}   px-20 w-full py-5 flex flex-col  md:flex-row bg-black opacity-95  border-green-200 shadow-sm`}>
                <div className="w-full flex md:block justify-center">
                    <LogoIcon />

                </div>
                <div className="flex justify-center md:justify-end w-full ">
                    <ul className=" flex items-center  space-x-4 md:gap-7 mt-3 md:mt-0">
                        {Links.map((li) => (
                            <li key={li.name}>
                                <a href={li.href} className="hover:text-white">
                                    {li.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        </header>
    );
}
