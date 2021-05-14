import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { StyleSheet, Text, TouchableOpacity, View, Animated } from "react-native";

export default function Notification(props) {

    const animatedValue = React.useRef(new Animated.Value(0)).current;

    if (props.isActive) {
        Animated.timing(animatedValue, {
            toValue: 1,
            duration: props.duration,
            useNativeDriver: false
        }).start(() => {
            setTimeout(() => {
                props.onClose();
            }, props.autoHide);
        });
    }

    if (!props.isActive) {
        Animated.timing(animatedValue, {
            toValue: 0,
            duration: props.duration,
            useNativeDriver: false
        }).start();
    }

    const close = () => {
        props.onClose();
    }

    return (
        <View style={styles.container}>
            <Animated.View
                style={[
                    styles.notification,
                    {
                        transform: [
                            {
                                translateX: animatedValue.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [350, 0]
                                })
                            },
                            { perspective: 1000 }
                        ],
                        backgroundColor: "#"+props.color
                    }
                ]}
            >
                <Text style={styles.notificationTitle}>{props.notificationTitle}</Text>
                <TouchableOpacity onPress={() => close()}>
                    <AntDesign name="close" size={14} color="white" style={styles.icon} />
                </TouchableOpacity>
            </Animated.View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        top: 50,
        right: 10
    },
    notification: {
        backgroundColor: "#23d160",
        borderRadius: 5,
        padding: 4,
        flexDirection: "row",
    },
    notificationTitle: {
        color: "#fff",
        padding: 10,
        textAlign: "left",
        justifyContent: "center",
        fontSize: 16,
        fontWeight: "bold"
    },
    icon: {
        backgroundColor: "rgba(10,10,10,.2)",
        borderRadius: 50,
        padding: 3
    }
})