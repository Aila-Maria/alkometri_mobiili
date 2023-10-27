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
        fontSize:30,
        fontWeight:'bold',
        color:'#340505',
        paddingBottom: 10,
        margin:10,
        alignSelf:'center'
    },
    label:{
        color:'#631e1e',
        fontSize:18,
        fontWeight:'bold',
        paddingLeft: 10,
        paddingBottom:5,
        paddingTop:10
    },
    textInput:{
        paddingLeft:10,
        borderWidth:1,
        borderRadius:5,
        padding:10,
        margin:10,
        marginTop:5,
        fontSize:18,
        backgroundColor:'#fdfbfb'
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
    },
    thumbEnabledColor:'#f69f9f',
    thumbDisabledColor:'#ffffff',
    trackEnabledCOlor:'#631e1e',
    trackDisabledColor:'#ffffff',
    radioButton:{
        flexDirection:'row',
        alignItems:'center',
    },
    iStyleColor:{
        color:'#f69f9f'
    }
    ,
    lBBColor: '#631e1e',
    rBBColor:'#631e1e',
    numBorColor: 'black',
    numBackgroundColor:{
        backgroundColor:'#ffffff'
    }


})

const DarkStyle = StyleSheet.create({
    container:{
        ...BasicStyle.container,
        backgroundColor:'#252424'
    },
    header:{
        ...BasicStyle.header,
        color:'#f69f9f'
    },
    label:{
        ...BasicStyle.label,
        color:'#f69f9f'
    },
    textInput:{
        ...BasicStyle.textInput
    },
    result:{
        ...BasicStyle.result
    },
    submit:{
        ...BasicStyle.submit,
    },
    radioButton:{
        ...BasicStyle.radioButton,
    },
    iStyleColor:{
        color:'#631e1e'
    },
    numBackgroundColor:{
        ...BasicStyle.numBackgroundColor
    },
    lBBColor: '#f69f9f',
    rBBColor:'#f69f9f',

})


export{BasicStyle, DarkStyle};