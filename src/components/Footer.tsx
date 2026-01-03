import {Facebook, Instagram, Twitch, Twitter} from "lucide-react";

const Footer = () => {
    return (
        <>
            <footer className="bg-gradient-to-b from-gray-50 to-gray-100 py-12 md:py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
                        <div className="space-y-4">
                            <div className="flex items-center space-x-2">
                                <h2 className="text-2xl font-bold text-gray-900">
                                    Edu
                                    <span className="text-purple-600">Mate</span>
                                </h2>
                            </div>

                            <p className="text-gray-600 text-sm">
                                Connecting learners with expert tutors for personalized education experiences.
                            </p>

                            <div className="flex space-x-4 pt-2">
                                <a href="#" className="text-gray-400 hover:text-purple-600 transition-colors">
                                    <Facebook className="w-5 h-5" />
                                </a>

                                <a href="#" className="text-gray-400 hover:text-purple-600 transition-colors">
                                    <Twitter className="w-5 h-5" />
                                </a>

                                <a href="#" className="text-gray-400 hover:text-purple-600 transition-colors">
                                    <Twitch className="w-5 h-5" />
                                </a>
                                <a href="#" className="text-gray-400 hover:text-purple-600 transition-colors">
                                    <Instagram className="w-5 h-5" />
                                </a>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h3>
                            <ul className="space-y-3">
                                <li>
                                    <a href="/tutors" className="text-gray-600 hover:text-purple-600 transition-colors text-sm">
                                        Find Tutors
                                    </a>
                                </li>

                                <li>
                                    <a href="/become-tutor" className="text-gray-600 hover:text-purple-600 transition-colors text-sm">
                                        Become a Tutor
                                    </a>
                                </li>

                                <li>
                                    <a href="/how-it-works" className="text-gray-600 hover:text-purple-600 transition-colors text-sm">
                                        How It Works
                                    </a>
                                </li>

                                <li>
                                    <a href="/pricing" className="text-gray-600 hover:text-purple-600 transition-colors text-sm">
                                        Pricing
                                    </a>
                                </li>

                                <li>
                                    <a href="/resources" className="text-gray-600 hover:text-purple-600 transition-colors text-sm">
                                        Learning Resources
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Subjects */}
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">
                                Popular Subjects
                            </h3>

                            <ul className="space-y-3">
                                <li>
                                    <a href="/tutors?subject=math" className="text-gray-600 hover:text-purple-600 transition-colors text-sm">
                                        Mathematics
                                    </a>
                                </li>

                                <li>
                                    <a href="/tutors?subject=science" className="text-gray-600 hover:text-purple-600 transition-colors text-sm">
                                        Science
                                    </a>
                                </li>

                                <li>
                                    <a href="/tutors?subject=english" className="text-gray-600 hover:text-purple-600 transition-colors text-sm">
                                        English
                                    </a>
                                </li>

                                <li>
                                    <a href="/tutors?subject=coding" className="text-gray-600 hover:text-purple-600 transition-colors text-sm">
                                        Coding & Programming
                                    </a>
                                </li>

                                <li>
                                    <a href="/tutors?subject=test-prep" className="text-gray-600 hover:text-purple-600 transition-colors text-sm">
                                        Test Preparation
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Contact/Support */}
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">
                                Contact Us
                            </h3>

                            <ul className="space-y-3">
                                <li className="text-gray-600 text-sm">support@edumate.com</li>
                                <li className="text-gray-600 text-sm">+1 (555) 123-4567</li>
                                <li className="text-gray-600 text-sm">123 Education Street, Learning City</li>
                                <li>
                                    <a href="/form" className="text-purple-600 hover:text-purple-700 font-medium text-sm">
                                        Send us a message →
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Bottom Section */}
                    <div className="mt-12 pt-8 border-t border-gray-200">
                        <div className="flex flex-col md:flex-row justify-between items-center">
                            <div className="text-center md:text-left">
                                <p className="text-gray-600 text-sm">
                                    © {new Date().getFullYear()}
                                    <span className="font-semibold text-gray-900">EduMate</span>.
                                    All rights reserved.
                                </p>

                                <p className="text-gray-500 text-xs mt-1">
                                    Empowering learners through personalized education.
                                </p>
                            </div>

                            <div className="flex items-center space-x-6 mt-4 md:mt-0">
                                <a href="/privacy" className="text-gray-600 hover:text-gray-900 text-sm">Privacy Policy</a>
                                <div className="h-4 w-px bg-gray-300" />
                                <a href="/terms" className="text-gray-600 hover:text-gray-900 text-sm">Terms of Service</a>
                                <div className="h-4 w-px bg-gray-300" />
                                <a href="/cookies" className="text-gray-600 hover:text-gray-900 text-sm">Cookie Policy</a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
export default Footer
