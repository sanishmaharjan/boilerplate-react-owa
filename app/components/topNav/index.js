import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import UrlHelper from 'utilities/urlHelper';

require('./nav.css');
class TopNav extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.intl = context.intl;
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
                            {this.intl.formatMessage({id: 'HOME_PAGE'})}
                        </Link>
                    </li>
                    <li>
                        <Link to={'/form'} replace={this.props.path === '/form'} className={this.linkClass('/form')}>
                            {this.intl.formatMessage({id: 'FORM_PAGE'})}
                        </Link>
                    </li>
                    <li>
                        <Link to={'/list'} replace={this.props.path === '/list'} className={this.linkClass('/list')}>
                            {this.intl.formatMessage({id: 'LIST_PAGE'})}
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
