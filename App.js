import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Button, TextInput } from 'react-native';
import Notification from "./Notification";

export default function App() {

    const [isActive, setIsActive] = useState(false);
    const [notificationTitle, setNotificationTitle] = useState("This is notification title.");
    const [color, setColor] = useState("23d160");
    const [duration, setDuration] = useState("1000");
    const [autoHide, setAutoHide] = useState("1000");


    return (
        <View style={styles.container}>
            <Notification autoHide={parseInt(autoHide)} notificationTitle={notificationTitle} color={color} isActive={isActive} duration={parseInt(duration)} onClose={() => setIsActive(!isActive)} />

            <View style={styles.settingSection}>
                <Text style={styles.label}>Notification Title</Text>
                <TextInput
                    style={styles.inputText}
                    onChangeText={text => setNotificationTitle(text)}
                    value={notificationTitle}
                    placeholder={"Add your own notification title"}
                />
                <Text style={styles.label}>Notification color</Text>
                <TextInput
                    style={styles.inputText}
                    onChangeText={text => setColor(text)}
                    value={color}
                    placeholder={"Add your own color code without #"}
                />
                <Text style={styles.label}>Notification Show Duration</Text>
                <TextInput
                    style={styles.inputText}
                    onChangeText={text => setDuration(text)}
                    value={duration}
                    keyboardType="number-pad"
                    placeholder={"Add duration in numbers"}
                />
                <Text style={styles.label}>Auto hide in</Text>
                <TextInput
                    style={styles.inputText}
                    onChangeText={text => setAutoHide(text)}
                    value={autoHide}
                    keyboardType="number-pad"
                    placeholder={"Add auto hide in numbers (seconds)"}
                />
            </View>

            <TouchableOpacity
                style={styles.button}
                onPress={() => setIsActive(!isActive)}
            >
                <Text> {isActive ? "Hide " : "Show "} Notification </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10,
    },
    settingSection: {
        width: "100%",
        padding: 10
    },
    label: {
        paddingLeft: 6,
        marginLeft: 10,
        fontSize: 15,
    },
    inputText: {
        paddingLeft: 6,
        borderWidth: 1,
        borderColor: "#000",
        height: 50,
        textAlign: "center",
        fontSize: 20,
        margin: 10
    }
});
