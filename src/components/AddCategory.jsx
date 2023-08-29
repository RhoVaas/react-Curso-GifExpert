import { useState } from 'react';

export const AddCategory = ( { onNewCategory } ) => {
//export const AddCategory = ( {setCategories} ) => {
  
  const [inputValue, setInputValue] = useState('');
  
  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  }

  const onSubmit = (event) => {
    event.preventDefault();
    if(inputValue.trim().length <= 1) return;

    //setCategories(c => [...c, inputValue]);
    onNewCategory( inputValue.trim() );
    setInputValue('');
  }
  
    return (
        //<form onSubmit={ e => { e.preventDefault(); setCategories(c => [...c, inputValue]); }}></form>
        <form onSubmit={ (event) => onSubmit(event) }> 
        {/* <form onSubmit={ onSubmit }> */}
            <input 
                type="text" 
                placeholder="Buscar Gifs"
                value={ inputValue }
                onChange={ onInputChange }
            />
        </form>
  )
}
