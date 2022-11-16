import React from 'react';
import { SafeAreaView, View, ScrollView, StyleSheet } from 'react-native';
import {Text, Card} from 'react-native-elements';

function Carde(){
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.container}>
          <Card style = {{}}>
            <Card.Title>PICANHA NA BRASA</Card.Title>
            <Card.Divider />
            <Card.Image
              style={{ padding: 0, borderRadius: 10}}
              source={require('./assets/picanha.jpg')}
            />
            <Text style={{ margin: 10 }}>
              
              Ingredientes:
              {'\n'}
              {'\n'}
              1 peça de Picanha;{'\n'}
              Sal grosso e pimenta do reino a gosto;{'\n'}
              Carvão e um pouco de lenha frutífera.{'\n'}
              {'\n'}

              Modo de Preparo:
              {'\n'}
              {'\n'}
              1) Adicione sal grosso e a pimenta do reino em uma tigela e misture. Com  uma faca, fure a picanha no lado que há gordura e  tempere com mix de sal grosso e pimenta do reino.{'\n'}{'\n'}
              2) Insira a picanha no espeto ou em uma grelha. Coloque a gordura para cima e leve para assar na churrasqueira. Deixe a 15 cm da brasa por 10 minutos para selar a carne.{'\n'}{'\n'}
              3) Vire a gordura para baixo e deixe por mais 10 minutos. Após esse tempo será o momento de subir a grelha e deixá-la 40cm sobre a brasa.{'\n'}{'\n'}
              4) Deixe assar por 40 minutos nessa altura com a gordura para cima. Após os 40 minutos, vire a carne novamente com a gordura para baixo. Neste momento é a hora de deixar a gordura bem torradinha e ficar com aspecto dourado.{'\n'}{'\n'}
              5) Quando ela estiver já bem douradinha retire da brasa e deixe descansar por 5 minutos. Comece a cortar da parte menor para parte maior em fatias finas e sirva em seguida.{'\n'}{'\n'}
              6) Agora é só aproveitar! Bom Churras!
            </Text>
          </Card>
          
          <Card>
            <Card.Title>CORAÇÃOZINHO DE GALINHA</Card.Title>
            <Card.Divider />
            <Card.Image
              style={{ padding: 0, borderRadius: 10 }}
              source={require('./assets/cora.jpg')}
            />
            <Text style={{ margin: 10 }}>  

            Ingredientes:
            {'\n'}
            {'\n'}
            1 kg de coração de frango{'\n'}
            8 folhas de louro{'\n'}
            1 e 1/2 colheres de sopa de orégano{'\n'}
            1 e 1/2 colheres de sopa de shoyo{'\n'}
            1 colher de sopa de tempero pronto para carne{'\n'}
            1 colher de sopa de pimenta moída{'\n'}
            1 colher de sopa de manteiga{'\n'}
            1 copo com água morna{'\n'}
            {'\n'}

            Modo de Preparo:
            {'\n'}
            {'\n'}
            1) Limpe os corações.{'\n'}{'\n'}
            2) Retire o grosso da gordura saturada e as veias mais grossas.{'\n'}{'\n'}
            3) Cuide para retirar qualquer resquício de sangue coagulado.{'\n'}{'\n'}
            4) Deixe um pouco da gordura.{'\n'}{'\n'}
            5) Dissolva a manteiga na água morna.{'\n'}{'\n'}
            6) Coloque os corações numa tigela e adicione o restante dos ingredientes.{'\n'}{'\n'}
            7) Misture bem (usando as mãos mesmo) e cubra, selando bem com plástico filme (PVC).{'\n'}{'\n'}
            8) Deixar na geladeira de um dia para o outro, para o tempero penetrar bem.{'\n'}{'\n'}
            9) Retirar e fazer espetinhos na hora de colocar no fogo.{'\n'}{'\n'}
            10) Quando estiverem bem douradinhos retire da brasa e sirva em seguida.{'\n'}{'\n'}
            11) Agora é só aproveitar! Bom Churras!
            </Text>
            </Card>

            <Card>
            <Card.Title>COSTELINHA DE PORCO</Card.Title>
            <Card.Divider />
            <Card.Image
              style={{ padding: 0, borderRadius: 10 }}
              source={require('./assets/Costelinha.jpg')}
            />
            <Text style={{ margin: 10 }}>  

            Ingredientes:
            {'\n'}
            {'\n'}
            1 ripa de costelinha de porco{'\n'}
            Limão{'\n'}
            Sal grosso{'\n'}
            Farofa ou parmesão ralado{'\n'}
            {'\n'}

            Modo de Preparo:
            {'\n'}
            {'\n'}
            1) Espete a ripa em zigue-zague, faça alguns furos na carne com um garfo ou a ponta de uma faca.{'\n'}{'\n'}
            2) Esfregue uma das metades do limão, pressionando-a para extrair o suco, por toda carne da ripa e nas pontas dos ossos.{'\n'}{'\n'}
            3) Coloque sal grosso a gosto (não esqueça das pontas dos ossos).{'\n'}{'\n'}
            4) Ponha sobre o fogo (estenda sua mão a 30 cm do fogo e conte 4 segundos, esse é o fogo ideal) com os ossos para baixo todo o tempo.{'\n'}{'\n'}
            5) Quando a carne estiver pronta, faltando somente dourar, retire do fogo, bata o sal e polvilhe a carne com queijo ralado ou farinha.{'\n'}{'\n'}
            6) Volte com a carne para o fogo, dessa vez com a parte dos ossos para cima.{'\n'}{'\n'}
            7) Cuide para que não queime a farinha. Quando a farinha/queijo tiver formado uma casquinha, retire do fogo e bom apetite.{'\n'}{'\n'}
            8) Agora é só aproveitar! Bom Churras!
            </Text>
            </Card>

            <Card style={{ borderRadius: 20}}>
            <Card.Title>BIFE DE COUVE-FLOR</Card.Title>
            <Card.Divider />
            <Card.Image
              style={{ padding: 0, borderRadius: 10 }}
              source={require('./assets/couve.jpg')}
            />
            <Text style={{ margin: 10 }}>  

            Ingredientes:
            {'\n'}
            {'\n'}
            2 unidades de couve-flor médias ou grandes{'\n'}
            2 colheres de sopa de páprica doce{'\n'}
            50 gramas de avelãs{'\n'}
            1/4 de xícara de chá de vinagre de maçã{'\n'}
            Meio maço de salsa picada{'\n'}
            Azeite a gosto{'\n'}
            Sal a gosto{'\n'}
            {'\n'}

            Modo de Preparo:
            {'\n'}
            {'\n'}
            1) Corte a couve-flor ao meio e, depois, retire a parte de fora (redonda) para que fique reto dos dois lados. Regue com azeite.{'\n'}{'\n'}

            2) Transfira para uma assadeira perfurada. Salpique páprica. Regue com azeite novamente e tempere com sal. Leve à brasa para que fique dourada. Reserve. Com o restante da couve-flor, pique e reserve.{'\n'}{'\n'}

          3) Numa outra assadeira perfurada, coloque as avelãs para tostar. Assim que sair da brasa, coloque por cima da couve-flor picada. Tempere com sal e azeite. Pique mais uma vez para misturar tudo bem picado.{'\n'}{'\n'}

          4) Transfira para uma travessa que possa ir ao forno. Espalhe toda a couve-flor com avelã no fundo. Regue com o vinagre. Arrume os pedaços grandes de couve-flor por cima e leve ao forno para gratinar.{'\n'}{'\n'}

          5) Retire do forno e reserve a para acrescentar o molho romesco feito com caqui na couve-flor picada. Por cima do molho, coloque a salsa picada.{'\n'}{'\n'}
          6) Agora é só aproveitar! Bom Churras!
            </Text>
            </Card>

            <Card>
            <Card.Title>MELANCIA NA BRASA</Card.Title>
            <Card.Divider />
            <Card.Image
              style={{ padding: 0, borderRadius: 10 }}
              source={require('./assets/melancia.jpg')}
            />
            <Text style={{ margin: 10 }}>  

            Ingredientes:
            {'\n'}
            {'\n'}
            ¼ de melancia cortada em fatias de 2cm de espessura{'\n'}
            Azeite a gosto{'\n'}
            Sal a gosto{'\n'}
            Pimenta do reino a gosto{'\n'}

            Modo de Preparo:
            {'\n'}
            {'\n'}
            1) Bezunte a melancia com azeite e polvilhe um pouco de sal e pimenta. Coloque na grelha quente por três a cinco minutos de cada lado.{'\n'}{'\n'}
            2) Agora é só aproveitar! Bom Churras!{'\n'}{'\n'}
            </Text>
            </Card>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    backgroundColor: '#621708',
  },



});

export default Carde;