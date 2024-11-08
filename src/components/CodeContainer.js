import {Card} from "./Card";
import {StyleSheet, Text, View} from "react-native";
import {ScrollView} from "react-native-web";

const CodeContainer = ({codeShown, routerTitle, code}) =>  {
    return(
           <Card title={(routerTitle || 'New Router') + '.ts'} visible={codeShown} titlePosition={'center'}>
               <ScrollView>
                   <Text style={styles.text}>{code}</Text>
               </ScrollView>
           </Card>
    );
}

const styles = StyleSheet.create({
    text: {
        flex: 1,
        backgroundColor: '#303030',
        color: '#fff',
        padding: 10,
        borderRadius: 4,
    }
});

export default CodeContainer;