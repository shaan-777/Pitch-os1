import React, { useState } from 'react';
import { User, Settings, CreditCard, Bell, LogOut, X, Camera, Edit2 } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const ProfileSection = ({ user, isOpen, onClose, onLogout }) => {
    const [activeTab, setActiveTab] = useState('profile');
    const [isEditing, setIsEditing] = useState(false);
    const [displayName, setDisplayName] = useState(user?.displayName || '');

    if (!isOpen) return null;

    const tabs = [
        { id: 'profile', label: 'Profile', icon: User },
        { id: 'settings', label: 'Settings', icon: Settings },
        { id: 'billing', label: 'Billing', icon: CreditCard },
        { id: 'notifications', label: 'Notifications', icon: Bell },
    ];

    const handleSave = () => {
        // Add your save logic here
        setIsEditing(false);
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-2 sm:p-4">
            <div className="bg-white rounded-lg shadow-xl w-full h-full sm:max-w-2xl sm:w-full sm:max-h-[90vh] sm:h-auto overflow-hidden">
                {/* Header */}
                <div className="flex items-center justify-between p-4 sm:p-6 border-b">
                    <h2 className="text-lg sm:text-xl font-semibold">Account Settings</h2>
                    <Button variant="ghost" size="icon" onClick={onClose}>
                        <X className="w-5 h-5" />
                    </Button>
                </div>

                {/* Mobile Tab Navigation */}
                <div className="block sm:hidden border-b">
                    <div className="flex overflow-x-auto">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`flex-shrink-0 flex items-center gap-2 px-4 py-3 text-sm font-medium border-b-2 transition-colors ${activeTab === tab.id
                                        ? 'border-blue-500 text-blue-600'
                                        : 'border-transparent text-gray-600'
                                    }`}
                            >
                                <tab.icon className="w-4 h-4" />
                                <span>{tab.label}</span>
                            </button>
                        ))}
                    </div>
                </div>

                <div className="flex h-full sm:h-auto">
                    {/* Desktop Sidebar */}
                    <div className="hidden sm:block w-48 bg-gray-50 p-4 space-y-2">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`w-full flex items-center gap-3 px-3 py-2 text-left rounded-lg transition-colors ${activeTab === tab.id
                                        ? 'bg-blue-100 text-blue-700'
                                        : 'text-gray-600 hover:bg-gray-100'
                                    }`}
                            >
                                <tab.icon className="w-4 h-4" />
                                <span className="text-sm">{tab.label}</span>
                            </button>
                        ))}
                    </div>

                    {/* Content */}
                    <div className="flex-1 p-4 sm:p-6 overflow-y-auto h-full sm:max-h-[70vh]">
                        {activeTab === 'profile' && (
                            <div className="space-y-4 sm:space-y-6">
                                {/* Profile Picture */}
                                <div className="flex flex-col sm:flex-row items-center gap-4">
                                    <div className="relative">
                                        <div className="w-16 h-16 sm:w-20 sm:h-20 bg-blue-100 rounded-full flex items-center justify-center">
                                            <span className="text-xl sm:text-2xl font-semibold text-blue-700">
                                                {user?.displayName?.[0] || user?.email?.[0] || '?'}
                                            </span>
                                        </div>
                                        <button className="absolute -bottom-1 -right-1 p-1 bg-white rounded-full border shadow-sm">
                                            <Camera className="w-3 h-3" />
                                        </button>
                                    </div>
                                    <div className="text-center sm:text-left">
                                        <h3 className="font-semibold text-lg sm:text-base">{user?.displayName || 'User'}</h3>
                                        <p className="text-sm text-gray-500 break-all sm:break-normal">{user?.email}</p>
                                        <span className="inline-block px-2 py-1 text-xs bg-blue-100 text-blue-700 rounded-full mt-1">
                                            Pro Member
                                        </span>
                                    </div>
                                </div>

                                {/* Profile Info */}
                                <Card>
                                    <CardHeader className="flex flex-col sm:flex-row items-start sm:items-center justify-between space-y-2 sm:space-y-0">
                                        <CardTitle className="text-base sm:text-lg">Personal Information</CardTitle>
                                        <Button
                                            variant="ghost"
                                            size="sm"
                                            onClick={() => setIsEditing(!isEditing)}
                                        >
                                            <Edit2 className="w-4 h-4" />
                                        </Button>
                                    </CardHeader>
                                    <CardContent className="space-y-4">
                                        <div>
                                            <label className="text-sm font-medium text-gray-700">Display Name</label>
                                            {isEditing ? (
                                                <Input
                                                    value={displayName}
                                                    onChange={(e) => setDisplayName(e.target.value)}
                                                    className="mt-1"
                                                />
                                            ) : (
                                                <p className="mt-1 text-gray-900 break-words">{user?.displayName || 'Not set'}</p>
                                            )}
                                        </div>
                                        <div>
                                            <label className="text-sm font-medium text-gray-700">Email</label>
                                            <p className="mt-1 text-gray-900 break-all">{user?.email}</p>
                                        </div>
                                        <div>
                                            <label className="text-sm font-medium text-gray-700">Member Since</label>
                                            <p className="mt-1 text-gray-900">January 2024</p>
                                        </div>
                                        {isEditing && (
                                            <div className="flex flex-col sm:flex-row gap-2 pt-2">
                                                <Button onClick={handleSave} size="sm" className="w-full sm:w-auto">Save Changes</Button>
                                                <Button variant="outline" onClick={() => setIsEditing(false)} size="sm" className="w-full sm:w-auto">
                                                    Cancel
                                                </Button>
                                            </div>
                                        )}
                                    </CardContent>
                                </Card>
                            </div>
                        )}

                        {activeTab === 'settings' && (
                            <div className="space-y-4">
                                <h3 className="text-base sm:text-lg font-semibold">Preferences</h3>
                                <Card>
                                    <CardContent className="pt-4 sm:pt-6 space-y-4">
                                        <div className="flex items-center justify-between py-2">
                                            <span className="text-sm sm:text-base">Dark Mode</span>
                                            <input type="checkbox" className="rounded w-4 h-4" />
                                        </div>
                                        <div className="flex items-center justify-between py-2">
                                            <span className="text-sm sm:text-base">Email Notifications</span>
                                            <input type="checkbox" defaultChecked className="rounded w-4 h-4" />
                                        </div>
                                        <div className="flex items-center justify-between py-2">
                                            <span className="text-sm sm:text-base">Auto-save Pitches</span>
                                            <input type="checkbox" defaultChecked className="rounded w-4 h-4" />
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        )}

                        {activeTab === 'billing' && (
                            <div className="space-y-4">
                                <h3 className="text-base sm:text-lg font-semibold">Billing & Subscription</h3>
                                <Card>
                                    <CardContent className="pt-4 sm:pt-6">
                                        <div className="space-y-3">
                                            <div className="flex justify-between text-sm sm:text-base">
                                                <span>Current Plan</span>
                                                <span className="font-semibold">Pro Member</span>
                                            </div>
                                            <div className="flex justify-between text-sm sm:text-base">
                                                <span>Next Billing</span>
                                                <span>Feb 15, 2024</span>
                                            </div>
                                            <div className="flex justify-between text-sm sm:text-base">
                                                <span>Amount</span>
                                                <span>$29/month</span>
                                            </div>
                                        </div>
                                        <Button className="w-full mt-4" variant="outline">
                                            Manage Subscription
                                        </Button>
                                    </CardContent>
                                </Card>
                            </div>
                        )}

                        {activeTab === 'notifications' && (
                            <div className="space-y-4">
                                <h3 className="text-base sm:text-lg font-semibold">Notification Preferences</h3>
                                <Card>
                                    <CardContent className="pt-4 sm:pt-6 space-y-4">
                                        <div className="flex items-start sm:items-center justify-between gap-3">
                                            <div className="flex-1">
                                                <p className="font-medium text-sm sm:text-base">Pitch Updates</p>
                                                <p className="text-xs sm:text-sm text-gray-500">Get notified about pitch feedback</p>
                                            </div>
                                            <input type="checkbox" defaultChecked className="rounded w-4 h-4 flex-shrink-0" />
                                        </div>
                                        <div className="flex items-start sm:items-center justify-between gap-3">
                                            <div className="flex-1">
                                                <p className="font-medium text-sm sm:text-base">Community Activity</p>
                                                <p className="text-xs sm:text-sm text-gray-500">Updates from the community</p>
                                            </div>
                                            <input type="checkbox" defaultChecked className="rounded w-4 h-4 flex-shrink-0" />
                                        </div>
                                        <div className="flex items-start sm:items-center justify-between gap-3">
                                            <div className="flex-1">
                                                <p className="font-medium text-sm sm:text-base">Funding Opportunities</p>
                                                <p className="text-xs sm:text-sm text-gray-500">New funding matches</p>
                                            </div>
                                            <input type="checkbox" defaultChecked className="rounded w-4 h-4 flex-shrink-0" />
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        )}
                    </div>
                </div>

                {/* Footer */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between p-4 sm:p-6 border-t bg-gray-50 gap-3 sm:gap-0">
                    <Button variant="ghost" onClick={onClose} className="order-2 sm:order-1">
                        Close
                    </Button>
                    <Button
                        variant="outline"
                        onClick={onLogout}
                        className="text-red-600 hover:text-red-700 hover:bg-red-50 order-1 sm:order-2"
                    >
                        <LogOut className="w-4 h-4 mr-2" />
                        Sign Out
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default ProfileSection;