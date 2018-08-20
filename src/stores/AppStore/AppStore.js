import { observable, action, computed } from "mobx";
import { persist } from "mobx-persist";
import { observer, inject } from "mobx-react/native";
import { Alert } from "react-native";

class AppStore {
  dataList = observable([]);
  numerOfPays = observable(0);

  @action
  addMorePays() {
    if (this.dataList.length < 3) {
      this.dataList.push({ src: `https://randomuser.me/api/portraits/med/men/${63 - this.numerOfPays}.jpg` });
      this.numerOfPays++;
    } else {
      this.popAlert();
    }
  }

  @action
  popAlert() {
    Alert.alert("הגבלת הוספה", "לא ניתן להוסיף יותר מ-3 חיובים", [{ text: "חזרה", onPress: () => console.log("OK Pressed") }], { cancelable: false });
  }

  @computed
  get initials() {
    return this.first_name && this.last_name ? `${this.first_name[0].toUpperCase()}${this.last_name[0].toUpperCase()}` : "";
  }
}

const appStore = new AppStore();
export default appStore;
