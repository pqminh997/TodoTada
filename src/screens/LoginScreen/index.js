import React from 'react';
import { View, ImageBackground, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from './styles';

export default class LoginScreen extends React.Component {

    handleOnPress = () => {
        this.props.navigation.navigate('TodoScreen');
    }

    render() {
        return (
            <ImageBackground source={require('assets/images/splash.png')} style={styles.imgBg}>
                <View style={styles.container}>
                    <Text style={styles.txt}>Đăng nhập</Text>
                    <TextInput style={styles.txtEmailandPass} placeholder={'Email'} autoCompleteType="email" />
                    <TextInput style={styles.txtEmailandPass} placeholder={'Password'} secureTextEntry={true} />
                    <TouchableOpacity style={styles.btnLogin} onPress={this.handleOnPress}>
                        <Text style={styles.txtLogin}>Đăng nhập</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        )
    };
}
