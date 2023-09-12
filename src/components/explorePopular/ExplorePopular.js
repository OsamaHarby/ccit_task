import { ActivityIndicator, FlatList, Text, View } from "react-native"
import styles from "./Styles"
import RepositoryCard from "../repositoryCard/RepositoryCard"
import FilterButton from "../filterButton/FilterButton"
import DisplayTopModal from "../displayTopModal/DisplayTopModal"
import { useEffect, useState } from "react"
import getRepositories from "../../api/SearchRepositories"
import Colors from "../../constants/Colors"
import moment from "moment"
const DISPLAY_TOP_DATA = [
    { name: "top 10", value: 10 },
    { name: "top 50", value: 50 },
    { name: "top 100", value: 100 },
]
export default ExplorePopular = () => {
    const [content, setContent] = useState({
        data: [],
        isLoading: true
    })
    const [isModalVisible, setModalVisible] = useState(false);
    const [displaytop, setDisplayTop] = useState(DISPLAY_TOP_DATA[0])

    const openModal = () => {
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
    };

    const handleGetRepositories = async () => {
        setContent(prevState => ({ ...prevState, isLoading: true }))
        const response = await getRepositories({ per_page: displaytop.value })
        // console.log("response", response);
        if (response) {
            setContent({ data: response.items, isLoading: false })
        } else {
            setContent(prevState => ({ ...prevState, isLoading: false }))
        }
    }
    useEffect(() => {
        handleGetRepositories()
    }, [displaytop])

    const renderFooter = (data) => {
        return (
            <View style={styles.footerContainer}>
                <Text style={styles.footerText}>
                    Updated {moment(data.updated_at).fromNow()}
                </Text>
                <View style={styles.languageContainer}>
                    <Text style={[styles.footerText, { marginHorizontal: 25 }]} numberOfLines={1}>
                        {data?.language}
                    </Text>
                </View>
            </View>
        )
    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Explore popular
            </Text>
            <FilterButton
                label={"View"}
                value={displaytop.name}
                onPress={openModal}
                style={styles.filterButton}
            />
            {content?.isLoading ?
                <ActivityIndicator color={Colors.primary} />
                :
                <FlatList
                    data={content.data}
                    renderItem={({ item, index }) => <RepositoryCard
                        data={item}
                        // isShowImage={true}
                        isShowHeader={true}
                        renderFooter={() => renderFooter(item)}
                    />}
                    keyExtractor={item => item.id}
                >
                </FlatList>
            }
            <DisplayTopModal
                isVisible={isModalVisible}
                onClose={closeModal}
                onSelect={setDisplayTop}
                data={DISPLAY_TOP_DATA}
            />
        </View>
    )
}