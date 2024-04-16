import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { BackGround } from '../Comps/BackGround';
import { CustomButton } from '../Comps/CustomButton';
import DropDownPicker from 'react-native-dropdown-picker';

const Historico = () => {
  const [selectedOption, setSelectedOption] = useState('recebida'); // 'recebida' or 'ofertada'
  const [anoSelecionado, setAnoSelecionado] = useState(null);
  const [mesSelecionado, setMesSelecionado] = useState(null);

  // Mock ride history data
  const historico = [
    { id: 1, type: 'recebida', date: '2024-04-10', from: 'A', to: 'B' },
    { id: 2, type: 'ofertada', date: '2024-03-15', from: 'B', to: 'C' },
    // Add more ride history data as needed
  ];

  // Extract unique years and months from the ride history
  const anos = Array.from(new Set(historico.map(ride => ride.date.split('-')[0])));
  const meses = Array.from(new Set(historico.map(ride => ride.date.split('-')[1])));

  // Filter ride history by selected Ano and Mes
  const filtroHistorico = historico.filter(ride => {
    if (anoSelecionado && mesSelecionado) {
      const [Ano, Mes] = ride.date.split('-');
      return Ano === anoSelecionado && Mes === mesSelecionado;
    }
    return true;
  });

  const groupByDay = (historico) => {
    const grouped = {};
    historico.forEach((item) => {
      const date = item.date;
      if (!grouped[date]) {
        grouped[date] = [];
      }
      grouped[date].push(item);
    });
    return grouped;
  };

  const historicoAgrupado = groupByDay(filtroHistorico);

  return (
    <BackGround>
      <View style={{ 
        flexDirection: 'row', 
        justifyContent: 'space-around', 
        marginBottom: 30, 
        width:'100%'       
        }}>
        <View style={{ flex: 1 }}>
          <CustomButton 
            fontSize={20} 
            title="RECEBIDAS" 
            backgroundColor={selectedOption === 'recebida' ? "#E57A4B" : "#FFFFFF"} 
            textColor={selectedOption === 'recebida' ? "#FFFFFF" : "#E57A4B"}   
            onPress={() => setSelectedOption('recebida')}>
            <Text style={selectedOption === 'recebida' ? styles.botaoSelecionado : styles.botaoNSelecionado}>Recebida</Text>
          </CustomButton>
        </View>
        <View style={{ flex: 1 }}>
          <CustomButton 
            fontSize={20} 
            title="OFERTADAS" 
            backgroundColor={selectedOption === 'ofertada' ? "#E57A4B" : "#FFFFFF"} 
            textColor={selectedOption === 'ofertada' ? "#FFFFFF" : "#E57A4B"}  
            onPress={() => setSelectedOption('ofertada')}>
            <Text style={selectedOption === 'ofertada' ? styles.botaoSelecionado : styles.botaoNSelecionado}>Ofertada</Text>
          </CustomButton>
        </View>
      </View>

      <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginBottom: 30 }}>
        {/* Ano filter */}
        <DropDownPicker
          items={anos.map(ano => ({ label: ano, value: ano }))}
          placeholder="ANO"
          containerStyle={{ height: 40, width: '45%' }}
          style={{ backgroundColor: '#E57A4B', borderColor: '#E57A4B' }}
          itemStyle={{ justifyContent: 'flex-start' }}
          dropDownStyle={{ backgroundColor: '#E57A4B' }}
          onChangeItem={item => setAnoSelecionado(item.value)}
          textStyle={{ color: '#FFFFFF', fontSize:20, fontWeight:'bold' }}
          zIndex={5000}
        />
        {/* Mes filter */}
        <DropDownPicker
          items={meses.map(mes => ({ label: mes, value: mes }))}
          placeholder="MÊS"
          containerStyle={{ height: 40, width: '45%' }}
          style={{ backgroundColor: '#E57A4B', borderColor: '#E57A4B'}}
          itemStyle={{ justifyContent: 'flex-start' }}
          dropDownStyle={{ backgroundColor: '#E57A4B' }}
          onChangeItem={item => setMesSelecionado(item.value)}
          textStyle={{ color: '#FFFFFF', fontSize:20, fontWeight:'bold' }}
          zIndex={4000}
        />
      </View>


    <View style={{ height: 650, marginBottom:65}}>
        <FlatList
            style={{ backgroundColor: '#E57A4B' }}
            data={filtroHistorico}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item }) => (
            <View style={{ margin: 30, marginVertical: 10 }}>
                <Text style={[styles.textList]}>
                {item.date} - {item.type === 'recebida' ? 'recebida' : 'ofertada'} - From: {item.from} - To: {item.to}
                </Text>
            </View>
            )}
            ListEmptyComponent={<Text style={[styles.textList, { color: '#5A5151' }]}>No rides found.</Text>}
        />
</View>

    </BackGround>
  );
};

const styles = StyleSheet.create({
  text: {
    color: 'white',
    fontSize: 30
  },
  botaoSelecionado: {
    color: '#FFFFFF',
    fontWeight: 'bold'
  },
  botaoNSelecionado: {
    color: '#E57A4B'
  },
  textList:{
    color: '#5A5151',
    fontSize: 20
  },
});

export default Historico;
