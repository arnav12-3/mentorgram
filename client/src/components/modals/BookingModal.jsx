import { useState } from 'react';
import { X, Calendar, Clock } from 'lucide-react';

const BookingModal = ({ isOpen, onClose, mentor, onProceed }) => {
  const [date, setDate] = useState('');
  const [topic, setTopic] = useState('Profile Audit');

  if (!isOpen || !mentor) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    onProceed({ mentor, date, topic, price: mentor.price });
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose}></div>
      <div className="bg-white rounded-3xl p-8 max-w-lg w-full relative z-10 shadow-2xl animate-scale-up">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
          <X className="w-6 h-6" />
        </button>
        
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold">Book a Session</h3>
          <p className="text-gray-500">with <span className="font-bold text-slate-900">{mentor.name}</span></p>
        </div>

        <div className="bg-gray-50 p-4 rounded-xl mb-6 flex items-center gap-4">
          <img src={mentor.image} className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-sm" alt={mentor.name} />
          <div>
            <p className="font-bold text-slate-900">{mentor.price}</p>
            <p className="text-sm text-gray-500">1 Hour Video Call</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Select Date</label>
            <div className="relative">
                <Calendar className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
                <input 
                    type="date" 
                    required 
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full pl-10 border border-gray-200 rounded-lg p-2.5" 
                />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Topic</label>
            <select 
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                required 
                className="w-full border border-gray-200 rounded-lg p-2.5"
            >
              <option>Profile Audit</option>
              <option>Growth Strategy</option>
              <option>Monetization</option>
              <option>Content Review</option>
            </select>
          </div>
        
          <button type="submit" className="w-full insta-gradient-bg text-white py-3 rounded-xl font-bold shadow-lg hover:opacity-90 transition">
            Proceed to Checkout
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingModal;
