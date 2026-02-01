import { useState } from 'react';

const Categories = ({ selectedCategory, onSelectCategory }) => {
  const categories = [
    { name: 'Comedy', icon: '🎭' },
    { name: 'Finance', icon: '💰' },
    { name: 'Education', icon: '📚' },
    { name: 'Fitness', icon: '💪' },
    { name: 'Lifestyle', icon: '🌍' },
    { name: 'Tech', icon: '💻' }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Find Mentors in Your Niche</h2>
          <p className="text-gray-600">Select a category to filter experts</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((cat) => (
            <div 
                key={cat.name}
                onClick={() => onSelectCategory(cat.name === selectedCategory ? 'all' : cat.name)}
                className={`bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition text-center cursor-pointer group hover:-translate-y-1 ${selectedCategory === cat.name ? 'ring-2 ring-insta-pink ring-offset-2' : ''}`}
            >
                <div className="text-3xl mb-3 group-hover:scale-110 transition duration-300">{cat.icon}</div>
                <h3 className="font-bold text-sm">{cat.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
