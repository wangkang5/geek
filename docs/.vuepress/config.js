module.exports = {
  title: 'Hello MM',
  theme: '@vuepress/theme-blog',
  description: 'Just playing around',
  base: "/geek/",
  configureWebpack: {
    resolve: {
      alias: {
        '@image': 'image'
      }
    }
  }
}