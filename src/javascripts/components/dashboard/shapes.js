import PropTypes from 'prop-types';

export const widgetShape = {
  newOrders: PropTypes.number,
  comments: PropTypes.number,
  newUsers: PropTypes.number,
  pageViews: PropTypes.number
};

export const pageViewShape = {
  month: PropTypes.string,
  views: PropTypes.number,
};

export const messageShape = {
  userName: PropTypes.string,
  portrait: PropTypes.string,
  message: PropTypes.string,
  displayPortraitLeft: PropTypes.bool,
  time: PropTypes.string
};

export const dashboardShape = {
  widgets: PropTypes.shape(widgetShape),
  pageViews: PropTypes.arrayOf(PropTypes.shape(pageViewShape)),
  messages: PropTypes.arrayOf(PropTypes.shape(messageShape))
};
