class AppController extends NewsAPILoader {
	constructor(){
		super();
		this.currentSource;
	}

	getSources(callback) {
	  super.getResp({ endpoint: 'sources' }, callback);
	}

	getNews(e, callback) {
	  let target = e.target;
		const sourcesContainer = e.currentTarget;

		if(document.querySelector('.news__spiner')) document.querySelector('.news__spiner').classList.remove('hidden');

	  while (target != sourcesContainer) {
			if (target.classList.contains('source__item')) {
				const sources = target.getAttribute('data-source-id');
				if (this.currentSource !== sources) {
					this.currentSource =  sources;
					super.getResp({
						endpoint: 'everything',
						options: { sources }
					}, callback);
				}
				return;
			}
			target = target.parentNode;
	  }
	}
}