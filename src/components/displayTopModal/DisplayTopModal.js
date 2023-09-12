import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Modal,
    ScrollView,
} from 'react-native';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import styles from './Styles';


const DisplayTopModal = ({ isVisible, onClose, data ,onSelect}) => {

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
                            key={item.value}
                            onPress={() => {
                                onSelect(item)
                                onClose()

                            }}
                            style={styles.itemContainer}
                        >
                            <Text style={styles.textItem}>{item.name}</Text>
                        </TouchableOpacity>
                    ))}
                    </ScrollView>
                </View>
            </View>
        </Modal>
    );
};


export default DisplayTopModal;
