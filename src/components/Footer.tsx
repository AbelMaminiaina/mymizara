
import { Icon } from "@iconify/react";

const footer = () => {
  return (
    <footer className="py-10" style={{ backgroundColor: '#d5effa' }}>
      <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">
        <div className="grid grid-cols-1 gap-y-10 gap-x-16 sm:grid-cols-2 lg:grid-cols-12 xl:gap-x-8">
          <div className='col-span-4 md:col-span-12 lg:col-span-4'>
            {/* <Logo /> */}
            <div className='flex items-center gap-4'>
              <a href="#" className='hover:text-primary text-black text-3xl'>
                <Icon
                  icon="tabler:brand-facebook"
                />
              </a>
              <a href="#" className='hover:text-primary text-black text-3xl'>
                <Icon
                  icon="tabler:brand-twitter"
                />
              </a>
              <a href="#" className='hover:text-primary text-black text-3xl'>
                <Icon
                  icon="tabler:brand-instagram"
                />
              </a>
            </div>
          </div>
          <div className="col-span-2">
            <h3 className="mb-4 text-2xl font-medium">Liens</h3>
            <ul>
              
                <li className="mb-2 text-black/50 hover:text-primary w-fit">
                  <a href="#">
                    Accueil
                  </a>
                </li>
                <li className="mb-2 text-black/50 hover:text-primary w-fit">
                  <a href="#">
                    Je veux aider
                  </a>
                </li>
                <li className="mb-2 text-black/50 hover:text-primary w-fit">
                  <a href="#">
                    Projets
                  </a>
                </li>
             
            </ul>
          </div>
          <div className="col-span-2">
            <h3 className="mb-4 text-2xl font-medium">Autres</h3>
            <ul>
              <li className="mb-2 text-black/50 hover:text-primary w-fit">
                <a href="#">
                  Notre mission
                </a>
              </li>
              <li className="mb-2 text-black/50 hover:text-primary w-fit">
                <a href="#">
                  Notre équipe
                </a>
              </li>
              <li className="mb-2 text-black/50 hover:text-primary w-fit">
                <a href="#">
                  Nos valeurs
                </a>
              </li>
              <li className="mb-2 text-black/50 hover:text-primary w-fit">
                <a href="#">
                  Nos objectifs
                </a>
              </li>
              <li className="mb-2 text-black/50 hover:text-primary w-fit">
                <a href="#">
                   Nos actions
                </a>
              </li>
            </ul>
          </div>
          <div className='col-span-4 md:col-span-4 lg:col-span-4'>
            <div className="flex items-center gap-2">
              <Icon
                icon="tabler:brand-google-maps"
                className="text-primary text-3xl inline-block me-2"
              />
              <h5 className="text-lg text-black/60">IVB 9 Ambidivonkely Ambohimarina</h5>
            </div>
            <div className="flex gap-2 mt-10">
              <Icon
                icon="tabler:phone"
                className="text-primary text-3xl inline-block me-2"
              />
              <h5 className="text-lg text-black/60">+33 7 69 25 03 10</h5>
              <h5 className="text-lg text-black/60">+261 34 55 701 71</h5>
            </div>
            <div className="flex gap-2 mt-10">
              <Icon
                icon="tabler:folder"
                className="text-primary text-3xl inline-block me-2"
              />
              <h5 className="text-lg text-black/60">mizara@gmail.com</h5>
            </div>
          </div>
        </div>

        <div className='mt-10 lg:flex items-center justify-between'>
          <h4 className='text-black/50 text-sm text-center lg:text-start font-normal'>@2025 Mizara </h4>
          <div className="flex gap-5 mt-5 lg:mt-0 justify-center lg:justify-start">
            <a href="/" className='text-black/50 text-sm font-normal hover:text-primary'>Mentions legales</a>
            <a href="/" className='text-black/50 text-sm font-normal hover:text-primary'>RGPD</a>
          </div>
          <h4 className='text-black/50 text-sm text-center lg:text-start font-normal'>Parametres cookies</h4>
        </div>
      </div>
    </footer>
  )
}

export default footer;
