export type channels = { id: number, name: string }[]

export type ChannelsRes = {
  data: {
    channels: Channels,
    message: string
  }
}

// 约定新闻列表的结构
export type NewsItem = {
  art_id: string;
  title: string;
  aut_id: string;
  comm_count: number;
  pubdate: string;
  aut_name: string;
  is_top: number;
  cover: {
    type: number;
    images: string[]
  };
}

// 约定返回值的结构
export type NewsRes = {
  data: {
    results: NewsItem[],
    message: string
  }
}