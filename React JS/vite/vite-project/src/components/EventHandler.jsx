function EventHandler() {
     function goodbye() {
        alert("Bye bye!");
     }
     function hello() {
        alert("Hello guys!");
     }
     return(
        <>
        <button onClick={goodbye}>Say Goodbye</button>
        <button onClick={hello}>Say Hello</button>
        </>
     )
}

export default EventHandler;