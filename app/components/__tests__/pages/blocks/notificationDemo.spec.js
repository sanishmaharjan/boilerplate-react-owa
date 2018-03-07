import React from 'react';
import {shallow, mount} from 'enzyme';
import {shallowToJson} from 'enzyme-to-json';
import {IntlProvider} from 'react-intl';

import NotificationDemo from 'components/pages/blocks/notificationDemo';
import messages from 'i18n/messages';

const intlProvider = new IntlProvider({locale: 'en', messages: messages['en']}, {});
const {intl} = intlProvider.getChildContext();
const testData = {
    context: {
        intl: intl,
        store: {
            notify: (type, message) => jest.fn(),
        }
    },
    sleep: (milisec) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                return resolve(true);
            }, milisec);
        });
    }
};

describe('NotificationDemo', () => {
    it('renders correctly', () => {
        const notificationDemo = shallow(<NotificationDemo defaultMsg="This is sample message" />, {context: testData.context});

        expect(shallowToJson(notificationDemo)).toMatchSnapshot();

        notificationDemo.setState({message: 'New message'});
        testData.sleep(100);
        expect(notificationDemo.find('input').props().value).toBe('New message');
        expect(shallowToJson(notificationDemo)).toMatchSnapshot();
    });

    it('Should trigger event handler', async () => {
        const spyOnChangeMsgField = jest.spyOn(NotificationDemo.prototype, 'onChangeMsgField');
        const spyOnSuccessMsg = jest.spyOn(NotificationDemo.prototype, 'successMsg');
        const spyOnErrorMsg = jest.spyOn(NotificationDemo.prototype, 'errorMsg');
        const spyOnInfoMsg = jest.spyOn(NotificationDemo.prototype, 'infoMsg');
        const spySetState = jest.spyOn(NotificationDemo.prototype, 'setState');
        const spyNotify = jest.spyOn(testData.context.store, 'notify');
        const notificationDemo = mount(<NotificationDemo defaultMsg="This is sample message" />, {context: testData.context});

        notificationDemo.find('#success-btn').simulate('click');
        expect(spyOnSuccessMsg).toHaveBeenCalled();
        expect(spyNotify).toHaveBeenCalledWith('success', 'This is sample message');

        notificationDemo.find('#error-btn').simulate('click');
        expect(spyOnErrorMsg).toHaveBeenCalled();
        expect(spyNotify).toHaveBeenCalledWith('error', 'This is sample message');

        notificationDemo.find('#info-btn').simulate('click');
        expect(spyOnInfoMsg).toHaveBeenCalled();
        expect(spyNotify).toHaveBeenCalledWith('info', 'This is sample message');

        notificationDemo.find('input').simulate('change');
        expect(spyOnChangeMsgField).toHaveBeenCalled();
    });
});
