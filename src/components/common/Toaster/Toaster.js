import { useContext } from 'react';
import { ToasterContext } from 'components/App';
import Toast from './Toast/Toast';
import styles from './Toaster.module.scss';

const defaultDelay = 4000;

const Toaster = ({
    delay = defaultDelay,
}) => {
    const { toasts, removeToast } = useContext(ToasterContext);

    const bakeToasts = () => {
        let step = 0;

        return toasts.map(toast => {
            step += delay;

            return (
                <li key={toast.id}>
                    <Toast
                        {...toast}
                        delay={step}
                        removeToast={() => removeToast(toast.id)}
                    />
                </li>
            )
        });
    }
    return (
        toasts.length ? <ul className={ styles.toaster }>
                            { bakeToasts() }
                        </ul>
                    : null
    );
}



export default Toaster;