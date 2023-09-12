const { default: Snackbar } = require("react-native-snackbar");
const { default: Colors } = require("../constants/Colors");

export const showError = (error) => {
    Snackbar.show({
        text: error?.message ? error.message : "something went wrong",
        duration: Snackbar.LENGTH_LONG,
        backgroundColor: Colors.error,
        action: {
            text: "close",
            textColor: Colors.white,
        },
    });
}
