import React, { Component } from "react";
import { TouchableOpacity, Dimensions, Image, Alert, ActivityIndicator, View, Text, FlatList } from "react-native";
import { SocialIcon, SearchBar, List, ListItem } from "react-native-elements";
import Icon from 'react-native-vector-icons/MaterialIcons';


class FlatListDemo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      data: [],
      page: 1,
      seed: 1,
      error: null,
      refreshing: false,
      screenWidth: 0,
    };
  }

  componentDidMount() {
 ///   BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
    this.setState({
      screenWidth: Dimensions.get('window').width
    });
    this.makeRemoteRequest();
  }
/*  handleBackPress = () =>{

    Alert.alert("back button clicked");
  }*/
  makeRemoteRequest = () => {
    const { page, seed } = this.state;
    const url = `https://randomuser.me/api/?seed=${seed}&page=${page}&results=7`;
    this.setState({ loading: true });

    setTimeout(() => {
      fetch(url)
        .then(res => res.json())
        .then(res => {
          this.setState({
            data: page === 1 ? res.results : [...this.state.data, ...res.results],
            error: res.error || null,
            loading: false,
            refreshing: false
          });
        })
        .catch(error => {
          this.setState({ error, loading: false, refreshing: false });
        });
    }, 1500);
  };
  renderHeader = () => {
    return <SearchBar placeholder="Type Here..." lightTheme round />;
  };

  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "86%",
          backgroundColor: "#CED0CE",
      //    marginLeft: "14%"
        }}
      />
    );
  };
  handleRefresh = () => {

    this.setState({
      page: 1,
      refreshing: true,
      seed: this.state.seed + 1
    }, () => {

      this.makeRemoteRequest();

    })
  };
  handleLoadMore = () => {

    this.setState({
      page: this.state.page + 1
    }, () => {
      this.makeRemoteRequest();
    })

  }
  renderFooter = () => {
    //if (!this.state.loading) return null;
    return (
      <View
          style={{
          paddingVertical: 50,
          borderTopWidth: 1,
          borderColor: "#CED0CE",
          alignItems: 'center',
          flex: 1
        }}
      >
        <Text>Loading</Text>
        <ActivityIndicator animating size='large' />
      </View>
    );
  };
  chat = () => {

    Alert.alert("coming soon");
  }


  render() {
    return (
      <View style={{backgroundColor:'rgb(0,120,215)', width:'100%'}}>
      <Icon name='menu'  onPress={() => {
    Alert.alert('Menu button test!');
  }}
  size={30} style={{width:30, marginLeft:20,marginTop:50}}/>
     
        <List containerStyle={{ borderTopWidth: 0, borderBottomWidth: 0 }}>
          <FlatList
            data={this.state.data}
            renderItem={({ item }) => (
              <ListItem
               // roundAvatar
                hideChevron
                title={`${item.name.first} ${item.name.last}`}
                titleStyle={{fontSize:20}}
                subtitle={
                  <View>
                    <Image
                      source={{ uri: item.picture.large }}
                      style={{
                        width: this.state.screenWidth-20,
                        height: this.state.screenWidth /3*4,
                        alignItems: 'center'
                      // marginLeft: -10
                      }} />
                      <View style={{flexDirection:'row'}}>
                    <SocialIcon
                      style={{width:100}}
                      title='Facebook'
                      button
                      light
                      type='facebook'
                      onPress={this.chat}
                    />
                    <SocialIcon
                      style={{width:110}}
                      title='Instagram'
                      button
                      light
                      type='instagram'
                      onPress={this.chat}
                    />
                    <SocialIcon
                      style={{width:100}}
                      title='Skype'
                      button
                      light
                      type='skype'
                      onPress={this.chat}
                    /></View>
                  </View>}
                //avatar={{ uri: item.picture.thumbnail}}
              //  containerStyle={{ borderBottomWidth: 0 }}
              />
            )}
            keyExtractor={item => item.email}
            ItemSeparatorComponent={this.renderSeparator}
            ListHeaderComponent={this.renderHeader}
            ListFooterComponent={this.renderFooter}
            refreshing={this.state.refreshing}
            onRefresh={this.handleRefresh}
            onEndReached={this.handleLoadMore}
            onEndThreshold={0}
          />
        </List>
      </View>
    );
  }
}

export default FlatListDemo;