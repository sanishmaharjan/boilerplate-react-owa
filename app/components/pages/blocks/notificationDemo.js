import React from 'react';
import PropTypes from 'prop-types';

require('./block.css');
export default class NotificationDemo extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
          message : props.defaultMsg
        };
        this.store = context.store;
        this.successMsg = this.successMsg.bind(this);
        this.errorMsg = this.errorMsg.bind(this);
        this.infoMsg = this.infoMsg.bind(this);
        this.onChangeMsgField = this.onChangeMsgField.bind(this);
    }

    onChangeMsgField() {
        this.setState({
            message: this.messageTextField.value
        });
    }

    successMsg(){
        this.store.notify('success', this.messageTextField.value);
    }

    errorMsg(){
        this.store.notify('error', this.messageTextField.value);
    }

    infoMsg(){
        this.store.notify('info', this.messageTextField.value);
    }

    render() {
        return (
            <fieldset className="block-fieldset">
                <legend>&nbsp; {this.context.intl.formatMessage({id: 'NOTIFICATION'})} &nbsp;</legend>
                <p>
                    <label>{this.context.intl.formatMessage({id: 'MESSAGE'})}:</label>
                    <input type="text" ref={(input) => {this.messageTextField = input;}} value={this.state.message} onChange={this.onChangeMsgField}/>
                </p>
                <p>
                    <button id="success-btn" onClick={this.successMsg}>{this.context.intl.formatMessage({id: 'SUCCESS'})}</button>
                    <button id="error-btn" onClick={this.errorMsg}>{this.context.intl.formatMessage({id: 'ERROR'})}</button>
                    <button id="info-btn" onClick={this.infoMsg}>{this.context.intl.formatMessage({id: 'INFO'})}</button>
                </p>
            </fieldset>
        );
    }
}

NotificationDemo.contextTypes = {
    store: PropTypes.object,
    intl: PropTypes.object
};

NotificationDemo.propTypes = {
    defaultMsg: PropTypes.string.isRequired
};
