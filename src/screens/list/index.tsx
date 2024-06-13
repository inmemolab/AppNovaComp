// Importar librerias
import React, {useCallback, useState} from "react";
import {SafeAreaView, View, FlatList, Text, Image, StyleSheet, ActivityIndicator} from "react-native";
import {useFocusEffect} from "@react-navigation/native";
// Importamos client
import {ClientsCore} from "@clients/ClientsCore";
// Importar estylos
import {stylesLayout} from "@theme/Layout";

// Descripción:
// Verificado: SI
// Creado por: Guillermo Corredor
// Fecha de creación: 06/13/2024
// NOTA: Hay imagenes que no se obtiene de la ruta que llega en la data

// Definimos el tipo de dato
interface DataItem {
  createdAt: string;
  name: string;
  avatar: string;
  id: string;
}

// Screen
const ListScreen = ({navigation}: any) => {
  // userState con la definicion de tipo
  const [data, setData] = useState<DataItem[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  // Logica
  useFocusEffect(
    useCallback(() => {
      const fetchData = async () => {
        setLoading(true);
        try {
          const response = await ClientsCore.getInstance().getClient().get(`/`);
          console.log(`📡 ---> Data: ${JSON.stringify(response.data, null, 2)}`);
          setData(response.data);
        } catch (error) {
          console.error("Error al traer el listado", error);
        } finally {
          setLoading(false);
        }
      };

      fetchData();
      return () => {
        // Eliminamos la data del userState
        setData([]);
      };
    }, [])
  );
  // Definimos el elemento de flat list
  const renderItem = ({item}: {item: DataItem}) => (
    <View style={styles.item}>
      <View style={styles.avatarContainer}>{item.avatar && <Image source={{uri: item.avatar}} style={styles.avatar} resizeMode="cover" />}</View>
      <View style={styles.textContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.date}>{new Date(item.createdAt).toLocaleDateString()}</Text>
      </View>
    </View>
  );

  // Return
  return (
    <SafeAreaView style={stylesLayout.wrapperApp}>
      <View style={stylesLayout.wrapperMain}>
        {loading ? (
          <View style={styles.loadingCenter}>
            <ActivityIndicator testID="loading-indicator" size="large" color="#0000ff" />
          </View>
        ) : (
          <FlatList data={data} keyExtractor={(item) => item.id.toString()} renderItem={renderItem} />
        )}
      </View>
    </SafeAreaView>
  );
};

// Estilos para los items de la lista
const styles = StyleSheet.create({
  loadingCenter: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  item: {
    flexDirection: "row",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc"
  },
  // Otros estilos...
  avatarContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#ccc",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    marginRight: 10
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  textContainer: {
    justifyContent: "center"
  },
  name: {
    fontSize: 16,
    fontWeight: "bold"
  },
  date: {
    fontSize: 14,
    color: "#666"
  }
});

// Export componente
export default ListScreen;
