import React from 'react';
import {shallow} from 'enzyme';
import {shallowToJson} from 'enzyme-to-json';
import {IntlProvider} from 'react-intl';

import HomePage from 'components/pages/homePage';
import messages from 'i18n/messages';

require('utilities/__mocks__/location-mock');
const intlProvider = new IntlProvider({locale: 'en', messages: messages['en']}, {});
const {intl} = intlProvider.getChildContext();
const testData = {
    props: {
        match: {
            isExact: true,
            params: {},
            path: '/blink',
            url: '/blink'
        }
    },
    context: {
        intl: intl
    }
};

describe('HomePage', () => {
    it('renders correctly', () => {
        const homePage = shallow(<HomePage match={testData.props.match} />, {context: testData.context});
        expect(shallowToJson(homePage)).toMatchSnapshot();
    });
});
