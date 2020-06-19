import { BaseVideo } from './basevideo';

export class Video implements BaseVideo {

    id: number;
    author_name:  string;
    author_url:  string;
    height:  string;
    html:  string;
    provider_name: string;
    provider_url: string;
    thumbnail_height: number;
    thumbnail_url:  string;
    thumbnail_width: number;
    title: string;
    type: string;
    version: string;
    width:  string;

    constructor(video: BaseVideo) {
        this.id = video.id;
        this.title = video.title;
    }
}