export interface PricingPackage {
  id: string;
  name: string;
  focus: string;
  team: string;
  price: string;
  features: string[];
  isPopular?: boolean;
}

export interface Benefit {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
}

export interface FormData {
  name: string;
  phone: string;
  email: string;
  company: string;
  subject: string;
  message: string;
}