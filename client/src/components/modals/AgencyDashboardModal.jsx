import { X, TrendingUp, Users, DollarSign, Calendar } from 'lucide-react';

const AgencyDashboardModal = ({ isOpen, onClose, isOpenAgency }) => {
//   if (!isOpen) return null;

  return (
    <div className={`fixed inset-0 z-[100] flex items-center justify-center px-4 ${isOpen ? '' : 'hidden'}`}>
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose}></div>
        <div className="bg-white rounded-3xl p-0 max-w-6xl w-full relative z-10 shadow-2xl overflow-hidden animate-scale-up max-h-[90vh] overflow-y-auto">
            
            <div className="bg-gradient-to-r from-insta-orange via-insta-pink to-insta-purple p-6 text-white relative sticky top-0 z-10">
                <button onClick={onClose} className="absolute top-4 right-4 text-white/80 hover:text-white">
                    <X className="w-6 h-6" />
                </button>
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center text-white font-bold">📊</div>
                        <div>
                            <h3 className="text-2xl font-bold">Agency Dashboard</h3>
                            <p className="text-white/80 text-sm">Track your creators' performance in real-time</p>
                        </div>
                    </div>
                    <div className="text-right">
                        <p className="text-xs text-white/70">Total Commission Earned</p>
                        <p className="text-3xl font-bold">₹49,421</p>
                    </div>
                </div>
            </div>

            <div className="p-8">
                {/* Metrics */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                    {[
                        { label: 'Total Revenue', val: '₹2,47,105', sub: 'All-time earnings', color: 'blue', icon: DollarSign },
                        { label: 'This Month', val: '₹98,450', sub: 'Commission: ₹19,690', color: 'green', icon: TrendingUp },
                        { label: 'Total Bookings', val: '95', sub: 'Across all creators', color: 'purple', icon: Calendar },
                        { label: 'Active Creators', val: '4', sub: 'On the platform', color: 'orange', icon: Users }
                    ].map((m, i) => (
                        <div key={i} className={`bg-${m.color}-50 rounded-xl p-4 border border-${m.color}-100`}>
                            <p className={`text-xs text-${m.color}-800 font-medium mb-1`}>{m.label}</p>
                            <p className={`text-2xl font-bold text-${m.color}-600`}>{m.val}</p>
                            <p className={`text-xs text-${m.color}-700 mt-1`}>{m.sub}</p>
                        </div>
                    ))}
                </div>

                {/* Creators Table */}
                <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
                    <div className="p-4 border-b border-gray-100 bg-gray-50 flex justify-between items-center">
                        <h4 className="font-bold text-gray-800">Your Roster</h4>
                        <button className="text-sm text-insta-pink font-medium hover:underline">Add New Creator</button>
                    </div>
                    <table className="w-full text-left text-sm">
                        <thead className="bg-gray-50 text-gray-500">
                            <tr>
                                <th className="p-4 font-medium">Creator</th>
                                <th className="p-4 font-medium">Category</th>
                                <th className="p-4 font-medium">Bookings</th>
                                <th className="p-4 font-medium">Revenue</th>
                                <th className="p-4 font-medium">Commission (20%)</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {[
                                { name: 'Aman Verma', cat: 'Comedy', bookings: 24, rev: '₹71,976', comm: '₹14,395' },
                                { name: 'Riya Sharma', cat: 'Finance', bookings: 18, rev: '₹62,982', comm: '₹12,596' },
                                { name: 'Sarah Styles', cat: 'Lifestyle', bookings: 31, rev: '₹68,169', comm: '₹13,633' },
                                { name: 'Neha Educates', cat: 'Education', bookings: 22, rev: '₹43,978', comm: '₹8,795' }
                            ].map((c, i) => (
                                <tr key={i} className="hover:bg-gray-50">
                                    <td className="p-4 font-medium text-slate-900">{c.name}</td>
                                    <td className="p-4 text-gray-500">{c.cat}</td>
                                    <td className="p-4 text-gray-900">{c.bookings}</td>
                                    <td className="p-4 text-green-600 font-medium">{c.rev}</td>
                                    <td className="p-4 text-slate-900 font-bold">{c.comm}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
  );
};

export default AgencyDashboardModal;
