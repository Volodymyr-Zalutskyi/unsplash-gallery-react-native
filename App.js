import React from 'react';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import ImageDetails from './components/ImageDetails';
import ImagesView from './components/ImagesView';
import {store} from './store';

const Stack = createStackNavigator();

class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Images">
          <Stack.Screen
            name="Images"
            component={ImagesView}
          />
          <Stack.Screen
            name="ImageDetails"
            component={ImageDetails}
            options={({route}) => ({title: route.params.author})}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default () => (
  <Provider store={store}>
    <App />
  </Provider>
);
