import { StyleSheet } from 'react-native'
import { theme } from '../../Global/styles/theme'
import { getBottomSpace } from 'react-native-iphone-x-helper'
export const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    label:{
        fontSize: 18,
        fontFamily: theme.fonts.title700,
        color: theme.colors.heading,
    },
    form: {
        paddingHorizontal: 24,
        marginTop: 32
    },
    select: {
        width: '100%',
        height: 65,
        flexDirection: "row",
        borderColor: theme.colors.secondary50,
        borderWidth: 1,
        borderRadius: 8,
        alignItems: 'center',
        paddingRight:25,
        overflow: 'hidden'
        
    },
    selectBody:{
        flex: 1,
        alignItems: 'center'
    },
    image:{
        width: 68,
        height: 65,
        backgroundColor: theme.colors.secondary50,
        borderWidth: 1,
        borderRadius: 8
    },
    field: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 9
    },
    column: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    divider: {
        marginRight: 4,
        fontSize: 15,
        fontFamily: theme.fonts.text500,
        color: theme.colors.highlight
    },
    caracteresLimit:{
        fontFamily: theme.fonts.text400,
        fontSize: 13,
        color: theme.colors.highlight,
        marginBottom: 5
        
    },
    footer:{
        marginVertical: 20,
        marginBottom: 56
    }
})