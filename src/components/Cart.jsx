import clsx from 'clsx'
import CloseIcon from './icons/CloseIcon'

export default function Cart({
  showCart,
  isShowCart,
  cart,
  increaseQuantity,
  decreaseQuantity,
  removeProduct,
  totalPayment,
  isEmpty,
}) {
  return (
    <div
      dir="ltr"
      className={clsx(
        'fixed z-10 h-screen bg-white w-full shadow-lg rounded-s-xl max-w-[400px] top-0 end-0 p-4 transition-transform duration-400 ease-in-out',
        {
          'translate-x-full': !isShowCart, // Oculto a la derecha
        }
      )}
    >
      <div className="flex justify-between items-center mb-3">
        <h5 className="ff-raleway font-bold">Pedido</h5>
        <button
          type="button"
          title="Close"
          className="rounded-lg  p-2 bg-amber-500 text-white cursor-pointer block ms-auto"
          onClick={showCart}
        >
          <CloseIcon width={15} height={15} />
        </button>
      </div>
      <hr className="border-slate-200" />

      {isEmpty && (
        <div className="text-center text-slate-800 mt-3">No hay productos</div>
      )}

      <div className="mt-4 flex flex-col gap-3 overflow-y-auto">
        <div className="overflow-y-auto h-[calc(96vh-200px)] lg:h-[calc(100vh-200px)] relative">
          {cart.map((product) => (
            <div
              key={product.id}
              className="mb-3 pb-3 border-slate-100 border-b last:mb-0 last:pb-0 last:border-b-0 border-gray-2"
            >
              <div className="flex items-center gap-3">
                <div className="w-16 h-16 rounded-lg flex-shrink-0 overflow-hidden border border-slate-100">
                  <img
                    className="w-full h-full object-cover "
                    src={product.image}
                    alt={product.name}
                  />
                </div>
                <div className="w-full flex flex-col gap-1">
                  <span className="ff-raleway text-sm font-semibold text-slate-900 mb-0">
                    {product.title}
                  </span>

                  <div className="flex justify-between items-center">
                    <span className="font-bold text-sm">${product.price}</span>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => removeProduct(product.id)}
                        type="button"
                        title="Remove"
                        className="rounded-full cursor-pointer flex justify-center leading-none items-center border text-xs border-amber-500 text-amber-500 px-3 pt-1 pb-1.5 transition transition-400 hover:bg-amber-500 hover:text-white"
                      >
                        Remover
                      </button>
                      <button
                        onClick={() => decreaseQuantity(product.id)}
                        type="button"
                        title="Remove"
                        className="rounded-full cursor-pointer font-bold flex justify-center leading-none items-center pb-1 w-5 h-5 border text-md border-amber-500 text-amber-500 transition transition-400 hover:bg-amber-500 hover:text-white"
                      >
                        -
                      </button>
                      <span className="mx-1 font-bold text-lg ff-raleway">
                        {product.quantity}
                      </span>
                      <button
                        onClick={() => increaseQuantity(product.id)}
                        type="button"
                        title="Add"
                        className="rounded-full cursor-pointer font-bold flex justify-center leading-none items-center pb-1 w-5 h-5 border text-md border-amber-500 text-amber-500 transition transition-400 hover:bg-amber-500 hover:text-white"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {!isEmpty && (
          <div>
            <div className="flex justify-between items-center border-t border-slate-100 pt-3">
              <span className="ff-raleway font-bold text-lg">Total</span>
              <span className="ff-raleway font-bold text-lg">
                ${totalPayment.toFixed(2)}
              </span>
            </div>
            <button className="rounded-full cursor-pointer bg-amber-500 text-white py-1 px-2 flex items-center gap-2 justify-center w-full mt-3">
              <span className="ff-raleway font-bold text-lg">Pagar</span>
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
