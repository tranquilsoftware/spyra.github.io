import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Clock, AlertCircle, ArrowRight } from 'lucide-react';

interface CustomOrderItem {
  id: string;
  name: string;
  description: string;
  price: number;
  available: boolean;
  deposit: number;
  image: string;
  type: 'hoodie' | 'tshirt' | 'other';
  estimatedDelivery: string;
  popular?: boolean;
}

const CustomOrder = () => {
  const [customItems, setCustomItems] = useState<CustomOrderItem[]>([
    {
      id: 'custom-hoodie-1',
      name: 'Custom Hoodie',
      description: 'Handmade custom hoodie with your unique design.',
      price: 250,
      deposit: 50,
      available: true,
      image: '/assets/images/1.jpeg',
      type: 'hoodie',
      estimatedDelivery: '4-6 weeks',
      popular: true
    },
    // {
    //   id: 'custom-tshirt-1',
    //   name: 'Custom T-Shirt',
    //   description: 'Handmade custom t-shirt with your unique design. Lightweight and comfortable.',
    //   price: 60,
    //   deposit: 20,
    //   available: true,
    //   image: '/assets/images/2.jpeg',
    //   type: 'tshirt',
    //   estimatedDelivery: '3-5 weeks'
    // },
    {
      id: 'custom-other-1',
      name: 'Custom Item',
      description: 'Completely custom clothing item. Let\'s discuss your vision!',
      price: 0,
      deposit: 50,
      available: true,
      image: '/assets/images/3.jpeg',
      type: 'other',
      estimatedDelivery: 'TBD'
    }
  ]);

  const handleOrderClick = (itemId: string) => {
    console.log('Ordering custom item:', itemId);
    // In a real app, this would redirect to a checkout or contact form
  };

  return (
    <section className="relative bg-background-dark py-16 overflow-visible">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 gradient-text">
            Custom Orders
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Handcrafted custom clothing items. Limited spots available. A deposit is required to secure your order.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto justify-center">
          {customItems.map((item) => (
            <div 
              key={item.id}
              className={`group relative bg-card rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 ${
                !item.available ? 'opacity-80' : ''
              }`}
            >
              {item.popular && (
                <div className="absolute top-4 right-4 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full z-10">
                  Most Popular
                </div>
              )}
              
              {/* Image with overlay */}
              <div className="relative h-48 overflow-hidden">
                <div 
                  className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url('${item.image}')` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-xl font-bold text-foreground">{item.name}</h3>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="w-4 h-4 mr-1" />
                    <span>{item.estimatedDelivery}</span>
                  </div>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 flex flex-col h-[calc(100%-12rem)]">
                <p className="text-content-white mb-4">{item.description}</p>
                
                <div className="mt-auto">
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between py-2 border-b border-border/30">
                      <span className="text-content-white">Total Price</span>
                      <span className="font-medium">
                        {item.price > 0 ? `$${item.price}` : 'Contact for pricing'}
                      </span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-border/30">
                      <span className="text-content-white">Deposit Required</span>
                      <span className="font-medium text-content-secondary">${item.deposit}</span>
                    </div>
                  </div>

                  {item.available ? (
                    <button
                      onClick={() => handleOrderClick(item.id)}
                      className="w-full py-3 px-6 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-medium flex items-center justify-center gap-2 transition-colors"
                    >
                      <ShoppingBag className="w-5 h-5" />
                      Order Now (${item.deposit} deposit)
                    </button>
                  ) : (
                    <div className="w-full py-3 px-6 bg-muted text-muted-foreground rounded-lg font-medium flex items-center justify-center gap-2">
                      <AlertCircle className="w-5 h-5" />
                      Currently Unavailable
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="mb-4 text-muted-foreground">
            Have something special in mind?
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center text-content-secondary hover:text-content-secondary/80 font-medium transition-colors group"
          >
            Let's discuss your custom request
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CustomOrder;
