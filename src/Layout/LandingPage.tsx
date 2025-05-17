import HomePage  from '../pages/HomePage';
import ProjectPage  from '../pages/ProjectPage';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { ThemeProvider } from 'next-themes';
import ScrollToTop from '../components/ScrollTop';

export default function LandingPage() {
  return (
    <ThemeProvider 
    attribute="class"  
    enableSystem={true}
    defaultTheme="light"> 
      <div className="flex flex-col min-h-screen">   
        <NavBar/>
          <main className="flex-grow"> 
            <HomePage /> 
            <ProjectPage />   
          </main>
        <Footer/>
        <ScrollToTop />
      </div>
    </ThemeProvider>
  )
}
