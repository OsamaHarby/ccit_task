import { FlatList, Text, View } from "react-native"
import styles from "./Styles"
import RepositoryCard from "../repositoryCard/RepositoryCard"
import FilterButton from "../filterButton/FilterButton"
import DisplayTopModal from "../displayTopModal/DisplayTopModal"
import { useState } from "react"

export default ExplorePopular = () => {
    const [isModalVisible, setModalVisible] = useState(false);
    const openModal = () => {
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
    };

    const renderFooter = (data) => {
        return (
            <View style={styles.footerContainer}>
                <Text style={styles.footerText}>
                    Updated 12 hour ago
                </Text>
                <Text style={[styles.footerText, { marginHorizontal: 25 }]}>
                    C++
                </Text>

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
                value={"top 10"}
                onPress={openModal}
                style={styles.filterButton}
            />
            <FlatList
                data={[{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 },]}
                renderItem={item => <RepositoryCard
                    data={item}
                    isShowImage={true}
                    isShowHeader={true}
                    renderFooter={() => renderFooter(item)}
                />}
                keyExtractor={item => item.id}
            >
            </FlatList>
            <DisplayTopModal
                isVisible={isModalVisible}
                onClose={closeModal}
                data={["top 10", "top 50", "top 100"]}
            />
        </View>
    )
}