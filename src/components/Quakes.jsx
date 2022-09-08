import Item from './QuakeItem'
const Quakes = (props)=>{

    if(props.quakes){
        const allQuakes = props.quakes.map(quake=><Item key={quake.id} quake={quake}/>).slice(0,20)
        return <><h2>Quake List</h2>{allQuakes}</>
    } else {
        return <h2>...loading</h2>
    }
}

export default Quakes