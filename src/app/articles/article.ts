export class Article {
    constructor(
        public title?: string,
        public summary?: string,
        public description?: string,
        public picture?: Array<string>,
        public category?: Array<string>,
    ) {}
}