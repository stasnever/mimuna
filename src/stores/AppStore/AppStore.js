import { observable, action, computed } from "mobx";
import { observer, inject } from "mobx-react/native";
import { Alert } from "react-native";

class AppStore {
  @observable
  dataList = [];
  @observable
  numerOfPays = 0;
  @observable
  credit = 355.45;
  @observable
  payment = 1;

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

  @action
  addToCredit(amount) {
    this.credit += amount;
    console.log("credit", this.credit);
  }

  @action
  addPayment() {
    this.payment = this.payment > 35 ? this.payment % 36 : this.payment + 1;
  }

  @computed
  get getCredit() {
    return this.credit.value;
  }

  @computed
  get getPayment() {
    return this.credit.value;
  }
}

const appStore = new AppStore();
export default appStore;
