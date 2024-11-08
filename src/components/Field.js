import { StyleSheet, Text, TextInput, View } from "react-native"
import { Picker } from "react-native-web"

const Field = ({ label, value, onChangeText, showDropdown = false, placeholder, operation, setOperation }) => {

    const onValueChange = (value) => {
        setOperation(value);
    };

    return (
        <View style={styles.fieldContainer}>
            <Text style={styles.label}>{label}</Text>
            <View style={styles.inputContainer}>
                {showDropdown && (
                    <Picker
                        selectedValue={operation}
                        onValueChange={onValueChange}
                        style={styles.picker}
                    >
                        <Picker.Item label="GET" value="GET" />
                        <Picker.Item label="POST" value="POST" />
                        <Picker.Item label="PUT" value="PUT" />
                        <Picker.Item label="PATCH" value="PATCH" />
                        <Picker.Item label="DELETE" value="DELETE" />
                    </Picker>
                )}
                <TextInput
                    style={[styles.input, showDropdown && styles.inputWithPicker]}
                    placeholder={placeholder}
                    placeholderTextColor="#aaa"
                    value={value}
                    onChangeText={onChangeText}
                />
            </View>
        </View>
    );

}


const styles = StyleSheet.create({
    fieldContainer: {
        marginBottom: 10,
    },
    label: {
        color: '#fff',
        fontSize: 16,
        marginBottom: 5,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    picker: {
        width: 100,
        color: '#fff',
        backgroundColor: '#303030',
        marginRight: 10,
        borderRadius: 4,
    },
    input: {
        flex: 1,
        backgroundColor: '#303030',
        color: '#fff',
        padding: 10,
        borderRadius: 4,
    },
    inputWithPicker: {
        paddingLeft: 10,
    },
});

export { Field }