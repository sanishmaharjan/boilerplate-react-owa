import React from 'react';
import {Switch, Route} from 'react-router-dom';
import PropTypes from 'prop-types';
import {IntlProvider} from 'react-intl';
import ReactNotify from 'react-notify';

import HomePage from 'components/pages/homePage';
import BlinkPage from 'components/pages/blinkPage';
import Header from 'components/header';
import LocaleList from 'components/locale/localeList';
import StateApi from 'utilities/stateApi';
import messages from 'i18n/messages';

class App extends React.Component {
    static childContextTypes = {
        store: PropTypes.object
    };

    getChildContext() {
        return {
            store: new StateApi(this)
        };
    }

    constructor(props, context) {
        super(props, context);
        this.state = {
            localeCode: props.localeCode,
            allowedLocales: props.allowedLocales,
            messages:
                typeof messages[props.localeCode] !== 'undefined'
                    ? messages[props.localeCode]
                    : messages[props.defaultLocale]
        };
    }

    render() {
        return (
            <IntlProvider locale={this.state.localeCode} messages={this.state.messages}>
                <div>
                    <Header />
                    <Switch>
                        <Route exact path={'/'} component={HomePage} />
                        <Route exact path={'/blink'} component={BlinkPage} />
                    </Switch>
                    <LocaleList allowedLocales={this.state.allowedLocales} localeCode={this.state.localeCode} />
                    <ReactNotify
                        ref="notifier"
                        successText={this.state.messages.SUCCESS}
                        errorText={this.state.messages.ERROR}
                        infoText={this.state.messages.INFO}
                    />
                </div>
            </IntlProvider>
        );
    }
}

App.propTypes = {
    localeCode: PropTypes.string.isRequired,
    defaultLocale: PropTypes.string.isRequired,
    allowedLocales: PropTypes.array.isRequired
};

export default App;
