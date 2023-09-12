import React, { useMemo, useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Modal,
    TextInput,
    ScrollView,
} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import styles from './Styles';
import { useDispatch } from 'react-redux';
import { setLanguageFilter } from '../../actions';

const LanguagesFilterModal = ({ isVisible, onClose, languages, onSelect }) => {
    const [searchText, setSearchText] = useState('');

    const filteredLanguages = useMemo(() => languages.filter((language) =>
        language.toLowerCase().includes(searchText.toLowerCase())
    ), [searchText]);

    const dispatch = useDispatch();

    const handleSelectLanguage = async (language) => {
        await setLanguageFilter(language)(dispatch)
        onClose()
    }
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
                                onPress={()=>handleSelectLanguage(language)}
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
