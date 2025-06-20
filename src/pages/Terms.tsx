import React from 'react';
import { FileText, Shield, AlertCircle } from 'lucide-react';

const Terms: React.FC = () => {
  return (
    <div className="py-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-800 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FileText className="h-16 w-16 mx-auto mb-6" />
          <h1 className="text-5xl font-bold mb-6">Terms of Service</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Please read these terms and conditions carefully before using our services 
            or purchasing any property through LuxuryHomes.
          </p>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            
            {/* Last Updated */}
            <div className="bg-blue-50 p-4 rounded-lg mb-8">
              <p className="text-blue-800 font-semibold mb-2">Last Updated: January 2024</p>
              <p className="text-blue-700">
                These terms of service govern your use of our website and services. 
                By accessing our website or purchasing property through us, you agree to these terms.
              </p>
            </div>

            {/* 1. Acceptance of Terms */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                By accessing and using the LuxuryHomes website, mobile application, or any of our services, 
                you accept and agree to be bound by the terms and provision of this agreement. 
                If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            {/* 2. Property Purchase Terms */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Property Purchase Terms</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">2.1 Property Information</h3>
              <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
                <li>All property information, images, and specifications are provided in good faith</li>
                <li>Minor variations in actual property may occur due to construction requirements</li>
                <li>Floor plans and layouts are indicative and subject to approval from relevant authorities</li>
                <li>Furniture and fixtures shown in images may not be included unless specifically mentioned</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">2.2 Booking and Payment</h3>
              <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
                <li>Booking amount is non-refundable except in cases of project cancellation by the developer</li>
                <li>Payment schedules are as per the agreed payment plan and cannot be modified unilaterally</li>
                <li>Delayed payments may attract interest charges as per the agreement</li>
                <li>All payments must be made through legitimate banking channels</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">2.3 Possession and Handover</h3>
              <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
                <li>Possession dates are tentative and subject to approvals and clearances</li>
                <li>Grace period of 6 months is applicable for possession delays</li>
                <li>Property handover is subject to completion of all documentation and payments</li>
                <li>Maintenance charges are applicable from the date of possession</li>
              </ul>
            </section>

            {/* 3. Customization Terms */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Customization Terms</h2>
              <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
                <li>Customization options are available only for designated properties</li>
                <li>Additional charges apply for customization beyond standard specifications</li>
                <li>Customization requests must be submitted within specified timelines</li>
                <li>Structural modifications are subject to engineering approval</li>
                <li>Customization may affect possession timelines</li>
              </ul>
            </section>

            {/* 4. Cancellation and Refund Policy */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Cancellation and Refund Policy</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">4.1 Buyer Cancellation</h3>
              <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
                <li>Cancellation within 30 days: 90% refund of amount paid</li>
                <li>Cancellation within 90 days: 80% refund of amount paid</li>
                <li>Cancellation after 90 days: 70% refund of amount paid</li>
                <li>Refund processing time: 45-60 working days</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">4.2 Developer Cancellation</h3>
              <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
                <li>100% refund of amount paid plus compensation as per RERA guidelines</li>
                <li>Alternative property options will be offered</li>
                <li>Refund with interest as applicable under law</li>
              </ul>
            </section>

            {/* 5. Warranties and Guarantees */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Warranties and Guarantees</h2>
              <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
                <li>Structural warranty: 5 years from possession date</li>
                <li>Electrical and plumbing: 2 years from possession date</li>
                <li>Fixtures and fittings: 1 year from possession date</li>
                <li>Warranty does not cover normal wear and tear</li>
                <li>Warranty claims must be reported within 30 days of discovery</li>
              </ul>
            </section>

            {/* 6. Legal Compliance */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Legal Compliance</h2>
              <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
                <li>All projects are registered under RERA (Real Estate Regulatory Authority)</li>
                <li>Properties comply with local building codes and regulations</li>
                <li>Environmental clearances obtained as required</li>
                <li>All necessary approvals from municipal and government authorities</li>
              </ul>
            </section>

            {/* 7. Limitation of Liability */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Limitation of Liability</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                LuxuryHomes shall not be liable for any indirect, incidental, special, consequential, 
                or punitive damages, including without limitation, loss of profits, data, use, goodwill, 
                or other intangible losses, resulting from your use of our services.
              </p>
            </section>

            {/* 8. Dispute Resolution */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Dispute Resolution</h2>
              <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
                <li>All disputes will be resolved through arbitration as per Indian Arbitration Act</li>
                <li>Arbitration will be conducted in Mumbai, Maharashtra</li>
                <li>Courts in Mumbai will have exclusive jurisdiction</li>
                <li>Mediation will be attempted before arbitration proceedings</li>
              </ul>
            </section>

            {/* 9. Modifications */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Modifications to Terms</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                LuxuryHomes reserves the right to modify these terms at any time. 
                Changes will be effective immediately upon posting on our website. 
                Continued use of our services constitutes acceptance of modified terms.
              </p>
            </section>

            {/* Contact Information */}
            <div className="bg-gray-50 p-6 rounded-lg mt-12">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Contact Information</h3>
              <p className="text-gray-600 mb-2">
                For questions about these Terms of Service, please contact us:
              </p>
              <ul className="text-gray-600 space-y-1">
                <li>Email: legal@luxuryhomes.com</li>
                <li>Phone: +91 932578052</li>
                <li>Address: Bandra West, Mumbai, Maharashtra, India</li>
              </ul>
            </div>

            {/* Important Notice */}
            <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg mt-8">
              <div className="flex items-start">
                <AlertCircle className="h-5 w-5 text-yellow-600 mt-0.5 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-yellow-800 mb-2">Important Notice</h4>
                  <p className="text-yellow-700 text-sm">
                    These terms are governed by Indian law. Please consult with legal counsel 
                    if you have questions about your rights and obligations under this agreement.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Terms;