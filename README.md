# Tezjs with inkline

- Inkline is the intuitive UI Components library that gives you a developer-friendly foundation for building high-quality, accessible, and customizable Tezjs 3 Design Systems.
- We can use inkline with the Tezjs through the below steps.
- Create a fresh tezjs project
```
 npm create tez@latest
```
- Install package for inkline
```
 npm install --save @inkline/inkline
```
- Now add it as a plugin, make a plugins directory and add index.ts inside it and add the below code to use Inkline.
~~~
plugins/index.ts

import { Inkline, components } from '@inkline/inkline'
import '@inkline/inkline/inkline.scss';

export default function(vue:any){
    vue.use(Inkline, {
        components
    })
}
~~~

- It's done with tezjs. Now, you can use inkline library in your project.

- If you want to learn more about Tezjs you can visit: https://tezjs.io

- If you want to learn more about inkline you can visit: https://www.inkline.io

- In the current project all components and pages are designed with an inkline framework.
