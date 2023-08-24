import {Image, StatusBar, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useState} from "react";
import WebView from "react-native-webview";
import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";
import {NavigationContainer} from "@react-navigation/native";


export const buttonStyle = StyleSheet.create({
    buttonPositive: {
        padding: 10,
        backgroundColor: 'green',
        margin: 3,
        borderRadius: 5
    },
    buttonNegative: {
        padding: 10,
        backgroundColor: 'red',
        margin: 3,
        borderRadius: 5
    }
})
function PrimeiraTela() {
    const [quantityMoney, setQuantityMoney] = useState(0);
    const buttons = [1, 5, 10, 20, 50, 100, 200];
  return (
    <View
        style={{
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1
        }}>

      <Text>Você tem {quantityMoney} reais</Text>
        <View style={{flexDirection: 'row'}}>
            {buttons.map((value, index) => (
                <TouchableOpacity
                    key={index}
                    onPress={() => {
                        setQuantityMoney(quantityMoney + value);
                    }}
                    style={buttonStyle.buttonPositive}
                >
                    <Text>{`+${value}`}</Text>
                </TouchableOpacity>
            ))}
        </View>

        <View style={{flexDirection: 'row'}}>
            {buttons.map((value, index) => (
                <TouchableOpacity
                    key={index}
                    onPress={() => {
                        setQuantityMoney(quantityMoney - value);
                    }}
                    style={buttonStyle.buttonNegative}
                >
                    <Text>{`--${value}`}</Text>
                </TouchableOpacity>
            ))}
        </View>
    </View>
  );
}
function SegundaTela() {
    return (
        <View
            style={{
                alignItems: 'center',
                justifyContent: 'center',
                flex: 1
        }}>
            <Image
                source={{uri:'https://wallpaperaccess.com/full/284466.jpg'}}
                style={{width: 400, height: 300}}
            />
        </View>
    );
}

function TerceiraTela () {
    return (
        <View
            style={{
                alignItems: 'center',
                justifyContent: 'center',
                flex: 1
            }}>
            <WebView
                source={{uri:"https://www.youtube.com/watch?v=sonLd-32ns4"}}
                style={{width:400, height:100}}
            />
        </View>
    );
}
function QuartaTela () {
    return (
        <View
            style={{
                alignItems: 'center',
                justifyContent: 'center',
                flex: 1
            }}>
            <Text>GIF</Text>
            <Image
                source={{uri:'https://www.drodd.com/images10/funny-cat-gifs16.gif'}}
                style={{width: 400, height: 300}}
            />
        </View>
    );
}

const Tab = createMaterialTopTabNavigator();

export default function App() {
    return (
        <>
            <StatusBar hidden />
            <NavigationContainer>
                <Tab.Navigator swipeEnabled={true}>
                    <Tab.Screen name="Clicar" component={PrimeiraTela} />
                    <Tab.Screen name="Paisagem" component={SegundaTela} />
                    <Tab.Screen name="Música" component={TerceiraTela} />
                    <Tab.Screen name="Gif" component={QuartaTela} />
                </Tab.Navigator>
            </NavigationContainer>
        </>
    );
};
