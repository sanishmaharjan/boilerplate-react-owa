import React from 'react';
import PropTypes from 'prop-types';

import TopNav from 'components/topNav';
import ReactNotify from 'react-notify';

export default class HomePage extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {};
        this.intl = context.intl;
        this.store = context.store;
        this.notifyMsg = this.notifyMsg.bind(this);
    }

    style = {
        wrapper: {
            marginTop: 10,
            paddingTop: 20,
            borderRadius: 5,
            backgroundColor: '#fff',
            minHeight: 500
        }
    };

    notifyMsg() {
        this.store.notify('success', 'this is success message');
    }

    render() {
        return (
            <div>
                <TopNav path={this.props.match.path} />
                <div style={this.style.wrapper}>
                    Home Page
                    <p onClick={this.notifyMsg}>click me</p>
                </div>
            </div>
        );
    }
}

HomePage.contextTypes = {
    store: PropTypes.object,
    intl: PropTypes.object
};
