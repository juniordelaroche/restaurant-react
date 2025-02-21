import CartIcon from './icons/CartIcon'

export default function Header({ showCart, totalPayment, totalQuantity }) {
  return (
    <header className="shadow py-5 bg-white sticky top-0 z-5">
      <div className="max-w-[1200px] px-3 h-full mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold ff-raleway text-slate-800">
          My Restaurant
        </h1>
        <button
          onClick={showCart}
          type="button"
          className="rounded-full cursor-pointer bg-amber-500 text-white py-1 px-2 flex items-center"
        >
          <div className="relative">
            {totalQuantity > 0 && (
              <span className="absolute -top-2 -end-2 bg-red-500 text-white h-4 w-4 flex items-center justify-center rounded-full text-xs">
                {totalQuantity}
              </span>
            )}
            <CartIcon />
          </div>
          <span className="ms-2 font-bold">${totalPayment.toFixed(2)}</span>
        </button>
      </div>
    </header>
  )
}
