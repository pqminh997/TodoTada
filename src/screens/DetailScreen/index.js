import React from 'react';
import {
    View,
    ImageBackground,
    Text,
    TextInput,
    TouchableOpacity,
    FlatList,
} from 'react-native';
import IconAdd from 'react-native-vector-icons/dist/Ionicons';
import IconDelete from 'react-native-vector-icons/dist/AntDesign';
import { CheckBox } from 'react-native-elements';
import styles from './styles';
import BaseTodo from 'components/BaseTodo/index';
import IconEdit from 'react-native-vector-icons/dist/AntDesign';
import Colors from 'common/colors';
import Dialog from "react-native-dialog";

export default class DetailScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fullData: [],
            data: [],
            txtTodo: '',
            dialogVisibleEdit: false,
            textEdit: '',
            index: 0,
        }
    };
    componentDidMount = () => {
        const { params } = this.props.route
        const data = params.todo
        this.setState({ data, fullData: params })
    }

    handleAdd = () => {
        const id = Math.floor(Date.now() / 100);
        let newData = this.state.data
        newData.push({ id: id, name: this.state.txtTodo, checked: false })
        this.setState({ data: newData, txtTodo: '' })
    }
    handleCheck = (index) => {
        let newData = this.state.data
        newData[index].checked = !newData[index].checked
        this.setState({ data: newData })
    }
    handleDelete = (item) => {
        const newData = this.state.data.filter(e => e.id !== item.id)
        this.setState({ data: newData })
    }

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

    renderItem = (item, index, textStyle = {}) => {
        return (
            <BaseTodo
            onPress={() => this.handleCheck(index)}
                leftIcon={
                    <CheckBox
                        checkedIcon='check-square-o'
                        uncheckedIcon='square-o'
                        checked={item.checked}
                        onPress={() => this.handleCheck(index)}
                    />}
                text={item.name}
                editIcon={<IconEdit
                    name={'edit'}
                    onPress={() => this.visibleEdit(item, index)}
                    size={25}
                    color={Colors.BLACK} />}
                deleteIcon={<IconDelete
                    onPress={() => this.handleDelete(item)}
                    name="delete" size={20} />}
                textStyle={textStyle}
            />
        )
    }
    renderNotDone = ({ item, index }) => {
        if (item.checked == false) {
            return (
                this.renderItem(item, index)
            )
        }
    }
    renderDone = ({ item, index }) => {
        if (item.checked == true) {
            return (
                this.renderItem(item, index, styles.textDoneTodo)
            )
        }
    }

    render() {
        const { txtTodo, data, fullData, dialogVisibleEdit, textEdit } = this.state;
        return (
            <ImageBackground source={require('assets/images/splash.png')} style={styles.imgBg}>
                <View style={styles.container}>
                    <Text style={styles.txtHeader}>{fullData.name}</Text>
                    <View style={styles.doneTodo}>
                        {/* add todo */}
                        <TouchableOpacity style={styles.addTodo} >
                            <TextInput style={styles.txtAddTodo}
                                placeholder="Thêm công việc" value={txtTodo}
                                onChangeText={(text) => this.setState({ txtTodo: text })} />
                            <TouchableOpacity onPress={this.handleAdd}>
                                <IconAdd name="ios-add-circle-outline" size={35} color="rgb(255, 255, 255)" />
                            </TouchableOpacity>
                        </TouchableOpacity>
                        {/* list not done yet */}
                        <FlatList
                            data={data}
                            renderItem={this.renderNotDone}
                            keyExtractor={item => item.id.toString()}
                        />
                    </View>
                    <View style={styles.line}>
                    </View>
                    <View style={styles.notDoneTodo}>
                        {/* list done */}
                        <FlatList
                            data={data}
                            renderItem={this.renderDone}
                            keyExtractor={item => item.id.toString()}
                        />
                    </View>
                </View>
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
            </ImageBackground>
        );
    }
}
