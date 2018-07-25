import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  LayoutAnimation
} from 'react-native';
import {getAlphabet} from './data'
import AlphabetListView from 'react-native-alphabetlistview'
import Search from 'react-native-search-box';
import _ from 'lodash'

class CountryCodeList extends React.Component {
  constructor(props){
    super(props)
    this.renderCell = this.renderCell.bind(this)
    this.renderSectionItem = this.renderSectionItem.bind(this)
    this.renderSectionHeader = this.renderSectionHeader.bind(this)

    this.state = {
      data: this.props.data ? this.props.data : getAlphabet(),
      query: ''
    }
  }

  render(){
    return (
      <View style={styles.container}>
        <Search
          afterCancel={this.clearQuery}
          afterDelete={this.clearQuery}
          onChangeText={this.props.onSearch ? this.props.onSearch : this.onChangeText}
          backgroundColor={this.props.headerBackground}
          titleCancelColor={'rgb(0, 0, 0)'}
          tintColorSearch={'rgb(0, 0, 0)'}
          inputStyle={styles.searchInput}
          {...this.props.searchProps}
        />
        <AlphabetListView
          enableEmptySections={true}
          data={this.state.data}
          cell={this.renderCell}
          sectionListItem={this.renderSectionItem}
          sectionHeader={this.renderSectionHeader}
          cellHeight={this.props.cellHeight}
          sectionHeaderHeight={this.props.sectionHeaderHeight}
          {...this.props.alphabetListProps}
        />
      </View>
    )
  }

  filterData = _.debounce(() => {
    const initialData = this.props.data || getAlphabet()
    let data = JSON.parse(JSON.stringify(initialData))
    Object.keys(data).map((key)=>{
      data[key] = data[key].filter((el) => {
        return el.name.toLowerCase().includes(this.state.query.toLowerCase()) || el.code.includes(this.state.query)
      })
      if (data[key].length === 0) {
        delete(data[key])
      }
    })
    this.setState({data})
  }, 450)

  clearQuery = () => {
    this.onChangeText('')
  }

  onChangeText = (query) => {
    this.setState({query})
    this.filterData()
  }

  renderSectionHeader(rowData){
    if (this.props.renderSectionHeader) {
      return this.props.renderSectionHeader(rowData)
    }
    return (
      <View style={[
        styles.sectionHeader,
        this.props.sectionHeaderStyle,
        {backgroundColor: this.props.headerBackground,height: this.props.sectionHeaderHeight - 1}
      ]}>
        <Text style={[styles.sectionHeaderText, this.props.sectionHeaderTextStyle]}>{rowData.title}</Text>
      </View>
    )
  }

  renderSectionItem(rowData){
    if (this.props.renderSectionItem) {
      return this.props.renderSectionItem(rowData)
    }
    return (
      <Text style={[styles.sectionItemText, this.props.sectionItemTextStyle]}>{rowData.title}</Text>
    )
  }

  renderCell(rowData){
    if (this.props.renderCell) {
      return this.props.renderCell(rowData)
    }
    return (
      <View>
        <TouchableOpacity
          onPress={()=>{this.props.onClickCell(rowData.item)}}
          style={[styles.cell, this.props.cellStyle, {height: this.props.cellHeight - 0.5}]}>
          <Text numberOfLines={1} style={[styles.cellTitle, this.props.cellTitleStyle]}>{rowData.item.name}</Text>
          <Text style={[styles.cellLabel, this.props.cellLabelStyle]}>{rowData.item.code}</Text>
        </TouchableOpacity>
        <View style={styles.separator}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 63,
    flex: 1
  },
  sectionHeader: {
    justifyContent: 'center',
    top: -1,
    paddingLeft: 20,
  },
  sectionHeaderText: {
    justifyContent: 'center',
    fontSize: 16,
    color: 'rgb(0,0,0)'
  },
  sectionItemText: {
    color: 'rgb(153, 205, 55)',
    fontSize: 12,
  },
  cell: {
    paddingLeft: 20,
    paddingRight: 31,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  separator: {
    backgroundColor: 'rgb(0, 0, 0)',
    height: 0.5,
    opacity: 0.05,
    marginLeft: 20,
    marginRight: 25,
  },
  cellTitle: {
    fontSize: 16,
    flex: 1,
    paddingRight: 10,
    color: 'rgb(0, 0, 0)',
  },
  cellLabel: {
    fontSize: 16,
    color: 'rgb(0, 0, 0)',
  },
  searchInput: {
    backgroundColor: 'white'
  }
});

CountryCodeList.defaultProps = {
  headerBackground: 'rgb(245, 245, 245)',
  cellHeight: 44.5,
  sectionHeaderHeight: 30,
  onClickCell: () => {}
};

module.exports = CountryCodeList;
