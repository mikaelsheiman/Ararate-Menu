import { useState } from 'react'
import './Footer.sass'
import useLocalStorageState from 'use-local-storage-state'
import { CartProps } from '../ScrollerCard/ScrollerCard'
import CartCard from '../CartCard/CartCard'


function Footer() {
    const [expanded, setExpanded] = useState(false)
    const [cart, setCart] = useLocalStorageState<CartProps>('cart', {})

    const getProducts = () => Object.values(cart || {})

    // const handleRemoveProduct = (productId: string): void => {
    //     setCart((prevCart) => {
    //         const updatedCart = { ...prevCart }
    //         delete updatedCart[productId]
    //         return updatedCart
    //     })
    // }

    const handleUpdateQuantity = (productId: string, operation: string) => {
        setCart((prevCart) => {
          const updatedCart = { ...prevCart }
          if (updatedCart[productId]) {
            if (operation === 'increase') {
                updatedCart[productId] = { ...updatedCart[productId], quantity: updatedCart[productId].quantity + 1 }
            } else {
                if (updatedCart[productId].quantity > 1)
                    updatedCart[productId] = { ...updatedCart[productId], quantity: updatedCart[productId].quantity - 1 }
            }
          }
          return updatedCart
        })
      }


    return(
        <div className='footer-area'>
            <div className="order-tab">
                <button onClick={()=>{
                    setExpanded(!expanded)
                    if(!expanded)
                        document.body.classList.add("overflow-hidden")
                    else
                        document.body.classList.remove("overflow-hidden")
                }}></button>
            </div>
            {expanded && <div className='cart-area'>
                {getProducts().map(product => (
                    <CartCard 
                        data={product}
                        handleUpdateQuantity={handleUpdateQuantity}
                        />
                ))}
            </div>}
        </div>
    )
}

export default Footer