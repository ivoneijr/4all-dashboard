import React from 'react';
import { Chart } from 'react-google-charts';
import '../../../../stylesheets/pageViews.css';
import PropTypes from 'prop-types';
import { PAGE_VIEW_SHAPE } from '../shapes';
import dataForChart from './utils';
import { Panel } from 'react-bootstrap';

export default function PageViews({ pageViews }) {
  const options = {
    hAxis: { title: '2017',  titleTextStyle: { color: '#333' } },
    vAxis: { minValue: 0 }
  };

  return (
    <Panel className='chart'>
      <h2 className='chart-h'>Site traffic overview</h2>
      <div className='chart-content'>
        <Chart
          chartType="AreaChart"
          data={ dataForChart(pageViews) }
          options={ options }
          width="100%"
          height="500px"/>
      </div>
    </Panel>
  );
}

PageViews.propTypes = {
  pageViews: PropTypes.arrayOf(PropTypes.shape(PAGE_VIEW_SHAPE))
};