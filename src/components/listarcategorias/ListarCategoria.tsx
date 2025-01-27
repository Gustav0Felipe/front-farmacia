import { useState, useEffect } from "react";
import Categoria from "../../model/Categoria";
import { listarCategorias } from "../../services/Service";
import { Catalogo } from "../catalogo/Catalogo";

function ListaCategorias() {

    const [categorias, setCategorias] = useState<Categoria[]>()

    async function buscarCategorias() {
        await listarCategorias('/categoria', setCategorias)
    }

    useEffect(() => {
        buscarCategorias()  
    }, [])
    
    return (
        <>
            <div className="flex justify-center w-full my-4">
                <div className="container flex flex-col">
                    <div>
                       {categorias?.map((categoria) => (
                            categoria.produtos.map((produto) => (
                                 <Catalogo key={produto.id} id={categoria.id} nome={produto.nome} 
                                preco={produto.preco} foto={produto.foto} categoria={categoria.nome} 
                                />
                            ))
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ListaCategorias;