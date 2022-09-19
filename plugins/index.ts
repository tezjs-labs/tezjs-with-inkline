import { Inkline, components } from '@inkline/inkline'
import '@inkline/inkline/inkline.scss';

export default function(vue:any){
    vue.use(Inkline, {
        components
    })
}