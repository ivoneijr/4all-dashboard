import PropTypes from 'prop-types';

export const dashboardShape = {
  widgets: PropTypes.shape({
    newOrders: PropTypes.number,
    comments: PropTypes.number,
    newUsers: PropTypes.number,
    pageViews: PropTypes.number
  }),
  pageViews: PropTypes.arrayOf(PropTypes.shape({
    month: PropTypes.string,
    views: PropTypes.number,
  })),
  messages: PropTypes.arrayOf(PropTypes.shape({
    userName: PropTypes.string,
    portrait: PropTypes.string,
    message: PropTypes.string,
    displayPortraitLeft: PropTypes.bool,
    time: PropTypes.string
  }))
};