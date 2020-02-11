import React from 'react';
import {Image, Dimensions} from 'react-native';

class ImageDetails extends React.Component {
  render() {
    return (
      <Image
        style={{height: Dimensions.get('window').height}}
        source={{uri: this.props.route.params.fullImageUrl}}
      />
    );
  }
}

export default ImageDetails;
