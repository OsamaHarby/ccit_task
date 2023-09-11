import { StyleSheet, } from 'react-native';
import colors from '../../constants/Colors';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignSelf: "stretch",
        backgroundColor: colors.foreground
    },
    title: {
        fontWeight: "bold",
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
    starSectionContainer: {
        flexDirection: "row",
    },
    starText:{
        color: colors.black,
        marginHorizontal:5
    },


}
)
export default styles