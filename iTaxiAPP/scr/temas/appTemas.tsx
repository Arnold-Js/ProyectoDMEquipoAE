import { StyleSheet } from "react-native";


export const colores =  {
    primary:'#FF00AA'
}

export const styles = StyleSheet.create({
    marginGlobal:{
        marginHorizontal: 20
    },
    title: {
        fontSize: 30,
        marginBottom: 10
    },
    botonGrande:{
        width: 170,
        height: 100,
        backgroundColor: 'red',
        borderRadius: 20,
        alignItems: 'center',
        marginRight: 20,
        marginTop: 10,
        justifyContent: 'center'
    },
    textoBoton:{
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold'
    },
    avatarContainer:{
        alignItems: 'center',
        marginTop: 20
    },
    avatar: {
        width: 150,
        height: 150,
        borderRadius: 100
    },
    menuContainer:{
        marginVertical: 30,
        marginHorizontal: 20,
        // alignItems: 'center'
    },
    menuBoton:{
        marginVertical: 10
    },
    menuTexto:{
        fontSize: 20
    }

    
});