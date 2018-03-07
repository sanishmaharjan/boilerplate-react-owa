import UrlHelper from 'utilities/urlHelper';

const urlHelper = new UrlHelper();
require('utilities/__mocks__/location-mock');
describe('UrlHelper', () => {
    it('Should return valid values', () => {
        expect(urlHelper.originPath()).toEqual('https://192.168.33.10');
        expect(urlHelper.fullPath()).toEqual('/openmrs/owa/boilerplate/index.html');
        expect(urlHelper.owaPath()).toEqual('/openmrs/owa/boilerplate');
    });
});
