const GeoSpatialData = artifacts.require("GeoSpatialData");

module.exports = function (deployer) {
  deployer.deploy(GeoSpatialData);
};
