import CalculadorButton from '@/components/button/CalculateButton'
import ThemeText from '@/components/theme/ThemeText'
import { Colors } from '@/constants/Colors'
import { globalStyles } from '@/styles/global-styles'
import { View, Text } from 'react-native'

const CalculadoraApp = () => {
    return (
        <View style={globalStyles.calculaterContainer} >
            <View style={{ paddingHorizontal: 20, marginBottom: 20 }}>
                <ThemeText variant="h1"> 50*500</ThemeText>
                <ThemeText variant="h2">250</ThemeText>
               
            </View>
            <View style={globalStyles.row}> 
                <CalculadorButton label='C' blackText color={Colors.lightGray} onPress={() => console.log('')}/>
                <CalculadorButton label='+/-' blackText color={Colors.lightGray} onPress={() => console.log('')}/>
                <CalculadorButton label='del' blackText color={Colors.lightGray} onPress={() => console.log('')}/>
                <CalculadorButton label='/' color={Colors.orange}  onPress={() => console.log('/')} />
            </View>
            <View style={globalStyles.row}> 
                <CalculadorButton label='7'color={Colors.darkGray} onPress={() => console.log('')}/>
                <CalculadorButton label='8'color={Colors.darkGray} onPress={() => console.log('')}/>
                <CalculadorButton label='9'color={Colors.darkGray} onPress={() => console.log('')}/>
                <CalculadorButton label='X' color={Colors.orange}  onPress={() => console.log('/')} />
            </View>
            <View style={globalStyles.row}> 
                <CalculadorButton label='4' color={Colors.darkGray} onPress={() => console.log('')}/>
                <CalculadorButton label='5' color={Colors.darkGray} onPress={() => console.log('')}/>
                <CalculadorButton label='6'color={Colors.darkGray} onPress={() => console.log('')}/>
                <CalculadorButton label='-'  color={Colors.orange}  onPress={() => console.log('/')} />
            </View>
            <View style={globalStyles.row}> 
                <CalculadorButton label='1' color={Colors.darkGray} onPress={() => console.log('')}/>
                <CalculadorButton label='2' color={Colors.darkGray} onPress={() => console.log('')}/>
                <CalculadorButton label='3' color={Colors.darkGray} onPress={() => console.log('')}/>
                <CalculadorButton label='/' color={Colors.orange}  onPress={() => console.log('/')} />
            </View>
            <View style={globalStyles.row}> 
                <CalculadorButton label='0' doubleSize color={Colors.darkGray} onPress={() => console.log('')}/>
                <CalculadorButton label='.' color={Colors.darkGray} onPress={() => console.log('')}/>
                <CalculadorButton label='=' color={Colors.orange}  onPress={() => console.log('/')} />
            </View>

            
color={Colors.darkGray}

        </View>
    )
}

export default CalculadoraApp