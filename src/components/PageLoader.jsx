import React from 'react';

const PageLoader = () => {
  return (
    <div className="fixed inset-0 z-[9999] bg-white flex items-center justify-center">
      <div className="text-center">
        {/* Logo with pulse animation */}
        <div className="mb-8 animate-pulse">
          <img 
            src="/KS2-Logo.png" 
            alt="Loading..." 
            className="h-24 w-auto mx-auto"
          />
        </div>
        
        {/* Animated dots */}
        <div className="flex gap-2 justify-center mb-4">
          <div className="w-3 h-3 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
          <div className="w-3 h-3 bg-primary rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
          <div className="w-3 h-3 bg-primary rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
        </div>
        
        {/* Loading text */}
        <p className="text-gray-600 font-semibold text-sm">Loading...</p>
      </div>
    </div>
  );
};

export default PageLoader;
