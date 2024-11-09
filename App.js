import {Pressable, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {CardContainer} from "./src/components/CardContainer";
import {useState} from "react";
import CodeContainer from "./src/components/CodeContainer";

export default function App() {
  const [codeShown, setCodeShown] = useState(false);
  const [routerTitle, setRouterTitle] = useState('');
  const [code, setCode] = useState('');
  const [endpoints, setEndpoints] = useState([]);

  const generateCode = (routerName, endpoints) => {
    let code = `import express, { Request, Response } from \'express\'`
                      + `\n\nconst ${routerName} = express.Router();`;
    endpoints.forEach((endpoint) => {
      code += `/**\n *@author:\n *@description:\n *@returns:\n */\n` +
          `${routerName}.${endpoint.operation.toLowerCase()}('${endpoint.route}', async (req : Request, res : Response)=>{\n\t//TODO: Code goes here\n});`
      code += '\n\n'
    })
    code +=`export default ${routerName}`
    return code;
  }

  const handleGenerate = () => {
    setCode(generateCode(routerTitle ||'router', endpoints))
    setCodeShown(true);
  };

  return (
    //<View style={styles.container}>
    //  <CardContainer />
    //  <StatusBar style="auto" />
    //</View>
    <SafeAreaView style={styles.container}>
      <View style={{flex:1, flexDirection: 'row', width: '100%', justifyContent: 'space-evenly', alignItems: 'center'}}>
        <CardContainer routerTitle={routerTitle}
                       setRouterTitle={setRouterTitle}
                       endpoints={endpoints}
                       setEndpoints={setEndpoints}
        />
        <CodeContainer codeShown={codeShown}
                       routerTitle={routerTitle}
                       code={code}
        />
      </View>
      <Pressable style={styles.generateButton} onPress={handleGenerate}>
        <Text style={styles.buttonText}>GENERATE</Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#303030',
    alignItems: 'center',
    justifyContent: 'center',
  },
  generateButton: {
    backgroundColor: '#4a4a4a',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    margin: 20,
    width: '90%',
  },buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});
