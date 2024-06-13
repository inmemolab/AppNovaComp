// Importar librerias
import React, {useState} from "react";
import {FlatList, Modal, SafeAreaView, StyleSheet, Text, TextInput, View} from "react-native";
import {useSelector, useDispatch} from "react-redux";
import {appSelector, setTask} from "@store/app";
// Importar estylos
import {stylesLayout} from "@theme/Layout";
import ButtonBase from "@components/buttons/ButtonBase";

// Descripción:
// Verificado: SI
// Creado por: Guillermo Corredor
// Fecha de creación: 06/13/2024
// NOTA:

// Screen
const TaskScreen = ({navigation}: any) => {
  // Logica
  const dispatch = useDispatch();
  const {userTask} = useSelector(appSelector);

  const [modalVisible, setModalVisible] = useState(false);
  const [newTask, setNewTask] = useState("");

  const handleAddTask = () => {
    if (newTask.trim() !== "") {
      const newTaskData = {
        id: Math.random().toString(),
        description: newTask
      };
      dispatch(setTask(newTaskData));
      setNewTask("");
      setModalVisible(false);
    }
  };

  // Return
  return (
    <SafeAreaView style={stylesLayout.wrapperApp}>
      <View style={stylesLayout.wrapperMain}>
        <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
          <FlatList
            data={userTask}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => (
              <View style={styles.taskItem}>
                <Text style={styles.taskText}>{item.description}</Text>
              </View>
            )}
          />
          <ButtonBase
            isDisable={false}
            isIndicator={false}
            uselabel="Agregar nuevo task"
            useBG={"secondary"}
            useIconSide={"l"}
            useIcon={"text-plus"}
            onPress={() => setModalVisible(true)}
          />
          <Modal visible={modalVisible} animationType="slide">
            <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
              <TextInput
                placeholder="Ingrese el nuevo task"
                value={newTask}
                onChangeText={(text) => setNewTask(text)}
                style={{borderWidth: 1, padding: 10, marginBottom: 10}}
              />
              <ButtonBase
                isDisable={false}
                isIndicator={false}
                uselabel="Agregar"
                useBG={"secondary"}
                useIconSide={"l"}
                useIcon={"device-floppy"}
                onPress={() => handleAddTask()}
              />
              <ButtonBase
                isDisable={false}
                isIndicator={false}
                uselabel="Cancelar"
                useBG={"secondary"}
                useIconSide={"l"}
                useIcon={"circle-x"}
                onPress={() => setModalVisible(false)}
              />
            </View>
          </Modal>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  taskItem: {
    flex: 1,
    backgroundColor: "#f0f0f0",
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
    width: '100%',
  },
  taskText: {
    fontSize: 16
  }
});

// Export componente
export default TaskScreen;
