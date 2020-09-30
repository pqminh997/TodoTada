import { StyleSheet } from 'react-native'
import Colors from '../../common/colors'

const styles = StyleSheet.create({
    imgBg: {
        flex: 1,
    },
    container: {
        padding: 16,
    },
    addTodo: {
        height: 55,
        backgroundColor: Colors.BLUE,
        flexDirection: 'row',
        alignItems: "center",
        marginBottom: 2,
        justifyContent: 'space-between',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        paddingHorizontal: 10
    },
    listTodo: {
        height: 45,
        backgroundColor: Colors.WHITE,
        paddingLeft: 15,
        flexDirection: 'row',
        alignItems: "center",
        marginBottom: 1,
        justifyContent: 'space-between',

    },
    txtHeader: { color: 'white', fontWeight: 'bold', fontSize: 30, marginVertical: 20 },
    doneTodo: { height: '40%' },
    txtAddTodo: { marginLeft: 10, color: 'white', fontStyle: 'italic' },
    line: {
        height: 2,
        width: '80%',
        backgroundColor: 'white',
        marginVertical: 30,
        alignSelf: 'center',
    },
    notDoneTodo: { height: '20%' },
    textDoneTodo: {textDecorationLine: 'line-through'},
});

export default styles;