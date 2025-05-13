import { ProductInfo } from './models/productInfo';

export const products: ProductInfo[] = [
  {
    productId: 'T001',
    productName: 'Maglietta Streetwear Nera',
    productPrice: 25.99,
    productStock: 30,
    productDescription: 'Maglietta taglia S con stampa frontale e tessuto resistente.',
    productIcon: 'assets/maglietta-streetwear.jpg',
    productStatus: 0,
    categoryType: 0, // S
    createTime: '2025-05-01T12:00:00.000+0000',
    updateTime: '2025-05-01T12:00:00.000+0000'
  },
  {
    productId: 'T002',
    productName: 'Maglietta Oversize Grigia',
    productPrice: 27.90,
    productStock: 40,
    productDescription: 'Taglia M, modello oversize comodo e casual.',
    productIcon: 'assets/maglietta-oversize.jpg',
    productStatus: 0,
    categoryType: 1, // M
    createTime: '2025-05-01T12:00:00.000+0000',
    updateTime: '2025-05-01T12:00:00.000+0000'
  },
  {
    productId: 'T003',
    productName: 'T-shirt Casual Bianca',
    productPrice: 22.50,
    productStock: 60,
    productDescription: 'Maglietta taglia L, cotone biologico, perfetta per tutti i giorni.',
    productIcon: 'assets/maglietta-casual.jpg',
    productStatus: 0,
    categoryType: 2, // L
    createTime: '2025-05-01T12:00:00.000+0000',
    updateTime: '2025-05-01T12:00:00.000+0000'
  },
  {
    productId: 'T004',
    productName: 'T-shirt Grafica Fantasy',
    productPrice: 28.00,
    productStock: 25,
    productDescription: 'Modello XL con illustrazione fantasy esclusiva.',
    productIcon: 'assets/maglietta-fantasy.jpg',
    productStatus: 0,
    categoryType: 3, // XL
    createTime: '2025-05-01T12:00:00.000+0000',
    updateTime: '2025-05-01T12:00:00.000+0000'
  }
];

export const prod: ProductInfo = {
  productId: 'T002',
  productName: 'Maglietta Oversize Grigia',
  productPrice: 27.90,
  productStock: 40,
  productDescription: 'Taglia M, modello oversize comodo e casual.',
  productIcon: 'assets/maglietta-oversize.jpg',
  productStatus: 0,
  categoryType: 1, // M
  createTime: '2025-05-01T12:00:00.000+0000',
  updateTime: '2025-05-01T12:00:00.000+0000'
};
