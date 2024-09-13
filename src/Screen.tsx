import { useState } from 'react'
import './Screen.sass'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import menu_data from './assets/json/menu-data.json'
import bar_data from './assets/json/bar-data.json'
// import Loader from './components/Loader/Loader'
import 'bootstrap/dist/css/bootstrap.min.css';
import Scroller from './components/Scroller/Scroller';
import ScrollButton from './components/ScrollButton/ScrollButton';
// import useLocalStorageState from 'use-local-storage-state'

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

function Screen() {
    // const [isLoading, setIsLoading] = useState(false)
    const [key, setKey] = useState('menu')
    // const [dishes, setDishes] = useState<Dish[]>([])
    // const [dishes_bar, setDishesBar] = useState<Dish[]>([])
    // const [cart, setCart] = useLocalStorageState<CartProps>('cart', {})

    
    // const addToCart = (dish: Dish):void => {
    //   dish.quantity = 1

    //   setCart((prevCart) => ({
    //     ...prevCart,
    //     [dish.title]: dish,
    //   }))
    // }

    return (
      <>
        {
          // isLoading ? <Loader /> : 
          <>
            <div className='screen'>
              <Tabs
                id="header"
                activeKey={key}
                onSelect={(k: any) => {
                  setKey(k)
                  console.log(key)
                }
                }
                className={"mb-3"} 
                style={{backgroundColor: key == "menu"? "#B3A787":"#9C423C"}}
                fill
              >
                <Tab eventKey="contact" title="ararate" disabled>
                </Tab>
                <Tab eventKey="menu" title="menu">
                  <Scroller data={menu_data} color_scheme="menu-colors"></Scroller>
                </Tab>
                <Tab eventKey="bar" title="bar">
                  <Scroller data={bar_data} color_scheme="bar-colors"></Scroller>
                </Tab>
              </Tabs>
            </div>
            <ScrollButton></ScrollButton>
            {/* <Footer></Footer> */}
          </>
        }
      </>
    )
  }

// import Footer from './components/Footer/Footer';
  export default Screen