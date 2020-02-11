import React from 'react';
import {
  ScrollView,
  Text,
  Image,
  View,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';
import {connect} from 'react-redux';
import {getImages} from '../store/actions';

const styles = StyleSheet.create({
  container: {
    margin: 10,
    justifyContent: 'space-between',
    flexDirection: 'row',
    flexWrap: 'wrap',
    flex: 1,
  },
  item: {
    width: '49%',
    marginBottom: 15,
  },
  userContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  userImage: {
    width: 32,
    height: 32,
    marginRight: 5,
  },
  thumbImage: {
    width: '100%',
    aspectRatio: 1,
  },
  description: {
    fontStyle: 'italic',
  },
});

class ImagesView extends React.Component {
  async componentDidMount() {
    this.props.getImages();
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          {this.props.images.map(image => {
            return (
              <View style={styles.item} key={image.id}>
                <TouchableHighlight
                  onPress={() =>
                    this.props.navigation.navigate('ImageDetails', {
                      fullImageUrl: image.urls.full,
                      author: image.user.name,
                    })
                  }>
                  <>
                    <View style={styles.userContainer}>
                      <Image
                        style={styles.userImage}
                        source={{uri: image.user.profile_image.small}}
                      />
                      <Text>{image.user.name}</Text>
                    </View>
                    <Image
                      style={styles.thumbImage}
                      source={{uri: image.urls.small}}
                    />
                    {image.description ? (
                      <Text style={styles.description}>
                        {image.description}
                      </Text>
                    ) : null}
                  </>
                </TouchableHighlight>
              </View>
            );
          })}
        </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = state => {
  return {
    images: state.images,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getImages: () => dispatch(getImages()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ImagesView);
