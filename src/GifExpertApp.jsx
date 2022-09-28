import { useState } from 'react';
import { GifGrid, AddCategory } from './components';


export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['Disney']);

    const onAddCategory = (value) => {

        if (categories.includes(value)) return;

        setCategories([value, ...categories]);
    }

    return (
        <>
            <h1>GifExpertApp</h1>
            <AddCategory onNewCategory={onAddCategory} />

            {
                categories.map((cat) => (<GifGrid category={cat} key={cat} />))
            }
        </>
    )
}
