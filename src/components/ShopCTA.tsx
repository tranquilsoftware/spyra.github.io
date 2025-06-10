import { Link } from 'react-router-dom';
import { HREF_PRODUCT_LINK } from '../globals';
import { ShoppingBag } from 'lucide-react';

interface ShopCTAProps {
  showText?: boolean;
  className?: string;
}

const ShopCTA: React.FC<ShopCTAProps> = ({ 
  showText = true,
  className = '' 
}) => {
  return (
    <section className={`relative py-16 bg-background-dark ${className}`}>
      <div className="container mx-auto px-4 text-center">
        <div className={`${showText ? 'max-w-3xl' : 'inline-block'} mx-auto`}>
          {showText && (
            <>
              <h2 className="text-4xl font-bold mb-6 gradient-text">
                Ready to Find Your Perfect Style?
              </h2>
              <p className="text-content-secondary text-xl mb-8">
                Explore our curated collection of premium clothing and accessories
              </p>
            </>
          )}
          <Link
            to={HREF_PRODUCT_LINK}
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-gradient-to-r from-primary to-accent rounded-full hover:from-primary/90 hover:to-accent/90 hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 transform hover:-translate-y-1"
          >
            Shop Now
            <ShoppingBag className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ShopCTA;