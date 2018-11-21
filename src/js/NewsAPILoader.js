class NewsAPILoader extends Loader {
  constructor() {
    super('https://newsapi.org/v2/', {
      apiKey: '67c1acd35f714c8da11288faf6e12bcf',
    });
  }
}