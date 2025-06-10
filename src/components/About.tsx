import { ScrollAnimation } from './animations/ScrollAnimation'
import { BRAND_NAME, LOGO } from '../globals'

3
const About = () => {
  const brandBenefits = [
    "Handcrafted with premium Tasmanian materials",
    "Ethically sourced and sustainable production",
    "Unique designs inspired by Tasmania's natural beauty"
  ]

  const qualityFeatures = [
    "100% organic cotton for maximum comfort",
    "Durable stitching for long-lasting wear",
    "Eco-friendly dyes and processes"
  ]

  return (
    
    <section id="about" className="relative bg-background-dark py-40 overflow-visible">
      <ScrollAnimation>
        <div className="container mx-auto px-4">
          {/* First Row: Image Left, Text Right */}
          <div className="flex flex-col md:flex-row items-center mb-20">
            {/* Image Section */}
            <div className="md:w-1/2 mb-8 md:mb-0">
              <div className="relative group">

                <div className="absolute -inset-1 -bottom-10 bg-gradient-to-r from-primary/30 via-accent/30 to-primary/30 rounded-full blur-2xl group-hover:blur-[100px] transition-all duration-500 opacity-80 group-hover:opacity-100 z-0"></div> 
                  
                <div className="relative overflow-hidden z-10 aspect-square w-[300px] h-[300px] mx-auto rounded-full">
                  <img 
                    src={LOGO}
                    alt={`${BRAND_NAME} Logo`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            
            {/* Text Section */}
            <div className="md:w-1/2 md:pl-12 relative z-10">
              <h2 className="text-3xl font-bold mb-6 gradient-text">
                Why Choose {BRAND_NAME}?
              </h2>
              <ul className="space-y-4">
                {brandBenefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-primary mr-3">•</span>
                    <p className="content-secondary">{benefit}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Second Row: Text Left, Image Right */}
          <div className="flex flex-col md:flex-row items-center">
            {/* Text Section - Now on left for mobile, stays left on desktop */}
            <div className="md:w-1/2 md:pr-12 relative z-10 order-2 md:order-1">
              <h2 className="text-3xl font-bold mb-6 gradient-text">
                Premium Quality
              </h2>
              <ul className="space-y-4">
                {qualityFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-primary mr-3">•</span>
                    <p className="content-secondary">{feature}</p>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Image Section - Now on right for mobile, stays right on desktop */}
            <div className="md:w-1/2 mb-8 md:mb-0 order-1 md:order-2">
              <div className="relative group">
                <div className="absolute -inset-1 -bottom-10 bg-gradient-to-l from-accent/30 via-primary/30 to-accent/30 rounded-full blur-2xl group-hover:blur-[100px] transition-all duration-500 opacity-80 group-hover:opacity-100 z-0"></div>
                <div className="relative overflow-hidden z-10 aspect-square w-[300px] h-[300px] mx-auto rounded-full">
                  <img 
                    src={LOGO}
                    alt={`${BRAND_NAME} Quality`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </ScrollAnimation>
    </section>
  )
}

export default About
