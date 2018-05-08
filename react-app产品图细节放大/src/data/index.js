import img1 from '../img/temp2/1.jpg';
import img2 from '../img/temp2/2.jpg';
import img3 from '../img/temp2/3.jpg';
import img4 from '../img/temp2/4.jpg';
import img5 from '../img/temp2/5.jpg';
import img6 from '../img/temp2/6.jpg';

export default (state=0,action)=>{
    switch(action.type){
        case 'opt1':
            return {bigImg:img1};
        case 'opt2':
            return {bigImg:img2};
        case 'opt3':
            return {bigImg:img3};
        case 'opt4':
            return {bigImg:img4};
        case 'opt5':
            return {bigImg:img5};
        case 'opt6':
            return {bigImg:img6};
        default:
            return {
                bigImg:img1,
                smallImg:[
                    img1,img2,img3,img4,img5,img6
                ]
            };
    }
}
