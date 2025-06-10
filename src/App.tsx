import './App.css'
import Header from './components/Header'
// import Hero from './components/HeroWImage'
import SimpleHero from './components/SimpleHero'
import Team from './components/Team'
import About from './components/About'
import Footer from './components/Footer'
// import Testimonials from './components/Testimonials'
import QuickCategory from './components/QuickCategory'

// 3d grid.
// import AnimatedBackground from './components/animations/AnimatedBackground'
// import ThreeJsStars from './components/animations/threeJsStars'
import { GalleryViewer } from './components/GalleryViewer'
// import { PulsatingThing } from './components/animations/PulsatingThing'
import RotatingImageBackground from './components/animations/RotatingImageBackground'
import CustomOrder from './components/CustomOrder'
import ShopCTA from './components/ShopCTA'
// import AnimatedBackground from './components/animations/AnimatedBackground'

function App() {

  // Render app (actually a home page -- see router.tsx)
  return (
      <div className="min-h-screen bg-background relative overflow-hidden">


          {/* Animated Background with increased opacity */}
          <div className="absolute inset-0 z-0 w-full h-full">
              {/* <GlowingOrbs /> */}

              {/* Only render if WebGL is supported. Why? To not render on stupid old browsers, or iWatches */}

              {/* STARS */}
              {/* {isWebGLSupported() && <AnimatedBackground/>} */}
              {/* {isWebGLSupported() && <ThreeJsStars/>} */}

              {/* PULSATING SPIRAL */}
              {/* {isWebGLSupported() && <PulsatingThing/>} */}


              {/* Spirals */}
              {<RotatingImageBackground 
                image={"/assets/images/spiral.png"}
                imageCount = {50}
                minSize = {20}
                maxSize = {100}
                minOpacity = {0.01}
                maxOpacity = {0.15}
                minSpeed = {10}
                maxSpeed = {100}
              />}


              {/* Background Image */}
              {/*
              <div 
                className="fixed inset-0 z-0 w-full h-full bg-cover bg-center bg-no-repeat"
                style={{ 
                  backgroundImage: "url('/assets/images/bg.jpeg')",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  backgroundAttachment: 'fixed'
                }}
              /> 
              */}

          </div>




          <Header/>

          <SimpleHero/>

          <QuickCategory/>
          <ShopCTA showText={false} />

          {/* <div className="h-20"/> */}
          <About/>

          <div className="h-40"/>
          <GalleryViewer/>

          <div className="h-40"/>
          <CustomOrder/>

          <ShopCTA showText={true} />

          {/*  Doesnt want testimonials
          <div className="h-40"/>
          <Testimonials/> 
          */}

          <div className="h-40"/>
          <Team/>

          {/* <div className="h-80" /> */}
          <Footer/>
      </div>
  )
}

// Function to check WebGL support
// function isWebGLSupported() {
//   try {
//     const canvas = document.createElement('canvas');
//     return !!(window.WebGLRenderingContext && (
//       canvas.getContext('webgl') || canvas.getContext('experimental-webgl')
//     ));
//   } catch (e) {
//     return false;
//   }
// }

export default App
