import {useEffect, useState} from "react";
import {Pressable, StyleSheet, Text, View} from "react-native";
import {Field} from "./Field";

const EndpointContainer = ({index, endpoint, removeEndpoint, onRouteChange})=>{
    const [operation, setOperation] = useState(endpoint.operation);

    useEffect(() => {
        endpoint.operation = operation;
    },[operation]);

    return(
        <View key={endpoint.key} style={styles.endpointContainer}>
            <Field
                key={endpoint.key}
                label={`Endpoint ${index + 1}`}
                value={endpoint.route}
                onChangeText={(value)=>onRouteChange(value, index)}
                placeholder={`Route`}
                showDropdown
                operation={operation}
                setOperation={setOperation}

            />
            <Pressable style={styles.deleteButton} onPress={() => removeEndpoint(endpoint.key)}>
                <Text style={styles.deleteButtonText}>X</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    endpointContainer: {
        marginBottom: 10,
        paddingHorizontal: 10,
        flexDirection: 'row',
        height:"auto",
        alignItems: 'center',

    },
    deleteButton: {
        width: 'auto',
        height: 'auto',
        alignItems: 'center',
        marginLeft: 10,
        backgroundColor: '#ff4d4d',
        padding: 5,
        borderRadius: 4,
    },
    deleteButtonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    label: {
        color: '#fff',
        fontSize: 16,
        marginBottom: 5,
    },
    input: {
        backgroundColor: '#303030',
        color: '#fff',
        padding: 10,
        borderRadius: 4,
    },
});

export {EndpointContainer};