import React,{useState} from 'react';
import { create as ipfsHttpClient } from 'ipfs-http-client';
import GeoSpatialData from '../abi/GeoSpatialData.json';
import { ethers } from 'ethers';
import Web3Modal from "web3modal";

const client = ipfsHttpClient('https://ipfs.infura.io:5001/api/v0')

const ResistrationForm = () => {

  
  const [account,setAccount] =useState("")
  const [formInput, updateFormInput] = useState({
      data_id:'',
     data_owner:'',
     data_name: '', 
     data_year: '', 
     data_description: '',
     data_img_url:'',
     data_category:'',
     data_published_date:'',
})

const connectWallethandler = () =>  {
  if(window.ethereum){
    window.ethereum.request({method:'eth_requestAccounts'})
    .then(result =>{
      setAccount(result[0])
    })
  }
}
// console.log(account)
if(account===""){
  connectWallethandler();
}
// console.log("The acount i am getting is ",account)

const captureImage= async (e)=>{
  e.preventDefault();
  formInput.data_owner=account;
  const file = e.target.files[0];
  try {
    const added = await client.add(
      file,
    )
    const url = `https://ipfs.infura.io/ipfs/${added.path}`
    updateFormInput({ ...formInput, data_img_url: url })
    console.log(url)
  } catch (error) {
    alert("An Unexpected Error Occur Probably the internet not working try again")
  } 
}
const captureFile = async (e)=>{
  e.preventDefault();
  const temp = formInput.data_img_url;
  formInput.data_img_url="";
  const file = e.target.files[0];
  try {
    const added = await client.add(
      file,
    )
    const url = `https://ipfs.infura.io/ipfs/${added.path}`
    updateFormInput({ ...formInput, data_img_url: temp+"+"+url })
    console.log(url)
  } catch (error) {
    alert("An Unexpected Error Occur Probably the internet not working try again")
  } 
}
const createSpatialData = async(e)=>{
  e.preventDefault();
  // formInput.data_published_date = new Date().toISOString().slice(0, 10)
  let today = new Date().toLocaleDateString()
  updateFormInput({data_published_date:today})
  const web3Modal = new Web3Modal()
  const connection = await web3Modal.connect()
  const provider = new ethers.providers.Web3Provider(connection)
  const signer = provider.getSigner()
  var transer ="0xFA08845F4Bf138449865B961a3d11c382776115d"
  let  contract = new ethers.Contract(transer,GeoSpatialData.abi,signer)
  console.log(contract)
  // var listingPrice = await contract.getListingPrice()
  var rand = Math.floor(Math.random() * 1000);
  updateFormInput({...formInput,data_id:rand})
  // listingPrice = listingPrice.toString()
  var listingPrice ="25000000000000000"
  // console.log(listingPrice)

  const transaction = await contract.createData(formInput.data_name,formInput.data_owner,formInput.data_year,formInput.data_description,formInput.data_img_url,formInput.data_published_date,formInput.data_category,1,)
  await transaction.wait()
  console.log(transaction)
  // console.log("This is the transaction i am getting",transaction)
};


  return (
    <>
        <div className="block p-6 rounded-lg shadow-lg bg-white w-[70%] ml-[25%]">
  <form >
    <div className="form-group mb-6">
      <input type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput7"
        placeholder="Data Name" onChange={e => updateFormInput({ ...formInput, data_name: e.target.value })}/>
    </div>
    <div className="form-group mb-6">
      <input type="number" className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput8"
        placeholder="Year Of Data" onChange={e => updateFormInput({ ...formInput, data_year: e.target.value })}/>
    </div>
    <div className="form-group mb-6">
      <textarea
      className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
      id="exampleFormControlTextarea13"
      rows="3"
      placeholder="Data Description"
      onChange={e => updateFormInput({ ...formInput, data_description: e.target.value })}></textarea>
    </div>
    <div className="form-group form-check  mb-6">

    <div className="mb-3 w-96">
    <label  className="form-label inline-block mb-2 text-gray-700">Upload Data Image</label>
    <input onChange={captureImage} className="form-control block w-full px-3 py-1.5 text-base
    font-normal
    text-gray-700
    bg-white bg-clip-padding
    border border-solid border-gray-300
    rounded
    transition
    ease-in-out
    m-0
    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" type="file" id="formFile"/>
  </div>

  <div className="mb-3 w-96">
    <label  className="form-label inline-block mb-2 text-gray-700">Upload Data</label>
    <input onChange={captureFile} className="form-control block w-full px-3 py-1.5 text-base
    font-normal
    text-gray-700
    bg-white bg-clip-padding
    border border-solid border-gray-300
    rounded
    transition
    ease-in-out
    m-0
    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" type="file" id="formFile"/>
   
  </div>
  <div className="bg-yellow-100 rounded-lg py-5 px-6 my-4 text-base text-yellow-700  " role="alert">
Please Note: Uploaded Vector Data Should be stored in MDB format and raster  data type should be .tiff or img
</div>

<div className="form-group mb-6">
      <input type="text" className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput7"
        placeholder="Data Category"
        onChange={e => updateFormInput({ ...formInput, data_category: e.target.value })}/>
    </div>
     
    </div>
    <div className="flex">
    <button type="submit" className="
      w-full
      px-6
      py-2.5
      bg-blue-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out mr-5" onClick={createSpatialData}>Register Now</button>
      <button type="submit" className="
      w-full
      px-6 ml-5
      py-2.5
      bg-blue-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out">Download Copyright Information</button>
    </div>
    
      
  </form>
</div>
    </>
  )
}

export default ResistrationForm