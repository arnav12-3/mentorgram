import { useState } from 'react';
import { X } from 'lucide-react';

const JoinModal = ({ isOpen, onClose, initialTab = 'creator' }) => {
  const [tab, setTab] = useState(initialTab);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose}></div>
      <div className="bg-white rounded-3xl p-0 max-w-2xl w-full relative z-10 shadow-2xl overflow-hidden flex flex-col md:flex-row animate-scale-up">
        
        {/* Left Side (Visual) */}
        <div className="hidden md:block w-1/3 bg-slate-900 text-white p-8 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-20 bg-gradient-to-br from-insta-orange to-insta-purple"></div>
          <div className="relative z-10 h-full flex flex-col justify-between">
            <div>
              <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center text-white font-bold text-sm mb-4">M</div>
              <h3 className="font-bold text-2xl leading-tight">Join the Revolution</h3>
            </div>
            <p className="text-sm text-white/60">Unlock your full potential with MentorGram.</p>
          </div>
        </div>

        {/* Right Side (Form) */}
        <div className="p-8 md:w-2/3 relative">
          <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
            <X className="w-6 h-6" />
          </button>

          <div className="flex gap-4 border-b border-gray-100 mb-6">
            <button onClick={() => setTab('creator')} className={`pb-2 font-bold border-b-2 transition ${tab === 'creator' ? 'text-insta-pink border-insta-pink' : 'text-gray-400 border-transparent'}`}>Creator</button>
            <button onClick={() => setTab('agency')} className={`pb-2 font-bold border-b-2 transition ${tab === 'agency' ? 'text-insta-pink border-insta-pink' : 'text-gray-400 border-transparent'}`}>Agency</button>
          </div>

          <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert('Application Submitted!'); onClose(); }}>
             {tab === 'creator' ? (
                <>
                    <h4 className="text-xl font-bold mb-2">Become a Mentor</h4>
                    <input type="text" placeholder="Full Name" required className="w-full border border-gray-200 rounded-lg p-3 text-sm focus:outline-none focus:border-insta-pink focus:ring-1 focus:ring-insta-pink" />
                    <input type="text" placeholder="Instagram Handle" required className="w-full border border-gray-200 rounded-lg p-3 text-sm focus:outline-none focus:border-insta-pink focus:ring-1 focus:ring-insta-pink" />
                </>
             ) : (
                <>
                    <h4 className="text-xl font-bold mb-2">Partner as Agency</h4>
                    <input type="text" placeholder="Agency Name" required className="w-full border border-gray-200 rounded-lg p-3 text-sm focus:outline-none focus:border-insta-pink focus:ring-1 focus:ring-insta-pink" />
                    <input type="number" placeholder="Creators Managed" required className="w-full border border-gray-200 rounded-lg p-3 text-sm focus:outline-none focus:border-insta-pink focus:ring-1 focus:ring-insta-pink" />
                </>
             )}
            <input type="email" placeholder="Email Address" required className="w-full border border-gray-200 rounded-lg p-3 text-sm focus:outline-none focus:border-insta-pink focus:ring-1 focus:ring-insta-pink" />
            <button type="submit" className="w-full bg-slate-900 text-white py-3 rounded-xl font-bold hover:bg-slate-800 transition">Submit Application</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default JoinModal;
