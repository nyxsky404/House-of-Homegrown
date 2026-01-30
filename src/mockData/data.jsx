import productImage from "@/assets/product-terracotta-vase.jpg";
import categoryRoti from "@/assets/category-roti.jpg";
import categoryKapda from "@/assets/category-kapda.jpg";
import categoryMakan from "@/assets/category-makan.jpg";

export const categories = [
  { id: "all", label: "All Products" },
  { id: "new", label: "New Arrivals" },
  { id: "roti", label: "Roti (Wellness)" },
  { id: "kapda", label: "Kapda (Textiles)" },
  { id: "makan", label: "Makan (Home)" },
];

export const mockProducts = [
  {
    id: "1",
    name: "Handcrafted Terracotta Vase",
    category: "makan",
    price: 2499,
    originalPrice: 2999,
    image: productImage,
  },
  {
    id: "2",
    name: "Organic Turmeric & Honey Set",
    category: "roti",
    price: 899,
    originalPrice: null,
    image: categoryRoti,
  },
  {
    id: "3",
    name: "Block-Printed Cotton Stole",
    category: "kapda",
    price: 1499,
    originalPrice: 1799,
    image: categoryKapda,
  },
  {
    id: "4",
    name: "Brass Diya Set (Pack of 5)",
    category: "makan",
    price: 1299,
    originalPrice: null,
    image: categoryMakan,
  },
  {
    id: "5",
    name: "Khadi Cotton Kurta",
    category: "kapda",
    price: 2199,
    originalPrice: 2599,
    image: categoryKapda,
  },
  {
    id: "6",
    name: "Pure Himalayan Honey (500g)",
    category: "roti",
    price: 649,
    originalPrice: null,
    image: categoryRoti,
  },
];