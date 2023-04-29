/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: () => {
    // 本番環境では、Testing Libraryで使用するdata-testid属性を削除する
    if (process.env.NODE_ENV === "production") {
      compilerConfig = {
        reactRemoveProperties: { properties: ["^data-testid$"] },
      };
    }
  },
};

module.exports = nextConfig;
