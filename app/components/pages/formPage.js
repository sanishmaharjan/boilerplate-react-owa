import React from 'react';
import PropTypes from 'prop-types';

import TopNav from 'components/topNav';
import ReactNotify from 'react-notify';

export default class FormPage extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {};
        this.intl = context.intl;
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

    render() {
        return (
            <div>
                <TopNav path={this.props.match.path} />
                <div style={this.style.wrapper}>Form Page</div>
            </div>
        );
    }
}

FormPage.contextTypes = {
    store: PropTypes.object,
    intl: PropTypes.object
};
