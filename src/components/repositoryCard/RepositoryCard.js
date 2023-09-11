import { Dimensions, Text, View } from "react-native"
import styles from "./Styles"
import Icon from 'react-native-vector-icons/AntDesign';
import Colors from "../../constants/Colors";
import FastImage from 'react-native-fast-image'

const RepositoryCard = ({ data, isShowImage,isShowHeader, renderFooter }) => {
    const renderHeader = (data) => {
        return (
            <View style={styles.headerContainer}>
                <Text style={styles.headerTrendingText}>
                    Trending repository
                </Text>
                <View style={styles.starSectionContainer}>
                    <View style={[styles.starSectionContainer, { marginHorizontal: 10, alignItems: "center" }]}>
                        <Icon name="staro" size={18} color={Colors.primary} />

                        <Text style={styles.starText}>
                            Star
                        </Text>
                    </View>

                    <View style={styles.numbersContainer}>
                        <Text style={styles.numbersText}>
                            40.5K
                        </Text>
                    </View>

                </View>


            </View>
        )
    }
    const renderImage = () => {
        return (
            <View style={styles.imageContainer}>
                <FastImage
                    style={{ alignSelf:"stretch",flex:1}}
                    source={require("../../assets/images/placeholderimg.png")}
                    resizeMode={FastImage.resizeMode.contain}
                />
            </View>
        )
    }
    return (
        <View style={styles.container}>
            {isShowImage && renderImage()}
            {isShowHeader && renderHeader()}
            <View style={styles.repoInfoContainer}>
                <View style={styles.titleContainer}>
                    <Icon name="book" size={26} color={Colors.primary} />
                    <Text style={styles.title}>
                        Repository name/test
                    </Text>
                </View>
                <Text style={styles.descStyle}>
                    test desc test desc test desc test desc test desc test desc test desc test desc test desc
                </Text>
            </View>
            {renderFooter()}
        </View>
    )
}

RepositoryCard.defaultProps = {
    isShowHeader: false,
    isShowImage: false,
    renderFooter: () => { },
};
export default RepositoryCard