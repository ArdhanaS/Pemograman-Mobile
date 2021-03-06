import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'

const transfersuccess = ({ navigation }) => {
    return (
        <View style={{ backgroundColor: 'white', flex: 1 }}>
            <View style={{ borderRadius: 100, paddingTop: 100, justifyContent: 'center', alignItems: 'center' }}>
                <Image source={require('../Assets/img/transferimg.png')} />
            </View>
            <View style={{ alignItems: 'center' }}>
                <Text style={{
                    fontFamily: 'roboto', fontWeight: '400', fontSize: 24, color: '#484848', marginTop: 20
                }}>Transfer Success!</Text>
                < Text style={{ fontFamily: 'roboto', fontWeight: '500', fontSize: 24, color: '#575757', marginTop: 10 }}>Rp 20.000.000.000</Text>
            </View>
            <View style={{ marginTop: 20, paddingVertical: 20, backgroundColor: '#4982C1', alignItems: 'center', marginHorizontal: 30 }}>
                <Text style={{
                    fontFamily: 'roboto', fontWeight: '400', fontSize: 18, color: 'white', marginTop: 10
                }}>14 November 2021</Text>
                < Text style={{ color: 'white', fontFamily: 'roboto', fontWeight: '500', fontSize: 18, marginTop: 10 }}>Receiver: Ardhana Setyadi</Text>
                < Text style={{ color: 'white', fontFamily: 'roboto', fontWeight: '500', fontSize: 18, marginTop: 10 }}>081297184137</Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Tab Page')} style={{ width: 281, marginTop: 20, backgroundColor: '#4982C1', paddingVertical: 10, borderRadius: 5, alignItems: 'center', marginHorizontal: 60 }}>
                <Text style={{ textAlign: 'center', color: 'white', fontWeight: 'bold', fontSize: 20 }}>Finish</Text>
            </TouchableOpacity>
        </View>
    )
}

export default transfersuccess

const styles = StyleSheet.create({})