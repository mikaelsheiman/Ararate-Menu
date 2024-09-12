import ScrollerAccordion from '../ScrollerAccordion/ScrollerAccordion'
import ScrollerLabel from '../ScrollerLabel/ScrollerLabel'
import './Scroller.sass'
import png from '../../assets/images/1.png'
import menu_data from '../../assets/json/menu-data.json'
import ScrollerCard from '../ScrollerCard/ScrollerCard'
import { DEFAULT_IMG_PATH } from '../../constants'


function build_scroller(data: any, color_scheme: string) {

    let res: JSX.Element[] = []

    for (let i = 0; i < data.list.length; i++) {
        const element = data.list[i]
        switch(element.type) {
            case "label":
                res.push(
                    <ScrollerLabel 
                        key={i}
                        title={element.title}
                        color_scheme={color_scheme}
                    />
                )
                break
            case "card":
                res.push(
                    <ScrollerCard
                        key={i}
                        data={element}
                        color_scheme={color_scheme}
                    />
                )
                break
            case "accordion":
                res.push(
                    <ScrollerAccordion 
                        key={i}
                        title={element.title}
                        cards={element.cards}
                        color_scheme={color_scheme}
                    />
                )
        }
    }
    return res
}


function Scroller(props: any) {

    return(
        <div className='scroller-body'>
            {build_scroller(props.data, props.color_scheme)}
        </div>
    )
    
}

export default Scroller