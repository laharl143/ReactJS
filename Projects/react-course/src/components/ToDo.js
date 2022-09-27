import { useState } from 'react';

import Modal from './Modal'; //{/*this is used to import the code in Modal.js file here*/}
import BackDrop from './BackDrop'; //{/*this is used to import the code in Backdrop.js file here*/}

function ToDo(props) {    //props is used as input to have a dynamic approach
    const [ modalIsOpen, setModalIsOpen ] = useState(false);
    
    function deleteHandler() {          
        setModalIsOpen(true);
    }

    function closeModalHandler () {      //this is the function to close an overlay
        setModalIsOpen(false);
    }

    return (
        <div className='card'>
        <h2>{props.text}</h2>    {/*props.text is used because props is in the input of the function, then it will make every "text" in App.js to be dynamic */}
        <div className='actions'>
            <button className='btn' onClick={deleteHandler}>Delete</button> {/*{} curly braces on react means you can execute a javascript file in it */}
        </div>
        {modalIsOpen && <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler}/>}
        {modalIsOpen && <BackDrop onCancel={closeModalHandler} />}
    </div>
    );
}

export default ToDo; //this always used on the end of a react to export the file