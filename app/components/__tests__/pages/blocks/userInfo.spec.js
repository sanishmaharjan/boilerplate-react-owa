import React from 'react';
import {shallow, mount} from 'enzyme';
import {shallowToJson} from 'enzyme-to-json';
import {IntlProvider} from 'react-intl';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import UserInfo from 'components/pages/blocks/userInfo';
import messages from 'i18n/messages';

require('utilities/__mocks__/location-mock');
const intlProvider = new IntlProvider({locale: 'en', messages: messages['en']}, {});
const {intl} = intlProvider.getChildContext();
const testData = {
    context: {
        intl: intl
    },
    sleep: (milisec) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                return resolve(true);
            }, milisec);
        });
    }
};

describe('UserInfo',  () => {
    beforeAll(() => {
        let mock = new MockAdapter(axios);
        const data = {
            sessionId: '0680FE18902BDA7BBCB4AF824747D6FB',
            authenticated: true,
            user: {
                uuid: 'c1c21e11-3f10-11e4-adec-0800271c1b75',
                username: 'admin',
                person: {
                    display: 'Admin User',
                    uuid: 'c1bc22a5-3f10-11e4-adec-0800271c1b75'
                }
            },
            locale: 'en',
            allowedLocales: ['en', 'es', 'fr', 'it', 'pt_BR']
        };

        mock.onGet('https://192.168.33.10/openmrs/ws/rest/v1/session').reply(200, data);
    });

    it('renders correctly', async () => {
        const userInfo = shallow(<UserInfo />, {context: testData.context});

        await testData.sleep(100);
        userInfo.update();

        expect(userInfo.find('#user-uuid').text().trim()).toBe('c1c21e11-3f10-11e4-adec-0800271c1b75');
        expect(userInfo.find('#user-name').text().trim()).toBe('admin');
        expect(shallowToJson(userInfo)).toMatchSnapshot();
    });
});
