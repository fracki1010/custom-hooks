

export const todoReducer = (initialState, action) => {


    switch (action.type) {
        case '[TODO] Add Todo':
            return [ ...initialState, action.payload ]
            break;
        case '[TODO] Remove Todo':
            return  initialState.filter( (todo) => todo.id != action.payload );

            case '[TODO] Toggle Todo':
                return initialState.map((todo) => {
                    //Lo que hace esto es iterar cada todo
                    //si es el que buscamos le cambia el done
                    //si no es el que buscamos retorna el todo
                    //como estaba antes 

                    if(todo.id == action.payload) {//id
                        return{
                            ...todo,
                            done: !todo.done,
                        }
                    
                    }
                    return todo;
                })
        default:
            return initialState;
    }

}