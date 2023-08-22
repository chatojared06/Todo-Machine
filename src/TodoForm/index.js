import React from "react";
import { TodoContext } from "../TodoContext"
import "./TodoForm.css"


function TodoForm () {
    const {
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext)

    const [newValue,setNewValue] = React.useState("");

    const onSubmit = (event) => {
            event.preventDefault();
            addTodo (newValue)
            setOpenModal(false)
        };

     const onCancel  = () => {
          setOpenModal(false)
        };

     const onChange  = (event) => {
      setNewValue(event.target.value)
        };      
    

    return( 
        <form onSubmit={onSubmit}>
            <label>Escribe tu nuevo Todo</label>
            <textarea
             placeholder="cortar cebolla pra el almuerzo"
             value={newValue}
             onChange={onChange}
            />
            <div className="TodoForm-buttonContainer">
            <button
                type="button"
                className="TodoForm-button
                TodoForm-button--cancel"
                onClick={onCancel}
            >Cancelar</button>
            <button
                // type="submit"
                className="TodoForm-button
                TodoForm-button--add"
            >Añadir</button>
            </div>
        </form>
    );
}

export { TodoForm };
