import { FaLinkedin, FaGithub, FaArrowUp } from "react-icons/fa";
import { Navbar } from "@C/Layouts/NavBar/NavBar.jsx";
import { ItemNavBar } from '@C/UI/ItemNavBar/ItemNavBar.jsx';
import info from "@D/AboutMe.json"

export const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="bg-[#111827] text-white py-8 flex justify-center items-center w-full ">
            <div className="container mx-auto px-4 w-full max-w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 w-full max-w-full">
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-white">Contacto</h3>
                        <p className="text-white">{info.contact.email} </p>
                        <p className="text-white">Teléfono: +57 {info.contact.phoneNumber}</p>
                        <p className="text-white">Ubicación: {info.country} </p>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-white">Redes sociales</h3>
                        <div className="flex space-x-4">
                            <a href={"https://github.com/" + info.contact.github} target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400">
                                <FaGithub size={24} />
                            </a>
                        </div>
                    </div>
                </div>

                <hr className="border-white-700 mb-8" />

                <div className="flex flex-col md:flex-row justify-between items-center">
                    <p className="mb-4 md:mb-0 text-white">© 2025 Michelle Betancurt . Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
};