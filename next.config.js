//js
module.exports = () => {
  const rewrites = () => {
    return [
      {
        source: "/api/:path*",
        destination: "https://skyline.github.com/:path*",
      },
    ];
  };
  return {
    rewrites,
  };
};