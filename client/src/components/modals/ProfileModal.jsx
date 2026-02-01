import { X, User, Mail, MapPin, Briefcase, Camera, Save } from 'lucide-react';
import { useState, useEffect } from 'react';

const ProfileModal = ({ isOpen, onClose, user }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    bio: '',
    location: 'Mumbai, India',
    phone: '',
  });
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (user) {
      setFormData({
        name: user.name || '',
        email: user.email || '',
        bio: user.desc || 'I love creating content!',
        location: 'Mumbai, India',
        phone: user.phone || '+91 99999 99999'
      });
    }
  }, [user]);

  if (!isOpen || !user) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose}></div>
      <div className="bg-white rounded-3xl p-0 max-w-2xl w-full relative z-10 shadow-2xl overflow-hidden animate-scale-up">
        
        {/* Banner / Header */}
        <div className="bg-gradient-to-r from-gray-800 to-gray-900 h-32 relative">
             <button onClick={onClose} className="absolute top-4 right-4 text-white/80 hover:text-white bg-black/20 p-2 rounded-full backdrop-blur-md">
                <X className="w-5 h-5" />
            </button>
        </div>

        <div className="px-8 pb-8">
            {/* Profile Avatar & Actions */}
            <div className="relative -mt-16 mb-6 flex justify-between items-end">
                <div className="relative group">
                    <img 
                        src={user.avatar || 'https://i.pravatar.cc/150?img=3'} 
                        className="w-32 h-32 rounded-full border-4 border-white object-cover bg-white shadow-md relative z-10" 
                        alt="Profile" 
                    />
                    <button className="absolute bottom-1 right-1 bg-slate-900 text-white p-2 rounded-full hover:bg-slate-700 border-2 border-white transition shadow-lg z-20">
                        <Camera className="w-4 h-4" />
                    </button>
                </div>
                {/* <button 
                    onClick={() => setIsEditing(!isEditing)} 
                    className="mb-2 text-slate-900 font-bold border-2 border-slate-200 px-4 py-2 rounded-xl hover:bg-slate-50 transition"
                >
                    {isEditing ? 'Cancel Edit' : 'Edit Profile'}
                </button> */}
            </div>

            {/* Profile Info */}
            <div className="space-y-6">
                <div>
                    <h2 className="text-3xl font-bold flex items-center gap-2">
                        {user.name} 
                        <span className={`text-[10px] px-2 py-1 rounded-full uppercase tracking-wider text-white ${
                            user.role === 'agency' ? 'bg-purple-600' : 
                            user.role === 'mentor' ? 'bg-insta-pink' : 
                            'bg-blue-500'
                        }`}>
                            {user.role}
                        </span>
                    </h2>
                    <p className="text-gray-500 text-sm mt-1 flex items-center gap-1">
                        <Mail className="w-4 h-4" /> {user.email}
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                     <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                        <label className="text-xs font-bold text-gray-400 uppercase tracking-wide block mb-1">Bio</label>
                        <p className="text-gray-700 text-sm">{formData.bio}</p>
                     </div>
                     <div className="space-y-2">
                        <div className="bg-gray-50 p-3 rounded-lg border border-gray-100 flex items-center gap-3">
                            <MapPin className="w-5 h-5 text-gray-400" />
                            <div>
                                <label className="text-xs font-bold text-gray-400 uppercase block">Location</label>
                                <p className="text-gray-700 text-sm">{formData.location}</p>
                            </div>
                        </div>
                        <div className="bg-gray-50 p-3 rounded-lg border border-gray-100 flex items-center gap-3">
                            <Briefcase className="w-5 h-5 text-gray-400" />
                            <div>
                                <label className="text-xs font-bold text-gray-400 uppercase block">Role</label>
                                <p className="text-gray-700 text-sm capitalize">{user.role}</p>
                            </div>
                        </div>
                     </div>
                </div>
                
                {/* Stats (Conditional) */}
                {user.role === 'mentor' && (
                     <div className="flex gap-4 p-4 bg-orange-50 rounded-xl border border-orange-100">
                        <div className="flex-1 text-center border-r border-orange-200 last:border-0">
                            <p className="text-2xl font-bold text-orange-600">4.9</p>
                            <p className="text-xs text-orange-800">Rating</p>
                        </div>
                        <div className="flex-1 text-center border-r border-orange-200 last:border-0">
                            <p className="text-2xl font-bold text-orange-600">12.5K</p>
                            <p className="text-xs text-orange-800">Followers</p>
                        </div>
                        <div className="flex-1 text-center">
                            <p className="text-2xl font-bold text-orange-600">98%</p>
                            <p className="text-xs text-orange-800">Response Rate</p>
                        </div>
                     </div>
                )}
                
                {/* Save Button (If editing) */}
                {isEditing && (
                    <button className="w-full bg-slate-900 text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg hover:bg-slate-800 transition">
                        <Save className="w-5 h-5" /> Save Changes
                    </button>
                )}

                <div className="pt-6 border-t border-gray-100 flex justify-center">
                    <p className="text-xs text-center text-gray-400">
                        Member since {new Date().getFullYear()} • MentorGram
                    </p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileModal;
