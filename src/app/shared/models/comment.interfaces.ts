import { InPageInfo } from '@intabia/angular-ui';

export interface IComment {
  id: string,
  userName: string,
  publishDate: string,
  publishTime: string,
  value: string,
}

export interface ICommentsInfo {
  content: IComment[],
  pageInfo: InPageInfo,
}

export interface INewComment {
  id: string,
  value: string,
}
