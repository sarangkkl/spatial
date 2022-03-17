// // SPDX-License-Identifier: MIT
// pragma solidity >=0.4.22 <0.9.0;

// import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
// import "@openzeppelin/contracts/utils/Counters.sol";
// import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

// contract GeoSpatialData{
//     using Counters for Counters.Counter;

//     uint public SpatialDataCount = 0;
//     uint listingPrice = 0.025 ether;

//     function getListingPrice() public view returns (uint256){
//         return listingPrice;
//     }
    
//     struct GeoData{
//         uint id;
//         address owner_address;
//         string data_name;
//         string data_year;
//         string data_description;
//         string data_img_url;
//         string data_category;
//         string data_published_date;
//     }

//     GeoData[] public geoDatas;
    

//     mapping(uint => uint) idIndexMap;

//     event MarketItemCreated(
//         uint indexed id,
//         address indexed owner_address,
//         string data_name,
//         string data_year,
//         string data_description,
//         string data_img_url,
//         string data_category,
//         string data_published_date
//     );
//     // write function
//     // function createData(string memory _data_name,address _owner_address,string memory _data_year,string memory  _data_description,string memory _data_image_url,string memory _data_published_date,string memory _data_category,int num ) public{
//     //     SpatialDataCount++;
        
//     //     uint used_id = SpatialDataCount;
//     //     geoDatas.push(GeoData({id: used_id,owner_address:_owner_address,data_name:_data_name,data_year:_data_year,data_description:_data_description,data_img_url:_data_image_url,data_category:_data_category,data_published_date:_data_published_date}));
        
//     // }
//     function createData(
//         string memory _data_name,
//         address _owner_address,
//         string memory _data_year,
//         string memory  _data_description,
//         string memory _data_image_url,
//         string memory _data_published_date,
//         string memory _data_category,
//         uint num
//     ) public payable {

//         id.increment();
        
//     }

    
//         function getGeoData(uint256 id) public view returns (GeoData memory) {
//         uint256 index = idIndexMap[id];
//         return geoDatas[index];
//         }

//         function ReadAllData() public view returns (GeoData[] memory){

//         }


// }

