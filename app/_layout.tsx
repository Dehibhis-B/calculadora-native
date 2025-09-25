import { Slot } from 'expo-router';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import { Colors } from '../constants/Colors'; // Ajusta la ruta según donde tengas tus colores

const Layout = () => {
    return (
        <View style={styles.container}>
            {/* Parte superior VERDE */}
            <View style={styles.header}>
                <Text style={styles.title}>Layouts</Text>
                <StatusBar style="light" />            
            </View>
            
            {/* Parte inferior con color background */}
            <View style={styles.content}>
                <Slot />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        backgroundColor: Colors.orange, // #34C759
        padding: 20,
        paddingTop: 50,
    },
    content: {
        flex: 1,
        backgroundColor: Colors.background, // #000000 (negro)
    },
    title: {
        color: Colors.textPrimary, // 'white'
        fontSize: 20,
        fontWeight: 'bold',
    }
    
});

export default Layout;