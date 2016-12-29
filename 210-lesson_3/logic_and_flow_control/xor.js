function isXor(a, b) {
  if (a && !b) {
    return true;
  } else if (!a && b) {
    return true;
  } else {
    return false;
  }
}
