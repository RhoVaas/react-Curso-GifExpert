import React, { useState } from 'react'
import { AddCategory, GifGrid } from './components';

export const GiftExpertApp = () => {

    const [categories, setCategories] = useState([ 'Fullmetal Alchemist' ]);

    const onAddCateogry = ( newCategory ) => {

        if( categories.includes(newCategory) ) return;
        
        setCategories([newCategory, ...categories]);
        
        // setCategories( cat => [ ...cat, 'Monster'] );
    }

    //const apiKey = 'AuEIzMjGhsxLnSwm6bNlQsnk7DxVYRfa';

    return (
    <>
        {/* Título */}
        <h1>GiftExpertApp</h1>

        {/* Input */}
        <AddCategory 
            //setCategories={ setCategories } 
            onNewCategory={ onAddCateogry }
        />


        {/* Listado de Gif */}

        { 
            categories.map( category => ( 
                <GifGrid 
                    key={ category }
                    category={ category }
                /> 
            )) 
        }


    </>
  )
}
