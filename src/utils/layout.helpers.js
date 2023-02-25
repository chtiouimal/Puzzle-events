export const getRightSiderWidth = (w, lh) => {
  if (w < lh - 160) {
    return 0;
  }
  // if (w < lh) {
  //   return 160;
  // }
  return 288;
};

export const getSiderWidth = (lw, lh, w) => {
  if (lw >= lh) {
    if (lw - 144 >= lh) {
      return lw - lh;
    }
    return 0;
  }

  if (w < lh) {
    return 0;
  }
  return 0;
};

export const getBoardSize = (lw, lh, w) => {
  if (lw >= lh) {
    if (lw - 100 >= lh) {
      return lh;
    }

    return lh - 100;
  }

  if (lw < lh) {
    if (w < lh && w >= lh - 288) {
      return w - 288;
    }

    if (lw >= lh - 288) {
      return lw;
    }
    if (lh - 288 >= lw && w >= lh) {
      return lw;
    }

    return w;
  }

  return 0;
};
