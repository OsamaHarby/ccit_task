import { useState } from "react";
import { Text, View, useWindowDimensions } from "react-native"
import { TabView, SceneMap } from 'react-native-tab-view';
import colors from "../../constants/Colors"
import styles from "./Styles";
import ExplorePopular from "../../components/explorePopular/ExplorePopular";
import Repositories from "../../components/repositories/Repositories";

export default HomeScreen = () => {
    const layout = useWindowDimensions();

    const [index, setIndex] = useState(0);

    const [routes] = useState([
        { key: 'Explore', title: 'Explore' },
        { key: 'Repositories', title: 'Repositories' },
    ]);

    const ExploreRoute = () => (
        <ExplorePopular />
    );

    const RepositoriesRoute = () => (
        <Repositories />
    );

    const renderScene = SceneMap({
        Explore: ExploreRoute,
        Repositories: RepositoriesRoute,
    });
    
    const renderTabBar = (props) => {
        return (
            <View style={styles.tabBarContainer}>
                {props.navigationState.routes.map((route, i) => {
                    return (
                        <View
                            key={route.key}
                            style={[styles.tabBar, {
                                borderBottomWidth: i === index ? 1.5 : 0,
                            }]}
                        >
                            <Text style={{ color: i === index ? colors.primary : colors.text }}>{route.title}</Text>
                        </View>
                    );
                })}
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <TabView
                navigationState={{ index, routes }}
                renderScene={renderScene}
                renderTabBar={renderTabBar}
                onIndexChange={setIndex}
                initialLayout={{ width: layout.width }}
            />

        </View>
    )
}