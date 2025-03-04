import { Burger } from '../interfaces'
import CartIcon from './icons/CartIcon'

interface ProductProps {
  product: Burger
  addProduct: (product: Burger) => void
}

export default function Product({ product, addProduct }: ProductProps) {
  return (
    <div className="bg-white rounded-xl card-product border border-slate-200 flex flex-col overflow-hidden transition duration-400 hover:shadow-lg hover:border-white">
      <div className="img-card h-50">
        <img
          src={product.image}
          className="object-cover w-full h-full"
          alt=""
        />
      </div>
      <div className="card-detail flex flex-col gap-3 justify-between leading-none text-sm grow ff-raleway font-bold text-slate-600 p-4">
        <div>{product.title}</div>
        <div className="flex justify-between items-center">
          <span className="text-slate-800 text-lg font-bold">
            ${product.price}
          </span>
          <button
            onClick={() => addProduct(product)}
            type="button"
            title="Add Cart"
            className="rounded-full font-bold flex items-center shadow gap-2 py-1.5 px-3 text-amber-500 transition duration-400 hover:cursor-pointer hover:bg-amber-500 hover:text-white"
          >
            <CartIcon width={16} height={16} />
            <span className="text-md">Add</span>
          </button>
        </div>
      </div>
    </div>
  )
}
