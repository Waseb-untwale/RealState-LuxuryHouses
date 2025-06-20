import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Clock, Share2, MessageCircle } from 'lucide-react';

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  // Sample blog content - in a real app, this would come from an API
  const blogContent = {
    'why-invest-mumbai-real-estate-2024': {
      title: 'Why Invest in Mumbai Real Estate in 2024?',
      author: 'Rajesh Sharma',
      date: '2024-01-15',
      readTime: '5 min read',
      category: 'Investment',
      image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg',
      content: `
        <p>Mumbai continues to be India's financial capital and one of the most sought-after real estate markets in the country. As we move into 2024, several factors make Mumbai an attractive destination for real estate investment.</p>

        <h2>Strong Economic Fundamentals</h2>
        <p>Mumbai's economy remains robust, driven by its status as India's financial hub. The city houses the headquarters of major banks, financial institutions, and multinational corporations. This economic stability translates into consistent demand for both residential and commercial real estate.</p>

        <h2>Infrastructure Development</h2>
        <p>The city is witnessing unprecedented infrastructure development:</p>
        <ul>
          <li>Mumbai Metro expansion connecting key areas</li>
          <li>Coastal Road project improving connectivity</li>
          <li>Navi Mumbai International Airport enhancing accessibility</li>
          <li>Mumbai Trans Harbour Link reducing travel time</li>
        </ul>

        <h2>Premium Locations with High Appreciation</h2>
        <p>Areas like Bandra West, Juhu, Worli, and Lower Parel have shown consistent appreciation over the years. These locations offer:</p>
        <ul>
          <li>Proximity to business districts</li>
          <li>Excellent social infrastructure</li>
          <li>High rental yields</li>
          <li>Strong resale value</li>
        </ul>

        <h2>Government Initiatives</h2>
        <p>The Maharashtra government's focus on housing and urban development, along with RERA implementation, has brought transparency and accountability to the real estate sector.</p>

        <h2>Investment Opportunities</h2>
        <p>2024 presents unique opportunities for investors:</p>
        <ul>
          <li>Competitive pricing due to market corrections</li>
          <li>Attractive home loan rates</li>
          <li>Ready-to-move-in inventory availability</li>
          <li>Developer incentives and flexible payment plans</li>
        </ul>

        <h2>Conclusion</h2>
        <p>Mumbai's real estate market in 2024 offers a compelling investment proposition backed by strong fundamentals, infrastructure growth, and government support. For investors looking for long-term wealth creation, Mumbai remains an unmatched destination.</p>
      `
    },
    'luxury-home-buying-guide-mumbai': {
      title: 'The Complete Guide to Buying Luxury Homes in Mumbai',
      author: 'Priya Patel',
      date: '2024-01-10',
      readTime: '8 min read',
      category: 'Buying Guide',
      image: 'https://images.pexels.com/photos/1743227/pexels-photo-1743227.jpeg',
      content: `
        <p>Buying a luxury home in Mumbai is a significant investment that requires careful planning and consideration. This comprehensive guide will walk you through every step of the process.</p>

        <h2>Define Your Requirements</h2>
        <p>Before starting your search, clearly define what luxury means to you:</p>
        <ul>
          <li>Location preferences (Bandra, Juhu, Worli, etc.)</li>
          <li>Property type (apartment, penthouse, villa)</li>
          <li>Size and layout requirements</li>
          <li>Amenities and features</li>
          <li>Budget range</li>
        </ul>

        <h2>Choose the Right Location</h2>
        <p>Mumbai's luxury real estate is concentrated in specific areas:</p>
        <ul>
          <li><strong>Bandra West:</strong> Celebrity hub with excellent connectivity</li>
          <li><strong>Juhu:</strong> Beachfront living with premium amenities</li>
          <li><strong>Worli:</strong> Business district proximity with sea views</li>
          <li><strong>Lower Parel:</strong> Corporate hub with modern developments</li>
          <li><strong>Powai:</strong> IT corridor with lake views</li>
        </ul>

        <h2>Financial Planning</h2>
        <p>Luxury home purchases require substantial financial planning:</p>
        <ul>
          <li>Down payment (typically 20-30% of property value)</li>
          <li>Home loan eligibility and documentation</li>
          <li>Additional costs (registration, stamp duty, legal fees)</li>
          <li>Maintenance and society charges</li>
          <li>Interior and furnishing costs</li>
        </ul>

        <h2>Legal Due Diligence</h2>
        <p>Ensure all legal aspects are thoroughly checked:</p>
        <ul>
          <li>Clear title and ownership documents</li>
          <li>RERA registration and approvals</li>
          <li>Building permissions and NOCs</li>
          <li>Society formation and bylaws</li>
          <li>Encumbrance certificate</li>
        </ul>

        <h2>Property Inspection</h2>
        <p>Conduct thorough inspections before finalizing:</p>
        <ul>
          <li>Structural quality and construction standards</li>
          <li>Amenities and common areas</li>
          <li>Views and natural light</li>
          <li>Parking and storage facilities</li>
          <li>Security and maintenance systems</li>
        </ul>

        <h2>Negotiation and Closure</h2>
        <p>Professional guidance can help in:</p>
        <ul>
          <li>Price negotiation based on market rates</li>
          <li>Payment schedule optimization</li>
          <li>Agreement terms and conditions</li>
          <li>Registration and handover process</li>
        </ul>

        <h2>Post-Purchase Considerations</h2>
        <p>After purchasing your luxury home:</p>
        <ul>
          <li>Home insurance and security</li>
          <li>Interior design and customization</li>
          <li>Property management services</li>
          <li>Tax implications and benefits</li>
        </ul>
      `
    }
    // Add more blog posts as needed
  };

  const post = slug ? blogContent[slug as keyof typeof blogContent] : null;

  if (!post) {
    return (
      <div className="py-20 text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Blog Post Not Found</h1>
        <Link to="/blogs" className="text-blue-800 hover:underline">
          Back to Blogs
        </Link>
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="py-20">
      {/* Back Button */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <Link
          to="/blogs"
          className="inline-flex items-center text-blue-800 hover:text-blue-900"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Blogs
        </Link>
      </div>

      {/* Article Header */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-8">
          <div className="mb-6">
            <span className="bg-blue-800 text-white px-3 py-1 rounded-full text-sm font-semibold">
              {post.category}
            </span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-6">{post.title}</h1>
          
          <div className="flex flex-wrap items-center text-gray-600 mb-6">
            <div className="flex items-center mr-6 mb-2">
              <User className="h-4 w-4 mr-2" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center mr-6 mb-2">
              <Calendar className="h-4 w-4 mr-2" />
              <span>{formatDate(post.date)}</span>
            </div>
            <div className="flex items-center mr-6 mb-2">
              <Clock className="h-4 w-4 mr-2" />
              <span>{post.readTime}</span>
            </div>
          </div>

          <div className="flex items-center space-x-4 mb-8">
            <button className="flex items-center text-blue-800 hover:text-blue-900">
              <Share2 className="h-4 w-4 mr-2" />
              Share
            </button>
          </div>
        </header>

        {/* Featured Image */}
        <div className="mb-8">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-64 lg:h-96 object-cover rounded-xl"
          />
        </div>

        {/* Article Content */}
        <div 
          className="prose prose-lg max-w-none mb-12"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Comments Section */}
        <section className="border-t pt-8">
          <div className="flex items-center mb-6">
            <MessageCircle className="h-5 w-5 mr-2 text-gray-600" />
            <h3 className="text-xl font-semibold text-gray-900">Comments</h3>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg">
            <p className="text-gray-600 mb-4">
              We'd love to hear your thoughts on this article. Share your comments below!
            </p>
            <div className="space-y-4">
              <textarea
                placeholder="Write your comment..."
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-800"
              />
              <div className="flex justify-between items-center">
                <div className="flex space-x-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-800"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-800"
                  />
                </div>
                <button className="bg-blue-800 text-white px-6 py-2 rounded-lg hover:bg-blue-900 transition-colors">
                  Post Comment
                </button>
              </div>
            </div>
          </div>
        </section>
      </article>

      {/* Related Articles */}
      <section className="py-16 bg-gray-50 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Sample related articles */}
            <Link to="/blogs/top-mumbai-neighborhoods-luxury-living" className="group">
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <img
                  src="https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg"
                  alt="Related Article"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 group-hover:text-blue-800 transition-colors">
                    Top 10 Mumbai Neighborhoods for Luxury Living
                  </h3>
                </div>
              </div>
            </Link>
            <Link to="/blogs/home-customization-trends-2024" className="group">
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <img
                  src="https://images.pexels.com/photos/2119714/pexels-photo-2119714.jpeg"
                  alt="Related Article"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 group-hover:text-blue-800 transition-colors">
                    Home Customization Trends That Are Defining 2024
                  </h3>
                </div>
              </div>
            </Link>
            <Link to="/blogs/real-estate-financing-options-mumbai" className="group">
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <img
                  src="https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg"
                  alt="Related Article"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 group-hover:text-blue-800 transition-colors">
                    Understanding Real Estate Financing Options in Mumbai
                  </h3>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;