import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import {addLocaleData} from 'react-intl';
import {HashRouter} from 'react-router-dom';
import _ from 'lodash';

import LocaleHelper from 'utilities/localeHelper';
async function render() {
    let localeHelper = new LocaleHelper();
    let defaultLocale = await localeHelper.getDefaultLocale();
    let localeData = await localeHelper.fetchLocales();
    let localeCode = localeData.localeCode;
    let allowedLocales = [];
    _.each(localeData.allowedLocales, (locale) => {
        let code = localeHelper.getLocaleCode(locale);
        let reactLocaleData = require('react-intl/locale-data/' + code);
        addLocaleData([...reactLocaleData]);
        allowedLocales.push(code);
    });

    ReactDOM.render(
        <HashRouter>
            <App localeCode={localeCode} allowedLocales={allowedLocales} defaultLocale={defaultLocale} />
        </HashRouter>,
        document.getElementById('app')
    );
}

render();
