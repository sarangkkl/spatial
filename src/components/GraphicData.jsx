import React,{useState} from 'react'
import { create as ipfsHttpClient } from 'ipfs-http-client'


const client = ipfsHttpClient('https://ipfs.infura.io:5001/api/v0')

const GraphicData = () => {

  const [data,setData]=useState([])


  const captureFile = async (e)=>{
    e.preventDefault();
    // console.log("Ok i am getting executed")
    const file = e.target.files[0]
    try {
      const added = await client.add(
        file,
        {
          progress: (prog) => console.log(`received: ${prog}`)
        }
      )
      const url = `https://ipfs.infura.io/ipfs/${added.path}`
      console.log(url)
    } catch (error) {
      console.log('Error uploading file: ', error)
    } 
  }
  const submitForm = async (event)=>{
    event.preventDefault();
    
  }


  return (
    < >
        <div className='ml-[25%] my-3'>
        <div className="flex justify-center">
    <div className="mb-3 w-96">
    <label  className="form-label inline-block mb-2 text-gray-700">Upload Meme Image</label>
    <input onChange={captureFile} className="form-control
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
    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" type="file" id="formFile"/>
  </div>
</div>

<div className="flex space-x-2 justify-center">
  <button type="button" className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" onClick={submitForm}>Submit</button>
</div>
        </div>

    </>
  )
}

export default GraphicData