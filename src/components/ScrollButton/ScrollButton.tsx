
import {useState} from 'react'; 
// import {FaArrowCircleUp} from 'react-icons/fa'; 
import './ScrollButton.sass'
  
const ScrollButton = () =>{ 
  
  const [visible, setVisible] = useState(false) 
  
  const toggleVisible = () => { 
    const scrolled = document.documentElement.scrollTop; 
    if (scrolled > 300){ 
      setVisible(true) 
    }  
    else if (scrolled <= 300){ 
      setVisible(false) 
    } 
  }; 
  
  const scrollToTop = () =>{ 
    window.scrollTo({ 
      top: 0,  
      behavior: 'smooth'
      /* you can also use 'auto' behaviour 
         in place of 'smooth' */
    }); 
  }; 
  
  window.addEventListener('scroll', toggleVisible); 
  
  return ( 
    <div className='scroll-top-button' style={{display: visible ? 'flex' : 'none'}}
    onClick={scrollToTop}>
        <img src="src/assets/vector/arrow-sm-up.svg" alt="" />
    </div> 
  ); 
} 
  
export default ScrollButton; 
