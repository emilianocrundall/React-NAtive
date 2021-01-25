import React, { useState } from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import ListItem from './components/ListItem'
import AddItem from './components/AddItem'

const App = () => {

  const [value, setValue] = useState(false)

  const [ data, setData ] = useState([
    {id: '1', name: 'George'},
    {id: '2', name: 'Kathlin'},
    {id: '3', name: 'Pedrin'}
  ])

  const [ id, setID ] = useState('')

  const handleDelete = (id) => {
    setData([
      ...data.filter((item) => item.id !== id)
    ])
  }

  const handleAdd = (item) => {
    setData([
      ...data,
      {id:'4', name: item}
    ])
  }

  const handleUpdate = (id, text) => {
    setData(prevItems => {
      return prevItems.map((item) => item.id === id ? {id, name: text} : item)
    })
    setID('')
  }

  return(
    <View>
      <View style={styles.container}>
        <Text style={styles.text} onPress={() => setValue(!value)}>
          {value ? (
            'Hello World!'
          ) : (
            'List items'
          )}
        </Text>
      </View>
      <FlatList
        style={styles.list}
        data={data}
        renderItem={({item}) => <ListItem
          item={item}
          delete={handleDelete}
          id={id}
          setID={setID}
          update={handleUpdate}
        />}
      />
      <AddItem handleAdd={handleAdd} />
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: 'darkslateblue',
    padding:20
  },
  text: {
    color:'white',
    fontSize:20,
    letterSpacing:1
  },
  list: {
    padding: 10
  }
})

export default App