import React,{Component} from 'react';

class BigImg extends Component{
    mouseOver(){
        this.refs.mouseMoveRef.style.display = 'block';
        this.refs.localDetailsRef.style.display = 'block';
    }
    mouseOut(){
        this.refs.mouseMoveRef.style.display = 'none';
        this.refs.localDetailsRef.style.display = 'none';
    }
    mouseMove(e){
        let bigImg = this.refs.bigImgRef;
        let moveDiv = this.refs.mouseMoveRef;
        let localImg = this.refs.localImgRef;

        this.props.mouseMoveFn(e,bigImg,moveDiv,localImg);
    }
    render(){
        const {imgUrl} = this.props;
        return(
            <div>
                <div className="bigImgDiv"
                     ref="bigImgRef"
                     onMouseOver={this.mouseOver.bind(this)}
                     onMouseOut ={this.mouseOut.bind(this)}
                     onMouseMove={this.mouseMove.bind(this)}
                >
                    <h1> </h1>
                    <img src={imgUrl} alt="fail"/>
                    <i></i>
                    <div ref="mouseMoveRef" className="mouseMoveDiv"></div>
                </div>
                <div ref="localDetailsRef" className="localShowImgWrap">
                    <img ref="localImgRef" src={imgUrl} alt="fail"/>
                </div>
            </div>
        )
    }
}
export default BigImg;