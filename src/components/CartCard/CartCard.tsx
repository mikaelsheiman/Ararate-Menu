import { useState } from "react"
import useLocalStorageState from "use-local-storage-state"
import { DEFAULT_IMG_PATH } from "../../constants"
import './CartCard.sass'
import { CartProps } from "../ScrollerCard/ScrollerCard"

function CartCard(props: any) {
    const [expanded, setExpanded] = useState(false)
    const [ordered, setOrdered] = useState(false)
    const [cart, setCart] = useLocalStorageState<CartProps>('cart', {})

    const handleRemoveProduct = (productId: string): void => {
    setCart((prevCart) => {
        const updatedCart = { ...prevCart }
        delete updatedCart[productId]
        return updatedCart
    })
    }

    return (
        <div className='cart-card' >
            {props.data.img != "" && <img src={DEFAULT_IMG_PATH + props.data.img} alt="" />}
            <div>
                <div className='card-text'>
                    <span className={'title-text ' + props.color_scheme}>{props.data.title}</span>
                    <span className='subtitle-text'>{props.data.subtitle}</span>
                    {/* <p>{props.data.description}</p>
                    {props.data.expanded_description != "" && !expanded && <p>More...</p>}
                    {
                        props.data.expanded_description != "" && expanded && 
                            <p className='exp-desc' style={{ whiteSpace: 'pre-wrap' }}>
                                {props.data.expanded_description}
                            </p>
                    } */}
                </div>
                <div className='scroller-card-footer'>
                    <span className='subtitle-text'>€ {props.data.price}</span>
                    <div className="quantifier">
                        <button className="minus-btn quantifier-btn" onClick={()=>{
                            props.handleUpdateQuantity(props.data.title, 'decrease')
                        }}>-</button>
                        <span>{props.data.quantity}</span>
                        <button className="plus-btn quantifier-btn" onClick={()=>{
                            props.handleUpdateQuantity(props.data.title, 'increase')
                        }}></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartCard