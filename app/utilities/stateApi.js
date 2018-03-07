export default class StateApi {
    constructor(app, notificator) {
        this.app = app;
        this.contextData = {};
    }

    getContextData = () => {
        return this.contextData;
    };

    getContextDataByKey = (key) => {
        return typeof this.contextData[key] !== 'undefined' ? this.contextData[key] : null;
    };

    setContextData = (contexData) => {
        Object.assign(this.contextData, contexData);
    };

    setState = (stateChange) => {
        this.app.setState({
            ...stateChange
        });
    };

    getState = () => {
        return this.app.state;
    };

    getStateByKey = (key) => {
        return typeof this.app.state[key] !== 'undefined' ? this.app.state[key] : null;
    };

    notify = (notifyType, message) => {
        const notifier = this.app.refs.notifier;
        if (notifyType == 'success') {
            notifier.success(notifier.props.successText, message, 5000);
        } else if (notifyType == 'error') {
            notifier.error(notifier.props.errorText, message, 5000);
        } else {
            notifier.error(notifier.props.infoText, message, 5000);
        }
    };
}
