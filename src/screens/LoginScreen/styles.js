import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    imgBg: {
        flex: 1,
        justifyContent: 'center'
    },
    txt: {
        color: 'rgb(75, 201, 208) ',
        fontSize: 30,
        marginBottom: 20,
        fontWeight: 'bold'
    },
    container: {
        padding: 16,
    },
    txtEmailandPass: {
        marginBottom: 5,
        height: 45,
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        color: 'rgb(74, 74, 74)',
        fontStyle: 'italic',
    },
    btnLogin: {
        height: 45,
        backgroundColor: 'rgb(75, 201, 208)',
        justifyContent: 'center',
    },
    txtLogin: {
        textAlign: "center",
        fontFamily: 'SFProDisplay-Bold',
        color: 'white',
        fontStyle: 'normal'
    }
})

export default styles;