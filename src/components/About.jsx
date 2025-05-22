import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
const About = () => {
    return (
        <aside className='w-full md:w-1/6 bg-gray-800 p-4'>
            <h1 className='text-2xl font-bold mb-2'>About Me</h1>
            <p className='text-sm text-gray-600 dark:text-gray-300'>Li, Kevin</p>
            <ul className="flex gap-4"> 
              <li className="flex items-center space-x-2 hover:text-white">
                <FaGithub className="text-xl" />
              </li>
              <li className="flex items-center space-x-2 hover:text-white">
                <FaGithub className="text-xl" />
              </li>
            </ul>
        </aside>
    )
};

export { About }