import React, { useEffect, useState} from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';


const [climaData, setClimaData] = useState(null);

const countries = ['Argentina', 'Brazil', 'Dominican Republic'];

useEffect(() => {
    const fetchClimaData = async () => {
        try {
            const responsePromises = countries.map(country => 
                axios.get('https://api.weatherapi.com/v1/current.json?key=0f772b67e5fc483d820171247232806&q=${contry}&lang=es')
);
const responses = await promise.all(responsePromises);
        const climaDataArray = responses.map(response => response.data);
        setClimaData(climaDataArray);
         }catch (error) {
            console.error(error);
         }
      };
      fetchClimaData();
}, []);


if (!climaData) {
    return (
        <View>
        <Text>Cargando ...  </Text>
        </View>
    );
 

 return (
    <View>
       {climaData.map((clima, index) => (
        <View key={index}>
           <Text>Ubicación: {clima.location.name},  {clima.location.region},  {clima.location.country}</Text>   
           <Text>Temperatura: {clima.current.temp_c}ºC</Text>
           <Text>Condición: {clima.current.condition.text}</Text>
           <Text>---------------------------------</Text>
            </View>
       ))}
    </View>
 );
};

export default ClimaScreen;


