import {
  IResidualService,
  IService,
} from 'models/interfaces/services/service.interface';

export const getServicesShortInfo = (locale: string): IService[] => {
  const services = require(`/data/services/services.${locale}.json`);

  return services.map((item: IService) => ({
    name: item.name,
    path: item.path,
    iconUrl: item.iconUrl,
    shortDescription: item.shortDescription,
  }));
};

export const getResidualServices = (
  locale: string,
  name: string,
): IResidualService[] => {
  const services = require(`/data/services/services.${locale}.json`);

  return services
    .filter((item: IResidualService) => item.path !== name)
    .map((item: IResidualService) => ({
      name: item.name,
      path: item.path,
      whiteIconUrl: item.whiteIconUrl,
      shortDescription: item.shortDescription,
    }));
};

export const getServesesPaths = () => {
  const services = require(`/data/services/services.en.json`);

  return services.map((item: IService) => item.path);
};
