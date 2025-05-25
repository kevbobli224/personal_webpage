import { FaGithub, FaLinkedin, FaOrcid, FaUniversity, FaDownload} from "react-icons/fa";
const About = () => {
    return (
        <aside className='w-full md:w-1/6 bg-gray-800 p-4'>
            <h1 className='text-2xl font-bold mb-2'>About Me</h1>
            <img
                src={`${import.meta.env.BASE_URL}static/am.png`}
                alt="This me"
                className="rounded-lg shadow-lg border border-gray-700 mx-auto"
            />
            <p className='text-xl text-gray-200'>Li, Kevin</p>
            <ul className="flex gap-6 items-center justify-center py-4"> 
              <li className="flex items-center space-x-2 hover:text-white">
                <a 
                    href="https://github.com/kevbobli224"
                    className="text-white hover:text-grey transition-colors"
                >
                    <FaGithub className="text-xl" />
                </a>
              </li>
              <li className="flex items-center space-x-2 hover:text-white">
                <a 
                    href="https://linkedin.com/in/kevin-kw-li"
                    className="text-white hover:text-grey transition-colors"
                >
                    <FaLinkedin className="text-xl" />
                </a>
              </li>
              <li className="flex items-center space-x-2 hover:text-white">
                <a 
                    href="https://orcid.org/0009-0001-1063-7983"
                    className="text-white hover:text-grey transition-colors"
                >
                    <FaOrcid className="text-xl" />
                </a>
              </li>
            </ul>
            <ul className="flex gap-6 items-center py-4 w-full flex-col">
                <li className="flex items-start gap-3">
                    <div className="relative flex-shrink-0 self-center">
                        <FaUniversity className="text-xl flex-shrink-0 self-center"/>
                        <span className="absolute -bottom-1 -right-1 text-xs font-semibold text-white/80 leading-none tracking-tight">
                        2
                        </span>
                    </div>
                    <div className="leading-tight text-left pl-3">
                        <div className="text-sm">
                            <div className="flex items-start gap-2">
                                <span className="text-gray-400">•</span>
                                <span className="font-semibold">MSc, Veterinary Science (Microbiology)</span>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-xs text-gray-400 mt-1">Université de Montréal, FMV</span>
                            <span className="text-xs text-gray-400 mt-1">St-Hyacinthe, QC, Canada</span>
                        </div>
                    </div>
                </li>
                <li className="flex items-start gap-3">
                    <div className="relative flex-shrink-0 self-center">
                        <FaUniversity className="text-xl flex-shrink-0 self-center"/>
                        <span className="absolute -bottom-1 -right-1 text-xs font-semibold text-white/80 leading-none tracking-tight">
                        1
                        </span>
                    </div>
                    <div className="leading-tight text-left pl-3">
                        <div className="text-sm">
                            <div className="flex items-start gap-2">
                                <span className="text-gray-400">•</span>
                                <span className="font-semibold">Hon. BSc, Bioinformatics Specialist</span>
                            </div>
                            <div className="flex items-start gap-2">
                                <span className="text-gray-400">•</span>
                                <span className="font-semibold">Minor, Comp Sci</span>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-xs text-gray-400 mt-1">University of Toronto, St. George Campus</span>
                            <span className="text-xs text-gray-400 mt-1">Toronto, ON, Canada</span>
                        </div>
                    </div>
                </li>
            </ul>
            <a
                href={`${import.meta.env.BASE_URL}cv/LiKevin_CV.pdf`}
                download
                className="inline-flex mt-6 px-4 py-2 bg-gray-700 hover:bg-gray-400 text-white font-semibold rounded shadow transition"
            >
                <FaDownload  className="text-base align-middle translate-y-[4px]"/>
                Download CV
            </a>
        </aside>
    )
};

export { About }