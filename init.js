globalThis.moment = require('moment');
globalThis.lodash = require('lodash');

for (const [key, fn] of Object.entries(lodash)) {
  if (!globalThis[key]) globalThis[key] = fn
}
