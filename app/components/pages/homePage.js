import React from 'react';
import PropTypes from 'prop-types';

import TopNav from 'components/topNav';
import UserInfo from 'components/pages/blocks/userInfo';
import NotificationDemo from 'components/pages/blocks/notificationDemo';

export default class HomePage extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {};
        this.store = context.store;
    }

    style = {
        wrapper: {
            marginTop: 10,
            padding: 20,
            borderRadius: 5,
            backgroundColor: '#fff',
            minHeight: 500,
            padding: 20
        }
    };

    render() {
        return (
            <div>
                <TopNav path={this.props.match.path} />
                <div style={this.style.wrapper}>
                    <UserInfo />
                    <NotificationDemo defaultMsg="This is sample message"/>
                </div>
            </div>
        );
    }
}

HomePage.contextTypes = {
    store: PropTypes.object,
    intl: PropTypes.object
};
