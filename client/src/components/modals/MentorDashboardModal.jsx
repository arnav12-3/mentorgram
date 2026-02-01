import { X, TrendingUp, Users, DollarSign, Calendar, Star, Clock } from 'lucide-react';

const MentorDashboardModal = ({ isOpen, onClose, user }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose}></div>
        <div className="bg-white rounded-3xl p-0 max-w-5xl w-full relative z-10 shadow-2xl overflow-hidden animate-scale-up max-h-[90vh] overflow-y-auto">
            
            <div className="bg-gradient-to-r from-insta-blue via-insta-purple to-insta-pink p-6 text-white relative sticky top-0 z-10">
                <button onClick={onClose} className="absolute top-4 right-4 text-white/80 hover:text-white">
                    <X className="w-6 h-6" />
                </button>
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <img src={user?.avatar || 'https://i.pravatar.cc/150?img=11'} className="w-16 h-16 rounded-full border-4 border-white/20" alt="Profile" />
                        <div>
                            <h3 className="text-2xl font-bold">Mentor Dashboard</h3>
                            <p className="text-white/80 text-sm">Welcome back, {user?.name || 'Mentor'}!</p>
                        </div>
                    </div>
                    <div className="text-right hidden sm:block">
                        <p className="text-xs text-white/70">Wallet Balance</p>
                        <p className="text-3xl font-bold">₹12,450</p>
                    </div>
                </div>
            </div>

            <div className="p-8">
                {/* Metrics */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                    {[
                        { label: 'Total Earnings', val: '₹48,200', sub: '+12% this month', color: 'green', icon: DollarSign },
                        { label: 'Sessions', val: '24', sub: 'Completed bookings', color: 'blue', icon: Calendar },
                        { label: 'Avg Rating', val: '4.9', sub: 'From 18 reviews', color: 'yellow', icon: Star },
                        { label: 'Response Time', val: '2h', sub: 'Average', color: 'purple', icon: Clock }
                    ].map((m, i) => (
                        <div key={i} className={`bg-${m.color}-50 rounded-xl p-4 border border-${m.color}-100`}>
                            <div className="flex justify-between items-start mb-2">
                                <p className={`text-xs text-${m.color}-800 font-medium`}>{m.label}</p>
                                <m.icon className={`w-4 h-4 text-${m.color}-600`} />
                            </div>
                            <p className={`text-2xl font-bold text-${m.color}-700`}>{m.val}</p>
                            <p className={`text-xs text-${m.color}-600 mt-1`}>{m.sub}</p>
                        </div>
                    ))}
                </div>

                {/* Upcoming Sessions */}
                <div className="bg-white border border-gray-200 rounded-xl overflow-hidden mb-8">
                    <div className="p-4 border-b border-gray-100 bg-gray-50 flex justify-between items-center">
                        <h4 className="font-bold text-gray-800">Upcoming Sessions</h4>
                        {/* <button className="text-sm text-insta-blue font-medium hover:underline">View Calendar</button> */}
                    </div>
                    <div className="p-4">
                        {[
                            { name: 'Rahul Gupta', time: 'Today, 4:00 PM', topic: 'Content Strategy Review', status: 'Confirmed', img: 'https://i.pravatar.cc/150?img=3' },
                            { name: 'Sneha Reddy', time: 'Tomorrow, 11:00 AM', topic: 'Growth Hacking Tips', status: 'Pending', img: 'https://i.pravatar.cc/150?img=5' },
                            { name: 'Vikram Singh', time: 'Feb 14, 2:00 PM', topic: 'Monetization via Brands', status: 'Confirmed', img: 'https://i.pravatar.cc/150?img=8' }
                        ].map((s, i) => (
                            <div key={i} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition border-b border-gray-50 last:border-0">
                                <div className="flex items-center gap-3">
                                    <img src={s.img} className="w-10 h-10 rounded-full" alt={s.name} />
                                    <div>
                                        <p className="font-bold text-slate-900 text-sm">{s.name}</p>
                                        <p className="text-xs text-gray-500">{s.topic}</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="text-xs font-bold text-slate-700">{s.time}</p>
                                    <span className={`text-[10px] px-2 py-0.5 rounded-full ${s.status === 'Confirmed' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>{s.status}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Recent Reviews (Compact) */}
                 <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
                    <div className="p-4 border-b border-gray-100 bg-gray-50">
                        <h4 className="font-bold text-gray-800">Recent Feedback</h4>
                    </div>
                     <div className="p-4 space-y-3">
                        <div className="text-sm">
                            <div className="flex items-center gap-1 text-yellow-500 mb-1">
                                <Star className="w-4 h-4 fill-current" />
                                <Star className="w-4 h-4 fill-current" />
                                <Star className="w-4 h-4 fill-current" />
                                <Star className="w-4 h-4 fill-current" />
                                <Star className="w-4 h-4 fill-current" />
                            </div>
                            <p className="text-gray-700">"Changed my entire perspective on content creation! Highly recommended."</p>
                            <p className="text-xs text-gray-400 mt-1">- Rahul G.</p>
                        </div>
                     </div>
                 </div>

            </div>
        </div>
    </div>
  );
};

export default MentorDashboardModal;
