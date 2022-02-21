import { StyleSheet } from 'react-native'
import { theme } from '../../Global/styles/theme'
import { getBottomSpace } from 'react-native-iphone-x-helper'
export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    banner: {
        width: "100%",
        height: 234,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 30

    },
    bannerContent:{
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 24,
        marginBottom: 22
    },
    title: {
        fontSize: 28,
        fontFamily: theme.fonts.title700,
        color: theme.colors.heading
    },
    subtitle: {
        fontSize: 13,
        fontFamily: theme.fonts.text400,
        color: theme.colors.heading
    },
    members: {
        marginLeft: 24,
        marginTop: -27
    },
    footer: {
        paddingHorizontal: 24,
        paddingVertical: 20,
        marginBottom: getBottomSpace(),
    }
})