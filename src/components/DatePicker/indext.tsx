import React, {useState} from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DatePicker = () => {
    const [date, setDate] = useState(new Date());
    const handleChange = (val:Date) => setDate(val);

    return (
        <ReactDatePicker selected={date} onChange={handleChange} />
    )
}

export default DatePicker;
