import React from 'react';


class Tugas11 extends React.Component {
    constructor(props){
        super(props)
        var today = new Date(),
        curTime = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();

        this.state = {
            time: 91,
            curTime: curTime,
        }
    }
    
    componentDidMount(){
        if (this.state.time > 0){
            this.timerID = setInterval(
            () => this.tick(),
            1000
            );
        }
        else if (this.state.time === 0){
            clearInterval(this.timerID);
        };

        // this.clockID = setInterval ( 
        // () => this.setState({curtime: this.state.curTime}, 1000)
        // );
    }
    

    componentWillUnmount(){
            clearInterval(this.timerID);
            // clearInterval(this.clockID);
    }
    
    tick() {
        if (this.state.time <= 0)
        {
            this.setState({
                time: this.state.time
            })
        }
        else {
            this.setState({
                time: this.state.time - 1 
            });
        }
    }

    
    render(){
        return(
            <>
            <h1 style={{textAlign: "center"}}>
                Sekarang jam: {this.state.curTime}
                {'                '}
                Hitung mundur: {this.state.time}
            </h1>
            </>
        )
    } 
}

export default Tugas11