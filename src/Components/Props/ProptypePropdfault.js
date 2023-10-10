
function ProptypePropdeault({marca, cor}){
    return(
        <>
        <span> {marca} - {cor} </span>
        </>
    )
}

ProptypePropdeault.defaultProps={
marca:"Marca não definida",
cor:"Cor não definida"
}

export default ProptypePropdeault;