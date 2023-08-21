import React from 'react';
import { useCart } from '../../Context/cartContext';
import Dropdown from 'react-bootstrap/Dropdown';
import { GiShoppingCart } from 'react-icons/gi'


export default function CartPopup() {
  const { cartState } = useCart();

  return (

    <Dropdown>
      <Dropdown.Toggle variant="falt" id="dropdown-basic">
        <GiShoppingCart color='white' size={30}/> Cart
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {cartState.items.map(item => (
          <Dropdown.Item key={item._id} href="#">{item.title} - Qty: {item.quantity}</Dropdown.Item>
        ))}
        <Dropdown.Item className='btn btn-primary' href="/checkout">Checkout</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}
