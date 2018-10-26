/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput} from 'react-native';


import Progress from './ValueBar';
import ValueBar from './ValueBar2';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    // 初始状态
    this.state = {
      progress: 40,
      value1: 88,
      value2: 86,
      value3: 68,
    };
    this.currProgress = 10;
    this.currBuffer = 0;
  }
  componentDidMount() {
    let self = this;
    this.timer = setInterval(() => {
      if (self.currProgress >= 1) {
        clearTimeout(this.timer);
      }
      self.currProgress += 0.1;
      self.refs.progressBar.progress = self.currProgress;
    }, 1000);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Progress
          ref="progressBar"
          progress={50}
        />
        <View style={{height: 2, width: '100%', backgroundColor: 'red'}}></View>
        <View style={{height: 20}}></View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', width: 200}}>
          <TextInput
          style = {{width: 50, borderColor: 'black', borderWidth: 0.5}}
          onChangeText = { (value) => { this.setState({ value1: value }) } }
        ></TextInput>
        <TextInput
          style = {{width: 50, borderColor: 'black', borderWidth: 0.5}}
          onChangeText = { (value) => { this.setState({ value2: value }) } }
        ></TextInput>
        <TextInput
          style = {{width: 50, borderColor: 'black', borderWidth: 0.5}}
          onChangeText = { (value) => { this.setState({ value3: value }) } }
        ></TextInput>
        </View>
        <View style={{height: 20}}></View>
        <View style={{
                        backgroundColor: 'white',
                        borderColor: 'rgb(182,168,125)',
                        borderWidth: 2,
                        width: 16,
                        height: 16,
                        borderRadius: 8,
                    }}/>
        <View style={{height: 20}}></View>
        <ValueBar
          style={{marginBottom: 8}}
          width={200}
          title='细腻盈润'
          value={this.state.value1}
        />
        <ValueBar
          style={{marginBottom: 8}}
          width={200}
          title='白皙水光'
          value={this.state.value2}
        />
        <ValueBar
          style={{marginBottom: 8}}
          width={200}
          title='紧致弹力'
          value={this.state.value3}
        />
        <View style={{height: 2, width: '100%', backgroundColor: 'red'}}></View>
        {/* <View style={{height: 100}}></View> */}
        <View>
          <Text style={{
            fontSize: 78, 
            color: 'rgb(182, 168, 125)',
            fontWeight: 'bold',
            textShadowOffset: { width: 3, height: 3 },
            textShadowColor: 'grey',
            textShadowRadius: 8,
            // opacity: 0.8,
            }}>阴影89</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
