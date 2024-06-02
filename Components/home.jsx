import head from '../assets/head.png'
import { FlatList, Image, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import icon from '../assets/search.png'
import line from '../assets/line.png' 
import Exercise from '../assets/image1.png'
import Study from '../assets/image2.png'


const categorydata = [
    {
        id: 1,
        name: 'Exercise',
        period: '12 Tasks',
        image: Exercise
    },
    {
        id: 2,
        name: 'Exercise',
        period: '12 Tasks',
        image: Study
    },
    {
        id: 3,
        name: 'Exercise',
        period: '12 Tasks',
        image: Exercise
    },
    {
        id: 4,
        name: 'Exercise',
        period: '12 Tasks',
        image: Study
    },
    {
        id: 5,
        name: 'Exercise',
        period: '12 Tasks',
        image: Exercise
    },
    {
        id: 6,
        name: 'Exercise',
        period: '12 Tasks',
        image: Study
    },
    {
        id: 7,
        name: 'Exercise',
        period: '12 Tasks',
        image: Exercise
    },
    {
        id: 8,
        name: 'Exercise',
        period: '12 Tasks',
        image: Study
    },
    {
        id: 9,
        name: 'Exercise',
        period: '12 Tasks',
        image: Exercise
    },
]

const ongoing = [
    {
        id: '1',
        title: 'Mobile App Development',
    },
    {
        id: '2',
        title: 'Web Development'
    },
    {
        id: '3',
        title: 'Push Ups',
    },
    {
        id: '4',
        title: 'Mobile App Development'
    },
    {
        id: '5',
        title: 'Web Development',
    },
    {
        id: '6',
        title: 'Push Ups'
    },
    {
        id: '7',
        title: 'Web Development',
    },
    {
        id: '8',
        title: 'Mobile Development'
    },
    {
        id: '9',
        title: 'Web Development',
    },
    {
        id: '10',
        title: 'Mobile Development'
    },
    {
        id: '11',
        title: 'Web Development',
    },
    {
        id: '12',
        title: 'Mobile Development'
    },
    {
        id: '13',
        title: 'Web Development',
    },
    {
        id: '15',
        title: 'Mobile Development'
    }
]

const Home = () => {
    const task = ({item}) => {
        return(
            <View style={styles.ongoing}>
                <Text style={{fontSize: 15, fontWeight: 'bold'}}>{item.title}</Text>
            </View>
        )
    }

    const categorysection = ({item}) => {
        return(
            <View style={styles.categoryBox}>
                <Text>{item.name}</Text>
                <Text>{item.period}</Text>
                <Image source={item.image} style={styles.categoryImage}/>
            </View>
        )
    }

  return (
    <>
        <View>
            <View style={styles.starter}>
                <View style={styles.major}>
                    <Text style={styles.greeting}>
                        Hello, Devs
                    </Text>
                    <Text>
                        14 tasks today
                    </Text>
                </View>
                <View style={{backgroundColor: 'white', borderRadius: 30, height: 60, width:60}}>
                    <Image style={styles.header} source={head}/>
                </View>
            </View>
            <View style ={styles.next}>
                <View style={styles.searchContent}>
                    <View>
                        <Image style={styles.searchIcon} source={icon}/>
                    </View>
                    <View>
                        <TextInput placeholder='Search' style= {{color:'black'}}/>
                    </View>

                </View>

                <View style={{marginRight: 30}}>
                    <Image style={styles.lineMenu} source ={line}/>
                </View>
            </View>
            <View>
                <Text style={styles.headline}>Categories</Text>
                <View>
                <FlatList horizontal data={categorydata} renderItem={categorysection} keyExtractor={item => item.id} showsHorizontalScrollIndicator={false}/>

                </View>
            </View>

            <View style={styles.task}>
                <Text style={{fontSize: 24,fontWeight: 'bold', marginBottom: 15}}>Ongoing Task</Text>
                <View>
                    <FlatList data={ongoing} renderItem={task} keyExtractor={item => item.id} showsVerticalScrollIndicator={false}/>
                </View>
            </View>
        </View>
    </>
  )
}

export default Home

const styles = StyleSheet.create({
    starter : {
        display: 'flex',
        flexDirection : 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 20,
    },
    major : {
        display: 'flex',
        flexDirection: 'column',
        
    },
    greeting : {
        marginTop: 10,
        fontSize: 40,
        fontWeight: 'bold',
    },
    header : {
        height : 55,
        width : 55,
    },
    next : {
        display: 'flex',
        flexDirection : 'row',
        justifyContent: 'space-between',
    },
    searchContent : {
        display: 'flex',
        flexDirection : 'row',
        alignItems: 'center',
        gap : 10,
        backgroundColor: 'white',
        width : 320,
        height : 60,
        borderRadius: 15,
        marginHorizontal: 10,
        marginVertical : 20,
    },
    lineMenu : {
        height: 60,
        width: 60,
        marginVertical: 20,
        marginLeft: 10
    },
    searchIcon: {
        height: 30,
        width: 30,
      marginLeft: 10,
    },
    headline: {
        fontSize: 25,
        fontWeight: 'bold',
        marginHorizontal: 10,
        marginTop: 5,
    },
    image2: {
        width: 55,
        height: 55,
        marginHorizontal: 10
    },
    searchInput: {
        width: '100%',
    },
    categoryBox: {
        height: 210,
        width: 200,
        backgroundColor: 'white',
        marginRight: 15,
        borderRadius: 20,
        padding: 10,
        marginTop: 10,
        position: 'relative',
        marginLeft: 15,

    },
    categoryImage: {
        position: 'absolute',
        top: 50,
        left: 20,
        width: 150,
        height: 150
    },
    task: {
        marginTop: 40,
        display: 'flex',
        flexDirection: 'column',
        marginHorizontal: 10,
        
        
    },
    ongoing: {
        height: 70,
        backgroundColor: 'white',
        marginBottom: 10,
        padding: 20, 
        borderRadius: 10,

    }
})