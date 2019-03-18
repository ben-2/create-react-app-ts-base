import React from 'react';
import { Grid, Fab } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import App from './App';
import { shallow } from 'enzyme';

describe('<Providers />', () => {
  it('should render a material ui theme provider', () => {
    const props = {
      counter: 5,
      increment: jest.fn(),
      decrement: jest.fn(),
    }
      const wrapper = shallow(<App {...props} />);
      expect(wrapper.find(Grid)).toHaveLength(1);
      expect(wrapper.find(Fab)).toHaveLength(3);
      expect(wrapper.find(AddIcon)).toHaveLength(1);
      expect(wrapper.find(RemoveIcon)).toHaveLength(1);
  });
});