export interface ButtonProps {
  label: string;
  onClick?: () => void;
  className?: string;
}

export interface CardProps {
  image: string;
  title: string;
  description: string;
}

interface PropertyProps {
  name: string;
  address: {
    state: string;
    city: string;
    country: string;
  };
  rating: number;
  category: string[];
  price: number;
  offers: {
    bed: string;
    shower: string;
    occupants: string
  };
  image: string;
  discount: string;
}