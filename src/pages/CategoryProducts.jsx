import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronRight, Filter, Star, ShoppingCart, Search } from 'lucide-react';

const productsData = {
  'medicines': [
    { id: 1, name: 'Paracetamol 500mg', price: 45, originalPrice: 60, rating: 4.8, reviews: 120, image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80', brand: 'GSK' },
    { id: 2, name: 'Amoxicillin 250mg', price: 120, originalPrice: 150, rating: 4.5, reviews: 85, image: 'https://cdn.prod.website-files.com/63b5c3b9285b4ace80232e0c/63b714e37582621edf8dad76_granat-84wDj-C6nYI-unsplash%20(1)-p-500.jpg', brand: 'Pfizer' },
    { id: 3, name: 'Cetirizine 10mg', price: 35, originalPrice: 50, rating: 4.9, reviews: 210, image: 'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&w=800&q=80', brand: 'Cipla' },
    { id: 4, name: 'Vitamin C 1000mg', price: 350, originalPrice: 450, rating: 4.7, reviews: 340, image: 'https://cdn.prod.website-files.com/63b5c3b9285b4ace80232e0c/63b5e1c2db323120ab0cc8e7_pexels-doterra-international-llc-6056527-p-500.jpg', brand: 'HealthKart' },
  ],
  'medical-equipment': [
    { id: 5, name: 'Digital BP Monitor', price: 1850, originalPrice: 2499, rating: 4.8, reviews: 1540, image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80' },
    { id: 6, name: 'Nebulizer Machine', price: 1450, originalPrice: 1999, rating: 4.6, reviews: 820, image: 'https://img.freepik.com/free-photo/health-care-concept_93675-130417.jpg?semt=ais_hybrid&w=740&q=80' },
  ],
  'supplements': [
    { id: 7, name: 'Whey Protein 2kg', price: 4200, originalPrice: 5500, rating: 4.9, reviews: 2100, image: 'https://cdn.prod.website-files.com/63b5c3b9285b4ace80232e0c/63b5f46885968d94902b5d47_nature-zen-awBT427pSKE-unsplash-p-500.jpg' },
    { id: 8, name: 'Biotin Capsules', price: 499, originalPrice: 799, rating: 4.7, reviews: 450, image: 'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&q=80' },
  ]
};

const CategoryProducts = () => {
  const { categoryId } = useParams();
  const categoryName = categoryId.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase());
  
  // Use categoryId to fetch products, fallback to empty array if not found
  const products = productsData[categoryId] || [];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [categoryId]);

  return (
    <div className="bg-gray-50 min-h-screen pb-48 pt-[100px] lg:pt-[170px]">
      <div className="container mx-auto px-4 lg:px-8">
        
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8 py-4">
          <Link to="/" className="hover:text-primary">Home</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-gray-900 font-medium">{categoryName}</span>
        </nav>

        <div className="flex flex-col gap-10">
          
          {/* Product Grid Area - Full Width */}
          <div className="flex-1">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
              <div>
                <h1 className="text-4xl font-bold text-gray-900 mb-2">{categoryName}</h1>
                <p className="text-gray-500 text-sm">Explore our premium collection of {categoryName}</p>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-sm text-gray-400">Pure Quality Guaranteed</span>
              </div>
            </div>

            {products.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                {products.map((product) => (
                  <div key={product.id} className="bg-white group rounded-xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col">
                    <div className="relative aspect-square overflow-hidden bg-gray-50">
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    
                    <div className="p-5 flex flex-col flex-grow">
                      <p className="text-[10px] font-bold text-primary uppercase tracking-widest mb-1">{product.brand || 'Premium Care'}</p>
                      <h3 className="text-sm font-bold text-gray-900 mb-2 line-clamp-2 h-10 group-hover:text-primary transition-colors">
                        {product.name}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-2xl border-2 border-dashed border-gray-100 p-20 flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mb-6">
                   <Search className="w-10 h-10 text-gray-300" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">No Products Found</h3>
                <p className="text-gray-500 max-w-xs mb-8">We couldn't find any products in the {categoryName} category at the moment. Please check back later.</p>
                <Link to="/" className="bg-primary text-white px-8 py-3 rounded-lg font-bold hover:bg-primary-dark transition-all shadow-lg shadow-primary/20">
                  Back to Homepage
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryProducts;
