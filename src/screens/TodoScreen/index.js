import React from 'react';
import { View, ImageBackground, StatusBar, Text, Image, TouchableOpacity, ScrollView, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import IconAdd from 'react-native-vector-icons/dist/Ionicons';
import IconEdit from 'react-native-vector-icons/dist/AntDesign';
import IconDelete from 'react-native-vector-icons/dist/AntDesign';
import { FlatList } from 'react-native-gesture-handler';
import listTodo from '../../data/listTodo';
import Dialog from "react-native-dialog";
import styles from './styles'
import Colors from 'common/colors';
import BaseTodo from 'components/BaseTodo/index';
import {
    handleDelete,
    visibleEdit,
    editItem,
    editCancel
} from 'common/handle';

export default class TodoScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: listTodo,
            dialogVisibleAdd: false,
            dialogVisibleEdit: false,
            textTodo: '',
            textEdit: '',
            index: 0,

        }
    }

    handleOnPress = (item) => {
        this.props.navigation.navigate('DetailScreen', item);
    }

    showDialog = () => {
        this.setState({ dialogVisibleAdd: true });
    };

    handleAdd = () => {
        const id = Math.floor(Date.now() / 100);
        let tempData = this.state.data
        tempData.push({
            id,
            name: this.state.textTodo,
            todo: [],
        });
        this.setState({ data: tempData, dialogVisibleAdd: false, textTodo: '' });
    };

    handleCancel = () => {
        this.setState({ dialogVisibleAdd: false });
    };

    visibleEdit = (item, index) => {
        this.setState({ textEdit: item.name, dialogVisibleEdit: true, index })
    }

    editItem = () => {
        const newData = this.state.data;
        newData[this.state.index].name = this.state.textEdit;
        this.setState({ data: newData, dialogVisibleEdit: false })
    }

    editCancel = () => {
        this.setState({ dialogVisibleEdit: false });
    }

    renderItem = ({ item, index }) => {
        return (
            <BaseTodo
                leftIcon={<Icon name={'list-ul'} size={20} color={Colors.BLUE} />}
                text={item.name}
                onPress={() => this.handleOnPress(item)}
                // onLongPress={() => this.deleteTodo(item)}
                editIcon={
                    <IconEdit
                        name={'edit'}
                        onPress={() => this.visibleEdit(item, index)}
                        size={25}
                        color={Colors.BLACK} />}
                deleteIcon={
                    <IconDelete
                        onPress={() => this.deleteTodo(item)}
                        name={'delete'}
                        size={25}
                        color={Colors.BLACK}
                    />}

            />
        )
    }
    deleteTodo = (item) => {
        Alert.alert('Cảnh báo!', 'Xoá công việc',
            [
                {
                    style: 'cancel',
                    text: 'cancel'

                },
                {
                    text: 'OK',
                    onPress: () => {
                        const newdt = this.state.data.filter(e => e.id !== item.id)
                        this.setState({ data: newdt })
                    }
                }
            ]
        )
    }

    render() {
        const { dialogVisibleAdd, dialogVisibleEdit, textTodo, textEdit } = this.state;
        return (
            <ImageBackground source={require('assets/images/splash.png')} style={styles.imgBg}>
                <StatusBar hidden={false} />
                <View style={styles.container}>
                    <View style={styles.header}>
                        <Text style={styles.txtListTodo}>Danh sách công việc</Text>
                    </View>
                    <FlatList
                        data={this.state.data}
                        renderItem={this.renderItem}
                        keyExtractor={item => item.id.toString()}
                    />

                    <TouchableOpacity
                        onPress={this.showDialog}
                        style={styles.btnAdd}>
                        <IconAdd name="ios-add-circle-outline"
                            size={40}
                            color="rgb(255, 255, 255)" />
                    </TouchableOpacity>

                    {/* dialog add*/}
                    <Dialog.Container visible={dialogVisibleAdd}>
                        <Dialog.Title>{'Thêm công việc'}</Dialog.Title>
                        <Dialog.Input placeholder="Tên công việc"
                            onChangeText={(text) => this.setState({ textTodo: text })}
                            value={textTodo} />
                        {/* btn add */}
                        <Dialog.Button label="Add" onPress={this.handleAdd} />
                        <Dialog.Button label="Cancel" onPress={this.handleCancel} />
                    </Dialog.Container>

                    {/* dialog edit*/}
                    <Dialog.Container visible={dialogVisibleEdit}>
                        <Dialog.Title>{'Sửa công việc'}</Dialog.Title>
                        <Dialog.Input placeholder="Tên công việc"
                            onChangeText={(text) => this.setState({ textEdit: text })}
                            value={textEdit} />
                        {/* btn add */}
                        <Dialog.Button label="Edit" onPress={this.editItem} />
                        <Dialog.Button label="Cancel" onPress={this.editCancel} />
                    </Dialog.Container>
                </View>
            </ImageBackground>
        );
    }
}
