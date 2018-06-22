import React from 'react';
import { Text, View, Image, TouchableHighlight } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {uri: require('./my-icon.png'),
                  is_cool: false,
                  is_fancy: false
                 }
  }

  changeLogo() {
    if (this.state.is_cool == false && this.state.is_fancy == false) {
      this.setState({
        uri: require('./my-icon-sunglasses.png'),
        is_cool: true,
        is_fancy: false
      });
    } else if (this.state.is_cool == true && this.state.is_fancy == false) {
      this.setState({
        uri: require('./my-icon-hat.png'),
        is_cool: true,
        is_fancy: true
      });
    } else {
      this.setState({
        uri: require('./my-icon.png'),
        is_cool: false,
        is_fancy: false
      });
    }
    console.log('\nis_cool: ' + this.state.is_cool + '\nis_fancy: ' + this.state.is_fancy);
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={() => this.changeLogo()}>
          <Image
            source={this.state.uri}
            style={styles.logoStyle}
          />
        </TouchableHighlight> 
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
  },
  logoStyle: {
    width: 400,
    height: 400,
    marginLeft: 10,
    marginRight: 5,
    alignSelf: 'center',
  }
};
