import { desertsAmount, teaAmount } from "./DalidaTeahouse";
import { c as countMenuPositions } from "./DalidaTeahouse";
import groceries from "./DalidaTeahouse";

let provision_needed = false;
if (desertsAmount < 2 || teaAmount < 2) {
  provision_needed = true;
}

let provideNewProducts = false;
if (countMenuPositions < 10) {
  provideNewProducts = true;
}
