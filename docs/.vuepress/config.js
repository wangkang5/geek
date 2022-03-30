module.exports = {
  title: 'Hello MM',
  theme: '@vuepress/theme-blog',
  description: 'Just playing around',
  configureWebpack: {
    resolve: {
      alias: {
        '@image': 'image'
      }
    }
  }
}