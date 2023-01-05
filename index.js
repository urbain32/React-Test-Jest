const getFName = (fname, lname) => {
  return `${fname} ${lname}`;
};

const actualFName = getFName("Urbain", "Quentin");
const expectedFName = "UrbainQuentin";

if (actualFName !== expectedFName) {
  throw new Error(`${actualFName} is not equal to ${expectedFName}`);
}
