import { useState } from 'react';
import Navbar from '../components/Navbar';
import { TrendingUp, Users, DollarSign, Calendar, Plus, ExternalLink } from 'lucide-react';

const AgencyDashboard = ({ user, onLogout }) => {
  return (
    <div className="bg-gray-50 min-h-screen font-sans text-slate-900">
      <Navbar user={user} onLogout={onLogout} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4 animate-fade-in-up">
            <div>
                <h1 className="text-3xl font-bold text-slate-900">Agency Dashboard</h1>
                <p className="text-gray-500">Managing roster for {user?.name}</p>
            </div>
            <div className="text-right">
                <p className="text-sm text-gray-500">Total Commission (20%)</p>
                <p className="text-3xl font-bold text-slate-900">₹49,421</p>
            </div>
        </div>

        {/* Stats Content */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10 animate-fade-in-up">
            {[
                { label: 'Total Revenue', val: '₹2,47,105', sub: 'All-time earnings', color: 'blue', icon: DollarSign },
                { label: 'This Month', val: '₹98,450', sub: 'Commission: ₹19,690', color: 'green', icon: TrendingUp },
                { label: 'Total Bookings', val: '95', sub: 'Across all creators', color: 'purple', icon: Calendar },
                { label: 'Active Creators', val: '4', sub: 'On the platform', color: 'orange', icon: Users }
            ].map((m, i) => (
                <div key={i} className={`bg-white rounded-2xl p-6 shadow-sm border border-gray-100 relative overflow-hidden group hover:shadow-md transition`}>
                    <div className={`absolute top-0 right-0 w-24 h-24 bg-${m.color}-50 rounded-bl-full -mr-4 -mt-4 opacity-50 group-hover:scale-110 transition`}></div>
                    <div className="relative z-10">
                         <div className={`w-10 h-10 rounded-lg bg-${m.color}-100 text-${m.color}-600 flex items-center justify-center mb-4`}>
                            <m.icon className="w-5 h-5" />
                         </div>
                        <p className="text-sm text-gray-500 font-medium mb-1">{m.label}</p>
                        <p className="text-2xl font-bold text-slate-900">{m.val}</p>
                        <p className="text-xs text-gray-400 mt-1">{m.sub}</p>
                    </div>
                </div>
            ))}
        </div>

        {/* Roster Table */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden animate-fade-in-up delay-100">
            <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
                <h2 className="text-xl font-bold text-slate-900">Creator Roster</h2>
                <button className="bg-slate-900 text-white px-4 py-2 rounded-lg font-bold text-sm hover:bg-slate-800 transition flex items-center gap-2">
                    <Plus className="w-4 h-4" /> Add Creator
                </button>
            </div>
            <table className="w-full text-left">
                <thead className="bg-gray-50 text-gray-500">
                    <tr>
                        <th className="p-4 font-medium pl-6">Creator</th>
                        <th className="p-4 font-medium">Category</th>
                        <th className="p-4 font-medium">Bookings</th>
                        <th className="p-4 font-medium">Revenue</th>
                        <th className="p-4 font-medium">Commission</th>
                        <th className="p-4 font-medium pr-6">Actions</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                    {[
                        { name: 'Aman Verma', cat: 'Comedy', bookings: 24, rev: '₹71,976', comm: '₹14,395', img: 'https://i.pravatar.cc/150?img=11' },
                        { name: 'Riya Sharma', cat: 'Finance', bookings: 18, rev: '₹62,982', comm: '₹12,596', img: 'https://i.pravatar.cc/150?img=5' },
                        { name: 'Sarah Styles', cat: 'Lifestyle', bookings: 31, rev: '₹68,169', comm: '₹13,633', img: 'https://i.pravatar.cc/150?img=9' },
                        { name: 'Neha Educates', cat: 'Education', bookings: 22, rev: '₹43,978', comm: '₹8,795', img: 'https://i.pravatar.cc/150?img=20' }
                    ].map((c, i) => (
                        <tr key={i} className="hover:bg-gray-50 transition">
                            <td className="p-4 pl-6">
                                <div className="flex items-center gap-3">
                                    <img src={c.img} className="w-10 h-10 rounded-full" alt={c.name} />
                                    <span className="font-bold text-slate-900">{c.name}</span>
                                </div>
                            </td>
                            <td className="p-4 text-gray-500">{c.cat}</td>
                            <td className="p-4 text-gray-900">{c.bookings}</td>
                            <td className="p-4 text-green-600 font-medium">{c.rev}</td>
                            <td className="p-4 text-slate-900 font-bold">{c.comm}</td>
                            <td className="p-4 pr-6">
                                <button className="text-blue-600 hover:text-blue-800 p-2 rounded-full hover:bg-blue-50 transition">
                                    <ExternalLink className="w-4 h-4" />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

      </div>
    </div>
  );
};

export default AgencyDashboard;
