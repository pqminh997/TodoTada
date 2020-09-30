import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        paddingHorizontal: 10,
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        marginBottom: 3,
        alignItems: "center",
        justifyContent: 'space-between',
        height: 60,
    },
    todo: { 
        flexDirection: 'row',
    },
    left: {
        flexDirection: 'row',
    },
    leftIcon: {
        marginRight: 16
    },
    leftContainer: {
        flexDirection: 'row',
        flex: 2
    },
    rightContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between', 
        flex: 1
    },
    nameTodo: {
        justifyContent: 'center'
    },
    edit: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
    },
    delete: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        height: 60,
    }
})
export default styles