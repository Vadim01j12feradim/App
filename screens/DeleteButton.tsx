import React, { useState } from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Ensure you have react-native-vector-icons installed
import { ConfirmDelete } from './ConfirmDelete';


export const DeleteButton = ({data, onPress }) => {
  const [visible,setVisible] = useState(false)
  const pressing = () =>{
    if (visible) {
      onPress(data)
    }
    setVisible(!visible)
  }
  return (
    <TouchableOpacity style={styles.deleteButton} onPress={()=>setVisible(!visible)}>
      <Icon name="trash" size={20} color="#fff" style={styles.icon} />
      <Text style={styles.buttonText}>Delete</Text>
      <ConfirmDelete visible={visible} onPress={()=>pressing()} data={data} ></ConfirmDelete>
    </TouchableOpacity>
  );
};


const styles = StyleSheet.create({
  icon: {
    marginRight: 8,
  },
  deleteButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#d9534f', // Red color for delete
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
    marginVertical: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
