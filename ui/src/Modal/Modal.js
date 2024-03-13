import React from 'react'
import styles from './Modal.module.css'
export const Modal = (props) => {
    const { text, isShowOk, fnOK, fnClose } = props;
    return (
        <div>
            <div className={styles.modalMask}></div>
            <div className={`px-3 py-3 ${styles.modalContent}`}>
                <h5 className="mb-5">{text}</h5>
                <div className="text-end">
                    {isShowOk && (
                        <button className="btn btn-primary me-3" onClick={fnOK} >
                            OK
                        </button>
                    )}
                    <button className="btn btn-primary" onClick={fnClose} >
                        CLOSE
                    </button>
                </div>
            </div>
        </div>
    );
};

