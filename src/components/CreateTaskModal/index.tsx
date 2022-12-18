import React, {FormEvent, useRef, useState} from 'react';
import DatePicker from "../DatePicker/indext";

interface Props {

    onClose: () => void;
}

const CreateTaskModal:React.FC<Props> = ({onClose}) => {
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(e);
    }

    return (
        <form onSubmit={handleSubmit} className='absolute bg-amber-300'>
            <table className="">
                <tbody>
                <tr>
                    <th>제목</th>
                    <td><input type='text' placeholder='제목' /></td>
                </tr>
                <tr>
                    <th>날짜</th>
                    <td><DatePicker /></td>
                </tr>
                <tr>
                    <th>작성자</th>
                    <td>
                        <select>
                            <option>작성자</option>
                            <option>dobby</option>
                            <option>leo</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <th>장소</th>
                    <td><input type='text' placeholder='장소' /></td>
                </tr>
                <tr>
                    <th>내용</th>
                    <td><textarea placeholder='내용'></textarea></td>
                </tr>
                </tbody>
            </table>

            <button>확인</button>
            <button type="button" onClick={onClose}>닫기</button>
        </form>
    );
}
export default CreateTaskModal;
