import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Search, HelpCircle } from 'lucide-react';

const FAQs: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All Questions');
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    'All Questions',
    'Buying Questions',
    'General Questions',
    'Payment Questions',
    'Support Questions'
  ];

  const faqs = [
    {
      id: 1,
      category: 'Buying Questions',
      question: 'What is the process of buying a property through LuxuryHomes?',
      answer: 'Our buying process is simple and transparent: 1) Browse our properties online or visit our office, 2) Schedule a site visit with our team, 3) Choose your preferred property and customize if available, 4) Complete documentation and payment, 5) Get your keys and move in. Our team guides you through every step.'
    },
    {
      id: 2,
      category: 'Buying Questions',
      question: 'Do you offer customization options for the properties?',
      answer: 'Yes! Many of our properties offer customization options for layout, interior design, and finishes. Our design team works with you to create your perfect home. Customization options vary by property and are clearly marked on our listings.'
    },
    {
      id: 3,
      category: 'Buying Questions',
      question: 'What documents are required for purchasing a property?',
      answer: 'Required documents include: Valid ID proof (Aadhar/Passport), Address proof, Income proof (salary slips/ITR), Bank statements, PAN card, and passport-size photographs. Our legal team will guide you through the complete documentation process.'
    },
    {
      id: 4,
      category: 'Payment Questions',
      question: 'What payment options are available?',
      answer: 'We offer flexible payment options including: Cash payments, Bank transfers, Home loans (we assist with loan processing), EMI options, and construction-linked payment plans. Our finance team helps you choose the best option for your needs.'
    },
    {
      id: 5,
      category: 'Payment Questions',
      question: 'Do you assist with home loan processing?',
      answer: 'Absolutely! We have partnerships with leading banks and financial institutions. Our finance team assists with loan applications, documentation, and ensures quick approval. We help you get the best interest rates available.'
    },
    {
      id: 6,
      category: 'Payment Questions',
      question: 'Are there any hidden charges or additional fees?',
      answer: 'No, we believe in complete transparency. All costs including registration charges, stamp duty, maintenance deposits, and any other applicable fees are clearly mentioned upfront. There are no hidden charges.'
    },
    {
      id: 7,
      category: 'General Questions',
      question: 'What makes LuxuryHomes different from other real estate companies?',
      answer: 'Our 15+ years of experience, focus on luxury properties, personalized service, customization options, transparent pricing, and comprehensive after-sales support set us apart. We\'re not just selling properties; we\'re creating luxury lifestyle experiences.'
    },
    {
      id: 8,
      category: 'General Questions',
      question: 'In which areas of Mumbai do you have properties?',
      answer: 'We have premium properties in Mumbai\'s most sought-after locations including Bandra West, Juhu, Andheri East, Worli, Santacruz West, Powai, and other prime areas. All our locations offer excellent connectivity and lifestyle amenities.'
    },
    {
      id: 9,
      category: 'General Questions',
      question: 'Can I schedule a site visit?',
      answer: 'Yes! We encourage site visits to help you make an informed decision. You can schedule visits through our website, WhatsApp, or by calling us. Our team provides guided tours and answers all your questions during the visit.'
    },
    {
      id: 10,
      category: 'Support Questions',
      question: 'What kind of after-sales support do you provide?',
      answer: 'We provide comprehensive after-sales support including: Property handover assistance, maintenance coordination, warranty support for fittings and fixtures, legal documentation support, and ongoing customer service for any queries or issues.'
    },
    {
      id: 11,
      category: 'Support Questions',
      question: 'How can I contact customer support?',
      answer: 'You can reach us through multiple channels: WhatsApp at +91 9823732171, email at info@luxuryhomes.com, phone calls during business hours (Mon-Sat 9AM-7PM), or visit our office in Bandra West. We respond to all queries within 24 hours.'
    },
    {
      id: 12,
      category: 'Support Questions',
      question: 'Do you provide property management services?',
      answer: 'Yes, we offer property management services for our clients including rental management, maintenance coordination, tenant screening, and property upkeep. This is especially useful for investors or those who travel frequently.'
    },
    {
      id: 13,
      category: 'Buying Questions',
      question: 'Is there a warranty on the properties?',
      answer: 'Yes, all our properties come with comprehensive warranties covering structural work, electrical fittings, plumbing, and other installations. Warranty periods vary by component, and we provide detailed warranty documentation at the time of handover.'
    },
    {
      id: 14,
      category: 'General Questions',
      question: 'Are the properties ready to move in?',
      answer: 'Most of our properties are ready-to-move-in with complete interiors and all amenities functional. Some properties may be under construction with specified completion dates. The status is clearly mentioned in each property listing.'
    },
    {
      id: 15,
      category: 'Payment Questions',
      question: 'Can I get a refund if I change my mind?',
      answer: 'Refund policies vary based on the stage of purchase and specific property terms. Generally, we have a cooling-off period for cancellations with applicable charges. All refund terms are clearly explained in the purchase agreement.'
    }
  ];

  const filteredFAQs = faqs.filter(faq => {
    const matchesCategory = activeCategory === 'All Questions' || faq.category === activeCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleFAQ = (id: number) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <div className="py-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-800 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <HelpCircle className="h-16 w-16 mx-auto mb-6" />
          <h1 className="text-5xl font-bold mb-6">Frequently Asked Questions</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Find answers to common questions about our properties, buying process, 
            and services. Can't find what you're looking for? Contact us directly.
          </p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search Bar */}
          <div className="relative mb-8">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search FAQs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-800 text-lg"
            />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                  activeCategory === category
                    ? 'bg-blue-800 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-800 shadow-md'
                }`}
              >
                {category} ({category === 'All Questions' ? faqs.length : faqs.filter(faq => faq.category === category).length})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ List */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredFAQs.length === 0 ? (
            <div className="text-center py-12">
              <HelpCircle className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No FAQs found</h3>
              <p className="text-gray-600">Try adjusting your search or category filter</p>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredFAQs.map((faq) => (
                <div
                  key={faq.id}
                  className="bg-gray-50 rounded-lg shadow-md overflow-hidden"
                >
                  <button
                    onClick={() => toggleFAQ(faq.id)}
                    className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-100 transition-colors"
                  >
                    <div>
                      <span className="text-sm text-blue-800 font-medium mb-1 block">
                        {faq.category}
                      </span>
                      <h3 className="text-lg font-semibold text-gray-900">
                        {faq.question}
                      </h3>
                    </div>
                    {openFAQ === faq.id ? (
                      <ChevronUp className="h-5 w-5 text-gray-500 flex-shrink-0 ml-4" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-500 flex-shrink-0 ml-4" />
                    )}
                  </button>
                  {openFAQ === faq.id && (
                    <div className="px-6 pb-4">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Still Have Questions?</h2>
          <p className="text-xl mb-8">
            Our expert team is here to help you with any additional questions or concerns.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => window.open('https://wa.me/919823732171', '_blank')}
              className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold"
            >
              WhatsApp Us
            </button>
            <a
              href="mailto:info@luxuryhomes.com"
              className="bg-white text-blue-800 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQs;