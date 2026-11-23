// Some containers refuse the call Node uses to list network interfaces, and
// `os.networkInterfaces()` throws EACCES / "Unknown system error 13" instead of
// returning a list. Vite calls it while printing the dev-server banner, so the
// server dies before it can serve anything.
//
// Vite only needs that list to print "Network: http://…". An empty list costs
// nothing; a thrown error costs the whole server.
const os = require('node:os');

const real = os.networkInterfaces.bind(os);

os.networkInterfaces = () => {
  try {
    return real();
  } catch {
    return {};
  }
};
