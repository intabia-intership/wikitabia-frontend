import { InPageInfo } from '@intabia/angular-ui';

export interface INewArticle {
    title: string;
    link: string;
    tags: string[] | null;
    description: string | null;
    difficulty: string | null;
}

export interface IArticle {
    id: string;
    article: string;
    link: string;
    tags: string[];
    difficulty: string;
    description: string;
    thumb_up: number;
    thumb_down: number;
}

export interface IArticleInfo {
    article: string;
    link: string;
    tags: string[];
    difficulty: string;
    description: string;
}
export interface IArticleThumbs {
    thumb_up: number;
    thumb_down: number;
}

export interface IArticlesInfo {
    content: IArticle[];
    pageInfo: InPageInfo;
}

export interface IDifficultyOptions {
    id: string;
    viewValue: string;
}

export interface ITagOptions {
    id: string;
    viewValue: string;
    color: string;
}

export interface IFilter {
    title: string;
    tags: string;
    difficulty: string;
}
