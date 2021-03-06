import { ProductsGrid } from '@front/components/ProductsGrid';
import { PRODUCTS_DATA_FAKE } from '@front/utils/constants';

export const Cart = () => {
  return <ProductsGrid productsData={PRODUCTS_DATA_FAKE} isCartPage />;
};
