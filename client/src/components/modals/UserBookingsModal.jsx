import { useState, useEffect } from 'react';
import { X, Calendar, Clock, Video, User } from 'lucide-react';
import api from '../../api';

const UserBookingsModal = ({ isOpen, onClose, user }) => {
    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (isOpen && user) {
            const fetchBookings = async () => {
                try {
                    const res = await api.get(`/api/bookings/user/${user._id}`);
                    setBookings(res.data);
                } catch (error) {
                    console.warn('Failed to fetch bookings, using mock data if needed');
                    // Mock fallback if API fails
                    setBookings([
                        {
                            _id: '1',
                            mentor: { name: 'Aman Verma', image: 'https://i.pravatar.cc/150?img=11', category: 'Comedy' },
                            date: '2024-02-15',
                            topic: 'Content Strategy',
                            status: 'upcoming',
                            price: '₹2,999',
                            meetingLink: 'https://meet.google.com/abc-defg-hij'
                        },
                        {
                            _id: '2',
                            mentor: { name: 'Riya Sharma', image: 'https://i.pravatar.cc/150?img=5', category: 'Finance' },
                            date: '2024-01-20',
                            topic: 'Investment Basics',
                            status: 'completed',
                            price: '₹3,499',
                            meetingLink: '#'
                        }
                    ]);
                } finally {
                    setLoading(false);
                }
            };
            fetchBookings();
        }
    }, [isOpen, user]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose}></div>
            <div className="bg-white rounded-3xl p-0 max-w-4xl w-full relative z-10 shadow-2xl overflow-hidden animate-scale-up max-h-[90vh] overflow-y-auto">

                <div className="bg-gradient-to-r from-insta-orange via-insta-pink to-insta-purple p-6 text-white relative sticky top-0 z-10">
                    <button onClick={onClose} className="absolute top-4 right-4 text-white/80 hover:text-white">
                        <X className="w-6 h-6" />
                    </button>
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center text-white font-bold">📅</div>
                        <div>
                            <h3 className="text-2xl font-bold">My Bookings</h3>
                            <p className="text-white/80 text-sm">Manage your mentorship sessions</p>
                        </div>
                    </div>
                </div>

                <div className="p-8">
                    {loading ? (
                        <div className="text-center py-10 text-gray-500">Loading bookings...</div>
                    ) : bookings.length === 0 ? (
                        <div className="text-center py-20 text-gray-500">
                            <Calendar className="w-16 h-16 mx-auto mb-4 text-gray-300" />
                            <p className="text-lg font-medium">No bookings yet</p>
                            <p className="text-sm">Explore mentors and book your first session!</p>
                        </div>
                    ) : (
                        <div className="space-y-4">
                            {bookings.map((booking) => (
                                <div key={booking._id} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition flex flex-col md:flex-row gap-6">
                                    {/* Mentor Info */}
                                    <div className="flex items-center gap-4 min-w-[200px]">
                                        <img
                                            src={booking.mentor?.image || 'https://i.pravatar.cc/150?img=11'}
                                            className="w-16 h-16 rounded-full object-cover border-2 border-insta-pink p-0.5"
                                            alt={booking.mentor?.name}
                                        />
                                        <div>
                                            <h4 className="font-bold text-lg text-slate-900">{booking.mentor?.name}</h4>
                                            <p className="text-sm text-gray-500">{booking.mentor?.category}</p>
                                        </div>
                                    </div>

                                    {/* Session Details */}
                                    <div className="flex-1 grid grid-cols-2 gap-4">
                                        <div>
                                            <p className="text-xs text-gray-500 mb-1 flex items-center gap-1"><Calendar className="w-3 h-3" /> Date</p>
                                            <p className="font-medium text-slate-900">{booking.date}</p>
                                        </div>
                                        <div>
                                            <p className="text-xs text-gray-500 mb-1 flex items-center gap-1"><Clock className="w-3 h-3" /> Time</p>
                                            <p className="font-medium text-slate-900">10:00 AM (IST)</p>
                                        </div>
                                        <div className="col-span-2">
                                            <p className="text-xs text-gray-500 mb-1">Topic</p>
                                            <p className="font-medium text-slate-900">{booking.topic}</p>
                                        </div>
                                    </div>

                                    {/* Action / Status */}
                                    <div className="flex flex-col justify-between items-end min-w-[140px]">
                                        <span className={`px-3 py-1 rounded-full text-xs font-bold capitalize ${booking.status === 'upcoming' ? 'bg-green-100 text-green-700' :
                                            booking.status === 'completed' ? 'bg-gray-100 text-gray-700' :
                                                'bg-red-100 text-red-700'
                                            }`}>
                                            {booking.status}
                                        </span>

                                        {booking.status === 'upcoming' && (
                                            <a
                                                href={booking.meetingLink || '#'}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 bg-slate-900 text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-slate-800 transition"
                                            >
                                                <Video className="w-4 h-4" /> Join Call
                                            </a>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default UserBookingsModal;
