const Moment = require('moment');
const {extendMoment} = require('moment-range'); 
globalThis.moment = extendMoment(Moment)

globalThis.lodash = require('lodash');

for (const [key, fn] of Object.entries(lodash)) {
  if (!globalThis[key]) globalThis[key] = fn
}
