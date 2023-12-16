import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { printObject } from '@utils/helpers';

const HomeScreen = () => {
    const froutesInfo = useSelector((state) => state.froutes);
    // printObject('froutesInfo:', froutesInfo);
    return (
        <View style={styles.container}>
            <Stack.Screen options={{ title: 'Main Screen' }} />
            <View>
                <Image
                    source={require('@assets/images/DoItNow.jpg')}
                    style={{ height: 300, aspectRatio: 1 / 1 }}
                />
            </View>
            <View>
                <Text style={styles.title}>Great Start!!</Text>
            </View>
            <View>
                <Text style={styles.text}>This has...</Text>
                <Text style={styles.item}>Expo Typescript Aliases</Text>
                <Text style={styles.item}>src/app starting folder</Text>
                <Text style={styles.item}>ReduxJS.Toolkit</Text>
                <Text style={styles.item}>Google Fonts</Text>
            </View>
            {froutesInfo && (
                <View style={styles.versionContainer}>
                    <Text style={styles.versionText}>
                        {froutesInfo.version}
                    </Text>
                </View>
            )}
            <StatusBar style='auto' />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e8e8e8',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    text: {
        fontSize: 20,
        fontFamily: 'roboto',
    },
    item: {
        fontSize: 18,
        fontFamily: 'robotoThin',
    },
    versionContainer: {
        padding: 20,
    },
    versionText: {
        fontSize: 18,
        fontFamily: 'robotoItalic',
    },
});
export default HomeScreen;
