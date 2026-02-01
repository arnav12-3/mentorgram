import { ArrowRight } from 'lucide-react';

const Hero = ({ onExploreClick, onJoinClick }) => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute w-96 h-96 rounded-full bg-insta-pink top-0 right-0 translate-x-1/3 -translate-y-1/3 blur-[80px] opacity-40 animate-pulse"></div>
      <div className="absolute w-80 h-80 rounded-full bg-insta-blue bottom-0 left-0 -translate-x-1/3 translate-y-1/3 blur-[80px] opacity-40 animate-pulse delay-1000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left animate-fade-in-up">
            <div className="inline-block px-4 py-1.5 rounded-full bg-orange-50 border border-orange-100 text-insta-pink font-semibold text-xs uppercase tracking-wide mb-6 shadow-sm">
              🚀 The #1 Mentorship Platform for Creators
            </div>
            <h1 className="text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-6">
              Level Up Your <br />
              <span className="insta-gradient-text">Influence</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Stop guessing the algorithm. Learn from successful Instagram influencers through personalized one-on-one mentorship sessions.
            </p>
            
            {/* Hero Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <button 
                onClick={onExploreClick}
                className="insta-gradient-bg text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl hover:opacity-90 transition transform hover:-translate-y-1 text-center"
              >
                Explore Mentors
              </button>
              <div className="flex gap-2">
                 <button 
                   onClick={() => onJoinClick('creator')}
                   className="bg-white text-slate-900 border border-gray-200 px-6 py-4 rounded-full font-bold text-sm shadow-sm hover:bg-gray-50 transition"
                 >
                    Join as Creator
                 </button>
              </div>
            </div>
            
            <div className="mt-8 flex items-center justify-center lg:justify-start gap-4">
               <div className="flex -space-x-3">
                   {[1, 5, 8].map(i => (
                       <img key={i} className="w-10 h-10 rounded-full border-2 border-white" src={`https://i.pravatar.cc/100?img=${i}`} alt="User" />
                   ))}
                   <div className="w-10 h-10 rounded-full border-2 border-white bg-gray-100 flex items-center justify-center text-xs font-bold text-gray-600">+1k</div>
               </div>
               <p className="text-sm text-gray-500 font-medium">Trusted by 1,000+ creators & agencies</p>
            </div>
          </div>

          {/* Right Content (Mock UI) */}
          <div className="relative lg:h-[600px] flex items-center justify-center hidden md:flex animate-fade-in-up delay-200">
            {/* Decor elements */}
            <div className="absolute w-72 h-72 bg-gradient-to-r from-insta-orange to-insta-pink rounded-full blur-3xl opacity-20 animate-pulse"></div>
            
            {/* Card */}
            <div className="relative w-80 bg-white rounded-3xl shadow-2xl p-6 border border-gray-100 rotate-3 hover:rotate-0 transition duration-500 cursor-pointer">
              <div className="flex justify-between items-start mb-4">
                <div className="flex gap-3">
                  <div className="w-12 h-12 rounded-full p-[2px] insta-gradient-bg">
                    <img src="https://i.pravatar.cc/150?img=32" className="w-full h-full rounded-full border-2 border-white object-cover" alt="Mentor" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">Sarah Styles</h3>
                    <p className="text-xs text-gray-500">Fashion & Lifestyle</p>
                  </div>
                </div>
                <span className="bg-blue-50 text-blue-600 text-xs font-bold px-2 py-1 rounded-md">Verified</span>
              </div>
              
              <div className="flex justify-between text-center mb-6 bg-gray-50 p-3 rounded-xl">
                <div>
                  <p className="font-bold text-slate-900">450k</p>
                  <p className="text-[10px] text-gray-500 uppercase">Followers</p>
                </div>
                <div>
                  <p className="font-bold text-slate-900">4.9</p>
                  <p className="text-[10px] text-gray-500 uppercase">Rating</p>
                </div>
                <div>
                  <p className="font-bold text-slate-900">12</p>
                  <p className="text-[10px] text-gray-500 uppercase">Sessions</p>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                 {['Profile Audit', 'Reels Strategy', 'Brand Collabs'].map((item) => (
                    <div key={item} className="flex items-center gap-3 text-sm text-gray-600">
                        <span className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-xs">✓</span>
                        <span>{item}</span>
                    </div>
                 ))}
              </div>

              <button className="w-full insta-gradient-bg text-white py-3 rounded-xl font-bold shadow-lg">Book Session</button>
            </div>

            {/* Floating Badge */}
            <div className="absolute bottom-20 left-0 bg-white p-4 rounded-xl shadow-xl border border-gray-100 animate-bounce delay-700">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-2xl">📈</div>
                <div>
                  <p className="text-xs text-gray-500 font-semibold">Growth</p>
                  <p className="text-sm font-bold text-green-600">+125% Engagement</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
