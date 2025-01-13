import { useState } from "react";

export const useForm = (initialForm = {}) => {

    // {
    //     username: '',
    //     email: '',
    //     password: '',
    // }

    const [formState, setFormState] = useState(initialForm);

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            //la propiedad name tiene el nombre del campo que cambia, entonces se busca ese
            //y se le asigna el valor seria como por ej: email: value
            [name]: value
        })
    };

    const onResetForm = () =>{
        setFormState(initialForm);
    }

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,
    }
}
