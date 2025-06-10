import { Link } from 'react-router-dom';

const categories = [
  {
    name: 'Accessories',
    slug: 'accessories',
    image: '/assets/images/1.jpeg',
    icon: '🧢',
    overlay: 'bg-primary/80 hover:bg-primary/60'
  },
  {
    name: 'Shirts',
    slug: 'shirts',
    image: '/assets/images/2.jpeg',
    icon: '👕',
    overlay: 'bg-primary/80 hover:bg-primary/60'
  },
  {
    name: 'Pants',
    slug: 'pants',
    image: '/assets/images/3.jpeg',
    icon: '👖',
    overlay: 'bg-primary/80 hover:bg-primary/60'
    // overlay: 'bg-accent/80 hover:bg-accent/60'
  }
];

const QuickCategory = () => {
  return (
    <section className="relative bg-background-dark py-16 overflow-visible">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 gradient-text">Shop by Category</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link 
              key={category.slug}
              to={`/category/${category.slug}`}
              className="group relative overflow-hidden rounded-xl h-64 md:h-80 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl subtle-text"
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url('${category.image}')` }}
              >
                {/* Overlay */}
                <div className={`absolute inset-0 ${category.overlay} transition-opacity duration-500 flex flex-col items-center justify-center p-6 text-center content-text-white`}>
                  <span className="text-5xl mb-4 transform group-hover:scale-125 transition-transform duration-300">
                    {category.icon}
                  </span>
                  <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
                  <p className="opacity-90 group-hover:opacity-100 transition-opacity">
                    {/* Shop now <span className="inline-block transform group-hover:translate-x-1 transition-transform">→</span> */}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickCategory;
