import { useEffect, useState } from 'react';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function CartBadge() {
  const [cartItems, setCartItems] = useState();

  useEffect(() => {
    setCartItems(sessionStorage.getItem('cartItems') ?? 0);
    window.addEventListener('storage', () => {
      setCartItems(sessionStorage.getItem('cartItems') ?? 0);
    })
  }, []);

  return (
    <Badge badgeContent={cartItems} color="primary">
      <ShoppingCartIcon color="action" />
    </Badge>
  );
}
