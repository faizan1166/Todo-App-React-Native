import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, KeyboardAvoidingView, TextInput } from 'react-native';
import { ScrollView } from 'react-native';
import Tasks from './componets/Tasks';

export default function App() {
  const [text, setText] = useState()
  const [taskItems, setTaskItems] = useState([])

  const handleAddTask = () => {
    if (text != null) {
      setTaskItems([...taskItems, text])
      setText(null)
    }
    else {
      alert("Please Type Something")
    }
  }

  const completedTask = (index) => {
    let tasks = [...taskItems]
    tasks.splice(index, 1)
    setTaskItems(tasks)
  }
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Today's Tasks</Text>
      <ScrollView>
        {
          taskItems.map((item, index) => {
            return (<TouchableOpacity key={index} onPress={() => completedTask(index)}>
              <Tasks task={item} />
            </TouchableOpacity>
            )
          })
        }
      </ScrollView>
      <View style={styles.line}></View>
      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.keyboardwrapper}>
        <TextInput style={styles.input} placeholder={"Enter something to be add"} value={text} onChangeText={(e) => { setText(e) }} />
        <TouchableOpacity onPress={handleAddTask}>
          <View style={styles.addsymbol} >
            <Text>Add</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView> 
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0ffff',
    marginTop: 40,

  },
  heading: {
    margin: 10,
    fontWeight: "bold",
    fontSize: 20
  },
  keyboardwrapper: {
    padding: 10,
    marginTop: 5,
    flexDirection: "row",
    justifyContent: "space-between"
  },

  input: {
    borderRadius: 40,
    backgroundColor: "#fff",
    padding: 20,
    marginLeft: 40,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#4b0082"

  },

  addsymbol: {
    margin: 15,
    marginRight: 20,
    height: 35,
    width: 70,
    borderRadius: 50,
    borderColor: "#4b0082",
    borderWidth: 1,
    border: "solid",
    justifyContent: "center",
    alignItems: "center"
  },
  line: {
    opacity: 0.9,
    borderWidth: 0.4,
    bottom: 1,
    borderColor: "grey",
  }
});
