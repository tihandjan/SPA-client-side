export class Project {
    constructor(
        public title?: string,
        public summary?: string,
        public description?: string,
        public site_url?: string,
        public realise?: string,
        public name?: string,
        public pictures?: Array<string>,
        public category?: Array<string>,
    ){}
}
