import { Component } from 'react';
import { ToastList } from './Toaster.styled';
import Toast from './Toast/Toast';

class Toaster extends Component {
    static defaultProps = {
        delay: 3000,
    }
    bakeToasts = () => {
        const { toastList, delay } = this.props;
        let step = 0;

        return toastList.map(({ id, message, type }) => {
            step += delay;

            return (
                <li key={id}>
                    <Toast
                        id={id}
                        type={type}
                        message={message}
                        delay={step}
                    />
                </li>
            )
        });
    }
    render() {
        const { toastList } = this.props;
        const length = toastList.length;

        return (
            length && <ToastList>
                        {this.bakeToasts()}
                    </ToastList>
        );
    }
}


export default Toaster;