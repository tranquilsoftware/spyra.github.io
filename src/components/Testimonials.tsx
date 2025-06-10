import { Star } from 'lucide-react'
import { ScrollAnimation } from './animations/ScrollAnimation'

interface Testimonial {
  id: number
  name: string
  image: string
  content: string
  rating: number
  location: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah K.",
    image: "https://salient.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar-1.c78616b7.png&w=64&q=75",
    content: "Absolutely love my new beanie! The quality is outstanding and it's so warm. Perfect for Tasmanian winters. Will definitely be buying more colors!",
    rating: 5,
    location: "Hobart, TAS"
  },
  {
    id: 2,
    name: "Michael T.",
    image: "https://salient.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar-5.e7f7faf2.png&w=64&q=75",
    content: "The wool scarf is incredibly soft and keeps me warm on my morning hikes. The craftsmanship is exceptional and it's become my favorite accessory.",
    rating: 5,
    location: "Launceston, TAS"
  },
  {
    id: 3,
    name: "Emma R.",
    image: "https://salient.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar-4.16b4e29e.png&w=64&q=75",
    content: "Ordered the gloves and they fit perfectly. The leather is high quality and the wool lining is so cozy. Great customer service too!",
    rating: 5,
    location: "Devonport, TAS"
  }
];

export function Testimonials() {
  return (
    <section className="relative bg-background py-40 overflow-visible body-font">
      <div className="container px-5 mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4 gradient-text">
          What Our Customers Say
        </h2>
        <p className="text-content-secondary text-center mb-12 max-w-2xl mx-auto">
          Hear from people who love our handcrafted Tasmanian clothing
        </p>
        
        <div className="flex flex-wrap -m-4">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div className="h-full text-center">
                <ScrollAnimation direction="up" delay={testimonial.id * 0.2}>
                  <div className="relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 via-accent/30 to-primary/30 rounded-full blur opacity-70 group-hover:opacity-100 transition duration-200"></div>
                    <img 
                      alt={testimonial.name} 
                      src={testimonial.image}
                      className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-border relative z-10"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(
                          `<svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="80" height="80" rx="40" fill="#1E293B"/>
                            <text x="50%" y="50%" font-family="Arial" font-size="32" font-weight="bold" fill="#94A3B8" text-anchor="middle" dy=".3em">${testimonial.name.charAt(0)}</text>
                          </svg>`
                        )}`;
                      }}
                    />
                  </div>
                  
                  <p className="leading-relaxed text-content-secondary mb-6 italic">
                    "{testimonial.content}"
                  </p>
                  
                  <div className="inline-flex items-center justify-center w-10 h-1 bg-primary rounded mt-6 mb-4 mx-auto"></div>
                  
                  <div className="flex justify-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${i < testimonial.rating ? 'fill-primary text-primary' : 'text-gray-600'}`}
                      />
                    ))}
                  </div>
                  
                  <h2 className="text-white font-medium title-font tracking-wider text-lg">
                    {testimonial.name}
                  </h2>
                  <p className="text-content-tertiary text-sm">{testimonial.location}</p>
                </ScrollAnimation>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
