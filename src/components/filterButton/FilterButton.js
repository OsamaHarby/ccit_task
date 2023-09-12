import {  Text, TouchableOpacity, View } from "react-native"
import styles from "./Styles"
import Icon from 'react-native-vector-icons/MaterialIcons';
import Colors from "../../constants/Colors";

const FilterButton = ({ label, value, onPress, style }) => {

    return (
        <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
            <View style={styles.textContainer}>
                <View >
                    <Text style={styles.labelText}>
                        {label}
                    </Text>

                </View>
                <Text style={styles.separator}>
                    :
                </Text>
                <View style={styles.valueContainer}>

                    <Text style={styles.valueText} numberOfLines={1}>
                        {value}
                    </Text>
                </View>
            </View>
            <View>
                <Icon name="keyboard-arrow-down" size={20} color={Colors.black} />
            </View>

        </TouchableOpacity>
    )
}

export default FilterButton