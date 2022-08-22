import { useEffect, useRef, useState } from 'react';
import styles from './Toast.module.scss';

const messages = {
    success: 'All is good!',
    error: 'Ups...Try again',
    warn: (text) => text
}

const Toast = ({ success, error, warnText, removeToast, delay }) => {
    const [ timoutId, setTimeoutId ] = useState(null);
    const isFirstRender = useRef(true);

    const message = success
        ? messages.success : error 
        ? messages.error : messages.warn(warnText);
    
    const bgStyle = success
    ? styles.success : error 
    ? styles.error : styles.warn;

    useEffect(() => {
        if(isFirstRender.current) {
            setTimeoutId(setTimeout(() => removeToast(), delay));
            isFirstRender.current = false;
        }

        return () => clearTimeout(timoutId);

    }, [delay, removeToast, timoutId])

    return (
        <div
            className={ styles.toast + ' ' + bgStyle }
            onClick={() => removeToast()}
        >
            <svg version="1.1" id="Layer_1" x="0px" y="0px" width="128px" height="128px" viewBox="0 0 128 128" enableBackground="new 0 0 128 128">
                <g>
                    <g>
                        <path d="M64,0C28.656,0,0,28.656,0,64s28.656,64,64,64s64-28.656,64-64S99.344,0,64,0z M64,120C33.125,120,8,94.875,8,64
                            S33.125,8,64,8s56,25.125,56,56S94.875,120,64,120z M83.797,41.375L55.516,69.656L44.203,58.344
                            c-3.125-3.125-8.195-3.125-11.313,0c-3.125,3.125-3.125,8.195,0,11.313l16.969,16.969c3.117,3.125,8.188,3.125,11.313,0
                            l33.938-33.938c3.125-3.125,3.125-8.195,0-11.313C91.992,38.25,86.922,38.25,83.797,41.375z"/>
                    </g>
                </g>
                </svg>
                <p>
                    { message }
                </p>
            <svg clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m12.002 2.005c5.518 0 9.998 4.48 9.998 9.997 0 5.518-4.48 9.998-9.998 9.998-5.517 0-9.997-4.48-9.997-9.998 0-5.517 4.48-9.997 9.997-9.997zm0 1.5c-4.69 0-8.497 3.807-8.497 8.497s3.807 8.498 8.497 8.498 8.498-3.808 8.498-8.498-3.808-8.497-8.498-8.497zm0 7.425 2.717-2.718c.146-.146.339-.219.531-.219.404 0 .75.325.75.75 0 .193-.073.384-.219.531l-2.717 2.717 2.727 2.728c.147.147.22.339.22.531 0 .427-.349.75-.75.75-.192 0-.384-.073-.53-.219l-2.729-2.728-2.728 2.728c-.146.146-.338.219-.53.219-.401 0-.751-.323-.751-.75 0-.192.073-.384.22-.531l2.728-2.728-2.722-2.722c-.146-.147-.219-.338-.219-.531 0-.425.346-.749.75-.749.192 0 .385.073.531.219z" fillRule="nonzero"/></svg>
        </div>
    )
}

export default Toast
