import React,{Component} from 'react';
import './css/product.css';
import './css/base.css';
import BigImg from './BigImg';
import SmallImg from './SmallImg';

class App extends Component{
    mouseMoveFn(e,bigImg,moveDiv,localImg){
        let mouseX = e.pageX;
        let mouseY = e.pageY;

        // offsetLeft获取的是元素相对于已定位的父级元素的位置
        // 因为html结构写的不一样，此处不适用
        let bigLeft = bigImg.getBoundingClientRect().left+
            document.documentElement.scrollLeft;
        let bigTop = bigImg.getBoundingClientRect().top+
            document.documentElement.scrollTop;
        //console.log(document.documentElement.scrollTop);

        let moveDivWidth = moveDiv.clientWidth;
        let moveL = mouseX-bigLeft-(moveDivWidth/2);
        let moveT = mouseY-bigTop-(moveDivWidth/2);

        let bigDivWidth = bigImg.clientWidth;
        let max = bigDivWidth-moveDivWidth;

        if(moveL<0){
            moveL = 0;
        } else if(moveL>max){
            moveL = max;
        }
        if(moveT<0){
            moveT = 0;
        } else if(moveT>max){
            moveT = max;
        }
        // 半透明色块的移动
        moveDiv.style.left = moveL+'px';
        moveDiv.style.top = moveT+'px';
        // 细节大图的移动
        localImg.style.left = -moveL*1.6+'px';
        localImg.style.top = -moveT*1.6+'px';
    }
    nextBtnFn(sImgUlRef){
        let len = this.props.smallImg.length;
        sImgUlRef.style.left = 460-len*84 + 'px';
    }
    preBtnFn(sImgUlRef){
        sImgUlRef.style.left = 40 + 'px';
    }
    render(){
        let {bigImg,smallImg,ops1,ops2,ops3,ops4,ops5,ops6} = this.props;
        //console.log(this.props);
        return(
            <div className="productPageWrap">
                <br/>
                <br/>
                <div ref="goodsImgRef" className="goodsImgWrap">
                    <BigImg imgUrl={bigImg}
                            mouseMoveFn={this.mouseMoveFn}
                    />
                    <SmallImg imgUrl={smallImg}
                              ops1={ops1}
                              ops2={ops2}
                              ops3={ops3}
                              ops4={ops4}
                              ops5={ops5}
                              ops6={ops6}
                              nextBtnFn={this.nextBtnFn.bind(this)}
                              preBtnFn={this.preBtnFn.bind(this)}
                    />
                </div>
            </div>
        )
    }
}
export default App;