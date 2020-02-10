/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

class App extends React.Component {
  url = 'https://api.unsplash.com/photos/?client_id=cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0';
  state = {
    images: [],
    error: ''
  }

  async getImages() {
    const response = await fetch(this.url);
    const images = await response.json();
    return images;
  }

  async componentDidMount() {
    let images
    try {
       images = await this.getImages()
    } catch (e) {

      this.setState({
        error: e.message
      })
    }
    this.setState({
      images: images,
    })
  }

  render() {
    return (
      <ScrollView>
        {/* {this.state.images.map(function(image) {
          return <Text style={styles.text}>{image.alt_description}</Text>
        })} */}
          {this.state.images.map(function(image) {
            const urlThumb = {
              uri: image.urls.thumb
            }
            return <View style={{margin: 10}}>
                <Text>Author: {image.user.username}</Text>
                <Text>Desc: {image.description}</Text>
                <Image
                  style={{height: 150 }}
                  key={image.id} source={urlThumb} />
                </View>
            // return <Text>{image.urls.thumb}</Text>
        })}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    color: 'red'
  },
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
