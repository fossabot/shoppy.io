var langs = [
  {title: 'English', path: '/'},
  {title: 'German', path: '/languages/de'}
]

self.$config = {
  title: 'Docute',
  nav: {
    default: [
      {
        title: 'Home', path: '/'
      },
      {
        title: 'Languages', type: 'dropdown', items: langs
      }
    ],
    'de': [
      {
        title: 'Startseite', path: '/languages/de'
      },
      {
        title: 'Spache', type: 'dropdown', items: langs
      }
    ]
  }
}
