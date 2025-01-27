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
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                       {categorias?.map((categoria) => (
                            categoria.produtos.map((produto) => (
                                 <Catalogo key={produto.id} id={categoria.id} nome={produto.nome} 
                                preco={produto.preco} foto={produto.foto} 
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