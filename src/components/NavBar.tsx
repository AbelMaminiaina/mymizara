import  {useState} from 'react'
//import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";


  const NavBar= () => {
    const [isOpen, setIsOpen] = useState(false);
  

    return (
      // <nav className="bg-white border-gray-200 dark:bg-gray-900">
      //   <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      //     <Link to="/" className="text-2xl font-bold text-blue-600">
      //       Mizara
      //     </Link>
      //     <div className="space-x-4">
      //       <Link
      //         to="/"
      //         className="text-gray-700 hover:text-blue-600 transition duration-300">
      //         Accueil
      //       </Link>
      //       <Link
      //         to="/about"
      //         className="text-gray-700 hover:text-blue-600 transition duration-300">
      //         À propos
      //       </Link>
      //       <Link
      //         to="/projects"
      //         className="text-gray-700 hover:text-blue-600 transition duration-300">
      //         Projets
      //       </Link>
      //       <Link
      //         to="/team"
      //         className="text-gray-700 hover:text-blue-600 transition duration-300">
      //         Équipe
      //       </Link>
      //       <Link
      //         to="/contact"
      //         className="text-gray-700 hover:text-blue-600 transition duration-300">
      //         Contact
      //       </Link>
      //     </div>
      //   </div>
      // </nav>

      
      

      <nav className="fixed top-0 z-40 w-full pb-5 transition-all duration-300 bg-white shadow-lg px-4 py-4">
        <div className="w-full relative flex justify-center items-center h-4 justify-end pr-4"> 
          <div className="absolute top-0 flex space-x-4">
              <a href="#" className='hover:text-primary text-black text-3xl rounded-full'>
                <Icon
                  icon="tabler:brand-facebook" className='w-5 h-5'
                />
              </a>
              <a href="#" className='hover:text-primary text-black text-3xl'>
                <Icon
                  icon="tabler:brand-twitter" className='w-5 h-5'
                />
              </a>
              <a href="#" className='hover:text-primary text-black text-3xl'>
                <Icon
                  icon="tabler:brand-instagram" className='w-5 h-5'
                />
              </a>
          </div>
        </div>
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 ">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Mizara</span>
        </a>
        <div className="flex space-x-4 md:order-2 rtl:space-x-reverse">
            <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-6 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">A decouvrir</button>            
            <button type="button" className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">Faire un don</button>            
        </div>                
        {/* <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button type="button" onClick={()=> setIsOpenU(!isOpenU)} className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
              <span className="sr-only">Open user menu</span>
              <img className="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-3.jpg" alt="user photo" />
            </button>
            {isOpenU && 
            <div className="text-base list-none absolute top-14 right-0 bg-white divide-y divide-gray-100 border rounded-lg shadow-sm z-10 dark:bg-gray-700 dark:divide-gray-600" id="user-dropdown">
              
              <div className="px-4 py-3">
                <span className="block text-sm text-gray-900 dark:text-white">Abel Rabetsimialona</span>
                <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">a.maminiaina@gmail.com</span>
              </div>
              <ul className="py-2" aria-labelledby="user-menu-button">
                <li>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Dashboard</a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Settings</a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Earnings</a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
                </li>
              </ul>
            </div>
            }
            <button data-collapse-toggle="navbar-user" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-user" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
              </svg>
          </button>
  
        </div> */}

        
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-user">
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a href="#home" className="block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Accueil</a>
            </li>
            <li>
              <a href="#Aider" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Je veux aider</a>
            </li>
            <li>
              <a href="#projects" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Projets</a>
            </li>            
            <li>
                  <button id="mega-menu-full-dropdown-button" 
                          onClick={() => setIsOpen(!isOpen)}
                          data-collapse-toggle="mega-menu-full-dropdown" className="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded-sm md:w-auto hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">Qui sommes-nous 
                    <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                    </svg></button>
            </li>            
            <li>
              <a href="#contact" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
            </li>
          </ul>          
        </div>
        </div>        
        {isOpen && 
        <div id="mega-menu-full-dropdown" className="mt-1 border-gray-200 shadow-xs bg-gray-50 md:bg-white border-y dark:bg-gray-800 dark:border-gray-600">
          <div className="grid max-w-screen-xl px-4 py-5 mx-auto text-gray-900 dark:text-white sm:grid-cols-2 md:px-6">
              <ul>
                  <li>
                      <a href="#" className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                          <div className="font-semibold">Notre mission</div>
                          <span className="text-sm text-gray-500 dark:text-gray-400">Offrir un avenir meilleur aux enfants les plus démunis grâce à l’éducation...</span>
                      </a>
                  </li>
                  <li>
                      <a href="#" className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                          <div className="font-semibold">Nos objectifs</div>
                          <span className="text-sm text-gray-500 dark:text-gray-400">Réduire les inégalités scolaires, accompagner les enfants en difficulté...</span>
                      </a>
                  </li>
                  <li>
                      <a href="#" className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                          <div className="font-semibold">Nos actions</div>
                          <span className="text-sm text-gray-500 dark:text-gray-400">Soutien scolaire, fournitures et matériel éducatif...</span>
                      </a>
                  </li>
              </ul>
              <ul>
                  <li>
                      <a href="#" className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                          <div className="font-semibold">Notre équipe</div>
                          <span className="text-sm text-gray-500 dark:text-gray-400">Une équipe de bénévoles engagés, d’enseignants, de travailleurs sociaux et de partenaires éducatifs.</span>
                      </a>
                  </li>
                  <li>
                      <a href="#" className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                          <div className="font-semibold">Nos valeurs</div>
                          <span className="text-sm text-gray-500 dark:text-gray-400">Solidarité, respect, engagement, transparece.</span>
                      </a>
                  </li>
                  <li>
                      <a href="#" className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                          <div className="font-semibold">Historique</div>
                          <span className="text-sm text-gray-500 dark:text-gray-400">Fondée en 2025 notre association est née du constat alarmant de l’exclusion scolaire dans les milieux défavorisés en campagne..</span>
                      </a>
                  </li>
              </ul>
          </div>
        </div>
        }      
      </nav>

    );
  }
  export default NavBar