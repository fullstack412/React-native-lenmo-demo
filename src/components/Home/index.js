import React, { Component } from "react";
import { 
  Header, 
  Left, 
  Container, 
  Button, 
  Body, 
  Right, 
  Icon, 
  Text, 
  Content,
  Card,
  CardItem,
  H3
} from "native-base";

import { 
  StatusBar, 
  Platform, 
  Dimensions, 
  View,
  ImageBackground
} from "react-native";

import _ from "lodash";
import styles from "./styles";

export default class Home extends Component {

  handleLoanDetailPress = () => {
    this.props.navigation.navigate("Loandetail");
  }

  render() {
    return (
      <Container style={styles.container}>
        <ImageBackground source={require("../../../assets/images/home-header-bg.png")} style={{width: "100%", height: 210}}> 
          <StatusBar translucent={true}/>
          <Header
            noShadow
            iosBarStyle={"dark-content"}
            androidStatusBarColor={"#000"}
            style={{ 
              backgroundColor: 'transparent',
              borderBottomWidth: 0,
              height: Platform.OS === 'ios' ? 90 : 90,
              paddingTop: Platform.OS === 'ios' ? 40 : 40,
              paddingBottom: Platform.OS === 'ios' ? 0 : 0, }}>
            <Left style={styles.headerLeft}>
              <Button transparent onPress={() => this.props.navigation.openDrawer()}>
                <Icon name="ios-archive" style={{ color: "white" }}/>
              </Button>
            </Left>
            <Body style={styles.headerBody}>
              {/* <Title style={styles.textBody}>REAL</Title> */}
            </Body>
            <Right style={styles.headerRight}/>
          </Header>
          <View style={{ height: 120 }}>
            <Text style={{color: 'white', fontSize: 30, marginLeft: 25, marginTop: 35}}>$0.00</Text>
          </View>
        </ImageBackground>          
        <Content>
          <Card style={styles.container}>
            <CardItem>
                <Body style={styles.cardBody}>
                    <H3>Welcome, Dd!</H3>
                    <Text style={styles.cardText}>
                        Hi Dd, you don't have any outstanding loans. Checking your loan eligibility won't impact your credit score.
                    </Text>
                    <Button style={styles.cardButton} onPress={this.handleLoanDetailPress}>
                        <Text>Loan request detail page</Text>
                    </Button>
                </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
