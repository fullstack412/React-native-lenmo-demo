import { white } from "ansi-colors";

export default {
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
    paddingBottom: 15
  },
  container1: {
    flex: 1,
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 30,
    paddingBottom: 15,
    flexDirection: 'row', 
  },
  container2: {
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 15,
    paddingBottom: 10,
  },
  cardItem: {
    paddingLeft: 25,
    backgroundColor: "transparent",
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  },
  headerLeft: {
    flex: 0.3,
    marginLeft: 15
  },
  headerBody: {
    flex: 0.4
  },
  textBody:{
    alignSelf: "center",
    color: 'white',
    fontSize: 35,
    fontFamily: "Avenir-Medium"
  },
  headerRight: {
    flex: 0.3
  },
  yourstory: {
    imageWidth: 70,
    marginTop: 10,
    textColor: 'white',
    borderRadius:5, 
    borderWidth:2, 
    borderColor:'none', 
    padding:2
  },
  activeUser: {
    imageWidth: 80,
    marginTop: 0,
    textColor: 'gray',
    borderRadius:5, 
    borderWidth:2, 
    borderColor:'white', 
    padding:2
  },
  inactiveUser: {
    imageWidth: 80,
    marginTop: 0,
    textColor: 'gray',
    borderRadius:5, 
    borderWidth:2, 
    borderColor:'gray', 
    padding:2
  },
  avatarImg: {
    width:70, 
    height:70,
    borderRadius:35,
    backgroundColor: '#5D6AFF'
  },
  avatarOuter: {
    marginTop: 10,
    paddingTop:10,
    paddingLeft:10,
    width:90, 
    height:90, 
    borderRadius:45,
    backgroundColor: '#92C2FF'
  },
  lenmeScoreContainer: {
    flexDirection: 'row', 
    marginTop: 20
  },
  lenmeScoreContent: {
    flexDirection: 'row', 
    marginTop: 10, 
    alignItems: 'center', 
    height: 27, 
  },
  scoreText: {
    fontSize: 10, 
    color: '#9B9B9B',
    fontFamily: "Avenir-Medium"
  },
  deleteButton: {
    justifyContent: 'center', 
    height: 48, width: '100%', backgroundColor: 'white', shadowColor: 'gray',
    borderRadius: 5,
    marginTop: 40,
    marginBottom: 15,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5
  },
  purpleText: {
    color:'#BD2EFF', 
    fontSize:15,
    fontFamily: "Avenir-Medium"
  },
  grayText: {
    color:'#9B9B9B', 
    fontSize:15,
    fontFamily: "Avenir-Medium"
  },
  grayTextInterest: {
    color:'#9B9B9B', 
    fontSize:15,
    fontFamily: "Avenir-Medium",
    marginTop: 5,
  },
  blackTextSmallAmount: {
    fontSize: 20,
    color:'black', 
    fontFamily: "Avenir-Medium"
  },
  blackTextLargeAmount: {
    marginTop: -3, 
    fontSize: 30,
    color:'black', 
    fontFamily: "Avenir-Medium"
  },
  blackTextSmallPriod: {
    fontSize: 20,
    color:'black', 
    fontFamily: "Avenir-Medium"
  },
  blackTextLargePriod: {
    fontSize: 30,
    color:'black', 
    fontFamily: "Avenir-Medium"
  },
  blackTextSmall: {
    fontSize: 15,
    marginTop:3,
    color:'black', 
    fontFamily: "Avenir-Medium"
  },
  sliderLabel: {
    fontFamily: "Avenir-Medium",
    paddingLeft: 5,
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'space-between', 
  },
  deleteButtonText: {
    fontSize: 15,
    fontFamily: "Avenir-Medium",
    color: 'red'
  },
  makeofferButtonText: {
    backgroundColor: 'transparent',
    fontSize: 15,
    color: 'white',
    fontFamily: "Avenir-Medium"
  }
};
