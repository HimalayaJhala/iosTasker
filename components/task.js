import React from "react";
import {View , Text , StyleSheet, Touchable, TouchableOpacity} from 'react-native';

const Task = (props) => {

    return(
    <View style={styles.item}>
        <View style={styles.itemLeft}>
            <TouchableOpacity style={styles.square}></TouchableOpacity>
     
        <Text style={styles.itemText}> {props.text} </Text>
        </View>
        <View style={styles.circular}></View>
        </View>
    )
}
const styles = StyleSheet.create({
    item :{
       
        backgroundColor: '#FFF',
        padding : 15,
        borderRadius : 100,
        flexDirection : 'row',
        alignItems: 'center',
        justifyContent :'space-between',
        marginBottom : 20,
    },
    itemLeft:{

        flexDirection : 'row',
        alignItems: 'center',
        flexWrap : 'wrap',
       
    },
    square:{  
        width : 24,
        height : 24,
        backgroundColor: '#FFA500',
        opacity : 0.4,
        borderRadius : 100,
        marginRight : 15,
    },
        
    iteamText:{
        maxWidth: '80%',
       
    },
    circular:{
        width: 12,
        height: 12,
        borderWidth : 2,
        borderRadius: 5,
        borderColor : '#FFA500',
    },
});
export default Task;