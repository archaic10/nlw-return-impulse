import { theme } from './../../theme/index';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    options:{
        width: '100%',
        marginBottom: 48,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    title:{
        fontSize: 20,
        marginBottom:32,
        fontFamily: theme.fonts.medium,
        color: theme.colors.text_primary
    }
});