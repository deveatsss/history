import React from 'react';
import DatePicker from "../DatePicker/indext";
import {useMutation} from "react-query";
import {useForm} from "react-hook-form";

interface Props {
    onClose: () => void;
}

const CreateTaskModal:React.FC<Props> = ({onClose}) => {
    const { mutate } = useMutation(
        ['task'],
        async (body: CreateTask) => await fetch('/task', {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(body),
        }),
        {
            onSuccess: () => onClose(),
        });
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = handleSubmit((data) => {
        console.log(data);
    });

    const inputArray = {
        '제목': <input {...register('title',{ required: true })} className='h-8 w-full bg-white text-black px-3 border-1' type='text' placeholder='제목' />,
        // '날짜': <DatePicker {...register('createdDt', {required: true})} />,
        '작성자':
            <select {...register('creator',{ required: true })}>
                <option>dobby</option>
                <option>leo</option>
            </select>,
        '장소': <input {...register('placeName',{ required: true })} type='text' placeholder='장소' />,
        '내용': <textarea {...register('description',{ required: true })} placeholder='내용'></textarea>,

    };

    return (
        <div className='z-50 fixed inset-0 w-full h-full bg-black/[0.6] flex items-center justify-center'>
            <div className='w-[800px] bg-white py-5 px-9 rounded-md text-black'>
                <h2 className='text-2xl font-black text-center mb-5'>Add Task</h2>
                <form onSubmit={onSubmit}>
                    <table className="w-full mb-3 text-base">
                        <colgroup>
                            <col width='20%' />
                            <col width='80%' />
                        </colgroup>
                        <tbody>
                        {Object.entries(inputArray).map(([key, value]) => {
                            return (
                                <tr key={key}>
                                    <th className='py-3 text-left'>{key}</th>
                                    <td className='py-3'>
                                        {value}
                                    </td>
                                </tr>
                            )
                        })}
                        </tbody>
                    </table>

                    <div className='flex items-center justify-end'>
                        <button type='submit' className='mr-2'>확인</button>
                        <button type="button" onClick={onClose}>닫기</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
export default CreateTaskModal;
