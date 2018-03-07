import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import UrlHelper from 'utilities/urlHelper';

require('./nav.css');
class TopNav extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.urlHelper = new UrlHelper();
    }

    linkClass = (path) => {
        return this.props.path === path ? 'active' : '';
    };

    render() {
        return (
            <nav>
                <ul className="title-section">
                    <li>
                        <a href={this.urlHelper.originPath() + '/openmrs'}>
                            <i className="fa fa-home" aria-hidden="true" />
                        </a>
                    </li>
                    <li>
                        <Link to={'/'} replace={this.props.path === '/'} className={this.linkClass('/')}>
                            {this.context.intl.formatMessage({id: 'HOME_PAGE'})}
                        </Link>
                    </li>
                    <li>
                        <Link to={'/blink'} replace={this.props.path === '/blink'} className={this.linkClass('/blink')}>
                            {this.context.intl.formatMessage({id: 'BLINK_PAGE'})}
                        </Link>
                    </li>
                </ul>
            </nav>
        );
    }
}

TopNav.contextTypes = {
    router: PropTypes.object,
    intl: PropTypes.object
};

export default TopNav;
