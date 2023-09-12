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
        fontSize: 20,
        color: colors.black,
        marginHorizontal: 15,
        marginVertical: 30,

    },
    footerContainer: {
        paddingVertical: 20,
        paddingHorizontal: 20,
        flexDirection: "row"
    },
    footerText: {
        color: colors.black,
    },
    starSectionContainer: {
        flexDirection: "row",
    },
    starText: {
        color: colors.black,
        marginHorizontal: 5
    },
    filtersContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 10,
        marginBottom: 20

    },
    filterButton: {
        flex: 1,
        marginHorizontal: 5
    },
    languageContainer: { flex: 1 }


}
)
export default styles