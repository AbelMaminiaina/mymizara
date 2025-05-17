import { Icon } from "@iconify/react/dist/iconify.js";

import checkcircle from '../assets/images/banner/check-circle.svg'
import mahila from '../assets/images/banner/mahila.png'


const Home = () =>{
    return (
    <section id="home" style={{ backgroundColor: '#f6faff' }}>
    <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-5 pt-30">
        <div className='grid grid-cols-1 lg:grid-cols-12 space-x-1 items-center'>
            <div className='col-span-6 flex flex-col gap-8 '>
                <div className='flex gap-2 mx-auto lg:mx-0'>
                    <Icon
                        icon="solar:verified-check-bold"
                        className="text-success text-xl inline-block me-2"
                    />
                    <p className='text-success text-sm font-semibold text-center lg:text-start'>L'école, une chance de réussir</p>
                </div>
                
                <h1 className='text-midnight_text text-4xl sm:text-5xl font-semibold pt-5 lg:pt-0'>Accompagner les enfants les plus démunis vers la réussite grâce à l'éducation.</h1>
                <h3 className='text-black/70 text-lg pt-5 lg:pt-0'>Ensemble, donnons aux enfants la chance d'apprendre, de rêver, et de construire leur futur.</h3>
                <div className="relative rounded-full pt-5 lg:pt-0">
                    <input type="Email address" name="q" className="py-6 lg:py-8 pl-8 pr-20 text-lg w-full text-black rounded-full focus:outline-none shadow-input-shadow" placeholder="recherche action..." autoComplete="off" />
                    <button className="bg-secondary p-5 rounded-full absolute right-2 top-2 ">
                        <Icon
                            icon="solar:magnifer-linear"
                            className="text-black text-4xl inline-block"
                        />
                    </button>
                </div>
                <div className='flex items-center justify-between pt-10 lg:pt-4'>
                    <div className='flex gap-2'>
                        <img src={checkcircle} alt="check-image" width={30} height={30} className='smallImage' />
                        <p className='text-sm sm:text-lg font-normal text-black'>Avenir des enfants</p>
                    </div>
                    <div className='flex gap-2'>
                        <img src={checkcircle} alt="check-image" width={30} height={30} className='smallImage' />
                        <p className='text-sm sm:text-lg font-normal text-black'>Soutien scolaire</p>
                    </div>
                    <div className='flex gap-2'>
                        <img src={checkcircle} alt="check-image" width={30} height={30} className='smallImage' />
                        <p className='text-sm sm:text-lg font-normal text-black'>Apprentissage</p>
                    </div>
                </div>

            </div>
            <div className='col-span-6 flex justify-center'>
                <img src={mahila} alt="nothing" width={1000} height={805} />
            </div>
        </div>

    </div>
    </section >);
}

export default Home;