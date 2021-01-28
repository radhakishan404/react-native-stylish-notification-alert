import React, { useEffect } from "react";
import { AntDesign } from "@expo/vector-icons";
import { StyleSheet, View, TouchableOpacity, Animated, Text } from "react-native";

export default function Notification(props) {
    const animatedValue = React.useRef(new Animated.Value(0)).current;

    Animated.timing(animatedValue, {
        toValue: 0,
        duration: 2000,
        useNativeDriver: false
    }).start();

    if (props.isActive) {
        Animated.timing(animatedValue, {
            toValue: 1,
            duration: 2000,
            useNativeDriver: false
        }).start();
    }

    if (!props.isActive) {
        Animated.timing(animatedValue, {
            toValue: 0,
            duration: 2000,
            useNativeDriver: false
        }).start();
    }

    const close = () => {
        Animated.timing(animatedValue, {
            toValue: 0,
            duration: 2000,
            useNativeDriver: false
        }).start();
    }

    return (
        <View style={styles.container}>
            <Animated.View style={[styles.notification, {
                transform: [
                    {
                        translateX: animatedValue.interpolate({
                            inputRange: [0, 1],
                            outputRange: [-1000, 0]
                        })
                    },
                    { perspective: 1000 }
                ]
            }, { backgroundColor: props.backgroundColor }]}>
                <Text style={styles.title}>{props.message ? props.message : "Enter your message"}</Text>
                <TouchableOpacity style={styles.delete} onPress={() => close()}>
                    <AntDesign name="close" size={16} color="white" style={styles.icon} />
                </TouchableOpacity>
            </Animated.View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        position: "absolute",
        bottom: 10,
        width: "100%",
    },
    notification: {
        paddingTop: 3.5,
        paddingBottom: 3.5,
        paddingLeft: 3.5,
        paddingRight: 4.5,
        backgroundColor: "#23d160",
        width: "100%",
        height: "auto",
        borderRadius: 5
    },
    title: {
        color: "#fff",
        padding: 10,
        textAlign: "left",
        justifyContent: "center",
        fontSize: 16,
        fontWeight: "bold"
    },
    delete: {
        position: "absolute",
        top: 5,
        right: 5
    },
    icon: {
        backgroundColor: "rgba(10,10,10,.2)",
        borderRadius: 50,
        padding: 3
    }
});
