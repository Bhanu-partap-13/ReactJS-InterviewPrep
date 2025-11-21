function Reminder() {
    const reminder = 23;
    const message = reminder == 21 ? "Today is my birthday" : "My birthday will come soon";
    return (
        <div>
            <h2>{message}</h2>  
        </div>
    )
}

export default Reminder;