import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import UrlHelper from 'utilities/urlHelper';
require('./block.css');
export default class UserInfo extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.urlHelper = new UrlHelper();
        this.state = {
            user: null
        };
    }

    async componentWillMount() {
        let userData = await axios.get(this.urlHelper.apiBaseUrl() + '/session');
        this.setState({
            user: userData.data.user
        });
    }

    render() {
        return (
            <fieldset className="block-fieldset">
                <legend>&nbsp; {this.context.intl.formatMessage({id: 'USER_INFORMATION'})} &nbsp;</legend>
                <p>
                    <label>{this.context.intl.formatMessage({id: 'USER_UUID'})}:</label>
                    <span id="user-uuid"> {this.state.user != null ? this.state.user.uuid : ''} </span>
                </p>
                <p>
                    <label>{this.context.intl.formatMessage({id: 'NAME'})}:</label>
                    <span> {this.state.user != null ? this.state.user.person.display : ''} </span>
                </p>
                <p>
                    <label>{this.context.intl.formatMessage({id: 'USER_NAME'})}:</label>
                    <span id="user-name"> {this.state.user != null ? this.state.user.username : ''} </span>
                </p>
            </fieldset>
        );
    }
}

UserInfo.contextTypes = {
    store: PropTypes.object,
    intl: PropTypes.object
};
