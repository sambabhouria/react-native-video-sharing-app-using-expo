import { getLocales } from 'expo-localization'
import { I18n } from 'i18n-js'
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'

// Set the key-value pairs for the different languages you want to support.
const translations = {
    en: { welcome: 'Hello', name: 'Charlie' },
    ja: { welcome: 'こんにちは' },
}

const i18n = new I18n(translations)

// Set the locale once at the beginning of your app.
i18n.locale = getLocales()[0].languageCode ?? 'en'

// When a value is missing from a language it'll fall back to another language with the key present.
i18n.enableFallback = true
// To see the fallback mechanism uncomment the line below to force the app to use the Japanese language.
// i18n.locale = 'ja';

const Welcome = () => {
    const deviceLanguage = getLocales()[0].languageCode
    console.log('🚀 ~ Welcome ~ deviceLanguage:', deviceLanguage)
    return (
        <SafeAreaView className="bg-primary h-full">
            <ScrollView
                contentContainerStyle={{
                    height: '100%',
                }}
            >
                <View className="w-full flex justify-center items-center h-full px-4">
                    <View style={styles.container}>
                        <Text style={styles.text}>
                            {i18n.t('welcome')} {i18n.t('name')}
                        </Text>
                        <Text>Current locale: {i18n.locale}</Text>
                        <Text>Device locale: {getLocales()[0].languageCode}</Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    text: {
        fontSize: 20,
        marginBottom: 16,
    },
})

export default Welcome
