import React from 'react';
import ReactDOM from "react-dom";

interface Props {
    children: React.ReactNode;
}

const ModalPortal = ({children}: Props) => {
    const el = document.getElementById('modal-root') as HTMLElement;
    return ReactDOM.createPortal(children, el);
}

export default ModalPortal;
