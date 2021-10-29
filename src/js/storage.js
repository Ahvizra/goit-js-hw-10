const key = 'theme';
export default class Storage {
  static save(saveId) {
    localStorage.removeItem(key);
    localStorage.setItem(key,saveId)
  }
  static load() {
    try {
      return localStorage.getItem(key);
    }
    catch (e) {
      console.log(e);
      return [];
    }
}
}