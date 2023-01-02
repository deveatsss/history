import React from "react";
import ReactDatePicker, {ReactDatePickerProps} from "react-datepicker";
import {Controller, UseFormReturn} from "react-hook-form";
import "react-datepicker/dist/react-datepicker.css";

interface Props extends Partial<ReactDatePickerProps>,
    Partial<Pick<HTMLInputElement, 'className'>>,
    Pick<UseFormReturn, 'control'>{
    name: string;
    date?: Date;
}

const DatePicker: React.FC<Props> = ({name, date = new Date(), control,...rest}) => {
    return (
        <Controller
            name={name}
            control={control}
            defaultValue={date}
            render={({ field: {onChange, value} }) => (
                <ReactDatePicker
                    selected={value}
                    onChange={onChange}
                    dateFormat='yyyy.MM.dd'
                    {...rest} />
            )} />
    )
}

export default DatePicker;
