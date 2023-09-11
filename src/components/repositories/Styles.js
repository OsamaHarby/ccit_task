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
    }
   
}
)
export default styles