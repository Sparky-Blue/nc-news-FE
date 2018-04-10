const displayDate = created_at => {
  return new Date(created_at).toLocaleDateString("en-GB", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric"
  });
};

export default displayDate;
