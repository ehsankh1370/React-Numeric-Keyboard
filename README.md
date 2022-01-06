
# React Numeric Keyboard

A numeric virtual keyboard for React. Especially for Progressive Web Applications and mobile views.


## Demo

![React-Numeric-Keyboard](https://github.com/ehsankh1370/ehsankh1370/blob/679c5f8d5eac96aa43dd481ac137c8118f028f5c/demo.gif)
## Installation

Install using npm

```bash
  npm i react-numeric-keyboard
```
    
## Getting Started


## Basic Usage

```javascript
import {useState} from 'react'
import { NumericKeyboard } from "react-numeric-keyboard";

function App() {
 const [isOpen,setIsOpen] = useState(false)
 const onChange = ({value,name})=>{
     console.log(value,name)
 }
  return <NumericKeyboard isOpen={isOpen} onChange={onChange}/>
}
```


## API Reference

#### isOpen

| props | Type      | Description   |
| :-------- | :-------  | :------------------------- |
| `isOpen` | `boolean` |      **Required**. Open or close the keyboard |

#### onChange({value,name})

| props | Type      | Description   |
| :-------- | :------- |  :------------------------- |
| `onChange({value,name})`      | `VoidFunction`  | **Required**. Getting the total value and the name of each keyboard characters|

#### hasTransition

| props | Type   | default    | Description   |
| :-------- | :------- | :----- | :------------------------- |
| `hasTransition` | `boolean` | true| **Optional**. The keyboard's opening and closing transition |

#### transitionTime(milliseconds)

| props | Type   | default    | Description   |
| :-------- | :------- | :----- | :------------------------- |
| `transitionTime` | `number` |300ms| **Optional**. The keyboard's transition time. Only works if hasTransition prop is true.|


#### className

| props | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `className` | `string` | **Optional**. The keyboard's classname|

#### style

| props | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `style` | `CSSProperties` | **Optional**. The keyboard's style|

#### isKeyboardDisabled
| props | Type   | default    | Description   |
| :-------- | :------- | :----- | :------------------------- |
| `isKeyboardDisabled` | `boolean` |false| **Optional**. Prevents keyboard from being clicked or touched|

#### backSpaceIcon

| props | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `backSpaceIcon` | `ReactNode` | **Optional**. Custom backspace icon|

#### leftIcon

| props | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `leftIcon` | `ReactNode` | **Optional**. Custom left corner icon|

#### theme

| props | Type   | default    | Description   |
| :-------- | :------- | :----- | :------------------------- |
| `theme` | `'light' or 'dark'` |light| **Optional**. Keyboard's theme.|




## Authors

- [@ehsankh1370](https://www.github.com/ehsankh1370)


## License

[MIT](https://choosealicense.com/licenses/mit/)

