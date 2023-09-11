import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Modal,
    StyleSheet,
    TextInput,
    ScrollView,
    Dimensions,
} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import styles from './Styles';


const DisplayTopModal = ({ isVisible, onClose, data }) => {

    return (
        <Modal
            visible={isVisible}
            transparent={true}
            animationType="slide"
            onRequestClose={onClose}
        >
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <View style={styles.modalHeader}>
                        <Text style={styles.modalTitle}>Select top repositories</Text>
                        <TouchableOpacity onPress={onClose} style={styles.closeButton}>
                            <AntDesignIcon name="closecircle" style={styles.closeIcon} />
                        </TouchableOpacity>
                    </View>
            
                    <ScrollView>
                    {data.map((item) => (
                        <TouchableOpacity
                            key={item}
                            onPress={() => {
                                onClose()

                            }}
                            style={styles.itemContainer}
                        >
                            <Text style={styles.textItem}>{item}</Text>
                        </TouchableOpacity>
                    ))}
                    </ScrollView>
                </View>
            </View>
        </Modal>
    );
};


export default DisplayTopModal;
