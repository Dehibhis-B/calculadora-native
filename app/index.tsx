import CalculadorButton from '@/components/button/CalculateButton'
import ThemeText from '@/components/theme/ThemeText'
import { Colors } from '@/constants/Colors'
import { useCalculator } from '@/hooks/calculadora/useCalculator'
import { globalStyles } from '@/styles/global-styles'
import { View } from 'react-native'

const CalculadoraApp = () => {

    const { formula,prevNumber, buildNumber, clean,toggleSign,deleteLast, divideOperation, multiplyOperation, subtractOperation, addOperation,calculateResult} = useCalculator();

    return (
        <View style={globalStyles.calculaterContainer} >
            <View style={{ paddingHorizontal: 20, marginBottom: 20 }}>
                <ThemeText variant="h1"> { formula }</ThemeText>

                {
                    formula === prevNumber ? (
                        <ThemeText variant='h2'> </ThemeText>
                    ): (
                        <ThemeText variant='h2'> { prevNumber } </ThemeText>
                    )
                }
                
               
            </View>
            <View style={globalStyles.row}> 
                <CalculadorButton label='C' blackText color={Colors.lightGray} onPress={clean}/>
                <CalculadorButton label='+/-' blackText color={Colors.lightGray} onPress={toggleSign}/>
                <CalculadorButton label='del' blackText color={Colors.lightGray} onPress={deleteLast}/>
                <CalculadorButton label='/' color={Colors.orange}  onPress={divideOperation} />
            </View>
            <View style={globalStyles.row}> 
                <CalculadorButton label='7'color={Colors.darkGray} onPress={() => buildNumber('7')}/>
                <CalculadorButton label='8'color={Colors.darkGray} onPress={() => buildNumber('8')}/>
                <CalculadorButton label='9'color={Colors.darkGray} onPress={() => buildNumber('9')}/>
                <CalculadorButton label='x' color={Colors.orange}  onPress={multiplyOperation} />
            </View>
            <View style={globalStyles.row}> 
                <CalculadorButton label='4' color={Colors.darkGray} onPress={() =>buildNumber ('4')}/>
                <CalculadorButton label='5' color={Colors.darkGray} onPress={() => buildNumber('5')}/>
                <CalculadorButton label='6'color={Colors.darkGray} onPress={() => buildNumber('6')}/>
                <CalculadorButton label='-'  color={Colors.orange}  onPress={subtractOperation} />
            </View>
            <View style={globalStyles.row}> 
                <CalculadorButton label='1' color={Colors.darkGray} onPress={() => buildNumber('1')}/>
                <CalculadorButton label='2' color={Colors.darkGray} onPress={() => buildNumber('2')}/>
                <CalculadorButton label='3' color={Colors.darkGray} onPress={() => buildNumber('3')}/>
                <CalculadorButton label='+' color={Colors.orange}  onPress={addOperation} />
            </View>
            <View style={globalStyles.row}> 
                <CalculadorButton label='0' doubleSize color={Colors.darkGray} onPress={() => buildNumber('0')}/>
                <CalculadorButton label='.' color={Colors.darkGray} onPress={() => buildNumber('.')}/>
                <CalculadorButton label='=' color={Colors.orange}  onPress={calculateResult} />
            </View>

            
color={Colors.darkGray}

        </View>
    )
}

export default CalculadoraApp