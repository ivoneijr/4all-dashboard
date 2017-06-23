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

  describe('<Widgets />', () => {
    it('should render New order  widget with right props', () => {
      const newOrder = { 
        smallText: 'New orders',
        iconSize: '3x',
        icon: 'shopping-bag',
        iconClass: 'w-orders',
        spanText: '98',
      }

      expect(wrapper.find(Widget).at(0).props().smallText).to.equal(newOrder.smallText);
      expect(wrapper.find(Widget).at(0).props().iconSize).to.equal(newOrder.iconSize);
      expect(wrapper.find(Widget).at(0).props().icon).to.equal(newOrder.icon);
      expect(wrapper.find(Widget).at(0).props().iconClass).to.equal(newOrder.iconClass);
      expect(wrapper.find(Widget).at(0).props().spanText).to.equal(newOrder.spanText);
    });

    it('should render Comments  widget with right props', () => {
      const comments = { 
        iconSize: '3x',
        icon: 'comment-o',
        iconClass: 'w-comments',
        spanText: '46',
        smallText: 'Comments' 
      }

      expect(wrapper.find(Widget).at(1).props().smallText).to.equal(comments.smallText);
      expect(wrapper.find(Widget).at(1).props().iconSize).to.equal(comments.iconSize);
      expect(wrapper.find(Widget).at(1).props().icon).to.equal(comments.icon);
      expect(wrapper.find(Widget).at(1).props().iconClass).to.equal(comments.iconClass);
      expect(wrapper.find(Widget).at(1).props().spanText).to.equal(comments.spanText);
    });

    it('should render New Users widget with right props', () => {
      const newUser = { 
        iconSize: '3x',
        icon: 'user-o',
        iconClass: 'w-users',
        spanText: '0',
        smallText: 'New users' 
      }

      expect(wrapper.find(Widget).at(2).props().smallText).to.equal(newUser.smallText);
      expect(wrapper.find(Widget).at(2).props().iconSize).to.equal(newUser.iconSize);
      expect(wrapper.find(Widget).at(2).props().icon).to.equal(newUser.icon);
      expect(wrapper.find(Widget).at(2).props().iconClass).to.equal(newUser.iconClass);
      expect(wrapper.find(Widget).at(2).props().spanText).to.equal(newUser.spanText);
    });

    it('should render Page Views widget with right props', () => {
      const pageViews = { 
        iconSize: '3x',
        icon: 'drivers-license-o',
        iconClass: 'w-views',
        spanText: '0',
        smallText: 'Page views' 
      }

      expect(wrapper.find(Widget).at(3).props().smallText).to.equal(pageViews.smallText);
      expect(wrapper.find(Widget).at(3).props().iconSize).to.equal(pageViews.iconSize);
      expect(wrapper.find(Widget).at(3).props().icon).to.equal(pageViews.icon);
      expect(wrapper.find(Widget).at(3).props().iconClass).to.equal(pageViews.iconClass);
      expect(wrapper.find(Widget).at(3).props().spanText).to.equal(pageViews.spanText);
    });
  });

  

  it('', () => {
    
  });

  it('', () => {
  });

  it('', () => {
  });
});
