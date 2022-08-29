import { Product } from '../store/core/product'
import { Size } from './core/size';




export const PRODUCTS: Product[] = [
  {
    id: 20001,
    name: 'Her Shirt',
    imageUrls: ['assets/HerAsset.webp', 'assets/HerAsset.webp','assets/HerAsset.webp'],
    price: 110,
    //want to add currency pipe
    colors: [
      { name: 'lime', color: '#00CACA' },
      { name: 'lettuce', color: '#80DC0B' },
      { name: 'cherry', color: '#E91E63' },
    ],
    sizes: [Size.SMALL, Size.LARGE],
  },
  {
    id: 20002,
    name: 'Skirts',
    imageUrls: ['assets/HerAsset.webp', 'assets/HerAsset.webp','assets/HerAsset.webp'],
    price: 80,
    colors: [
      { name: 'lime', color: '#00CACA' },
      { name: 'lettuce', color: '#80DC0B' },
      { name: 'cherry', color: '#E91E63' },
    ],
    sizes: [Size.SMALL, Size.LARGE],
  }, {
    id: 30001,
    name: 'Boys Shirt',
    imageUrls: ['assets/kidsAsset.webp', 'assets/kidsAsset.webp','assets/kidsAsset.webp'],

    price: 10,
    //want to add currency pipe
    colors: [
      { name: 'lime', color: '#00CACA' },
      { name: 'lettuce', color: '#80DC0B' },
      { name: 'cherry', color: '#E91E63' },
    ],
    sizes: [Size.SMALL, Size.MEDIUM, Size.LARGE],
  },
  {
    id: 30002,
    name: 'Girl dress',
    imageUrls: ['assets/kidsAsset.webp', 'assets/kidsAsset.webp','assets/kidsAsset.webp'],
    price: 8,
    colors: [
      { name: 'lime', color: '#00CACA' },
      { name: 'lettuce', color: '#80DC0B' },
      { name: 'cherry', color: '#E91E63' },
    ],
    sizes: [Size.SMALL, Size.LARGE],
  }, {
    id: 40001,
    name: 'Chair',
    imageUrls: ['assets/homeAssets.webp', 'assets/homeAssets.webp','assets/homeAssets.webp'],
    price: 10,
    //want to add currency pipe
    colors: [
      { name: 'lime', color: '#00CACA' },
      { name: 'lettuce', color: '#80DC0B' },
      { name: 'cherry', color: '#E91E63' },
    ],
    sizes: [Size.SMALL, Size.MEDIUM, Size.LARGE],
  },
  {
    id: 40002,
    name: 'Home sofa',
    imageUrls: ['assets/homeAssets.webp', 'assets/homeAssets.webp','assets/homeAssets.webp'],
    price: 8,
    colors: [
      { name: 'lime', color: '#00CACA' },
      { name: 'lettuce', color: '#80DC0B' },
      { name: 'cherry', color: '#E91E63' },
    ],
    sizes: [Size.SMALL, Size.LARGE],
  },
  {
    id: 10001,
    name: 'His Shirt',
    imageUrls: ['assets/hisAsset.webp', 'assets/HisAsset.webp','assets/HisAsset.webp'],
    price: 10,
    //want to add currency pipe
    colors: [
      { name: 'lime', color: '#00CACA' },
      { name: 'lettuce', color: '#80DC0B' },
      { name: 'cherry', color: '#E91E63' },
    ],
    sizes: [Size.SMALL, Size.MEDIUM, Size.LARGE],
  },
  {
    id: 10002,
    name: 'Pants',
    imageUrls: ['assets/hisAsset.webp', 'assets/HisAsset.webp','assets/HisAsset.webp'],
    price: 8,
    colors: [
      { name: 'lime', color: '#00CACA' },
      { name: 'lettuce', color: '#80DC0B' },
      { name: 'cherry', color: '#E91E63' },
    ],
    sizes: [Size.SMALL, Size.LARGE],
  },

];
