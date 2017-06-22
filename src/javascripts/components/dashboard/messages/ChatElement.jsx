import React from 'react';
import CustomMedia from '../../common/CustomMedia'
import PropTypes from 'prop-types';

export default function ChatElement({ message }) {
  return(
    <div>
      <CustomMedia imageSrc={ message.portrait } 
                   heading={ message.userName }
                   body={ message.message }
                   displayPortraitLeft={ message.displayPortraitLeft } 
                   time={ message.time }/> 
    </div>
  )
}

ChatElement.propTypes = {
  message: PropTypes.object
};