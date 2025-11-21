import { useState } from 'react';

function Form() {
    const [submitted, setSubmitted] = useState(false);
    function submitForm(event){
        event.preventDefault();
        setSubmitted(true);
    }
    return (
    <div>
        <form onSubmit={submitForm}>
            <input type="text" placeholder="Enter your name" />
            <button type="submit">Submit</button>
        </form>
        {submitted && <p>Form submitted successfully!</p>}
    </div>
    );
}

export default Form;