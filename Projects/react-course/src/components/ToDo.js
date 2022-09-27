function ToDo(props) {    //props is used as input to have a dynamic approach
    return (
        <div className='card'>
        <h2>{props.text}</h2>    {/*props.text is used because props is in the input of the function, then it will make every "text" in App.js to be dynamic */}
        <div className='actions'>
            <button className='btn'>Delete</button>
        </div>
    </div>
    );
}

export default ToDo; 