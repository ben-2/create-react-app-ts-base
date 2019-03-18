import React from 'react';
import { shallow } from 'enzyme';
import ReduxProvider from './ReduxProvider';
import {Provider} from 'react-redux';

describe('<ReduxProvider />', () => {
    it('should render a material ui theme provider', () => {
        const wrapper = shallow(<ReduxProvider children={<></>} />);
        expect(wrapper.find(Provider)).toHaveLength(1);
    });
});