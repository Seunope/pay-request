import React, {Component} from 'react';
import {Keyboard, Image, FlatList, StatusBar} from 'react-native';
import {
  Container,
  Content,
  Card,
  List,
  ListItem,
  Body,
  View,
  Text,
  Spinner,
  Icon,
  H3,
  Input,
  Item,
} from 'native-base';
import {FormatDate, GetDataFromStorage} from '../../../config/functions';
import Toast from 'react-native-simple-toast';
import styles from './style';
import {primaryColors} from '../../../config/theme';
import {TALK_ZONE_DETAILS, TALK_ZONE_COMMENT} from '../../../config/api/http';
import {primaryImage} from '../../../config/images';

export default () => {



  reply() {
    var messages = this.state.messages;
    messages.push({
      _id: Math.floor(Math.random() * 99999999999999999 + 1).toString(),
      sent: 'me',
      message: this.state.comment,
      image: this.state.myImage,
      username: this.state.userData.username,
    });
    this.setState({msg: '', messages: messages, comment: ''});
  }

  send() {
    if (this.state.comment.length > 0) {
      var messages = this.state.messages;
      messages.push({
        _id: Math.floor(Math.random() * 99999999999999999 + 1).toString(),
        sent: 'others',
        message: this.state.comment,
        image: this.state.myImage,
        username: this.state.userData.username,
      });
      this.setState({messages: messages, comment: ''});
    }
  }

  doSubmit = async () => {
    Keyboard.dismiss();
    const {comment, userData} = this.state;
    var msg;

    if (comment == null) {
      Toast.show('Type your response to continue', Toast.LONG);
      return;
    }

    var input = {
      message: comment,
      username: userData.username,
      category: userData.category,
      imagePath: userData.imagePath,
      id: this.props.navigation.getParam('postId'),
    };
    //console.log(input);

    this.setState({submitting: true});
    var responseData = await TALK_ZONE_COMMENT(input);
    this.setState({submitting: false});

    //console.log('responseData', responseData);
    if (responseData.status === 200) {
      msg = responseData.message;
      Toast.show(msg, Toast.LONG);

      if (responseData.code === 2) {
        if (this.state.owner === 'me') {
          this.reply();
        } else {
          this.send();
        }
      }
    } else if (responseData.error) {
      msg = responseData.error.message;
      Toast.show(msg, Toast.LONG);
    } else {
      msg = JSON.stringify(responseData);
      Toast.show(msg, Toast.LONG);
    }
    this.setState({submitting: false});
  };

  _renderItem = ({item}) => {
    //console.log(item.senderId);
    if (item.senderId) {
      //console.log('i washere');
      if (this.state.userData._id === item.senderId) {
        item.sent = 'me';
      }
    }

    if (item.sent === 'me') {
      return (
        <View style={styles.eachMsg} key={item._id}>
          <Image source={{uri: item.imagePath}} style={styles.userPic} />
          <View style={styles.msgBlock}>
            <Text note>
              {item.username} | {item.date ? FormatDate(item.date) : ''}
            </Text>
            <Text style={styles.msgTxt}>{item.message}</Text>
          </View>
        </View>
      );
    } else {
      return (
        <View style={styles.rightMsg} key={item._id}>
          <View style={styles.rightBlock}>
            <Text note style={{color: '#fff'}}>
              {item.username} | {item.date ? FormatDate(item.date) : ''}
            </Text>
            <Text style={styles.rightTxt}>{item.message}</Text>
          </View>
          <Image source={{uri: item.imagePath}} style={styles.userPic} />
        </View>
      );
    }
  };

  handleRefresh = () => {
    this.setState({refreshing: true});
    this.fetchRemoteCollection();
    this.setState({refreshing: false});
  };

//   fetchRemoteCollection = async () => {
//     var msg;
//     const input = {id: this.props.navigation.getParam('postId')}; //'5feb37c3bdbc9a0f174e0e4e'};
//     var responseData = await TALK_ZONE_DETAILS(input);
//     this.setState({loading: false});
//     console.log(responseData);

//     const {userData} = this.state;
//     if (responseData.status === 200) {
//       console.log('i dey here');
//       var ownerStatus = 'others';
//       var imagePath = primaryImage.defaultAvatar;

//       //console.log(user._id,  data.user._id)
//       try {
//         if (userData._id === responseData.data.user._id) {
//           ownerStatus = 'me';
//           imagePath = userData.imagePath;
//         }
//       } catch (e) {
//         console.log(e);
//       }

//       this.setState({
//         owner: ownerStatus,
//         myImage: imagePath,
//         messages: responseData.data.comment,
//         post: responseData.data.question,
//         postUsername: responseData.data.user.username,
//       });
//     } else if (responseData.error) {
//       msg = responseData.error.message;
//       Toast.show(msg, Toast.LONG);
//     } else {
//       msg = JSON.stringify(responseData);
//       Toast.show(msg, Toast.LONG);
//     }
//   };

  render() {
    return (
      <Container style={styles.container}>
        <StatusBar backgroundColor={primaryColors.statusbarRed} />
        <H3 style={styles.header}>Talk Zone</H3>
        <Card style={styles.cardStyle}>
          <List>
            <ListItem>
              <Body>
                <Text note>{this.state.postUsername} </Text>

                {this.state.loading ? (
                  <Spinner color={primaryColors.red} />
                ) : (
                  <Text>{this.state.post}</Text>
                )}
              </Body>
            </ListItem>
          </List>
        </Card>

        <FlatList
          style={styles.list}
          extraData={this.state}
          data={this.state.messages}
          keyExtractor={item => item._id}
          renderItem={this.renderItem}
          onRefresh={this.handleRefresh}
          refreshing={this.state.refreshing}
        />

        <View>
          <Item rounded>
            <Input
              placeholder="Add comment"
              multiline
              numberOfLines={2}
              onChangeText={comment => this.setState({comment})}
              value={this.state.comment}
              returnKeyType="send"
            />
            {this.state.submitting ? (
              <Spinner color="grey" />
            ) : (
              <Icon name="send" onPress={() => this.doSubmit()} />
            )}
          </Item>
        </View>
      </Container>
    );
  }
}

import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // width: null,
    // height: null,
    padding: 10,
    backgroundColor: '#F9F9F9',
  },
  keyboard: {
    flex: 1,
    justifyContent: 'center',
  },
  image: {
    width,
    height,
  },
  header: {
    color: 'red',
    marginTop: 20,
    textAlign: 'center',
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  right: {
    flexDirection: 'row',
  },
  chatTitle: {
    color: '#fff',
    fontWeight: '600',
    margin: 10,
    fontSize: 15,
  },
  chatImage: {
    width: 30,
    height: 30,
    borderRadius: 15,
    margin: 5,
  },

  eachMsg: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    margin: 5,
  },
  rightMsg: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    margin: 5,
    alignSelf: 'flex-end',
  },
  userPic: {
    height: 40,
    width: 40,
    margin: 5,
    borderRadius: 20,
    backgroundColor: '#f8f8f8',
  },
  msgBlock: {
    width: 220,
    borderRadius: 5,
    backgroundColor: '#E8E8E8',
    padding: 10,
    shadowColor: '#3d3d3d',
    shadowRadius: 2,
    shadowOpacity: 0.5,
    shadowOffset: {
      height: 1,
    },
  },
  rightBlock: {
    width: 220,
    borderRadius: 5,
    // backgroundColor: primaryColors.blueCool,
    padding: 10,
    shadowColor: '#3d3d3d',
    shadowRadius: 2,
    shadowOpacity: 0.5,
    shadowOffset: {
      height: 1,
    },
  },
  msgTxt: {
    fontSize: 15,
    color: '#555',
    fontWeight: '600',
  },
  rightTxt: {
    fontSize: 15,
    color: '#202020',
    fontWeight: '600',
  },
  cardStyle: {
    borderRadius: 5,
    //marginTop:20,
  },
});
