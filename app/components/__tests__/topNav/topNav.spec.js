import React from 'react';
import {mount} from 'enzyme';
import {shallowToJson} from 'enzyme-to-json';
import {IntlProvider} from 'react-intl';

import TopNav from 'components/topNav';
import messages from 'i18n/messages';

require('utilities/__mocks__/location-mock');
const intlProvider = new IntlProvider({locale: 'en', messages: messages['en']}, {});
const {intl} = intlProvider.getChildContext();
const testData = {
    context: {
        router: {
            history: {
                action: 'PUSH',
                push: jest.fn(),
                replace: jest.fn(),
                go: jest.fn(),
                goBack: jest.fn(),
                goForward: jest.fn(),
                createHref: jest.fn(),
                block: jest.fn(),
                length: 1,
                location: {
                    hash: '/blink',
                    key: 'd0o5f3',
                    pathname: 'https://192.168.33.10/openmrs/owa/boilerplate/index.html',
                    search: ''
                }
            },
            route: {
                location: {
                    hash: '/blink',
                    key: 'd0o5f3',
                    pathname: '/openmrs/owa/boilerplate/index.html',
                    search: ''
                },
                match: {
                    isExact: true,
                    params: {},
                    path: '/blink',
                    url: '/blink'
                }
            }
        },
        intl: intl
    }
};

describe('TopNav', () => {
    it('renders correctly', () => {
        const topNav = mount(<TopNav path="/blink" />, {context: testData.context});

        expect(topNav.find('ul').find('li').length).toBe(3);
        expect(
            topNav
                .find('a.active')
                .text()
                .trim()
        ).toBe('Blink page');
        expect(shallowToJson(topNav)).toMatchSnapshot();
    });
});
