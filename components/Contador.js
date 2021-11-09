const Contador = () => {
    const [contador,setContador]=React.useState(0);

    const aumentar=()=>{
        setContador(contador+1)
    }

    const reducir=()=>{
        setContador(contador-1)
    }
    return (
        <div className="container">
            <h2  className={contador <0 ?"text-danger" : "text-success"}>Contador {contador}</h2>
            <hr />
            <button
                className="btn btn-outline-success me-3"
                onClick={aumentar}
            >Aumentar</button>
            <button
             className="btn btn-outline-danger"
                onClick={reducir}
            >Disminuir</button>
        </div>
    )
}

