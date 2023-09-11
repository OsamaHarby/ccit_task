import { FlatList, Text, View } from "react-native"
import styles from "./Styles"
import RepositoryCard from "../repositoryCard/RepositoryCard"

export default ExplorePopular = () => {
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
        </View>
    )
}