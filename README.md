
# React Numeric Keyboard

A numeric virtual keyboard for React. Especially for Progressive Web Applications and mobile views.


## Demo

![React-Numeric-Keyboard](https://github.com/ehsankh1370/ehsankh1370/blob/99c28e421e148c050bb6d8afaa90f8383ed12266/simple.gif)
![React-Numeric-Keyboard](https://github.com/ehsankh1370/ehsankh1370/blob/99c28e421e148c050bb6d8afaa90f8383ed12266/spaced.gif)
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



| props | Type     | default    | Description   |
| :-------- | :-------  |:-------| :------------------------- |
| `isOpen` | `boolean` |  |     **Required**. Open or close the keyboard |
| `onChange({value,name})`      | `VoidFunction` | | **Required**. Getting the total value and the name of each keyboard characters|
| `mode`      | `simple` or `spaced` | `simple` | Keyboard's mode|
| `hasTransition` | `boolean` | `true` | keyboard's opening and closing transition |
| `transitionTime` | `number` |300ms|  keyboard's transition time. Only works if hasTransition prop is true.|
| `className` | `string` | |   keyboard's classname|
| `style` | `CSSProperties` | | keyboard's style|
| `isKeyboardDisabled` | `boolean` |`false`| Prevents keyboard's items from being clicked or touched|
| `backSpaceIcon` | `ReactNode` | | Custom backspace icon|
| `leftIcon` | `ReactNode` | | Custom left corner icon|
| `containerClassName` | `string` | | ClassName of the keyboard's items container|
| `header` | `ReactNode` | | An optional header above the keyboard. Note that to prevent your header's overflow use `box-sizing:border-box` in your header component|






## Authors

- [@ehsankh1370](https://www.github.com/ehsankh1370)


## License

[MIT](https://choosealicense.com/licenses/mit/)


## Roadmap

- Add more keyboard's view


