import React from "react";
import './Profile.css'
import SearchIcon from '@mui/icons-material/Search';
import man from '../../assets/man.png'
import AddIcon from '@mui/icons-material/Add';
import HomeIcon from '@mui/icons-material/Home';
import AspectRatioIcon from '@mui/icons-material/AspectRatio';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
const Profile = () => {
     let obj=[
         {
             name:"Jonathan ",
             time:"2d ago",
             status:"Active",
             color:"#54f4ca",
             value:"4",
             optimum:"0.1",
             storage:"45%"
         },
         {
             name:"Kate ",
             time:"10d ago",
             status:"Active",
             color:"#54f4ca",
             value:"8",
             optimum:"0.5",
             storage:"81%"
         },
         {
           name:"Alxendra ",
           time:"30d ago",
           status:'Inactive',
           color:"red",
           value:"2",
           optimum:"0.1",
           storage:"21%"
         }
     ]
        

    return (
        <div className="main">
                <div className="sidebar">
                    <div className="sidebar1">
                        <p className="patiblue">Patient</p>
                        <div className="sidebaricons">
                        
                        <HomeIcon className="sideicon"/>
                        
                        <p className="sidebartext">
                           Dashboard
                        </p>
                        </div>
                        <div className="sidebaricons">
                        <AspectRatioIcon className="sideicon"/>
                        <p className="sidebartext">
                            Enquiries
                        </p>
                        </div>
                        <div className="sidebaricons">
                            <PersonAddAltIcon  className="sideicon"/>
                        <p className="sidebartext">
                            Profiles
                        </p>
                        </div>
                        <div className="sidebaricons">
                            <AccountBalanceWalletIcon className="sideicon"/>
                        <p className="sidebartext">
                            Payment
                        </p>
                        </div>
                        </div>
                        <div className="empty2"></div>
                        <div className="sidebar2">
                            <p>
                                Need our help?
                            </p>
                            <button> Contact Us</button>
                        </div>
                </div>
                <div className="content">
                    <div className="searchbox">
                    <SearchIcon />
                    <input className="search" type="text" placeholder="Search..."/> 
                    </div>
                    <div className="patienttext">
                        My patient profiles
                    </div>
                    <div className="cards">
                        
                          {obj.map((item,index)=>{
                          return(
                           <div className="card" >
                            <div className="cardheader">    
                            <p> {item.time}</p>
                            <p> . . .</p> 
                            </div>
                            <img src={man} alt="profile pic" className="cardimage" width={"60"} height={"auto"}></img>
                            <p className="name"> {item.name}</p>
                            <p className="smith"> Smith</p>
                            <p className="status" style={{color:item.color}}> {item.status}</p>
                            <meter className="meter" id="disk_c" value={item.value} min="0" max="10" optimum={item.optimum}>2 out of 10</meter>
                            <p> storage {item.storage}</p>
                           </div>
                            )}
                        )}
                        <div className="card2">
                            <AddIcon className="plus"/>
                            <p>
                                create a new patient photo
                            </p>

                        </div>
                        
                    </div>
                    <div className="empty"> </div>
                    <div className="last"> 
                      <div> 
                        <p> Available patient profiles 3 of 5</p>
                        <meter className="meter" id="disk_c" value={6} min="0" max="10" optimum={0.4}>2 out of 10</meter>
                      </div>
                      <div>
                          <button className="button"> Upgrade</button>
                      </div>

                    </div>
                </div> 
        </div>

    );
}

export default Profile