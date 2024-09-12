import { Accordion } from 'react-bootstrap'
import './ScrollerAccordion.sass'
import ScrollerCard from '../ScrollerCard/ScrollerCard'
import png from '../../assets/images/1.png'
import {DEFAULT_IMG_PATH} from '../../constants'

function create_card(data: any, key: number, color_scheme: string) {
    return (
        <ScrollerCard 
            key={key}
            data={data}
            color_scheme={color_scheme}
        >

        </ScrollerCard>
    )
}

function create_cards(data: any, color_scheme: string) {
    let res: JSX.Element[] = []
    for (let i = 0; i < data.cards.length; i++) {
        res.push(
            create_card(data.cards[i], i, color_scheme)
        )
    }
    return res
}

function ScrollerAccordion(props: any) {
    return (
        <Accordion className='scroller-accordion' defaultActiveKey="">
            <Accordion.Item className='scroller-accordion-item text-subtitle' eventKey="0">
                <Accordion.Header className='scroller-accordion-header'>{props.title}</Accordion.Header>
                <Accordion.Body className={'scroller-accordion-body ' + props.color_scheme}>
                    {
                        create_cards(props, props.color_scheme)
                    }
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    )
}

export default ScrollerAccordion