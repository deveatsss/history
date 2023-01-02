import React from 'react';
import DatePicker from "../DatePicker/indext";
import {QueryObserverBaseResult, useMutation} from "react-query";
import {useForm} from "react-hook-form";

interface Props extends Pick<QueryObserverBaseResult, 'refetch'>{
    onClose: () => void;
    type?: 'add' | 'edit';
    data?: CreateTask;
}

const CreateTaskModal:React.FC<Props> = ({type = 'add', onClose, refetch}) => {
    const isTypeAdd = type === 'add';
    const { mutate } = useMutation(
        ['task'],
        async (body: CreateTask) => await fetch('/task', {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(body),
        }),
        {
            onSuccess: () => {
                onClose();
                refetch();
            },
        });

    const { register, handleSubmit, control } = useForm();
    const onSubmit = handleSubmit((data) => {
        mutate(data as CreateTask);
    });

    const inputClass = 'h-8 w-full bg-white text-black px-3 border border-solid border-gray-300 rounded text-sm';
    const textAreaClass = 'h-52 py-3 resize-none';
    const inputArray = {
        '제목': <input {...register('title',{ required: true })} placeholder='제목' className={inputClass} />,
        '날짜': <DatePicker name='createdDt' control={control} className={inputClass} />,
        '작성자':
            <select {...register('creator',{ required: true })} className={inputClass}>
                <option>dobby</option>
                <option>leo</option>
            </select>,
        '장소': <input {...register('placeName',{ required: true })} placeholder='장소' className={inputClass} />,
        '내용': <textarea {...register('description',{ required: true })} placeholder='내용' className={[inputClass, textAreaClass].join(' ')}></textarea>,

    };

    return (
        <div className='z-50 fixed inset-0 w-full h-full bg-black/[0.6] flex items-center justify-center'>
            <div className='w-[800px] bg-white py-5 px-9 rounded-md text-black'>
                <h2 className='text-2xl font-black text-center mb-5'>{isTypeAdd ? 'Add' : 'Edit'} Task</h2>
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
                                    <th className='py-3 text-left text-sm'>{key}</th>
                                    <td className='py-3'>{value}</td>
                                </tr>
                            )
                        })}
                        </tbody>
                    </table>

                    <div className='flex items-center justify-end'>
                        <button type="button" onClick={onClose} className='mr-2 border-solid border border-gray-300'>닫기</button>
                        <button type='submit' className='bg-black text-white'>확인</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
export default CreateTaskModal;
