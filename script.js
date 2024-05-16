function isMaleName(name) {
  if (typeof name !== "string") {
    return "Niepoprawne dane. Wprowadź imię.";
  } else {
    if (name.toLowerCase() == "bonawentura") {
      return true;
    } else if (name.toLowerCase().endsWith("a")) {
      return false;
    } else {
      return true;
    }
  }
}
