export interface CaseStudy {
  id: string;
  name: string;
  headline: string;
  category: string;
  clientBackground: string;
  challenge: string;
  approach: string[];
  result: string;
  metrics: { value: string; label: string }[];
  testimonial?: { quote: string; author: string; title: string };
  color: string;
}

export const caseStudiesData: CaseStudy[] = [
  {
    id: 'shina-kaur',
    name: 'Shina Kaur',
    headline: 'Scaling Shina Kaur: 100% SEO-Friendly Branding & Performance Marketing.',
    category: 'Performance Marketing & SEO Branding',
    clientBackground: 'Shina Kaur is a premium designer wear brand wanting to build high-end brand authority in fashion e-commerce.',
    challenge: 'Establishing a premium digital footprint that balances luxury branding with technical performance and lead conversions.',
    approach: [
      'Development of a 100% user-friendly mobile-first UI/UX portal.',
      'Performance marketing strategy using optimized Meta & Google Ads.',
      'Targeted local audience mapping for premium buyer categories.'
    ],
    result: 'Increased revenue through high-intent lead generation.',
    metrics: [
      { value: '3.5x', label: 'Campaign ROAS' },
      { value: '+140%', label: 'Organic Traffic' },
      { value: '-22%', label: 'Acquisition Cost' }
    ],
    testimonial: {
      quote: 'Sownmarks technical precision and creative direction helped us establish our brand online. The ROI was clear from month two.',
      author: 'Shina Kaur',
      title: 'Founder & Designer'
    },
    color: 'blue'
  },
  {
    id: 'singh-karman',
    name: 'Singh Karman',
    headline: 'Singh Karman Branding: A Roadmap to Revenue Growth.',
    category: 'Performance Marketing & SEO Branding',
    clientBackground: 'Singh Karman is a high-profile consultant seeking to build personal branding channels.',
    challenge: 'Rebranding the domain while keeping search rankings intact and resolving index bugs.',
    approach: [
      'Completed a complete technical SEO crawl audit and redirect map.',
      'Rebuilt the portfolio site with a modern react design.',
      'Constructed a long-tail keyword campaign targeting consulting services.'
    ],
    result: 'Boosted brand authority and organic search visibility.',
    metrics: [
      { value: '+180%', label: 'Organic Ranks' },
      { value: '2.5x', label: 'Form Leads' },
      { value: '100%', label: 'SEO site health' }
    ],
    color: 'indigo'
  },
  {
    id: 'freedom-mergers',
    name: 'Freedom Mergers',
    headline: 'Building Freedom Mergers: Connecting Founders via Custom Development.',
    category: 'Start-up & Business Growth Portfolio',
    clientBackground: 'Freedom Mergers is a platform where startup founders connect, list business financials, and match with buyers.',
    challenge: 'Needed a secure dashboard letting users list stats anonymously while preventing scraping.',
    approach: [
      'Developed custom SaaS architecture and database schemas.',
      'Implemented scraping blocker filters and encrypted form fields.',
      'Designed structured B2B outbound sequences to drive user signups.'
    ],
    result: 'Connecting high-value founders globally through a seamless UX portal.',
    metrics: [
      { value: '500+', label: 'Founders Onboarded' },
      { value: '$10M+', label: 'Merger listing value' },
      { value: '99.9%', label: 'Uptime reliability' }
    ],
    color: 'purple'
  },
  {
    id: 'igrow-big',
    name: 'iGrow Big',
    headline: 'iGrow Big: Executing the Earning Journey for New Members.',
    category: 'Start-up & Business Growth Portfolio',
    clientBackground: 'iGrow Big is a digital affiliate education portal driving signups and referral earnings.',
    challenge: 'Onboarding members into a revenue-generating ecosystem with zero friction points.',
    approach: [
      'Developed onboarding pipelines and visual tutorials from scratch.',
      'Integrated payment collections and member payout calculators.',
      'Designed email drip loops to re-engage unconverted trial signups.'
    ],
    result: 'Simplified user registration journey leading to recurring membership growth.',
    metrics: [
      { value: '3x', label: 'Funnel signup rates' },
      { value: '₹2.5 Cr+', label: 'Payouts processed' },
      { value: '-45%', label: 'User dropoff rates' }
    ],
    color: 'green'
  },
  {
    id: 'delta-lms',
    name: 'Delta LMS',
    headline: 'Streamlining Education: User-Friendly Learning Management Systems.',
    category: 'The Delta Ecosystem',
    clientBackground: 'An educational institute scaling training programs online for thousands of students.',
    challenge: 'Struggling with slow page loading times and complex course navigation menus.',
    approach: [
      'Built a custom react-based LMS portal.',
      'Configured dashboard components optimized for mobile speeds.',
      'Created one-click video lesson navigation modules.'
    ],
    result: 'High-performance learning experience for thousands of users.',
    metrics: [
      { value: '10k+', label: 'Active Learners' },
      { value: '0.4s', label: 'Average page load' },
      { value: '98%', label: 'Student retention' }
    ],
    color: 'orange'
  },
  {
    id: 'delta-web',
    name: 'Delta Web Service',
    headline: 'B2B Service Excellence: Branding the Future of Web Services.',
    category: 'The Delta Ecosystem',
    clientBackground: 'Delta Web Service provides corporate solutions to tech enterprises.',
    challenge: 'Low lead conversion rates due to a general lack of conversion landing pages.',
    approach: [
      'Created custom service landing pages.',
      'Implemented conversion marketing funnels targeting IT directors.',
      'Configured Google search campaigns for high-intent corporate terms.'
    ],
    result: 'Established strong brand positioning and lead acquisition flow.',
    metrics: [
      { value: '2.5x', label: 'Pipeline metrics' },
      { value: '-35%', label: 'Ad cost reduction' },
      { value: '15+', label: 'Corporate clients won' }
    ],
    color: 'cyan'
  },
  {
    id: 'delta-view',
    name: 'Delta View',
    headline: 'Data Visibility: 100% User-Friendly Analytics Dashboard.',
    category: 'The Delta Ecosystem',
    clientBackground: 'An operations firm requiring unified data feeds for active team pipelines.',
    challenge: 'Integrating disparate database feeds into a single readable real-time dashboard.',
    approach: [
      'Developed custom data visualization graphs and API aggregators.',
      'Designed responsive UI cards for clear mobile layout visibility.',
      'Optimized backend queries to minimize server load times.'
    ],
    result: 'Enhanced data visibility for informed decision making.',
    metrics: [
      { value: 'Real-time', label: 'Data Sync latency' },
      { value: '100%', label: 'Mobile responsive' },
      { value: '95%', label: 'Internal user adoption' }
    ],
    color: 'rose'
  },
  {
    id: 'arbilo',
    name: 'Arbilo',
    headline: 'Crypto Arbitrage from Scratch: Automated Profit via Pine Script.',
    category: 'High-Performance Tech & Fintech',
    clientBackground: 'A fintech start-up providing cryptocurrency arbitrage signals to active traders.',
    challenge: 'Needed absolute precision in trade signal alerts to prevent client capital losses.',
    approach: [
      'Integrated customized Pine Script logic into trading indicators.',
      'Developed webhook triggers firing real-time telegram and dashboard alerts.',
      'Created secure payment gateways for subscription access.'
    ],
    result: 'Reliable trade signal outputs leading to steady subscriber growth.',
    metrics: [
      { value: '99.4%', label: 'Signal precision' },
      { value: '1K+', label: 'Paid subscribers' },
      { value: '₹50L+', label: 'Automated transactions' }
    ],
    color: 'amber'
  },
  {
    id: 'zuvigo',
    name: 'Zuvigo',
    headline: 'Road to $100K: Reaching Six Figures in 6 Months.',
    category: 'High-Performance Tech & Fintech',
    clientBackground: 'An online service reseller scaling operations in global B2B markets.',
    challenge: 'Needed rapid sales cycles and scale-ready lead collection funnels.',
    approach: [
      'Built a fast react custom landing page.',
      'Configured aggressive paid search campaigns on Google and LinkedIn.',
      'Developed automated follow-up emails using CRM integrations.'
    ],
    result: 'Reached the $100,000 revenue target in under 6 months.',
    metrics: [
      { value: '$100K+', label: 'Revenue in 6 Months' },
      { value: '600+', label: 'B2B Client queries' },
      { value: '4.8x', label: 'Ad ROI multiplier' }
    ],
    color: 'emerald'
  },
  {
    id: 'professional-plumbing',
    name: 'The Local Plumber',
    headline: 'High-Intent Lead Generation for Professional Plumbing Solutions',
    category: 'Australian Service Sector',
    clientBackground: 'A local plumbing group operating in major Australian metropolitan areas.',
    challenge: 'High cost-per-click on search ads and a low local map ranking representation.',
    approach: [
      'Optimized emergency landing pages for fast mobile calls.',
      'Claimed and optimized local Google Business Profiles and citations.',
      'Configured local target Meta campaigns for homeowner audiences.'
    ],
    result: 'Substantial increase in emergency service calls.',
    metrics: [
      { value: '+100%', label: 'Call Now Clicks' },
      { value: '-40%', label: 'Lead Cost Reduction' },
      { value: '#3 rank', label: 'Local Map Pack' }
    ],
    color: 'blue'
  },
  {
    id: 'bright-smile-dental',
    name: 'Bright Smile Dental',
    headline: 'High-Conversion Patient Booking for Bright Smile Dental Clinic',
    category: 'Australian Service Sector',
    clientBackground: 'A premium dental clinic in Brisbane offering cosmetic and standard dental treatments.',
    challenge: 'An outdated, slow-loading site failing to convert traffic into online appointments.',
    approach: [
      'Designed and built a 100% user-friendly site with integrated booking apps.',
      'Optimized keywords for "Dentist near me" and specialized dental terms.',
      'Launched targeted Google Search ads matching local patient requirements.'
    ],
    result: 'Tripled monthly online patient appointment bookings.',
    metrics: [
      { value: '3x', label: 'Monthly Bookings' },
      { value: '98%', label: 'SEO site score' },
      { value: '-25%', label: 'Ad cost per lead' }
    ],
    color: 'teal'
  },
  {
    id: 'elite-realty',
    name: 'Elite Realty Group',
    headline: 'Luxury Listings & Branding for Elite Realty Group',
    category: 'Australian Service Sector',
    clientBackground: 'A luxury real estate brokerage agency in Sydney and Gold Coast.',
    challenge: 'Low listing visibility and poor conversion of property tours into buyer inquiries.',
    approach: [
      'Built a custom property listing portal featuring visual video tours.',
      'Developed a local content marketing strategy showcasing market insights.',
      'Designed Meta remarketing ads for previous listing visitors.'
    ],
    result: 'Accelerated listing views and generated high-value buyer signups.',
    metrics: [
      { value: '+50%', label: 'Listings Won' },
      { value: '2.8x', label: 'Lead inquiries' },
      { value: '45k+', label: 'Organic page views' }
    ],
    color: 'violet'
  },
  {
    id: 'premier-home-security',
    name: 'Premier Home Security',
    headline: 'National Reach for Premier Home Security Systems',
    category: 'USA High-Growth Markets',
    clientBackground: 'A national home security installation firm based in Dallas, Texas.',
    challenge: 'Competitive search rankings and a highly expensive customer acquisition pipeline.',
    approach: [
      'Rebuilt technical architecture to support high traffic volume.',
      'Crafted long-form blogs to build strong domain E-E-A-T signals.',
      'Restructured Google Ads targeting high-intent national buyer terms.'
    ],
    result: 'Secured top positions for multiple national keywords.',
    metrics: [
      { value: '50+', label: 'Keywords in Top 3' },
      { value: '2x', label: 'Monthly revenue' },
      { value: '-35%', label: 'Customer signup cost' }
    ],
    color: 'red'
  },
  {
    id: 'lexington-law',
    name: 'Lexington Law Partners',
    headline: 'Trust & Conversion for US Legal/Professional Services',
    category: 'USA High-Growth Markets',
    clientBackground: 'A professional legal consulting practice in Chicago and New York.',
    challenge: 'An outdated, cold layout that failed to build trust or convert traffic.',
    approach: [
      'Redesigned the UI/UX around client testimonials and key case outcomes.',
      'Optimized simple contact forms for quick mobile consultations.',
      'Targeted paid search terms to filter for business legal needs.'
    ],
    result: 'Substantial new revenue generated in under 6 months.',
    metrics: [
      { value: '$250k+', label: 'Generated Revenue' },
      { value: '-30%', label: 'Ad cost reduction' },
      { value: '98%', label: 'User trust rating' }
    ],
    color: 'slate'
  }
];
