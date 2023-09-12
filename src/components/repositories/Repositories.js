import { ActivityIndicator, Button, FlatList, Text, View } from "react-native"
import styles from "./Styles"
import RepositoryCard from "../repositoryCard/RepositoryCard"
import Colors from "../../constants/Colors"
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import OcticonsIcon from 'react-native-vector-icons/Octicons';
import { useEffect, useState } from "react";
import LanguagesFilterModal from "../languageFilterModal/LanguageFilterModal";
import FilterButton from "../filterButton/FilterButton";
import DatePicker from 'react-native-date-picker'
import moment from "moment";
import getRepositories from "../../api/SearchRepositories";
export default Repositories = () => {
    const [content, setContent] = useState({
        data: [],
        isLoading: true
    })
    const [date, setDate] = useState(new Date("2019-01-10"))
    const [open, setOpen] = useState(false)
    const [isModalVisible, setModalVisible] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState("")

    const openModal = () => {
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
    };

    const handleGetRepositories = async () => {
        setContent(prevState => ({ ...prevState, isLoading: true }))
        const response = await getRepositories({per_page:30,language:selectedLanguage,date})
        // console.log("response", response);

        if (response) {
            setContent({ data: response.items, isLoading: false })
        } else {
            setContent(prevState => ({ ...prevState, isLoading: false }))
        }

    }
    useEffect(() => {
        handleGetRepositories()
    }, [selectedLanguage,date])

    const renderFooter = (data) => {
        return (
            <View style={styles.footerContainer}>
                <View style={styles.languageContainer}>
                    <Text style={styles.footerText} numberOfLines={1}>
                        {data?.language}
                    </Text>
                </View>
                <View style={styles.starSectionContainer}>
                    <View style={[styles.starSectionContainer, { marginHorizontal: 20, alignItems: "center" }]}>
                        <AntDesignIcon name="staro" size={18} color={Colors.primary} />
                        <Text style={styles.starText}>
                            {data.stargazers_count}
                        </Text>
                    </View>

                    <View style={[styles.starSectionContainer, { alignItems: "center" }]}>
                        <OcticonsIcon name="repo-forked" size={18} color={Colors.primary} />
                        <Text style={styles.starText}>
                            {data.forks_count}
                        </Text>
                    </View>
                </View>

            </View>
        )
    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Repositories
            </Text>
            <View style={styles.filtersContainer}>
                <FilterButton
                    label={"Language"}
                    value={selectedLanguage|| "any"}
                    onPress={openModal}
                    style={styles.filterButton}
                />
                <FilterButton
                    label={"Date"}
                    value={moment(date).format("DD MMM YYYY")}
                    onPress={() => { setOpen(true) }}
                    style={styles.filterButton}
                />
            </View>
            {content?.isLoading ?
                <ActivityIndicator color={Colors.primary} />
                :
                <FlatList
                    data={content.data}
                    renderItem={({ item, index }) => <RepositoryCard
                        data={item}
                        renderFooter={() => renderFooter(item)}
                    />}
                    keyExtractor={item => item.id}
                >
                </FlatList>
            }
            <DatePicker
                modal
                mode="date"
                maximumDate={new Date()}
                open={open}
                date={date}
                onConfirm={(date) => {
                    setOpen(false)
                    setDate(date)
                }}
                onCancel={() => {
                    setOpen(false)
                }}
            />
            <LanguagesFilterModal
                isVisible={isModalVisible}
                onClose={closeModal}
                onSelect={setSelectedLanguage}
                languages={["C++", "Java", "JavaScript", "HTML", "PHP", "Python", "Swift", "Ruby", "TypeScript","Go"]}
            />
        </View>
    )
}