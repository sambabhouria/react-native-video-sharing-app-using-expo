import { Alert, Platform, ToastAndroid } from 'react-native'

export const toast = (msg) => {
    if (Platform.OS === 'android') {
        ToastAndroid.show(msg, ToastAndroid.SHORT)
    } else {
        Alert.alert(msg)
    }
}
