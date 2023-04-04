function HouseKeeper(name, yearsExperience, cleaningReportoire) {
  this.name = name;
  this.yearsExperience = yearsExperience;
  this.cleaningReportoire = cleaningReportoire;
  this.clean = function () {
    console.log("Cleaning in porgress..");
  };
}

var houseKeeper1 = new HouseKeeper("Tom", 9, ["lobby", "bedroom"]);
var houseKeeper2 = new HouseKeeper("Jane", 2, ["bathroom", "bedroom"]);

console.log(houseKeeper2.name);
houseKeeper1.clean()