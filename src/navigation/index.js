import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../screens/SplashScreen';
// import LoginScreen from '../screens/LoginScreen';
import TodoScreen from '../screens/TodoScreen';
import DetailScreen from '../screens/DetailScreen';
import Colors from '../common/colors';

const Stack = createStackNavigator();

class RootStack extends Component {

    state ={
        loading: true,
    }

    componentDidMount(){
        setTimeout(() => {
            this.setState({loading: false});
        }, 1500);
    }

    render() {
        const { loading} = this.state;
        return (
            <Stack.Navigator>
                {loading && <Stack.Screen
                    name="SplashScreen"
                    component={SplashScreen}
                    options={{
                        headerShown: false
                    }}
                />}
                
                {/* <Stack.Screen
                    name="LoginScreen"
                    component={LoginScreen}
                    options={{
                        headerShown: false
                    }}
                /> */}
                <Stack.Screen
                    name="TodoScreen"
                    component={TodoScreen}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name="DetailScreen"
                    component={DetailScreen}
                    options={{
                        title: 'Chi tiết công việc',
                        headerTintColor: 'white',
                        headerStyle: {
                            backgroundColor: Colors.BLUE
                        }
                    }}
                />
            </Stack.Navigator>
        )
    }
}

export default RootStack;