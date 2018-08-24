import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions
  } from 'react-native';

class InstaClone extends Component{

    constructor(){
        super();
        this.state={
            screenWidth: 0
        }


    }
    componentDidMount(){

        this.setState({
            screenWidth: Dimensions.get('window').width
        });

    }
    render(){
        return(
            <View style={{flex:1, width:100+'%',height:100+'%'}}>
                <View style={styles.tempNav}>
                <Text>Pic</Text>
                </View>
                <View style={styles.userBar}>
                    <View>
                        <Text>Murun Enkh</Text>
                     </View>
                </View>
                <Image 
                style={{width: this.state.screenWidth, height: this.state.screenWidth/4*5}}
                source={{
                    uri: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&h=350'
                }} />
            </View>

        );
    }
}

const styles=StyleSheet.create({
    tempNav:{
        width:100+'%',
        height:50,
        backgroundColor:'rgb(250,250,250)',
        borderBottomColor: 'rgb(233,233,233)',
        borderBottomWidth: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    userBar:{

    },
    userPic:{


    }


});
export default InstaClone;