function EventDemo() {
    function handleClick() {
        alert("Hi i am bhanu");
    }

    return (
        <div>
            <button onClick={handleClick}>Click Here</button>
            <button onClick="alert(Helooofbeben)">Click Here</button>
            <button onClick={() => alert("Submitted")}>Click Here</button>
        </div>
    )
}

export default EventDemo;