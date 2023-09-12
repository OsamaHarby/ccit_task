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
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
        borderWidth: 1,
        borderColor:Colors.grey,
        borderRadius: 10,
        paddingHorizontal: 10,
        height: 40,
        marginRight: 10,
    },
    searchIcon: {
        fontSize: 20,
        marginRight: 10,
        color:Colors.darkGrey

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
    languageItem: {
        paddingVertical: 10,
        paddingHorizontal:20,
        borderBottomWidth: 1,
        borderColor: Colors.border,
    },
    textItem:{
        fontSize:16,
        color:Colors.black
    }
});
