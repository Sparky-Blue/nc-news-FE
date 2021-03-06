const sortBy = (list, prop) => {
  return list.sort((a, b) => {
    if (a[prop] > b[prop]) return -1;
    if (a[prop] < b[prop]) return 1;
    return 0;
  });
};

export default sortBy;
