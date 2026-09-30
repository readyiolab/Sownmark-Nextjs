export interface CityData {
  name: string;
  intro: string;
  insights: string;
  localStats: { label: string; value: string }[];
  officeContact: string;
}

export const cityContent: Record<string, CityData> = {
  delhi: {
    name: 'Delhi',
    intro: 'Delhi represents a massive corporate, retail, and manufacturing ecosystem. Sownmark serves brands in Delhi NCR with high-intent performance campaigns and enterprise SEO to capture target consumer cohorts.',
    insights: 'Delhi-NCR experiences over 82% mobile digital penetration. Competitor ad bid bidding costs are high, making organic SEO, GEO, and local Google Map pack visibility crucial to secure local search market share.',
    localStats: [
      { label: 'Digital Penetration', value: '82%' },
      { label: 'Avg SEO Traffic Boost', value: '145%' },
      { label: 'B2B Leads Generated', value: '25k+' }
    ],
    officeContact: 'Delhi NCR operations coordinate client deliverables via virtual meeting schedules and local representative visits.'
  },
  mumbai: {
    name: 'Mumbai',
    intro: 'As the financial capital of India, Mumbai demands premium brand placement. Sownmark assists corporate conglomerates, real estate builders, and financial services in Mumbai to drive digital authority and user acquisitions.',
    insights: 'Mumbai consumers react strongly to premium visuals and custom influencer referral campaigns. Display advertising and retargeting campaigns show exceptionally high conversion rates in this metropolitan hub.',
    localStats: [
      { label: 'Active Consumer Reach', value: '90%' },
      { label: 'Campaign ROAS Average', value: '3.8x' },
      { label: 'Real Estate Leads', value: '12k+' }
    ],
    officeContact: 'Mumbai corporate accounts are supported directly by our dedicated account representatives.'
  },
  bangalore: {
    name: 'Bangalore',
    intro: 'The Silicon Valley of India. Sownmark fuels Bangalore tech startups, SaaS firms, and product firms with custom Node/React codebases, agile developer recruitments, and SaaS outbound marketing channels.',
    insights: 'Bangalore has India\'s highest concentration of early-to-enterprise tech brands. Appearing in ChatGPT, Gemini, and Perplexity answers via GEO is the absolute key to organic product credibility here.',
    localStats: [
      { label: 'SaaS Signups Scaled', value: '45k+' },
      { label: 'AI Engine Citations', value: '18k+' },
      { label: 'React/Node Engineers Hired', value: '150+' }
    ],
    officeContact: 'Bangalore Tech Operations, Koramangala & HSR Layout client consultations available.'
  },
  hyderabad: {
    name: 'Hyderabad',
    intro: 'Hyderabad is a booming tech, pharma, and healthcare center. We support local clinics and pharma institutions with HIPAA-compliant web services and localized search SEO.',
    insights: 'Local search queries for medical treatments and tech services in Hyderabad have grown by 65% year-over-year. Ranking in the local map pack is essential.',
    localStats: [
      { label: 'Patient Bookings', value: '3.2x' },
      { label: 'Search Query Growth', value: '65%' },
      { label: 'Domain Health Score', value: '99%' }
    ],
    officeContact: 'Hyderabad client strategy calls are scheduled online with bi-weekly updates.'
  },
  chennai: {
    name: 'Chennai',
    intro: 'Chennai\'s heavy industries, automotive players, and SaaS firms partner with Sownmark to streamline global B2B outreach and custom API configurations.',
    insights: 'B2B buyers in Chennai value detailed case-study portfolios and technical specifications, making content marketing and LinkedIn outreach highly effective.',
    localStats: [
      { label: 'B2B Client Leads', value: '8.5k' },
      { label: 'Page load speed', value: '0.5s' },
      { label: 'Email response rate', value: '22%' }
    ],
    officeContact: 'Chennai operations coordinate B2B campaigns remotely with weekly syncs.'
  },
  pune: {
    name: 'Pune',
    intro: 'Pune\'s manufacturing units and startup hubs rely on Sownmark for tech team augmentation, landing page coding, and local SEO services.',
    insights: 'Pune experiences a heavy flow of manufacturing procurement queries, meaning schema structures for products are critical.',
    localStats: [
      { label: 'Tech Augmentations', value: '80+' },
      { label: 'Manufacturer Queries', value: '+120%' },
      { label: 'Client Retention', value: '98%' }
    ],
    officeContact: 'Pune client accounts are managed directly by our regional operations manager.'
  },
  kolkata: {
    name: 'Kolkata',
    intro: 'Kolkata\'s retail, FMCG, and emerging tech enterprises leverage Sownmark\'s display ads and social media management to drive local brand visibility.',
    insights: 'Kolkata retail brands see high return-on-ad-spend using local Meta and Instagram campaign remarketing.',
    localStats: [
      { label: 'Retail Sales Boost', value: '2.4x' },
      { label: 'Social Engagement', value: '+200%' },
      { label: 'Active Followers Won', value: '50k+' }
    ],
    officeContact: 'Kolkata operations coordinate client campaigns via scheduled online calls.'
  },
  ahmedabad: {
    name: 'Ahmedabad',
    intro: 'Ahmedabad is a trading and textile hub. Sownmark builds high-performing e-commerce Shopify sites and runs performance marketing campaigns to scale sales.',
    insights: 'E-commerce trading queries in Ahmedabad have risen. Direct display advertising on search networks delivers excellent sales volumes.',
    localStats: [
      { label: 'E-com Sales Scaled', value: '₹3 Cr+' },
      { label: 'Shopify Deployments', value: '24+' },
      { label: 'Cart Conversion Rate', value: '3.4%' }
    ],
    officeContact: 'Ahmedabad client strategy calls are coordinated by our e-commerce lead.'
  },
  noida: {
    name: 'Noida',
    intro: 'Noida\'s IT parks, media agencies, and real estate groups partner with Sownmark for aggressive Google Search PPC campaigns and lead captures.',
    insights: 'Real estate search competition in Noida is high. PPC Search Ads coupled with instant SMS automation capture hot leads first.',
    localStats: [
      { label: 'Real Estate Leads', value: '18k+' },
      { label: 'PPC Conversion Rate', value: '5.2%' },
      { label: 'Core Web Speed Score', value: '98/100' }
    ],
    officeContact: 'Noida operations are managed in tandem with our central Delhi NCR representatives.'
  },
  gurgaon: {
    name: 'Gurgaon',
    intro: 'Gurgaon\'s corporate skyscrapers house MNCs and high-growth B2B startups. Sownmark manages high-scale LinkedIn campaigns and custom CRM builds.',
    insights: 'Corporate decision makers in Gurgaon search for AI-cited technologies, emphasizing the need for active GEO and AEO campaigns.',
    localStats: [
      { label: 'MNC Lead Pipeline', value: '₹12 Cr+' },
      { label: 'CRM Builds Delivered', value: '15+' },
      { label: 'B2B Sales Meeting Rate', value: '18%' }
    ],
    officeContact: 'Gurgaon client meetings can be scheduled at Cyber City office co-working coordinates.'
  },
  jaipur: {
    name: 'Jaipur',
    intro: 'Jaipur\'s tourism, handicraft exporters, and tech startups work with Sownmark to target global international buyers via custom web design and SEO.',
    insights: 'Jaipur exporter brands require global international SEO configurations to rank for commercial intents in the US and Europe.',
    localStats: [
      { label: 'Export Queries Won', value: '14k+' },
      { label: 'US/EU Search Rank', value: 'Top 10' },
      { label: 'Site Speed Index', value: '0.4s' }
    ],
    officeContact: 'Jaipur operations are coordinated remotely with monthly representative visits.'
  }
};
