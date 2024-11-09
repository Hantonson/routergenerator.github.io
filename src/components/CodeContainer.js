import {Card} from "./Card";
import {Pressable, StyleSheet, Text, View} from "react-native";
import {ScrollView} from "react-native-web";
import {useState} from "react";

const CodeContainer = ({codeShown, routerTitle, code}) =>  {

    const [visible, setVisible] = useState(false);
    const [hintText, setHintText] = useState("");

    const copyCode = async ()=>{

        try{
            await navigator.clipboard.writeText(code);
            setHintText("Copied!");
        } catch (e) {
            setHintText("Couldn't copy!");
        } finally {
            setVisible(true)
            setTimeout(()=>{
                setVisible(false);
            }, 2000);
        }
    }

    return(
           <Card title={(routerTitle || 'New Router') + '.ts'} visible={codeShown} titlePosition={'center'}>
               <ScrollView>
                   <View style={[styles.hint, {display: (visible) ? 'flex': 'none'}]}>
                       <Text style={[styles.text, {fontWeight:'bold'}]}>{hintText}</Text>
                   </View>
                   <Pressable onPress={copyCode}>
                    <Text style={styles.text}>{code}</Text>
                   </Pressable>
               </ScrollView>
           </Card>
    );
}

const styles = StyleSheet.create({
    hint:{
        zIndex:1000,
        borderRadius: 10,
        backgroundColor: '#303030',
        position: 'absolute',
        marginTop: 5,
        marginLeft: '40%',
        borderColor: '#4a4a4a',
        borderWidth: 2,

    },
    text: {
        flex: 1,
        backgroundColor: '#303030',
        color: '#fff',
        padding: 10,
        borderRadius: 4,
    }
});

export default CodeContainer;