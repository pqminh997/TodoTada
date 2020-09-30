import React from 'react';
import { View, ImageBackground, Text, StatusBar, ActivityIndicator } from 'react-native';
import styles from './styles';

export default class SplashScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <StatusBar hidden={true} />
                <ImageBackground source={require('../../assets/images/splash.png')} style={styles.imgBg}>
                    <View style={styles.RectangleShape}>
                        <View style={styles.txtToDoTaDa}>
                            <Text style={styles.txtBold}>TO -</Text>
                            <Text style={styles.txtNormal}> DO</Text>
                        </View>
                        <View style={styles.txtToDoTaDa}>
                            <Text style={styles.txtNormal} >TA </Text>
                            <Text style={styles.txtBold}>- DA</Text>
                        </View>
                    </View>
                    <View style={styles.loading}>
                        <ActivityIndicator size="large" color='#999999' />
                    </View>
                </ImageBackground>
            </View>
        );
    }
};
