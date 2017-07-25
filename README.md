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
	  onSearch={(query) => console.log(query)}
	  onClickCell={(cellObject) => console.log(cellObject)}
	  />
      );
    }

```

## Props
All props are optional

| Prop  | Default  | Type | Description |
| :------------ |:---------------:| :---------------:| :-----|
| alphabetListProps | null | `object` | `react-native-alphabetlistview` props |
| searchProps | null | `object` | `react-native-search-box` props |


## Questions or suggestions?

Feel free to [open an issue](https://github.com/ElekenAgency/ReactNativeCountryCodeList/issues)
