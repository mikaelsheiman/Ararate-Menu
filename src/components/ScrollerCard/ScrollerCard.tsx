import { useState } from 'react'
import './ScrollerCard.sass'
import { DEFAULT_IMG_PATH } from '../../constants'
import useLocalStorageState from 'use-local-storage-state'

export type Dish = {
    img: string
    title: string
    subtitle: string
    description: string
    expanded_description: string
    price: string
    quantity: number
}
  
export interface CartProps {
    [productId: string]: Dish
}
  


function ScrollerCard(props: any) {
    const [expanded, setExpanded] = useState(false)
    const [ordered, setOrdered] = useState(false)
    const [cart, setCart] = useLocalStorageState<CartProps>('cart', {})

    const addToCart = (product: Dish):void => {
        product.quantity = 1
    
        setCart((prevCart) => ({
          ...prevCart,
          [product.title]: product,
        }))
      }

    const handleRemoveProduct = (productId: string): void => {
    setCart((prevCart) => {
        const updatedCart = { ...prevCart }
        delete updatedCart[productId]
        return updatedCart
    })
    }

    return (
        <div className='card' >
            {props.data.img != "" && <img src={DEFAULT_IMG_PATH + props.data.img} alt="" />}
            <div>
                <div className='card-text' onClick={()=>{
                    setExpanded(!expanded)
                }}>
                    <span className={'title-text ' + props.color_scheme}>{props.data.title}</span>
                    <span className='subtitle-text'>{props.data.subtitle}</span>
                    <p>{props.data.description}</p>
                    {props.data.expanded_description != "" && !expanded && <p>More...</p>}
                    {
                        props.data.expanded_description != "" && expanded && 
                            <p className='exp-desc' style={{ whiteSpace: 'pre-wrap' }}>
                                {props.data.expanded_description}
                            </p>
                    }
                </div>
                <div className='scroller-card-footer'>
                    <span className='subtitle-text'>€ {props.data.price}</span>
                    <button className={'add-btn ' + (ordered? 'check':'plus')} onClick={() => {
                        setOrdered(!ordered)
                        if (!ordered) {
                            addToCart(props.data)
                        }
                        else {
                            handleRemoveProduct(props.data.title)
                        }
                    }}>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ScrollerCard