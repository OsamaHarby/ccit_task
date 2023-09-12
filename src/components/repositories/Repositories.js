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
import { useSelector } from "react-redux";

export default Repositories = () => {
    const selectedLanguage = useSelector(state => state.languageReducer.language)
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [date, setDate] = useState(new Date("2019-01-10"))
    const [open, setOpen] = useState(false)
    const [isModalVisible, setModalVisible] = useState(false);
    const [hasMoreData, setHasMoreData] = useState(true); // Flag to indicate if there's more data to fetch

    const openModal = () => {
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
    };

    const handleGetRepositories = async (isGetFirstPage) => {
        if (
            isLoading
            || (totalPages !== null && page > totalPages)
            || !hasMoreData
        ) {
            return;
        }
        setIsLoading(true);
        try {
            const response = await getRepositories({ per_page: 10, language: selectedLanguage, date, page: isGetFirstPage ? 1 : page })
            if (response) {
                if (page === 1 || isGetFirstPage) {
                    setData(response.items);
                } else {
                    setData([...data, ...response.items]);
                }
                setTotalPages(response.total_count);
                setPage(isGetFirstPage?2: page + 1);
            } else {
                setHasMoreData(false);
            }
        } catch (error) {
            setHasMoreData(false);
        } finally {
            setIsLoading(false);
        }
    }
    const resetToGetFirstPage = () => {
        setHasMoreData(true); // Reset the flag to allow pagination retry
        setPage(1)
        setData([])
    }

    useEffect(() => {
        resetToGetFirstPage()
        handleGetRepositories(true)
    }, [selectedLanguage, date])

    const renderFooter = (item) => {
        return (
            <View style={styles.footerContainer}>
                <View style={styles.languageContainer}>
                    <Text style={styles.footerText} numberOfLines={1}>
                        {item?.language}
                    </Text>
                </View>
                <View style={styles.starSectionContainer}>
                    <View style={[styles.starSectionContainer, { marginHorizontal: 20, alignItems: "center" }]}>
                        <AntDesignIcon name="staro" size={18} color={Colors.primary} />
                        <Text style={styles.starText}>
                            {item.stargazers_count}
                        </Text>
                    </View>

                    <View style={[styles.starSectionContainer, { alignItems: "center" }]}>
                        <OcticonsIcon name="repo-forked" size={18} color={Colors.primary} />
                        <Text style={styles.starText}>
                            {item.forks_count}
                        </Text>
                    </View>
                </View>

            </View>
        )
    }
    const renderListFooter = () => {
        if (isLoading) {
            return (
                <View style={styles.loadingContainer}>
                    <ActivityIndicator color={Colors.primary} />
                </View>
            );
        } else if (!hasMoreData) {
            return (
                <View style={styles.retryBtnContainer}>
                    <Button
                        title="Retry"
                        color={Colors.primary}
                        onPress={() => {
                            resetToGetFirstPage()
                            handleGetRepositories(true); 
                        }}
                    />
                </View>

            )
        }
        return null;
    };
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Repositories
            </Text>
            <View style={styles.filtersContainer}>
                <FilterButton
                    label={"Language"}
                    value={selectedLanguage || "any"}
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
            <FlatList
                data={data}
                renderItem={({ item, index }) => <RepositoryCard
                    data={item}
                    renderFooter={() => renderFooter(item)}
                />}
                keyExtractor={(item, index) => item.id.toString() + index.toString()}
                ListFooterComponent={renderListFooter}
                onEndReached={() => {
                    if (!isLoading) {
                        handleGetRepositories()
                    }
                }}
                onEndReachedThreshold={.5}
            >
            </FlatList>

            <DatePicker
                modal
                mode="date"
                maximumDate={new Date()}
                open={open}
                date={date}
                onConfirm={(dateValue) => {
                    setOpen(false)
                    if (!moment(date).isSame(dateValue)) {
                        resetToGetFirstPage()
                        setDate(dateValue)
                    }
                }}
                onCancel={() => {
                    setOpen(false)
                }}
            />
            <LanguagesFilterModal
                isVisible={isModalVisible}
                onClose={closeModal}
                languages={["C++", "Java", "JavaScript", "HTML", "PHP", "Python", "Swift", "Ruby", "TypeScript", "Go"]}
            />
        </View>
    )
}