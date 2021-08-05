module.exports = {
  module: {
    rules: [
      {
        test: /\.(gif|svg|jpg|png)$/,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
};