import { StyleSheet, } from 'react-native';
import colors from '../../constants/Colors';


const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        shadowColor: colors.black,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: .2,
        shadowRadius: 2,
        elevation: 2,
        borderRadius: 10,
        paddingVertical: 12,
        paddingHorizontal: 8,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    textContainer: {
        flexDirection: "row",
        alignItems: "center",
        flex: 1
    },
    separator: {
        marginHorizontal: 3
    },
    labelText: {
        color: colors.text
    },
    valueContainer: {
        flex: 1,
    },
    valueText: {
        color: colors.black,
    }
}
)
export default styles