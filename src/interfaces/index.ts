export interface Burger {
  id: number
  title: string
  image: string
  imageType: string
  restaurantChain: string
  servings: {
    number: number
    size: number | null
    unit: string | null
  }
  price: number
}

export interface BurgerInCart extends Burger {
  quantity: number
}

export type BurgerID = Burger['id']
