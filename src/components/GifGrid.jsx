import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";


export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs( {category} );

    return (
        <>
            <h3>{ category }</h3>
            {
                isLoading && (<h2>Cargando...</h2>)
            }
            
            
            <div className="card-grid">
                {
                    //Opcion 1
                    // images.map( img => (
                    //     <li key={img.id} >{ img.title }</li>
                    // ))
                    //Opcion 2, desestructuración
                    images.map( ( img ) => (
                        <GifItem 
                            key={ img.id }
                            { ...img}//Esto es lo mismo y más completo que
                            //title={img.title}
                            //url={img.url}
                        />
                    ))
                }
            </div>
        </>

  )
}
