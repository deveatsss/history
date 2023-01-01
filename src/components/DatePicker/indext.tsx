import React, {useState} from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {UseFormRegister} from "react-hook-form/dist/types/form";

type Props = UseFormRegister<any>;

const DatePicker: React.FC<Props> = ({ ...rest }) => {
    const [date, setDate] = useState(new Date());
    const handleChange = (val:Date) => setDate(val);

    return (
        <ReactDatePicker selected={date} onChange={handleChange} {...rest} />
    )
}

export default DatePicker;
