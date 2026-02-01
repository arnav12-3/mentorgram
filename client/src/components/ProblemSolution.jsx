import { AlertCircle, CheckCircle } from 'lucide-react';

const ProblemSolution = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Creating content is hard. <br /><span className="text-gray-400">Doing it alone is harder.</span></h2>
            <div className="space-y-6">
              {[
                  { title: 'Stuck at 20k followers?', desc: "Hitting a plateau is frustrating when you don't know what's wrong with your strategy.", icon: AlertCircle },
                  { title: 'Zero Monetization?', desc: "Brands aren't reaching out, and you don't know how to pitch yourself effectively.", icon: AlertCircle }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 group">
                    <div className="w-12 h-12 flex-shrink-0 bg-red-50 rounded-full flex items-center justify-center text-red-500 group-hover:bg-red-100 transition">
                        <item.icon className="w-6 h-6" />
                    </div>
                    <div>
                        <h3 className="font-bold text-lg">{item.title}</h3>
                        <p className="text-gray-600">{item.desc}</p>
                    </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-slate-900 rounded-3xl p-8 text-white relative overflow-hidden transform hover:scale-[1.02] transition duration-500">
            <div className="absolute top-0 right-0 w-64 h-64 bg-insta-purple opacity-30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            
            <h3 className="text-2xl font-bold mb-6 relative z-10">The MentorGram Solution ✨</h3>
            <p className="text-gray-300 mb-8 relative z-10">We bridge the gap by connecting you directly with creators who have already won the game.</p>
            
            <ul className="space-y-4 relative z-10">
              {['Personalized 1-on-1 feedback', 'Insider secrets on algorithm growth', 'Real monetization strategies'].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-insta-pink flex items-center justify-center text-xs">✓</span>
                    <span>{item}</span>
                  </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
