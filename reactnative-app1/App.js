import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import { Dimensions } from 'react-native';
// import { Button } from 'react-native-web';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default function App() {
  let [top,setTop]=useState(100)  //150
  let [left,setLeft]=useState(60)  //200
  let [sec,setSec]=useState(0)
  // let[loc,setLoc]=useState(0)
  setInterval(()=>{setSec(sec+=1)},5000)
 async function locationHandler()
  {
    let data= await fetch ("http://172.28.131.69:8090/mapping")
    let finalData=await data.json()
    console.log(finalData.label)
    // setLoc(finalData.labelone)
    let label=finalData.label;
    // =========================//lecturesHall  LABEL (1)===================================================
    if (label=="lecturesHall")   //Corridor4
    {
      setTop(200);
      setLeft(250);
    }
    // ===========================//hallWay1   LABEL  (2)===================================================
    else if(label =="hallWayOne ")  
    {
      setTop(200);
      setLeft(185);
    }   
  // ===========================//hallWay2   LABEL  (3)===================================================
    else if (label =="hallWay2 ")
    {
      setTop(280);
      setLeft(190);
    }
  // ===========================//TA_Office   LABEL  (4)===================================================
  else if (label =="TA_Office")
  {
    setTop(330);
    setLeft(140);
  }
  // ===========================//calib_lab  LABEL  (5)===================================================
  else if (label =="calib_lab")
  {
    setTop(340);
    setLeft(250);
  }
    // ===========================//network_lab  LABEL  (6)===================================================
  else if (label =="network_lab")
    {
      setTop(400);
      setLeft(110);
    }
    // ===========================//elec_lab  LABEL  (7)===================================================
    else if (label =="elec_lab")
      {
        setTop(440);
        setLeft(120);
      }
      // ===========================//hallWay3  LABEL  (8)===================================================
      else if (label =="hallWay3")
      {
        setTop(480);
        setLeft(190);
      }

  }
  useEffect(()=>locationHandler(),[sec])

  return (
    <View  style={styles.container}>
      <Image style={styles.logo} source={require('./assets/logo.jpg')}/>
      <Text style={styles.title}> Indoor Localization Of SBME Department</Text>
      <Image 
        style={styles.image}
        source={require('./assets/SBMEMAP.png')}
      />
      {/* <View style={{position:"absolute",
                    top:top,
                    left:left,
                    width: 10,
                    height: 10,
                    borderRadius: 10 / 2,
                    backgroundColor: 'red',
                    opacity:0.6,}} /> */}
  <Image style={{position:"absolute",top:top,left:left,width:25,height:30,padding:10}} source={require('./assets/logoo.jpg')}/>
      </View>
      /* <Button onPress={()=>{locationHandler()}}>press</Button> */
  );
}

const styles = StyleSheet.create({
  container: {
    width:windowWidth,
    height:windowHeight,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  image:
  {
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    width:300,  //300
    height:550   ///700
  },
  // CircleShape: {
  //   position:"absolute",
  //   top:top,
  //   left:left,
  //   width: 10,
  //   height: 10,
  //   borderRadius: 10 / 2,
  //   backgroundColor: 'red',
  //   opacity:0.6,
  // },
  title:
  {
    fontSize: 20,
    fontWeight: "bold",
    // fontFamily: 'Cochin',
    marginBottom:10,
    // marginTop:10,
    // backgroundColor:'rgba(1,1,1,0.7)'
  },
  logo:
  {
    width:25,
    height:30,
    // padding:10

  }
});
