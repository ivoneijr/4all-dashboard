import React from 'react';
import { Media, Image } from 'react-bootstrap';
import PropTypes from 'prop-types';

/**
 * A component to render a custom Media
 */
export default function CustomMedia({displayPortraitLeft, imageSrc, heading, body, time }) {
  if (displayPortraitLeft) {
    return (
      <Media>
        <MediaSide displayPortraitLeft={displayPortraitLeft} imageSrc={imageSrc} />
        <MediaBody heading={heading} body={body} time={time}/>
      </Media>
    );
  }
  else {
    return (
      <Media>
        <MediaBody heading={heading} body={body} time={time}/>
        <MediaSide displayPortraitLeft={displayPortraitLeft} imageSrc={imageSrc} />
      </Media>
    );
  }
}

CustomMedia.propTypes = {
  displayPortraitLeft: PropTypes.bool,
  imageSrc: PropTypes.string,
  heading: PropTypes.string,
  body: PropTypes.string
}

function MediaSide({ displayPortraitLeft, imageSrc }) {
  if (displayPortraitLeft) {
    return (
      <Media.Left>
        <Image width={64} height={64} src={imageSrc} circle/>
      </Media.Left>
    );
  }
  return (
    <Media.Right>
      <Image width={64} height={64} src={imageSrc} circle/>
    </Media.Right>
  );
}

MediaSide.propTypes = {
  displayPortraitLeft: PropTypes.bool,
  imageSrc: PropTypes.string
}

function MediaBody({ heading, body, time }) {
  return (
    <Media.Body>
      <Media.Heading>
        <b>{heading} </b> 
        <span className='time'>{time}</span>
      </Media.Heading>
      <p>{body}</p>
    </Media.Body>
  );
}
MediaBody.propTypes = {
  heading: PropTypes.string,
  body: PropTypes.string,
  time: PropTypes.string
}