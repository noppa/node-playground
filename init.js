const {extendMoment} = require('moment-range'); 
const Moment = require('moment-timezone')
globalThis.moment = extendMoment(Moment)

globalThis.lodash = require('lodash');

for (const [key, fn] of Object.entries(lodash)) {
  if (!globalThis[key]) globalThis[key] = fn
}
