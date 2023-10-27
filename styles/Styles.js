const { StyleSheet } = require("react-native");

const BasicStyle = StyleSheet.create({
    container: {
        backgroundColor:'#f69f9f',
        borderWidth: 1,
        borderRadius:10,
        margin:10,
        padding:15,
        
    },
    header:{
        fontSize:24,
        fontWeight:'bold',
        color:'#340505',
        paddingBottom: 10,
        margin:10,
        alignSelf:'center'
    },
    label:{
        color:'#631e1e',
        fontSize:18,
        paddingLeft: 10
    },
    textInput:{
        paddingLeft:10,
        borderWidth:1,
        borderRadius:5,
        padding:10,
        margin:10,
        marginTop:5,
        fontSize:18
    },
    result:{
        paddingLeft:10,
        padding:10,
        margin:10,
        marginTop:5,
        fontSize:18
    },
    submit:{
        borderWidth:1,
        borderRadius:5,
        color:'#ffffff',
        backgroundColor:'#631e1e',
        margin: 10,
        padding:15,
        textAlign:'center',
        fontSize: 22,
        fontWeight:'bold'
    }
})
export{BasicStyle};