const FuncComponent =(props) =>{
    console.log(props)
    return(
        <>
        <h1>Bienvenidos a la funcion de {props.titulo}</h1>
        <p>{props.descripcion}</p>
        </>
        
    )
}
export default FuncComponent;