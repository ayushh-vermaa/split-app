import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native';

const Checklist = () => {
  const [selectedName, setSelectedName] = useState('');
  const [items, setItems] = useState([
    { label: 'Salumi 🍕', checked: false, name: '', price: '$23.95' },
    { label: 'Wine 🥪', checked: false, name: '', price: '$8.71' },
    { label: 'Wine 🍦', checked: false, name: '', price: '$8.71' },
    // Add more items as needed
  ]);
  const [allChecked, setAllChecked] = useState(false);

  // Check if all items are checked
  useEffect(() => {
    const allItemsChecked = items.every(item => item.checked);
    setAllChecked(allItemsChecked);
  }, [items]);

  const selectItem = (index) => {
    const newItems = [...items];
    newItems[index].checked = !newItems[index].checked;
    if (newItems[index].checked) {
      newItems[index].name = selectedName;
    } else {
      newItems[index].name = '';
    }
    setItems(newItems);
  };

  const renderItems = () => {
    return items.map((item, index) => (
      <View key={index} style={styles.itemContainer}>
        <TouchableOpacity onPress={() => selectItem(index)}>
          <View style={[styles.checkbox, item.checked && styles.checked]}></View>
        </TouchableOpacity>
        <Text style={styles.label}>{item.label}</Text>
        <Text style={styles.price}>{item.price}</Text>
        {item.checked && <Text style={styles.name}>{item.name}</Text>}
      </View>
    ));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Assign Items</Text>
      <View style={styles.checklist}>
        {renderItems()}
      </View>
      <View style={styles.nameButtons}>
        <TouchableOpacity onPress={() => setSelectedName('John')} style={styles.button}>
          <Text style={styles.buttonText}>John</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSelectedName('Jane')} style={styles.button}>
          <Text style={styles.buttonText}>Jane</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSelectedName('Bob')} style={styles.button}>
          <Text style={styles.buttonText}>Bob</Text>
        </TouchableOpacity>
        {/* Add more buttons with names as needed */}
      </View>
      <View style={styles.continueButtonContainer}>
        <Button title="Continue" disabled={!allChecked} onPress={() => console.log('Submitting')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#87CEEB',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 24,
    marginBottom: 20,
  },
  checklist: {
    maxWidth: 400,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  itemDetails: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  price: {
    fontSize: 12, // Adjust the font size as needed
    color: '#666',
  },
  checkbox: {
    width: 24,
    height: 24,
    borderWidth: 2,
    borderColor: '#333',
    borderRadius: 5,
    marginRight: 10,
  },
  checked: {
    backgroundColor: '#333',
  },
  label: {
    fontSize: 16,
    color: '#333',
    marginRight: 10,
  },
  price: {
    fontSize: 16,
    color: '#666',
    marginRight: 10,
  },
  name: {
    fontStyle: 'italic',
    color: '#666',
  },
  nameButtons: {
    flexDirection: 'row',
    marginTop: 20,
  },
  button: {
    margin: 5,
    padding: 5,
    backgroundColor: '#333',
    borderRadius: 3,
  },
  buttonText: {
    color: '#fff',
  },
  continueButtonContainer: {
    marginTop: 20,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 10,
  },
});

export default Checklist;
