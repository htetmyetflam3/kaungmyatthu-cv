// Some containers refuse the call Node uses to list network interfaces, and
// `os.networkInterfaces()` throws EACCES / "Unknown system error 13" instead of
// returning a list. Vite calls it while printing the dev-server banner, so the
// server dies before it can serve anything.
//
// Vite builds its "Local" URL out of that list, and its `o` shortcut opens
// whatever URL it built. Returning {} stops the crash but leaves nothing to
// print or open, so hand back a single loopback entry instead: every container
// has 127.0.0.1, and it is the one address Vite needs to name.
const os = require('node:os');

const real = os.networkInterfaces.bind(os);

const LOOPBACK = {
  lo: [
    {
      address: '127.0.0.1',
      netmask: '255.0.0.0',
      family: 'IPv4',
      mac: '00:00:00:00:00:00',
      internal: true,
      cidr: '127.0.0.1/8',
    },
  ],
};

os.networkInterfaces = () => {
  try {
    const list = real();
    return Object.keys(list).length ? list : LOOPBACK;
  } catch {
    return LOOPBACK;
  }
};
