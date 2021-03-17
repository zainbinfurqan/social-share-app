const googleTimeApiMethods = {};

googleTimeApiMethods.getLocalTimeZone = async () => {
  const response = await fetch(
    "https://maps.googleapis.com/maps/api/timezone/json&key=AIzaSyC95Q0S8RZoJg8qnoFQql-_ahUTtR1_KB8"
  );
  // const res = await response.json();
  // console.log(res);
  console.log(response);
};

export { googleTimeApiMethods };
