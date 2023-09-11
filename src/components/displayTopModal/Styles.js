import { Dimensions, StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

export default  styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: Colors.white,
        paddingVertical: 10,
        borderRadius: 10,
        width: '80%',
        height:Dimensions.get("window").height/2
    },
    modalHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal:10,
        marginVertical:10
    },
    closeIcon: {
        fontSize: 24,
        marginRight: 10,
        color:Colors.grey

    },
    searchInput: {
        flex: 1,
    },
    closeButton: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalTitle: {
        fontSize: 18,
        color:Colors.black
    },
    textItem:{
        fontSize:16,
        color:Colors.black
    },
    itemContainer: {
        paddingVertical: 10,
        paddingHorizontal:20,
        borderBottomWidth: 1,
        borderColor: Colors.border,
    },
    
});
