import { View, Text,ScrollView ,StyleSheet} from 'react-native'
import React,{useState,useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import cityActions from '../redux/actions/cityActions'
import MyCityCard from '../components/MyCityCard'


export default function Cities() {
/*     const [value, setValue] = useState('')
    const [continent, setContinent] = useState([]) ///array de los continentes checkeados por el usuario */
    const dispatch= useDispatch()
    const {getCity,getCityFilter}=cityActions
    const {city} =useSelector((state)=>state.city)//useSelector lee el estado de city desde el store
    /* let valores = {}  */
   useEffect(() => {
      dispatch(getCity());
  }, []);
 /*    valores = {
      continente: continent.length>1?"&continent="+continent.join("&continent="):"&continent="+continent.join(""),
      value: value
    }
    //filtrado por busqueda
    let search = (e) => {
      setValue("&name="+e.target.value)
    }
    //filtrado por check
    const valueEvent = (e) => {
      if (e.target.checked) {
        setContinent(continent.concat(e.target.value))
      } else {
        setContinent(continent.filter(checked => checked !== e.target.value))
      }
    }
      useEffect(()=>{
      dispatch(getCityFilter(valores))
    },[value,continent])
 */
  return (
    <>
    <View style={styles.h1Container}>
      <Text style={styles.h1}>cities</Text>
    </View>
    <ScrollView>
        <View>
        { city.length===0?<Text>No Cities found</Text>:city.map((e, index) => <MyCityCard name={e.name} photo={e.photo} population={e.population} id={e._id} key={index} continent={e.continent} />)}
        </View>
    </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({
    h1Container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        padding:20,
        borderColor:"black",
        borderWidth:2,
    },
    switchName:{
        borderColor:"black",
        borderWidth:2,
        flex:1,
        textAlign:"center",
    },
    switchContainer:{
        flex:1,
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"center",
        borderColor:"black",
        borderWidth:2,
    },
    h1: {
      flex: 1,
      fontSize:25,
      alignItems: "center",
      justifyContent: "center",
      color:"black",
      backgroundColor:"gray",
      borderColor:"black",
      borderWidth:2,
    }
  });
  