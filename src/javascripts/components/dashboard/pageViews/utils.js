import _ from 'lodash';

export default function dataForChart(pageViews) {
  let data = [['Mounth', 'Views']];
  
  if (pageViews.length > 2) {
    _.each(pageViews, function(i){
      data.push([i.month, i.views]);
    });
    
    return data;
  }
  else {
    data.push(['', 0]);
    return data;
  }
};