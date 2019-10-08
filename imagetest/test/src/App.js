import React, { Component } from 'react';
import './App.css';
import User from './folder1/file1';
import UniqueId from 'react-html-id'

class App extends Component {
  constructor(){
    super()
    UniqueId.enableUniqueIds(this);
  
    this.state ={ 
    title: 'show',
    imageurl: [
      {id:this.nextUniqueId(), imgurl: "https://picsum.photos/458/354", description:"image one" }
    ]
  }
}

  changeTheWorld =(newTitle) =>{
    this.setState({title:newTitle});
  }
  showNext=() =>{
    const imgtwo = Object.assign([], this.state.imageurl)
    const obj = [{ imgurl:"https://picsum.photos/g/458/354", description:"IMg 2", 
    id:this.nextUniqueId()}, 
    {imgurl:"https://picsum.photos/458/354?image=0",description:"IMg 3", id:this.nextUniqueId()},
    {imgurl:"https://picsum.photos/458/354?image=0", description:"IMg 3", id:this.nextUniqueId()}]
    
    if( i < obj.length){
      const x = imgtwo.push(obj[i]);
      i++
    }
   
            this.setState ({
                imageurl: imgtwo
            });
}

delteImg = (index, e) =>{
    
    console.log(this.state.imageurl.id ,"Unique id ")
    const imgs = Object.assign([], this.state.imageurl) 
    imgs.splice(index, 1)
    this.setState({
      imageurl:imgs,
    })
}

  render() {
    return (
      <div className="App">
        {/* <Child doWhatever={this.changeTheWorld.bind (this, 'new world')} title={this.state.title} /> */}
        
        {this.state.imageurl.map((item, index) =>
        <div>
        <Imgtwo doWhatever={()=>{this.showNext()}} title={this.state.title} 
        onDelete ={this.delteImg.bind(this, index)} 
        src={item.imgurl} description={item.description}/>
        
        </div>  )}
        
      </div>
    );
  }
}
export default App;
  

  
  
