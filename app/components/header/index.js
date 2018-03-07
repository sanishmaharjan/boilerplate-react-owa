import React from 'react';
import PropTypes from 'prop-types';
import UrlHelper from 'utilities/urlHelper';

require('./header.css');
class Header extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.urlHelper = new UrlHelper();
    }

    render() {
        return (
            <div className="openmrs-header">
                <span className="logo">
                    <img src="img/openmrs.png" alt="logo" />
                </span>
                <a href={this.urlHelper.originPath() + '/openmrs/logout'} className="logout">
                    <span>{this.context.intl.formatMessage({id: 'LOGOUT'})}</span>
                    <i className="fa fa-sign-out" aria-hidden="true" />
                </a>
            </div>
        );
    }
}

Header.contextTypes = {
    router: PropTypes.object,
    intl: PropTypes.object
};

export default Header;
