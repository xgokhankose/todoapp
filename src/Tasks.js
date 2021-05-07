import React, { Component } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

const Tasks = (parametre) => {
  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <View style={styles.kare}></View>
        <Text style={styles.itemText}>{parametre.text}</Text>
      </View>
      
      <View style={styles.yuvarlak}></View>
    </View>
  );
};
const styles = StyleSheet.create({
  item: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  kare: {
    width: 24,
    height: 24,
    backgroundColor: "#ff8080",
    opacity: 0.4,
    borderRadius:5,
    marginRight:15,
  },
  itemText: {
      maxWidth:"80%",

  },
  yuvarlak: {
      width:12,
      height:12,
      borderColor:"#ff8080",
      borderWidth:2,
      borderRadius:5,
      
  },
});
export default Tasks;
