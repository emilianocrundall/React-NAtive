import React, {useState} from 'react'
import { View, TextInput, TouchableOpacity, Text,StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

const AddItem = (props) => {

    const [ text, setText ] = useState('')

    return (
        <View style={styles.div}>
            <TextInput
                style={styles.input}
                onChangeText={text => setText(text)}
                placeholder='Add item'
                value={text}
            />
            {text !== '' ? (
                <TouchableOpacity
                    style={styles.btn}
                    onPress={() => {props.handleAdd(text); setText('')}}>
                    <Text style={styles.btnText}>
                        Add <Icon name='add' size={20}/>
                    </Text>
                </TouchableOpacity>
            ) : (
                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.btnText}>
                        Add <Icon name='add' size={20}/>
                    </Text>
                </TouchableOpacity>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    div: {
        margin: 5
    },
    input: {
        padding: 8,
        borderBottomWidth:1,
        borderColor: 'darkgray'
    },
    btn: {
        backgroundColor: '#df6e94',
        padding: 10,
        alignItems: 'center',
        marginTop: 10
    },
    btnText:{
        color: 'white',
        fontSize: 20
    }
})

export default AddItem