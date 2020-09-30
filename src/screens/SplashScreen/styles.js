import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    imgBg: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    RectangleShape: {
        width: '40%',
        height: '30%',
        backgroundColor: 'rgb(255, 255, 255)',
        justifyContent: 'center',
        alignItems: "center",
        borderWidth: 7,
        borderColor: 'rgb(75, 201, 208) ',
    },
    txtToDoTaDa: {
        flexDirection: 'row',
    },
    txtBold: {
        fontWeight: 'bold',
        fontSize: 28.5,
        color: 'rgb(75, 201, 208) ',
    },
    txtNormal: {
        fontSize: 28.5,
        fontWeight: 'normal',
        color: 'rgb(75, 201, 208) ',
    },
    loading: {
        position: 'absolute',
        bottom: 10,
    }
});

export default styles;