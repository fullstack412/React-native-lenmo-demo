import React, { Component } from "react";
import {
    Text,
    StyleSheet,
    Dimensions,
    View,
    Image
} from "react-native";

import {
    Card, 
    CardItem, 
    H3, 
    Body, 
    Button,
    Left,
    Right
} from 'native-base'

const detailType = ['PAYMENT HISTORY', 'CREDIT UTILIZATION', 'TOTAL ACCOUNTS', 'TOTAL ACCOUNTS', 'ANNUAL INCOME', 'DEROGATORY MARKS'];
const iconYellow = require("../../../assets/images/circleone-icon.png");

class LoanCard extends Component {

    render() {
        let loanType = this.props.loanData.type;
        const leftBorderColor = loanType > 1 ? styles.container1 : styles.container

        return (
            <View style={ leftBorderColor }>
                <View style={ styles.loanTypeOuter }>
                    <Text style={styles.loanType}>{detailType[loanType]}</Text>
                    <Image source={iconYellow}/>
                </View>
                <Text style={{fontSize: 20, fontFamily: "Avenir-Medium"}}>{this.props.loanData.value}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'white',
        borderRadius: 3,
        padding: (10, 10, 10, 13),
        margin: 5,
        height: 65,
        borderLeftColor: '#00D034',
        borderLeftWidth: 5,
        shadowColor: 'gray',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
    },
    container1: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'white',
        borderRadius: 3,
        padding: (10, 10, 10, 13),
        margin: 5,
        height: 65,
        borderLeftColor: '#FFA831',
        borderLeftWidth: 5,
        shadowColor: 'gray',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
    },
    loanTypeOuter: {
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'space-between', 
    },
    loanType: {
        fontSize: 10,
        color: '#9B9B9B',
        fontFamily: "Avenir-Medium"
    },
    cardBody: {
        padding: 5,
    },
    cardText: {
        marginTop: 10,
        color:"gray"
    },
    cardButton: {
        marginTop: 10,
    }
});

export default LoanCard;