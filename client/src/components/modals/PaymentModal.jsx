import { useState } from 'react';
import { X, Check } from 'lucide-react';

const PaymentModal = ({ isOpen, onClose, bookingData, onPaymentSuccess }) => {
  const [step, setStep] = useState('payment'); // 'payment' or 'success'
  const [method, setMethod] = useState('upi');

  if (!isOpen) return null;

  const handlePay = (e) => {
    e.preventDefault();
    setStep('success');
    setTimeout(() => {
        if(onPaymentSuccess) onPaymentSuccess();
    }, 2000);
  };

  if (step === 'success') {
      return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
            <div className="bg-white rounded-3xl p-0 max-w-md w-full relative z-10 shadow-2xl overflow-hidden animate-scale-up">
                <div className="bg-gradient-to-br from-green-400 to-emerald-500 p-8 text-white text-center">
                    <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
                        <Check className="w-12 h-12 text-green-500" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Payment Successful!</h3>
                    <p className="text-white/90 text-sm">Your mentorship session has been booked</p>
                </div>
                <div className="p-8">
                    <button onClick={onClose} className="w-full insta-gradient-bg text-white py-3 rounded-xl font-bold shadow-lg hover:opacity-90 transition">
                        Close
                    </button>
                </div>
            </div>
        </div>
      );
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose}></div>
        <div className="bg-white rounded-3xl p-0 max-w-lg w-full relative z-10 shadow-2xl overflow-hidden animate-scale-up">
            <div className="bg-gradient-to-r from-insta-orange via-insta-pink to-insta-purple p-6 text-white relative">
                <button onClick={onClose} className="absolute top-4 right-4 text-white/80 hover:text-white">
                    <X className="w-6 h-6" />
                </button>
                <div className="flex items-center justify-between">
                    <div>
                        <h3 className="text-2xl font-bold">Complete Payment</h3>
                        <p className="text-white/80 text-sm mt-1">Secure payment powered by MentorGram</p>
                    </div>
                </div>
            </div>

            <div className="p-6">
                <div className="mb-6">
                    <h4 className="font-bold mb-3">Select Payment Method</h4>
                    <div className="grid grid-cols-3 gap-3">
                        {['upi', 'card', 'wallet'].map(m => (
                            <button 
                                key={m}
                                onClick={() => setMethod(m)} 
                                className={`border-2 rounded-xl p-4 transition text-center capitalize ${method === m ? 'ring-2 ring-insta-pink bg-pink-50 border-transparent' : 'border-gray-200 hover:border-insta-pink'}`}
                            >
                                <div className="text-xs font-medium">{m}</div>
                            </button>
                        ))}
                    </div>
                </div>

                <form onSubmit={handlePay} className="space-y-4">
                    <button type="submit" className="w-full insta-gradient-bg text-white py-3 rounded-xl font-bold shadow-lg hover:opacity-90 transition">
                        Pay {bookingData?.price}
                    </button>
                </form>
            </div>
        </div>
    </div>
  );
};

export default PaymentModal;
