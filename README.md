# ReactNativeCountryCodeList
Country code list with alphabet navigation
[![npm version](http://img.shields.io/npm/v/react-native-country-code-list.svg?style=flat-square)](https://npmjs.org/package/react-native-country-code-list "View this project on npm")
[![npm version](http://img.shields.io/npm/dm/react-native-country-code-list.svg?style=flat-square)](https://npmjs.org/package/react-native-country-code-list "View this project on npm")

Country code list with alphabet navigation for Android/IOS to use with react-native,
based on `react-native-alphabetlistview`, also using `react-native-search-box`

## Installation
1. `npm install react-native-country-code-list --save` or
   `yarn add react-native-country-code-list`

## Demo

![](./src/countryCodeList.gif)

# Usage

```js

import CountryCodeList from 'react-native-country-code-list'

class CountryCodeListApp extends React.Component {
    render() {
      return (
        <CountryCodeList
	  onClickCell={(cellObject) => console.log(cellObject)}
	  />
      );
    }

```

## Props
All props are optional

Note if you will pass custom data as a list you also must provide `renderCell`, `renderSectionHeader`, `renderSectionItem` functions and search action.

| Prop  | Default  | Type | Description |
| :------------ |:---------------:| :---------------:| :-----|
| data | country code list object | `object` | Custom list data |
| alphabetListProps | undefined | `object` | `react-native-alphabetlistview` props |
| searchProps | undefined | `object` | `react-native-search-box` props |
| onClickCell | () => {} | `func` | Callback onClick list item |
| headerBackground | rgb(245, 245, 245) | `any` | background for headers and search wrapper |
| cellHeight | 44.5 | `number` | Cell height |
| sectionHeaderHeight | 30 | `number` | Section header height |
| renderCell | func | `func` | Custom Cell component |
| renderSectionItem | func | `func` | Custom Section Item (Alphabet) component |
| renderSectionHeader | func | `func` | Custom Section header component |
| sectionHeaderStyle | style | `any` | style section header |
| sectionHeaderTextStyle | style | `any` | style section header text |
| sectionItemTextStyle | style | `any` | style section item text |
| cellStyle | style | `any` | style list item |
| cellTitleStyle | style | `any` | style list item title |
| cellLabelStyle | style | `any` | style list item right label|


## Questions or suggestions?

Feel free to [open an issue](https://github.com/ElekenAgency/ReactNativeCountryCodeList/issues)
