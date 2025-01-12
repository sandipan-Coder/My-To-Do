import { useEffect, useState } from "react";

export const TodoDate = () => {

    //! Todo Date and Time
    const [dateTime, setDateTime] = useState("");  
    
    //! Its a way to add Date and Time.

    //** setInterval(() => {
    //*     const now = new Date();
    //*     const date = now.toLocaleDateString();
    //*     const time = now.toLocaleTimeString();

    //*     setDateTime(`${date} - ${time}`);
    //* }, 1000)

    const din = {
        0 : "Sunday",
        1 : "Monday",
        2 : "Tuesday",
        3 : "Wednesday",
        4 : "Thursday",
        5 : "Friday",
        6 : "Saturday"
    }
    //! We can use this same above function using useEffect this will help us to prevent memory lechage.
    useEffect(() => {
        
        const interval = setInterval(() => {
            const now = new Date();
            const date = now.toLocaleDateString();
            const time = now.toLocaleTimeString();
            const day = now.getDay();
    
            setDateTime(`${date} - ${time} - ${din[day]}`);
        }, 1000);
 
        return () => clearInterval(interval);
    }, []);

    return (
        <h2 className="date-time">{dateTime}</h2>
    );
};