import React from 'react';
import { Shield, Lock, Eye, Database } from 'lucide-react';

const Privacy: React.FC = () => {
  return (
    <div className="py-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-800 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Shield className="h-16 w-16 mx-auto mb-6" />
          <h1 className="text-5xl font-bold mb-6">Privacy Policy</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Your privacy is important to us. This policy explains how we collect, 
            use, and protect your personal information when you use our services.
          </p>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            
            {/* Last Updated */}
            <div className="bg-blue-50 p-4 rounded-lg mb-8">
              <p className="text-blue-800 font-semibold mb-2">Last Updated: January 2024</p>
              <p className="text-blue-700">
                This privacy policy describes how LuxuryHomes collects, uses, and shares 
                your personal information when you visit our website or use our services.
              </p>
            </div>

            {/* Information We Collect */}
            <section className="mb-8">
              <div className="flex items-center mb-4">
                <Database className="h-6 w-6 text-blue-800 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Information We Collect</h2>
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Personal Information</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                We collect personal information that you voluntarily provide to us when you:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
                <li>Fill out contact forms or inquiry forms</li>
                <li>Register for property visits or consultations</li>
                <li>Subscribe to our newsletter or marketing communications</li>
                <li>Purchase or express interest in purchasing a property</li>
                <li>Contact us via phone, email, or WhatsApp</li>
              </ul>

              <p className="text-gray-600 leading-relaxed mb-4">
                This information may include:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
                <li>Name and contact information (email, phone number, address)</li>
                <li>Financial information (income details, loan requirements)</li>
                <li>Property preferences and requirements</li>
                <li>Communication history and preferences</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Automatically Collected Information</h3>
              <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
                <li>IP address and browser information</li>
                <li>Device information and operating system</li>
                <li>Website usage data and analytics</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>
            </section>

            {/* How We Use Information */}
            <section className="mb-8">
              <div className="flex items-center mb-4">
                <Eye className="h-6 w-6 text-blue-800 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">How We Use Your Information</h2>
              </div>
              
              <p className="text-gray-600 leading-relaxed mb-4">
                We use the information we collect for the following purposes:
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Service Delivery</h3>
              <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
                <li>Process property inquiries and schedule site visits</li>
                <li>Provide property recommendations based on your preferences</li>
                <li>Facilitate property transactions and documentation</li>
                <li>Provide customer support and after-sales service</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Communication</h3>
              <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
                <li>Respond to your inquiries and requests</li>
                <li>Send property updates and market information</li>
                <li>Provide transaction updates and important notices</li>
                <li>Send marketing communications (with your consent)</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Business Operations</h3>
              <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
                <li>Improve our website and services</li>
                <li>Analyze usage patterns and preferences</li>
                <li>Comply with legal and regulatory requirements</li>
                <li>Prevent fraud and ensure security</li>
              </ul>
            </section>

            {/* Information Sharing */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Information Sharing and Disclosure</h2>
              
              <p className="text-gray-600 leading-relaxed mb-4">
                We do not sell, trade, or rent your personal information to third parties. 
                We may share your information in the following circumstances:
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Service Providers</h3>
              <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
                <li>Banks and financial institutions for loan processing</li>
                <li>Legal professionals for documentation and compliance</li>
                <li>Marketing agencies for promotional activities (with consent)</li>
                <li>Technology providers for website and system maintenance</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Legal Requirements</h3>
              <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
                <li>Compliance with applicable laws and regulations</li>
                <li>Response to legal process or government requests</li>
                <li>Protection of our rights and property</li>
                <li>Prevention of fraud or illegal activities</li>
              </ul>
            </section>

            {/* Data Security */}
            <section className="mb-8">
              <div className="flex items-center mb-4">
                <Lock className="h-6 w-6 text-blue-800 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Data Security</h2>
              </div>
              
              <p className="text-gray-600 leading-relaxed mb-4">
                We implement appropriate technical and organizational measures to protect 
                your personal information against unauthorized access, alteration, disclosure, or destruction:
              </p>
              
              <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
                <li>SSL encryption for data transmission</li>
                <li>Secure servers and databases</li>
                <li>Access controls and authentication</li>
                <li>Regular security audits and updates</li>
                <li>Employee training on data protection</li>
              </ul>
            </section>

            {/* Your Rights */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Rights and Choices</h2>
              
              <p className="text-gray-600 leading-relaxed mb-4">
                You have the following rights regarding your personal information:
              </p>
              
              <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
                <li><strong>Access:</strong> Request access to your personal information</li>
                <li><strong>Correction:</strong> Request correction of inaccurate information</li>
                <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                <li><strong>Opt-out:</strong> Unsubscribe from marketing communications</li>
                <li><strong>Data Portability:</strong> Request transfer of your data</li>
              </ul>

              <p className="text-gray-600 leading-relaxed mb-4">
                To exercise these rights, please contact us using the information provided below.
              </p>
            </section>

            {/* Cookies */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookies and Tracking</h2>
              
              <p className="text-gray-600 leading-relaxed mb-4">
                We use cookies and similar technologies to enhance your browsing experience:
              </p>
              
              <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
                <li><strong>Essential Cookies:</strong> Required for website functionality</li>
                <li><strong>Analytics Cookies:</strong> Help us understand website usage</li>
                <li><strong>Marketing Cookies:</strong> Used for targeted advertising (with consent)</li>
                <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
              </ul>

              <p className="text-gray-600 leading-relaxed mb-4">
                You can control cookies through your browser settings, but disabling certain 
                cookies may affect website functionality.
              </p>
            </section>

            {/* Data Retention */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Retention</h2>
              
              <p className="text-gray-600 leading-relaxed mb-4">
                We retain your personal information for as long as necessary to:
              </p>
              
              <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
                <li>Provide our services and support</li>
                <li>Comply with legal obligations</li>
                <li>Resolve disputes and enforce agreements</li>
                <li>Maintain business records as required by law</li>
              </ul>
            </section>

            {/* Updates to Policy */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Updates to This Policy</h2>
              
              <p className="text-gray-600 leading-relaxed mb-4">
                We may update this privacy policy from time to time. We will notify you of 
                any changes by posting the new policy on this page and updating the "Last Updated" date. 
                We encourage you to review this policy periodically.
              </p>
            </section>

            {/* Contact Information */}
            <div className="bg-gray-50 p-6 rounded-lg mt-12">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Contact Us</h3>
              <p className="text-gray-600 mb-4">
                If you have any questions about this Privacy Policy or our data practices, 
                please contact us:
              </p>
              <ul className="text-gray-600 space-y-2">
                <li><strong>Email:</strong> privacy@luxuryhomes.com</li>
                <li><strong>Phone:</strong> +91 9823732171</li>
                <li><strong>Address:</strong> Bandra West, Mumbai, Maharashtra, India</li>
                <li><strong>Data Protection Officer:</strong> dpo@luxuryhomes.com</li>
              </ul>
            </div>

            {/* Consent */}
            <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg mt-8">
              <h4 className="font-semibold text-blue-800 mb-2">Your Consent</h4>
              <p className="text-blue-700 text-sm">
                By using our website and services, you consent to the collection and use of 
                your information as described in this Privacy Policy. If you do not agree 
                with this policy, please do not use our services.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;