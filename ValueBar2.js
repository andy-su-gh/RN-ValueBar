import React, { Component } from 'react';
import PropTypes from "prop-types";
import {
    Text,
    View,
    StyleSheet,
    Image,
    Dimensions,
    Platform,
    Animated,
    Easing
} from 'react-native';

class ValueBar2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'Title',
            value: 50,
            barHeight: 4,
        };
        this._progressAni = new Animated.Value(0);
        this._bufferAni = new Animated.Value(0);
    }

    render() {
        return (
            <View style={[{width: this.props.width}, this.props.style]}>
                {/* <View style={{ backgroundColor: 'rgb(182,168,125)', height: 4, width: this.props.width}}></View> */}
                {/* <View style={{ borderWidth: 0.5, borderColor: 'rgb(182,168,125)', borderRadius: 2, height: 4, width: this.props.width }}></View> */}
                <View style={{ flexDirection: 'row',  alignItems: 'center' }}>
                    <View style={{ 
                        backgroundColor: 'rgb(182,168,125)', 
                        height: this.state.barHeight, 
                        borderBottomLeftRadius: this.state.barHeight/2, 
                        borderTopLeftRadius: this.state.barHeight/2, 
                        flex: (this.props.width / 100) * this.props.value 
                    }}/>
                    <View style={{ 
                        borderWidth: 0.5, 
                        borderColor: 'rgb(182,168,125)', 
                        height: this.state.barHeight, 
                        borderBottomRightRadius: this.state.barHeight/2, 
                        borderTopRightRadius: this.state.barHeight/2, 
                        flex: (this.props.width / 100) * (100 - this.props.value) 
                    }} />
                    <View style={{
                        backgroundColor: 'white',
                        borderColor: 'rgb(182,168,125)',
                        borderWidth: 1.5,
                        width: this.state.barHeight * 2,
                        height: this.state.barHeight * 2,
                        borderRadius: this.state.barHeight,
                        // paddingHorizontal: this.state.barHeight * -1,
                        position: 'absolute',
                        left: (this.props.width / 100) * this.props.value - this.state.barHeight
                    }} />
                </View>
                <View style={{flexDirection: 'row'}}>
                    <Text>{this.props.title}</Text>
                    <View style={{ flex: 1 }}></View>
                    <Text>{this.props.value}</Text>
                </View>
            </View>
        )
    }
}

export default ValueBar2;
