module.exports = function addEasterEggLoader(source) { // eslint-disable-line
  const message = String.raw`<!-- \n` +
        String.raw`    _   _   _   _     _   _   _   _   _   _   _     _   _       \n` +
        String.raw`   / \\ / \\ / \\ / \\   / \\ / \\ / \\ / \\ / \\ / \\ / \\   / \\ / \\      \n` +
        String.raw`  ( f | r | o | m ) ( c | r | e | a | t | o | r ) ( o | f )     \n` +
        String.raw`   \\_/ \\_/ \\_/ \\_/   \\_/ \\_/ \\_/ \\_/ \\_/ \\_/ \\_/   \\_/ \\_/      \n` +
        String.raw`                                                                \n` +
        String.raw`   ██████  ██▓    ▓█████  ███▄    █ ▓█████▄ ▓█████  ██▀███      \n` +
        String.raw` ▒██    ▒ ▓██▒    ▓█   ▀  ██ ▀█   █ ▒██▀ ██▌▓█   ▀ ▓██ ▒ ██▒    \n` +
        String.raw` ░ ▓██▄   ▒██░    ▒███   ▓██  ▀█ ██▒░██   █▌▒███   ▓██ ░▄█ ▒    \n` +
        String.raw`   ▒   ██▒▒██░    ▒▓█  ▄ ▓██▒  ▐▌██▒░▓█▄   ▌▒▓█  ▄ ▒██▀▀█▄      \n` +
        String.raw` ▒██████▒▒░██████▒░▒████▒▒██░   ▓██░░▒████▓ ░▒████▒░██▓ ▒██▒    \n` +
        String.raw` ▒ ▒▓▒ ▒ ░░ ▒░▓  ░░░ ▒░ ░░ ▒░   ▒ ▒  ▒▒▓  ▒ ░░ ▒░ ░░ ▒▓ ░▒▓░    \n` +
        String.raw` ░ ░▒  ░ ░░ ░ ▒  ░ ░ ░  ░░ ░░   ░ ▒░ ░ ▒  ▒  ░ ░  ░  ░▒ ░ ▒░    \n` +
        String.raw` ░  ░  ░    ░ ░      ░      ░   ░ ░  ░ ░  ░    ░     ░░   ░     \n` +
        String.raw`       ░      ░  ░   ░  ░         ░    ░       ░  ░   ░         \n` +
        String.raw`                                     ░                          \n` +
        String.raw`-->`;
  return source.replace('<body>', `<body>${message}`);
};