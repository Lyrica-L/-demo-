import React,{Component} from 'react';

class SmallImg extends Component{
    imgSwitch(i){
        let opt1 = this.props.ops1;
        let opt2 = this.props.ops2;
        let opt3 = this.props.ops3;
        let opt4 = this.props.ops4;
        let opt5 = this.props.ops5;
        let opt6 = this.props.ops6;
        let ops  = [opt1,opt2,opt3,opt4,opt5,opt6];

        ops[i]();
    }
    nextBtn(){
        this.props.nextBtnFn(this.refs.sImgUlRef);
    }
    preBtn(){
        this.props.preBtnFn(this.refs.sImgUlRef);
    }
    render(){
        let imgArr = this.props.imgUrl;
        return(
            <div className="smallImgList">
                <label onClick={this.preBtn.bind(this)}>上翻</label>
                <ul style={{width:imgArr.length * 84}} ref="sImgUlRef">
                    {
                        imgArr.map((t,i)=>
                        <li onClick={this.imgSwitch.bind(this,i)}
                            key={i}>
                            <img src={t} alt="fail"/>
                        </li>
                        )
                    }
                </ul>
                <span onClick={this.nextBtn.bind(this)}>下翻</span>
            </div>
        )
    }
}
export default SmallImg;