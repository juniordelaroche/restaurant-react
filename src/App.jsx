import { useState } from 'react'
import { db } from './data/db'
import Header from './components/Header'
import Cart from './components/Cart'
import useCart from './hooks/useCart'
import Product from './components/Product'

function App() {
  const [products, setProducts] = useState(db)
  const [isShowCart, setIsShowCart] = useState(false)

  const showCart = () => {
    setIsShowCart(!isShowCart)
  }

  const {
    cart,
    addProduct,
    increaseQuantity,
    decreaseQuantity,
    totalPayment,
    totalQuantity,
    removeProduct,
    isEmpty,
  } = useCart()

  return (
    <main className="bg-slate-100">
      <Header
        showCart={showCart}
        totalPayment={totalPayment}
        totalQuantity={totalQuantity}
      />
      <Cart
        cart={cart}
        showCart={showCart}
        isShowCart={isShowCart}
        increaseQuantity={increaseQuantity}
        decreaseQuantity={decreaseQuantity}
        removeProduct={removeProduct}
        totalPayment={totalPayment}
        isEmpty={isEmpty}
      />
      <section className="max-w-[1200px] mx-auto py-7 mt-5 px-3 ">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
          {products.map((product) => (
            <Product
              key={product.id}
              product={product}
              addProduct={addProduct}
            />
          ))}
        </div>
      </section>
    </main>
  )
}

export default App
