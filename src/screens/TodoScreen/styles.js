import { StyleSheet } from 'react-native'
import Colors from '../../common/colors';
const styles = StyleSheet.create({
    imgBg: {
       flex: 1
    },
    container: {
        padding: 16,
        flex: 1
    },
    header: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 16 },
    txtListTodo: { color: 'white', fontWeight: 'bold', fontSize: 25 },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 50
    },
    todo: {
        height: 40,
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        paddingLeft: 15,
        flexDirection: 'row',
        alignItems: "center",
        marginBottom: 5,
    },
    btnAdd: {
        height: 50,
        width: 50,
        borderRadius: 25,
        alignItems: "center",
        justifyContent: 'center',
        backgroundColor: Colors.BLUE,
        position: 'absolute',
        right: 16,
        bottom: 16,

    }
});

export default styles;