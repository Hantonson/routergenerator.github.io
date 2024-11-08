import {Pressable, Text, StyleSheet} from "react-native"
import {Field} from "./Field";
import {FieldWrapper} from "./FieldWrapper";
import {Card} from "./Card";

const CardContainer = ({routerTitle, setRouterTitle, endpoints, setEndpoints}) =>{



    const addEndpoint = () => {
        setEndpoints([...endpoints, { key: Date.now().toString(), route: '/', operation: 'GET' }]);
    };





    return(
        <Card title={routerTitle || "New Router"} visible>
            <Field label="Router Name" value={routerTitle} onChangeText={setRouterTitle} placeholder={'Router Name'}/>
            <FieldWrapper endpoints={endpoints} setEndpoints={setEndpoints} />
            <Pressable style={styles.newEndpointButton} onPress={addEndpoint}>
                <Text style={styles.buttonText}>+ New Endpoint</Text>
            </Pressable>
        </Card>

    )
}

const styles = StyleSheet.create({
    newEndpointButton: {
        alignSelf: 'flex-start',
        marginBottom: 10,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
    },
});

export { CardContainer }