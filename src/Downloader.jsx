import React from 'react'
import $ from 'jquery'
import './style.css'

class Downloader extends React.Component{
    constructor(props){
        super(props);
        this.state={url:'',type:''};
    }
    urlUpdater=(event)=>{
        this.setState({url:event.target.value});
    }
    typeUpdater=(event)=>{
        this.setState({type:event.target.value});
    }
    submitForm=(event)=>{
        event.preventDefault();
        var media = this.state.type;

        $.ajax({
            url:"https://y1.youtube-to-mp3.org/searchdl.php",
            method:"POST",
            data:{
                "type":this.state.type,
                "url":this.state.url
            },
            success:function(data){
                $("#data").html(data);
                console.log(data);
                var doc=document.createElement('html');
                setStyle(media);
                doc.innerHTML=data;
            }
        });

        function setStyle(type){
            $('.y_thumb').attr("class","y_thumb col-sm-12 col_md_12 col_xs_12");
            $('.title').attr('style','font-size:20px;padding:5px;margin:5px;font-weight:600;');
            $('.tab-inner').html("");
            $('#tab_video').attr('style','margin:5px;padding:5px;');
            $('#tab_video').attr('class','table');
            $('#tab_mp3').attr('style','margin:5px;padding:5px;');
            $('#tab_mp3').attr('class','table table-striped');
            $('.btn-sm').attr('style','background-color:rgb(255,0,0);border:none');
            if(type==="mp3"){
              $('#tab_video').html("");
              $('#formbox').hide();
            }
            if(type==="mp4"){
              $('#tab_mp3').html("");
              $('#formbox').hide();
            }
        } 
        
        
    }
    render(){
        return(
             <div className="mx-auto">
                 <div className="databox mx-auto col-md-12  justify-content-center">
                    <div id='data'></div>
                </div>                
                <div className="container">
                    <div className="row justify-content-center">
                        <form id="formbox" className="box">
                            <div className="col-sm-8 col-xs-12 col-md-12">
                                <div className="form-group">
                                    <label>URL</label>
                                    <input type='text' onChange={this.urlUpdater} className='form-control'/>
                                </div>
                                <div className="form-group">
                                    <label>Type</label>
                                    <select onChange={this.typeUpdater} className='form-control'>
                                        <option value="">--Select Download Type--</option>
                                        <option value="mp3">MP3</option>
                                        <option value="mp4">MP4</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <button className='btn btn-success' onClick={this.submitForm} >Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
export default Downloader;