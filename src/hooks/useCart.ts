import { useMemo } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import type { Burger, BurgerID, BurgerInCart } from '../interfaces'

export default function useCart() {
  const initialCart = (): BurgerInCart[] => {
    const localStorageCart = localStorage.getItem('cartRestaurant')
    return localStorageCart ? JSON.parse(localStorageCart) : []
  }
  const [cart, setCart] = useState(initialCart)

  const addProduct = (product: Burger) => {
    // Validar si el producto ya está en el carrito
    const productInCart = cart.find((item) => item.id === product.id)
    if (productInCart) {
      const newCart = cart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      )
      return setCart(newCart)
    }
    const productWithQuantity = { ...product, quantity: 1 }
    setCart([...cart, productWithQuantity])
  }

  const increaseQuantity = (productId: BurgerID) => {
    const newCart = cart.map((item) =>
      item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
    )
    setCart(newCart)
  }

  const decreaseQuantity = (productId: BurgerID) => {
    const newCart = cart.map((item) =>
      item.id === productId && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    )
    setCart(newCart)
  }

  const removeProduct = (productId: BurgerID) => {
    const newCart = cart.filter((item) => item.id !== productId)
    setCart(newCart)
  }

  const totalPayment = useMemo(() => {
    return cart.reduce((acc, item) => acc + item.price * item.quantity, 0)
  }, [cart])

  const totalQuantity = useMemo(() => {
    return cart.reduce((acc, item) => acc + item.quantity, 0)
  }, [cart])

  const isEmpty = useMemo(() => cart.length === 0, [cart])

  useEffect(() => {
    localStorage.setItem('cartRestaurant', JSON.stringify(cart))
  }, [cart])

  return {
    cart,
    addProduct,
    increaseQuantity,
    decreaseQuantity,
    removeProduct,
    totalPayment,
    totalQuantity,
    isEmpty,
  }
}
