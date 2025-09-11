export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  image: string;
  category: string;
  subcategory?: string;
  description: string;
  features: string[];
  inStock: boolean;
  freeShipping: boolean;
  brand?: string;
}

export interface Category {
  id: string;
  name: string;
  image: string;
  productCount: number;
}

export const categories: Category[] = [
  {
    id: "electronics",
    name: "Electronics",
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/19451fe7-f4ba-47fd-92f7-3233d8652184.png",
    productCount: 1250
  },
  {
    id: "grocery",
    name: "Grocery",
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/0edea16d-e441-4d21-b6fe-ad1eb23d9a25.png",
    productCount: 2800
  },
  {
    id: "home",
    name: "Home & Kitchen",
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/bc080056-a128-4cd7-9e19-7c9e73d1c62e.png",
    productCount: 950
  },
  {
    id: "fashion",
    name: "Fashion",
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/324017da-4f2a-4965-b8ad-a6ad03cd612f.png",
    productCount: 1680
  },
  {
    id: "health",
    name: "Health & Beauty",
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/4485a05e-c271-46c9-a5aa-93dc57664190.png",
    productCount: 740
  },
  {
    id: "sports",
    name: "Sports & Outdoors",
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/1ea305c5-2e39-4bc9-bec1-0b9670d8d8e6.png",
    productCount: 520
  },
  {
    id: "toys",
    name: "Toys & Games",
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/a77e4beb-c361-45e9-90d6-f76dcd6545f4.png",
    productCount: 890
  },
  {
    id: "automotive",
    name: "Automotive",
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/cde8a342-3d4e-4488-9f49-f9bc527abe15.png",
    productCount: 410
  }
];

export const products: Product[] = [
  // Electronics
  {
    id: "1",
    name: "Samsung 65\" 4K Smart TV",
    price: 599.99,
    originalPrice: 799.99,
    rating: 4.5,
    reviewCount: 1247,
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/20015eb3-68bb-48e3-8896-4d237971877f.png",
    category: "electronics",
    subcategory: "TVs",
    description: "Experience stunning 4K resolution with HDR support and smart TV features. Built-in streaming apps and voice control.",
    features: ["4K UHD Resolution", "HDR10+ Support", "Smart TV Platform", "Voice Remote", "Multiple HDMI Ports"],
    inStock: true,
    freeShipping: true,
    brand: "Samsung"
  },
  {
    id: "2",
    name: "Apple iPhone 15 Pro 256GB",
    price: 1099.99,
    rating: 4.8,
    reviewCount: 892,
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/de962bbe-4c02-44e7-8eae-8932c8e01f4e.png",
    category: "electronics",
    subcategory: "Phones",
    description: "The most advanced iPhone with titanium design, A17 Pro chip, and professional camera system.",
    features: ["A17 Pro Chip", "Titanium Design", "48MP Camera", "256GB Storage", "Face ID"],
    inStock: true,
    freeShipping: true,
    brand: "Apple"
  },
  {
    id: "3",
    name: "Dell XPS 13 Laptop",
    price: 899.99,
    originalPrice: 1199.99,
    rating: 4.6,
    reviewCount: 523,
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/872a9980-c25c-47e0-9b63-0ef9c91ebe60.png",
    category: "electronics",
    subcategory: "Laptops",
    description: "Ultra-portable laptop with Intel Core i7 processor, 16GB RAM, and all-day battery life.",
    features: ["Intel Core i7", "16GB RAM", "512GB SSD", "13.3\" Display", "Windows 11"],
    inStock: true,
    freeShipping: true,
    brand: "Dell"
  },

  // Grocery
  {
    id: "4",
    name: "Great Value Organic Bananas",
    price: 2.48,
    rating: 4.3,
    reviewCount: 1580,
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/cea34b9e-8b9c-4fba-b38a-cd4a57e9aa51.png",
    category: "grocery",
    subcategory: "Fresh Produce",
    description: "Fresh organic bananas, perfect for snacking or baking. Rich in potassium and natural sweetness.",
    features: ["USDA Organic", "Fresh & Ripe", "Rich in Potassium", "Versatile Use", "Healthy Snack"],
    inStock: true,
    freeShipping: false
  },
  {
    id: "5",
    name: "Great Value Whole Milk Gallon",
    price: 3.68,
    rating: 4.4,
    reviewCount: 2341,
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/03ad6f20-ced4-4349-b683-0d31fc4400ca.png",
    category: "grocery",
    subcategory: "Dairy",
    description: "Fresh whole milk from local farms. Perfect for cereal, baking, or drinking.",
    features: ["Fresh & Cold", "Vitamin D Added", "Local Farms", "1 Gallon Size", "Calcium Rich"],
    inStock: true,
    freeShipping: false
  },

  // Home & Kitchen
  {
    id: "6",
    name: "KitchenAid Stand Mixer",
    price: 279.99,
    originalPrice: 349.99,
    rating: 4.7,
    reviewCount: 1876,
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/969cf456-2eb3-4962-a35a-159ab01722ec.png",
    category: "home",
    subcategory: "Small Appliances",
    description: "Professional-grade stand mixer with 10 speeds and multiple attachments included.",
    features: ["10 Speed Settings", "5-Quart Bowl", "Multiple Attachments", "Durable Motor", "Classic Design"],
    inStock: true,
    freeShipping: true,
    brand: "KitchenAid"
  },
  {
    id: "7",
    name: "Dyson V15 Cordless Vacuum",
    price: 449.99,
    originalPrice: 549.99,
    rating: 4.6,
    reviewCount: 789,
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/ca25e738-8763-4987-98c9-176d3c9de49c.png",
    category: "home",
    subcategory: "Vacuums",
    description: "Powerful cordless vacuum with laser dust detection and intelligent suction control.",
    features: ["Laser Dust Detection", "60min Runtime", "HEPA Filtration", "Multiple Attachments", "Lightweight"],
    inStock: true,
    freeShipping: true,
    brand: "Dyson"
  },

  // Fashion
  {
    id: "8",
    name: "Levi's 501 Original Jeans",
    price: 59.99,
    rating: 4.4,
    reviewCount: 1923,
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/631f2968-f19e-4924-aa42-156e48e2b239.png",
    category: "fashion",
    subcategory: "Men's Clothing",
    description: "Classic straight-leg jeans with authentic fit and vintage appeal. Made from durable denim.",
    features: ["100% Cotton Denim", "Classic Fit", "Button Fly", "Multiple Sizes", "Machine Washable"],
    inStock: true,
    freeShipping: true,
    brand: "Levi's"
  },
  {
    id: "9",
    name: "Nike Air Max 270 Sneakers",
    price: 129.99,
    originalPrice: 149.99,
    rating: 4.5,
    reviewCount: 1456,
    image: "https://placehold.co/400x300?text=Nike+Air+Max+270+White+Running+Sneakers",
    category: "fashion",
    subcategory: "Shoes",
    description: "Comfortable lifestyle sneakers with maximum Air cushioning and modern style.",
    features: ["Air Max Cushioning", "Breathable Mesh", "Rubber Outsole", "Lifestyle Design", "Multiple Colors"],
    inStock: true,
    freeShipping: true,
    brand: "Nike"
  },

  // Health & Beauty
  {
    id: "10",
    name: "Neutrogena Hydrating Face Wash",
    price: 8.97,
    rating: 4.3,
    reviewCount: 2847,
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/23350099-16ca-4aed-8ab1-802080d70996.png",
    category: "health",
    subcategory: "Skincare",
    description: "Gentle daily face wash that cleanses without over-drying. Suitable for all skin types.",
    features: ["Gentle Formula", "All Skin Types", "Daily Use", "Hydrating", "Dermatologist Tested"],
    inStock: true,
    freeShipping: false,
    brand: "Neutrogena"
  },

  // Sports & Outdoors
  {
    id: "11",
    name: "Yeti Rambler Tumbler 30oz",
    price: 39.99,
    rating: 4.8,
    reviewCount: 3421,
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/f2cc61dc-2b9f-4ad1-aa22-da56afcc218b.png",
    category: "sports",
    subcategory: "Drinkware",
    description: "Insulated stainless steel tumbler that keeps drinks cold for hours and hot drinks warm.",
    features: ["Double-Wall Insulation", "Stainless Steel", "30oz Capacity", "Dishwasher Safe", "No Sweat Design"],
    inStock: true,
    freeShipping: true,
    brand: "Yeti"
  },
  {
    id: "12",
    name: "Coleman 4-Person Tent",
    price: 89.99,
    originalPrice: 119.99,
    rating: 4.2,
    reviewCount: 756,
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/cb29cf4b-9739-42e7-85f5-560d50ec8980.png",
    category: "sports",
    subcategory: "Camping",
    description: "Easy-to-set-up tent perfect for family camping trips. Weather-resistant and spacious interior.",
    features: ["4-Person Capacity", "Weather Resistant", "Easy Setup", "Spacious Interior", "Carry Bag Included"],
    inStock: true,
    freeShipping: true,
    brand: "Coleman"
  }
];

export const getFeaturedProducts = (): Product[] => {
  return products.slice(0, 8);
};

export const getProductsByCategory = (categoryId: string): Product[] => {
  return products.filter(product => product.category === categoryId);
};

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const searchProducts = (query: string): Product[] => {
  const lowercaseQuery = query.toLowerCase();
  return products.filter(product => 
    product.name.toLowerCase().includes(lowercaseQuery) ||
    product.description.toLowerCase().includes(lowercaseQuery) ||
    product.category.toLowerCase().includes(lowercaseQuery) ||
    (product.brand && product.brand.toLowerCase().includes(lowercaseQuery))
  );
};