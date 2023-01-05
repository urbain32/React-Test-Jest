const getFName = (fname, lname) => {
  return `${fname} ${lname}`;
};

const actualFName = getFName("Urbain", "Quentin");
const expectedFName = "Urbain Quentin";

if (actualFName !== expectedFName) {
  throw new Error(`${actualFName} is not equal to ${expectedFName}`);
}
