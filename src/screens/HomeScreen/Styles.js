import { StyleSheet, } from 'react-native';
import colors from '../../constants/Colors';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignSelf: "stretch",
        backgroundColor: colors.white
    },
    tabBarContainer:{
        flexDirection: 'row',
    },
    tabBar: {
        alignItems: 'center',
        borderBottomColor:colors.primary,
        padding: 12,
        marginHorizontal:15
    },
   
}
)
export default styles