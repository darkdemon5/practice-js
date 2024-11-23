const month = 3;

switch (month) {
  case 1:
    console.log("jan");
    break;
  case 2:
    console.log("feb");
    break;
  case 3:
    console.log("march");
    break;
  case 4:
    console.log("april");
    break;

  default:
    console.log("not valid month");
    break;
} //Break indicates end of the case execution, if left unwritten may execute all cases except default
