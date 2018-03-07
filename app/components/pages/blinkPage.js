import React from 'react';
import PropTypes from 'prop-types';

import TopNav from 'components/topNav';
export default class BlinkPage extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {};
    }

    style = {
        wrapper: {
            marginTop: 10,
            padding: 20,
            borderRadius: 5,
            backgroundColor: '#fff',
            minHeight: 500
        }
    };

    render() {
        return (
            <div>
                <TopNav path={this.props.match.path} />
                <div style={this.style.wrapper}>
                    <fieldset className="block-fieldset">
                        <legend>Blink Page &nbsp;</legend>
                        <p>
                            <span> Boilerplate for development of OpenMRS OWA. </span>
                        </p>
                    </fieldset>
                </div>
            </div>
        );
    }
}

BlinkPage.contextTypes = {
    store: PropTypes.object,
    intl: PropTypes.object
};
