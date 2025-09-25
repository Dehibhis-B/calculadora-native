import ThemeText from '@/components/theme/ThemeText'
import { globalStyles } from '@/styles/global-styles'
import { View, Text } from 'react-native'

const CalculadoraApp = () => {
    return (
        <View style= {globalStyles.calculaterContainer} >
            <ThemeText variant="h1"> 50*500</ThemeText>
            <ThemeText variant="h2">250</ThemeText>
            <ThemeText  >
                Hola Mundo
            </ThemeText>

        </View>
    )
}

export default CalculadoraApp