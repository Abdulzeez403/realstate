import { Agent } from '@/types';

export const agents: Agent[] = [
  {
    id: "agent-001",
    name: "Sarah Johnson",
    title: "Luxury Property Specialist",
    email: "sarah.johnson@luxuryestate.com",
    phone: "+1 (555) 123-4567",
    bio: "Sarah Johnson brings over 15 years of experience in the luxury real estate market. With a background in interior design and a passion for architecture, Sarah offers unparalleled expertise in helping clients find their perfect home. Her extensive network and negotiation skills have earned her a reputation as one of the top luxury property specialists in the country. Sarah specializes in oceanfront properties and high-end estates, with a client list that includes celebrities and business executives.",
    image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg",
    specializations: ["Luxury Waterfront", "Celebrity Homes", "Estate Properties"],
    socialMedia: {
      linkedin: "sarahjohnson",
      twitter: "sarahj_realestate",
      instagram: "sarahjohnson_luxury"
    },
    listings: 24,
    experience: 15
  },
  {
    id: "agent-002",
    name: "Michael Chen",
    title: "Urban Property Expert",
    email: "michael.chen@luxuryestate.com",
    phone: "+1 (555) 234-5678",
    bio: "Michael Chen specializes in urban properties, with particular expertise in luxury condos, penthouses, and loft apartments. Having previously worked in urban development, Michael brings valuable insights into city planning and property investment potential. His analytical approach and attention to detail ensure clients make informed decisions when navigating competitive urban markets. Michael is known for his in-depth knowledge of emerging neighborhoods and market trends.",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
    specializations: ["Luxury Condos", "Penthouses", "Investment Properties"],
    socialMedia: {
      linkedin: "michaelchen",
      twitter: "mchen_realestate",
      instagram: "michaelchen_homes"
    },
    listings: 18,
    experience: 10
  },
  {
    id: "agent-003",
    name: "Elizabeth Taylor",
    title: "Historic & Unique Properties Specialist",
    email: "elizabeth.taylor@luxuryestate.com",
    phone: "+1 (555) 345-6789",
    bio: "Elizabeth Taylor has a passion for properties with character and history. With a background in historical preservation and architecture, she specializes in helping clients find and restore unique properties while maintaining their historical integrity. Elizabeth has been featured in architectural magazines for her work in preserving and modernizing historic homes. Her expertise extends to navigating the specific regulations and considerations that come with historic properties.",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
    specializations: ["Historic Homes", "Architectural Gems", "Character Properties"],
    socialMedia: {
      linkedin: "elizabethtaylor",
      twitter: "etaylor_historic",
      instagram: "elizabeth_historichomes"
    },
    listings: 15,
    experience: 12
  },
  {
    id: "agent-004",
    name: "Robert Williams",
    title: "Family Home & Investment Specialist",
    email: "robert.williams@luxuryestate.com",
    phone: "+1 (555) 456-7890",
    bio: "Robert Williams specializes in family homes and investment properties, with a focus on helping clients build wealth through real estate. With a background in finance and real estate investment, Robert provides valuable guidance on property appreciation potential and return on investment. He is particularly skilled at identifying properties in emerging neighborhoods and helping clients understand the long-term value of their real estate decisions. Robert's client-centered approach ensures personalized service tailored to each family's unique needs and financial goals.",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
    specializations: ["Family Homes", "Investment Properties", "First-time Buyers"],
    socialMedia: {
      linkedin: "robertwilliams",
      twitter: "rwilliams_homes",
      instagram: "robertwilliams_realestate"
    },
    listings: 22,
    experience: 8
  }
];

export const getAgentById = (id: string): Agent | undefined => {
  return agents.find(agent => agent.id === id);
};

export const getAgentByName = (name: string): Agent | undefined => {
  return agents.find(agent => agent.name === name);
};

export const getAllAgents = (): Agent[] => {
  return agents;
};