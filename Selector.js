// Selector.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Clipboard } from 'react-native';
import frame from './assets/frame.png';
import linkSymbol from './assets/link-symbol.png';

function Selector({ navigation }) {  // Add navigation prop here
  const [copiedText, setCopiedText] = useState('');

  const copyToClipboard = () => {
    Clipboard.setString('https://openprojectberkeley.com/');
    setCopiedText('Copied to Clipboard!');
    setTimeout(() => {
      setCopiedText('');
    }, 3000);
  };

  return (
    <View style={styles.container}>
      <Image source={frame} style={styles.frameStyle}/>
      <TouchableOpacity onPress={copyToClipboard}>
        <Image source={linkSymbol} style={styles.linkSymbolStyle}/>
      </TouchableOpacity>
      {copiedText ? <Text style={styles.copiedTextStyle}>{copiedText}</Text> : null}
      <TouchableOpacity style={styles.nextButton} onPress={() => navigation.navigate('ActualSelector')}>
        <Text style={styles.nextButtonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  frameStyle: {
    width: 300,
    height: 400,
    marginBottom: 20, 
    bottom: 50,
  },
  linkSymbolStyle: {
    width: 50,
    height: 50,
    marginBottom: 20, 
    bottom: 30,
  },
  copiedTextStyle: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 20, 
  },
  nextButton: {
    position: 'absolute',
    bottom: 50,
    alignSelf: 'center',
    backgroundColor: '#007AFF',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  nextButtonText: {
    fontSize: 16,
    color: '#ffffff',
    fontWeight: 'bold',
  },
});

export default Selector;


