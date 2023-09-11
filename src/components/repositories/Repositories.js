import { FlatList, Text, View } from "react-native"
import styles from "./Styles"
import RepositoryCard from "../repositoryCard/RepositoryCard"
import Colors from "../../constants/Colors"
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import OcticonsIcon from 'react-native-vector-icons/Octicons';

export default Repositories = () => {
    const renderFooter = (data) => {
        return (
            <View style={styles.footerContainer}>
                <Text style={styles.footerText}>
                    JavaScript
                </Text>

                <View style={styles.starSectionContainer}>
                    <View style={[styles.starSectionContainer, { marginHorizontal: 20, alignItems: "center" }]}>
                        <AntDesignIcon name="staro" size={18} color={Colors.primary} />

                        <Text style={styles.starText}>
                            40,000
                        </Text>
                    </View>

                    <View style={[styles.starSectionContainer, { alignItems: "center" }]}>
                        <OcticonsIcon name="repo-forked" size={18} color={Colors.primary} />

                        <Text style={styles.starText}>
                            3000
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
            <FlatList
                data={[{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 },]}
                renderItem={item => <RepositoryCard
                    data={item}
                    renderFooter={() => renderFooter(item)}
                />}
                keyExtractor={item => item.id}
            >
            </FlatList>
        </View>
    )
}