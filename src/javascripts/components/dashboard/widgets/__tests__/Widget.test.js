import { expect } from "chai";
import { shallow } from "enzyme";
import Widgets from '../index';
import Widget from '../../../common/Widget';


import React from 'react';
import ReactDOM from 'react-dom';

describe('<Widgets />', () => {
  const props = {
    newOrders: 98,
    comments: 46,
    newUsers: 0,
    pageViews: 15441
  };

  // Render a checkbox with label in the document
  const wrapper = shallow(<Widgets widgets={props} />);

  it('should render four <Widget /> components', () => {
    expect(wrapper.find(Widget)).to.have.length(4);
  });
});


