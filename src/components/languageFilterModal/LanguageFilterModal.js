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


const LanguagesFilterModal = ({ isVisible, onClose, languages }) => {
    const [searchText, setSearchText] = useState('');

    const filteredLanguages = languages.filter((language) =>
        language.toLowerCase().includes(searchText.toLowerCase())
    );

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
                        <Text style={styles.modalTitle}>Select Language</Text>
                        <TouchableOpacity onPress={onClose} style={styles.closeButton}>
                            <AntDesignIcon name="closecircle" style={styles.closeIcon} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.modalHeader}>
                        <View style={styles.searchContainer}>
                            <TextInput
                                style={styles.searchInput}
                                placeholder="Filter Languages"
                                value={searchText}
                                onChangeText={(text) => setSearchText(text)}
                            />
                            <FeatherIcon name="search" style={styles.searchIcon} />
                        </View>

                    </View>
                    <ScrollView>
                    {filteredLanguages.map((language) => (
                        <TouchableOpacity
                            key={language}
                            onPress={() => {
                                // Handle language selection here
                                onClose()

                            }}
                            style={styles.languageItem}
                        >
                            <Text style={styles.textItem}>{language}</Text>
                        </TouchableOpacity>
                    ))}
                    </ScrollView>
                </View>
            </View>
        </Modal>
    );
};


export default LanguagesFilterModal;
