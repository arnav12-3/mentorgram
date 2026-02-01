import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import api from '../api';
import { Calendar, Clock, DollarSign, Star, Users, Video, Save, Plus, Trash2 } from 'lucide-react';

const MentorDashboard = ({ user, onLogout }) => {
    const [activeTab, setActiveTab] = useState('overview');
    const [activeBookings, setActiveBookings] = useState([]);
    const [stats, setStats] = useState({ earnings: 0, sessions: 0 });
    const [availability, setAvailability] = useState([
        { day: 'Monday', slots: ['10:00 AM', '02:00 PM', '04:00 PM'] },
        { day: 'Wednesday', slots: ['11:00 AM', '03:00 PM'] },
        { day: 'Friday', slots: ['09:00 AM', '01:00 PM'] }
    ]);

    useEffect(() => {
        if (user?._id) {
            const fetchBookings = async () => {
                try {
                    const res = await api.get(`/api/bookings/mentor/${user._id}`);
                    setActiveBookings(res.data);

                    // Calculate basic stats
                    const totalEarnings = res.data.reduce((acc, curr) => acc + (parseInt(curr.price.replace(/[^\d]/g, '')) || 0), 0);
                    setStats({
                        earnings: totalEarnings,
                        sessions: res.data.filter(b => b.status === 'completed').length
                    });

                } catch (error) {
                    console.error("Failed to fetch mentor bookings", error);
                }
            };
            fetchBookings();
        }
    }, [user]);

    const toggleSlot = (dayIndex, slot) => {
        console.log('Toggling slot', dayIndex, slot);
    };

    const addSlot = (dayIndex) => {
        const newTime = prompt("Enter time (e.g., 05:00 PM):");
        if (newTime) {
            const newAvail = [...availability];
            newAvail[dayIndex].slots.push(newTime);
            setAvailability(newAvail);
        }
    };

    const deleteSlot = (dayIndex, slotIndex) => {
        const newAvail = [...availability];
        newAvail[dayIndex].slots.splice(slotIndex, 1);
        setAvailability(newAvail);
    };

    return (
        <div className="bg-gray-50 min-h-screen font-sans text-slate-900">
            <Navbar user={user} onLogout={onLogout} />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4 animate-fade-in-up">
                    <div>
                        <h1 className="text-3xl font-bold text-slate-900">Mentor Dashboard</h1>
                        <p className="text-gray-500">Welcome back, {user?.name}!</p>
                    </div>
                    <div className="flex gap-3">
                        <button
                            onClick={() => setActiveTab('overview')}
                            className={`px-4 py-2 rounded-lg font-medium transition ${activeTab === 'overview' ? 'bg-slate-900 text-white shadow-lg' : 'bg-white text-gray-600 hover:bg-gray-100'}`}
                        >
                            Overview
                        </button>
                        <button
                            onClick={() => setActiveTab('bookings')}
                            className={`px-4 py-2 rounded-lg font-medium transition ${activeTab === 'bookings' ? 'bg-slate-900 text-white shadow-lg' : 'bg-white text-gray-600 hover:bg-gray-100'}`}
                        >
                            Bookings
                        </button>
                        <button
                            onClick={() => setActiveTab('availability')}
                            className={`px-4 py-2 rounded-lg font-medium transition ${activeTab === 'availability' ? 'bg-slate-900 text-white shadow-lg' : 'bg-white text-gray-600 hover:bg-gray-100'}`}
                        >
                            Availability
                        </button>
                    </div>
                </div>

                {/* Content */}
                {activeTab === 'overview' && (
                    <div className="space-y-8 animate-fade-in-up">
                        {/* Stats Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                            {[
                                { label: 'Total Earnings', val: `₹${stats.earnings.toLocaleString()}`, icon: DollarSign, color: 'text-green-600', bg: 'bg-green-50' },
                                { label: 'Sessions Completed', val: stats.sessions, icon: Video, color: 'text-blue-600', bg: 'bg-blue-50' },
                                { label: 'Avg Rating', val: '4.9', icon: Star, color: 'text-yellow-600', bg: 'bg-yellow-50' },
                                { label: 'Profile Views', val: '1.2K', icon: Users, color: 'text-purple-600', bg: 'bg-purple-50' }
                            ].map((stat, i) => (
                                <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4">
                                    <div className={`w-12 h-12 rounded-xl ${stat.bg} ${stat.color} flex items-center justify-center`}>
                                        <stat.icon className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500">{stat.label}</p>
                                        <p className="text-2xl font-bold text-slate-900">{stat.val}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Recent Reviews or Activity */}
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                                <h3 className="text-lg font-bold mb-4">Upcoming Next</h3>
                                {activeBookings.length > 0 ? (
                                    <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100">
                                        <div className="w-12 h-12 rounded-full bg-slate-200 overflow-hidden">
                                            <img src={activeBookings[0].user?.avatar || "https://i.pravatar.cc/150?img=3"} alt="Student" />
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="font-bold text-slate-900">{activeBookings[0].user?.name || 'Student'}</h4>
                                            <p className="text-sm text-gray-500">{activeBookings[0].topic}</p>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-sm font-bold text-slate-900">{activeBookings[0].date}</p>
                                            <a
                                                href={activeBookings[0].meetingLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-white text-xs bg-insta-purple px-3 py-1 rounded-full mt-1 inline-block"
                                            >
                                                Join
                                            </a>
                                        </div>
                                    </div>
                                ) : (
                                    <p className="text-gray-500 italic">No upcoming sessions</p>
                                )}
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === 'bookings' && (
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden animate-fade-in-up">
                        <table className="w-full text-left">
                            <thead className="bg-gray-50 border-b border-gray-100">
                                <tr>
                                    <th className="p-4 font-medium text-gray-500">Student</th>
                                    <th className="p-4 font-medium text-gray-500">Topic</th>
                                    <th className="p-4 font-medium text-gray-500">Date & Time</th>
                                    <th className="p-4 font-medium text-gray-500">Status</th>
                                    <th className="p-4 font-medium text-gray-500">Action</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {activeBookings.map((b, i) => (
                                    <tr key={i} className="hover:bg-gray-50">
                                        <td className="p-4 font-bold text-slate-900">{b.user?.name || 'Student'}</td>
                                        <td className="p-4 text-gray-600">{b.topic}</td>
                                        <td className="p-4 text-gray-600">{b.date}</td>
                                        <td className="p-4">
                                            <span className={`px-2 py-1 rounded-full text-xs font-bold ${b.status === 'upcoming' ? 'bg-green-100 text-green-700' :
                                                    b.status === 'completed' ? 'bg-gray-100 text-gray-700' :
                                                        'bg-yellow-100 text-yellow-700'
                                                }`}>
                                                {b.status}
                                            </span>
                                        </td>
                                        <td className="p-4">
                                            {b.status === 'upcoming' && (
                                                <a
                                                    href={b.meetingLink}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-insta-purple font-medium hover:underline flex items-center gap-1"
                                                >
                                                    <Video className="w-4 h-4" /> Join Call
                                                </a>
                                            )}
                                        </td>
                                    </tr>
                                ))}
                                {activeBookings.length === 0 && (
                                    <tr>
                                        <td colSpan="5" className="p-4 text-center text-gray-500">No bookings found</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                )}

                {activeTab === 'availability' && (
                    <div className="grid md:grid-cols-2 gap-8 animate-fade-in-up">
                        <div className="space-y-6">
                            {availability.map((day, dayIndex) => (
                                <div key={day.day} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                                    <div className="flex justify-between items-center mb-4">
                                        <h3 className="font-bold text-lg text-slate-900">{day.day}</h3>
                                        <button onClick={() => addSlot(dayIndex)} className="text-sm bg-gray-100 hover:bg-gray-200 text-slate-900 px-3 py-1 rounded-lg flex items-center gap-1">
                                            <Plus className="w-4 h-4" /> Add Slot
                                        </button>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {day.slots.map((slot, slotIndex) => (
                                            <div key={slotIndex} className="bg-gray-50 border border-gray-200 px-3 py-2 rounded-lg flex items-center gap-2">
                                                <span className="text-sm font-medium text-gray-700">{slot}</span>
                                                <button onClick={() => deleteSlot(dayIndex, slotIndex)} className="text-gray-400 hover:text-red-500">
                                                    <Trash2 className="w-3 h-3" />
                                                </button>
                                            </div>
                                        ))}
                                        {day.slots.length === 0 && <p className="text-sm text-gray-400 italic">No slots added</p>}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="bg-insta-gradient-bg p-8 rounded-3xl text-white h-fit sticky top-24">
                            <Calendar className="w-12 h-12 mb-4 text-white/80" />
                            <h3 className="text-2xl font-bold mb-2">Manage Your Time</h3>
                            <p className="text-white/80 mb-6">Set your weekly availability here. Students will only be able to book slots that you define. You can override specific dates in the advanced calendar.</p>
                            <button className="bg-white text-insta-pink w-full py-3 rounded-xl font-bold hover:bg-gray-50 transition shadow-lg">
                                Sync with Google Calendar
                            </button>
                        </div>
                    </div>
                )}

            </div>
        </div>
    );
};

export default MentorDashboard;
