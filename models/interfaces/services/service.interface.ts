
export interface IService {
  path: string;
  name: string;
  shortDescription: string;
  iconUrl?: string;
}

export interface IResidualService extends IService {
  whiteIconUrl?: string;
}

export interface IServiceFull extends IResidualService {
    bannerUrl: string;
    description: string;
}
