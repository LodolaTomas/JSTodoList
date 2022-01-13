export default class Filters {
    constructor() {
        this.form = document.getElementById('filters');
        this.btn = document.getElementById('search');
    }
    
    onClick(callback) {
        this.btn.onclick = (e) => {
            callback({
                type:data.get('type'),
                words: data.get('words'),
            });
        };
    }

}