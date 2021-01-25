import React, { useState } from 'react'
import { Text, TouchableOpacity, View, StyleSheet, TextInput } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

const ListItem = (props) => {

    const [ text, setText ] = useState(props.item.name)

    return (
        props.id === props.item.id ? (
            <TouchableOpacity>
                <View style={styles.item}>
                    <TextInput
                        style={styles.input}
                        placeholder='Change name...'
                        value={text}
                        onChangeText={text => setText(text)}
                    />
                    <View style={styles.btns}>
                    {text === '' ? (
                        <Icon name='check' onPress={() => props.setID('')} size={20}/>
                    ) : (
                        <Icon
                            name='check'
                            onPress={() => props.update(props.item.id, text)}
                            size={20}
                        />
                    )}
                    <Icon name='clear' onPress={() => props.setID('')} size={20}/>
                    </View>
                </View>
            </TouchableOpacity>
        ) : (
            <TouchableOpacity>
                <View style={styles.item}>
                    <Text>{props.item.name}</Text>
                    <View style={styles.btns}>
                        <Icon
                            name='delete'
                            size={20}
                            onPress={() => props.delete(props.item.id)}
                        />
                        <Icon
                            name='create'
                            size={20}
                            onPress={() => props.setID(props.item.id)}
                        />
                    </View>
                </View>
            </TouchableOpacity>
        )
    )
}

const styles = StyleSheet.create({
    item: {
        padding: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderColor: 'darkgray'
    },
    btns:{
        width: 60,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    input: {
        padding: 0,
        margin: 0
    }
})

export default ListItem
