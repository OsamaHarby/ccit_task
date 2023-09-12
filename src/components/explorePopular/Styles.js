import { StyleSheet, } from 'react-native';
import colors from '../../constants/Colors';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignSelf: "stretch",
        backgroundColor: colors.foreground
    },
    title: {
        // fontWeight: "bold",
        fontSize:20,
        color:colors.black,
        marginHorizontal: 15,
        marginVertical: 30
    },
    footerContainer:{
        paddingVertical:20,
        paddingHorizontal:20,
        flexDirection:"row"
    },
    footerText:{
        color:colors.black,
    },
    filterButton: {
        width:"40%",
        marginHorizontal: 15,
        marginBottom: 20
    },
    languageContainer:{flex:1},
    retryBtnContainer: {
        alignSelf: "center",
        marginTop: 5,
        marginBottom: 15

    },
    retryBtn: {
        alignSelf: "center",

    },

}
)
export default styles