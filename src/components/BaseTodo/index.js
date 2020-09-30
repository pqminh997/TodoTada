import React, { Component } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import styles from './styles';

class BaseTodo extends Component {
    render() {
        const {
            onPress,
            leftIcon,
            style,
            onLongPress,
            text,
            textStyle,
            editIcon,
            deleteIcon
        } = this.props;
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    onLongPress={onLongPress}
                    style={[styles.leftContainer, style]}
                    onPress={onPress}>
                    <View style={styles.left}>
                        <View style={styles.leftIcon}>
                            {leftIcon}
                        </View>
                        <View style={styles.nameTodo}>
                            <Text>{text}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <View style={styles.rightContainer}>
                    <View style={styles.edit}>
                        {editIcon}
                    </View>
                    <View style={styles.delete}>
                        {deleteIcon}
                    </View>
                </View>

            </View>
        )
    }
}
BaseTodo.defaultProps = {
    text: 'default'
}

export default BaseTodo;