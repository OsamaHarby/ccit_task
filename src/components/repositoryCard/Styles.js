import { StyleSheet, } from 'react-native';
import colors from '../../constants/Colors';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignSelf: "stretch",
        backgroundColor: colors.white,
        shadowColor: colors.black,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: .2,
        shadowRadius: 2,
        elevation: 2,
        marginHorizontal: 15,
        marginBottom: 20,
        borderRadius: 10

    },
    imageContainer:{
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
        backgroundColor:"#eee",
        height:180,
        alignSelf:"stretch"
    },
    headerContainer: {
        paddingTop: 20,
        paddingHorizontal: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems:"center"
    },
    starSectionContainer: {
        flexDirection: "row",
    },
    starText:{
        color: colors.black,
        marginHorizontal:5
    },
    headerTrendingText: {
        color: colors.text,
    },
    numbersContainer: {
        backgroundColor: colors.primaryLight,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal:8,
        paddingVertical:2,

    },
    numbersText:{
        color: colors.primary,
    },
    repoInfoContainer: {
        paddingVertical: 20,
        borderBottomWidth: 1,
        borderBottomColor: colors.border,
        marginHorizontal: 20
    },
    titleContainer: {
        flexDirection: "row",
        marginBottom: 10

    },
    title: {
        // fontWeight: "bold",
        color: colors.primary,
        marginHorizontal: 10,
        fontSize: 18
    },
    descStyle: {
        color: colors.black
    }

}
)
export default styles