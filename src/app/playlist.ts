import { Video } from './video';

export class Playlist {

    constructor(
        public id: number,
        public name: string,
        public video: Video,
        public url?: string[],
    ) { }
    
}