import React from 'react';
import {shallow} from 'enzyme';
import {shallowToJson} from 'enzyme-to-json';
import {IntlProvider} from 'react-intl';

import Header from 'components/header';
import messages from 'i18n/messages';

require('utilities/__mocks__/location-mock');
const intlProvider = new IntlProvider({locale: 'en', messages: messages['en']}, {});
const {intl} = intlProvider.getChildContext();
const testData = {
    context: {
        intl: intl
    }
};

describe('Header', () => {
    it('renders correctly', () => {
        const header = shallow(<Header />, {context: testData.context});
        expect(shallowToJson(header)).toMatchSnapshot();
    });
});
