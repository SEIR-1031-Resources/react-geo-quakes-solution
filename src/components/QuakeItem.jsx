const QuakeItem = (props)=>{
    const {quake} = props
    const {coordinates} = quake.geometry
    const {title} = quake.properties
    return <div>
        <p>{title}</p>
    </div>
}

export default QuakeItem