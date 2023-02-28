import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-web";




export default function Task(props) {
    return (
        <View>

            <View style={styles.items}>
                <View style={styles.taskbar}>
                    <Text> {props.task}</Text>
                    <TouchableOpacity><View style={styles.circle}></View>
                    </TouchableOpacity>
                </View>
            </View>
           
        </View>

    )
}
const styles = StyleSheet.create({
    items: {

        width: "auto",
        backgroundColor: "#fff",
        borderRadius: 20,
        padding: 25,
        borderWidth: 1,
        borderColor: "skyblue",
        marginTop: 10,
        margin: 5,
        marginHorizontal: 50
    },

    taskbar: {
        justifyContent: "space-between",
        flexDirection: "row",
    },

    circle: {
        height: 15,
        width: 15,
        borderRadius: 50,
        borderColor: "#4b0082",
        borderWidth: 1,
        border: "solid"
    },


})