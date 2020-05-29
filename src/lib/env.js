// Check for missing env vars
let errorMsg = '';

const env = {
  REACT_APP_CLLCTVE_API_ORIGIN: processVar('REACT_APP_CLLCTVE_API_ORIGIN'),
  NODE_ENV: processVar('NODE_ENV')
};

function processVar(key) {
  if (!process.env[key]) {
    console.log(`WARNING: ${key} is undefined`);
    errorMsg += `${key}\n`;
    return '';
  }
  return process.env[key];
}

if (errorMsg) throw new Error(`Required env vars missing: \n${errorMsg}`);

export default env;
