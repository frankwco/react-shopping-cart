import { renderWithThemeProvider } from 'utils/test/test-utils';
import CartProvider from 'contexts/cart-context';

import Cart from '.';

describe('[components] - Cart', () => {
  const setup = (props = {}) => {
    return renderWithThemeProvider(
      <CartProvider>
        <Cart />
      </CartProvider>
    );
  };

  test('should render correctly', () => {
    const wrapper = setup();
    expect(wrapper).toMatchSnapshot();
  });
});