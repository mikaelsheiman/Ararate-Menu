import './ScrollerLabel.sass'

function ScrollerLabel(props: any) {
    return (
        <span className={"label-text scroller-label " + props.color_scheme}>{props.title}</span>
    )
}

export default ScrollerLabel