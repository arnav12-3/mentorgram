const HowItWorks = () => {
    return (
      <section id="how-it-works" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold">How It Works</h2>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
                { icon: '🔍', title: '1. Discover', desc: 'Browse our list of verified influencers.' },
                { icon: '🎯', title: '2. Choose', desc: 'Select a mentor in your specific niche.' },
                { icon: '📅', title: '3. Book', desc: 'Schedule a 1-on-1 video call session.' },
                { icon: '🚀', title: '4. Grow', desc: 'Implement advice and watch your numbers go up.' }
            ].map((item, idx) => (
                <div key={idx} className="text-center relative group">
                    <div className="w-16 h-16 bg-white rounded-2xl shadow-md flex items-center justify-center mx-auto mb-6 text-2xl group-hover:scale-110 transition">{item.icon}</div>
                    <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                    {idx < 3 && <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-gray-200 -z-10"></div>}
                </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default HowItWorks;
