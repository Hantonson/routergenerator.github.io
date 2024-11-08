import {StyleSheet, Text, View} from "react-native";


const Card = ({title, children, titlePosition, visible}) => {
    const position = (titlePosition === 'right') ? 'flex-end'
                                : (titlePosition === 'center') ? 'center'
                                : 'flex-start'
    const display = visible ? 'flex' : 'none'
    return(
        <View style={[styles.card,{display: display}]}>
            <View style={[styles.cardHeader , {alignItems: position}]}>
                <Text style={styles.cardTitle}>{title}</Text>
            </View>
            <View style={styles.divider} />
            <View style={styles.cardBody}>
                {children}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#303030',
        alignItems: 'center',
        justifyContent: 'center',
    },
    card: {
        backgroundColor: '#4a4a4a',
        padding: 20,
        marginVertical: 10,
        width: '40%',
        borderRadius: 8,
        maxHeight: '80%'
    },
    cardHeader: {
        paddingVertical: 10,
        paddingHorizontal: 15,
    },
    cardTitle: {
        fontSize: 20,
        color: '#fff',
        marginBottom: 5,
    },
    divider: {
        height: 1,
        backgroundColor: '#fff',
        marginVertical: 10,
        width: '90%',
        alignSelf: 'center',
    },
    cardBody: {
        paddingHorizontal: 15,
        flex: 1
    },
    generateButton: {
        backgroundColor: '#4a4a4a',
        padding: 15,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 20,
        width: '90%',
    },
});

export { Card }