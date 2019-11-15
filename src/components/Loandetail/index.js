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
  View,
  Image,
  TouchableHighlight,
  Dimensions,
  FlatList,
  Slider
} from "react-native";

import LoanCard from '../Card'
import _ from "lodash";
import styles from "./styles";
import { LinearGradient } from 'expo-linear-gradient';

const iconYellow = require("../../../assets/images/circleone-icon.png");
const iconGreen = require("../../../assets/images/leave-icon.png");
const iconColor = require("../../../assets/images/circlecolor-icon.png");
const imgSlider = require("../../../assets/images/slider/slider.png");
const imgSliderLeft = require("../../../assets/images/slider/slider-left.png");
const imgSliderRight = require("../../../assets/images/slider/slider-right.png");

const imgSliderTrack = require("../../../assets/images/slider/slider-track.png");

const BATCH_SIZE = 24;
const NUM_COLUMNS = 2;
const THUMBNAIL_WIDTH = (Dimensions.get('window').width-50) / NUM_COLUMNS;
const DETAIL_WIDTH = Dimensions.get('window').width;

const loanList = [
  {
    value: "1 yr 6 mos",
    type: 0
  },
  {
    value: "100%",
    type: 1
  },
  {
    value: "2",
    type: 2
  },
  {
    value: "11%",
    type: 3
  },
  {
    value: "$53,000/yr",
    type: 4
  },
  {
    value: "3",
    type: 5
  }
  
];

export default class LoanReqDetail extends Component {

  handleUserPress = (userData) => {
    this.props.navigation.navigate("Userprofile", userData);
  }

  requestHeaderBar() {
    return (
      <Card transparent>
        <CardItem style={styles.cardItem}>
            <View style={styles.avatarOuter}>
              <Image source={require('../../../assets/images/avatar-img.png')} style={styles.avatarImg}/>
            </View>
            <Body style={{padding: (10, 0, 0, 20)}}>
              <H3 style={{fontFamily: "Avenir-Medium"}}>IO</H3>
              <View style={styles.lenmeScoreContainer}> 
                <View>
                  {/* <Body> */}
                    <Text style={styles.scoreText}>LENME SCORE</Text>
                    <View style={styles.lenmeScoreContent}>
                      <Image source={iconGreen}/>
                      <Text style={{fontFamily: "Avenir-Medium"}}>  73  </Text>
                      <Image source={iconYellow}/>
                    </View>
                  {/* </Body> */}
                </View>
                <View style={{marginLeft: 20}}>
                  {/* <Body> */}
                    <Text style={styles.scoreText}>CREDIT SCORE</Text>
                    <View style={styles.lenmeScoreContent}>
                      <Image source={iconColor}/>
                      <Text style={{fontFamily: "Avenir-Medium"}}>  500-630  </Text>
                      <Image source={iconYellow}/>
                    </View>
                  {/* </Body> */}
                </View>
              </View>
              <Text style={{marginTop: 10, fontSize: 9.6, color: '#9B9B9B', fontFamily: "Avenir-Medium"}}>Vantage Score 4.0</Text>
            </Body>
        </CardItem>
      </Card>
    )
  }

  gradientButton() {
    return (
      <TouchableHighlight onPress={() => this.props.navigation.pop()}>
        <LinearGradient
          start={{x: 0, y: 0}} end={{x: 1, y: 0}}
          colors={['#568FFC', '#BF2BFF']}
          style={{ height: 48, padding: 15, alignItems: 'center', borderRadius: 5 }}>
              <Text style={styles.makeofferButtonText}>Make Offer</Text>
        </LinearGradient>
      </TouchableHighlight>
    )
  }

  renderSlider() {
    return (
      <View style={{width: '100%', height: 40, marginTop: 30}}>
        <Slider
          style={{width: '100%', height: 40}}
          trackImage={imgSliderTrack}
          // minimumTrackImage={imgSliderTrack}
          // maximumTrackImage={imgSlider}
        />
        <View style={styles.sliderLabel}>
          <Text style={styles.grayText}>0%</Text>
          <Text style={styles.grayText}>100%</Text>
        </View>
      </View>
    )
  }

  getItemLayout = (data, index) => ({
    length: 100,
    offset: THUMBNAIL_WIDTH * index,
    index,
  });

  renderItem = ({ item: rowData }) => {
    const columnIndex = rowData.type % 2;
    return (
      <LoanCard loanData={rowData}/>
    );
  }

  render() {
    return (
      <Container style={styles.container}>
        <StatusBar translucent={true}/>
        <Header
          noShadow
          iosBarStyle={"dark-content"}
          androidStatusBarColor={"#000"}
          style={{ 
            backgroundColor: 'transparent',
            borderBottomWidth: 0,
            height: Platform.OS === 'ios' ? 70 : 70,
            paddingTop: Platform.OS === 'ios' ? 40 : 40,
            paddingBottom: Platform.OS === 'ios' ? 0 : 0, }}>
          <Left style={styles.headerLeft}>
            <TouchableHighlight onPress={() => this.props.navigation.pop()}>        
              <Image
                source={require("../../../assets/images/btn-back.png")}
              />
            </TouchableHighlight>
          </Left>
          <Body style={styles.headerBody}>
            {/* <Title style={styles.textBody}>REAL</Title> */}
          </Body>
          <Right style={styles.headerRight}/>
        </Header>
        <Content >
          {this.requestHeaderBar()}
          <View style={{marginBottom: 25}}>
            <FlatList
              data={loanList}
              renderItem={this.renderItem}
              keyExtractor={(item, index) => index}
              getItemLayout={this.getItemLayout}
              maxToRenderPerBatch={BATCH_SIZE}
              windowSize={BATCH_SIZE}
              numColumns={NUM_COLUMNS}
              removeClippedSubviews
              columnWrapperStyle={{ marginLeft: 25, marginRight: 25}}
              onEndReachedThreshold={1}
              />
          </View>
          <View style={styles.container1}>
            <View style={{width: '50%'}}>
              <Text style={styles.purpleText}>Investment Amount</Text>
              <View style={{flex: 1, flexDirection:'row', marginTop:15}}>
                <Text style={styles.blackTextSmallAmount}>$</Text>
                <Text style={styles.blackTextLargeAmount}> 970</Text>
              </View>
            </View>
            <View style={{width: '50%'}}>
              <Text style={styles.purpleText}>Payback Priod</Text>
              <View style={{flex: 1, flexDirection:'row', marginTop:12}}>
                <Text style={styles.blackTextLargePriod}>1</Text>
                <Text style={styles.blackTextSmallPriod}> month</Text>
              </View>
            </View>
          </View>

          <View style={styles.container2}>
              <Text style={styles.purpleText}>Annual Interests</Text>
              <Text style={styles.grayTextInterest}>Recommended interest rate: 3%</Text>
              <View style={{flex: 1, flexDirection:'row', marginTop: 12}}>
                <Text style={styles.blackTextLargePriod}>4</Text>
                <Text style={styles.blackTextSmallPriod}> %</Text>
              </View>
              
              {this.renderSlider()}

              <Button style={styles.deleteButton}>
                <Text style={styles.deleteButtonText}>
                  Delete
                </Text>
              </Button>
              {this.gradientButton()}
          </View>
        </Content>
      </Container>
    );
  }
}
