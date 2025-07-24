import getConfig from 'next/config';

/**
 * Exposes ENV variables from next.config.js
 * */

interface IPublicRuntimeConfig {
  userUrl: string;
  usersUrl: string;
  articlesUrl: string;
}

const { publicRuntimeConfig }: {
  publicRuntimeConfig: IPublicRuntimeConfig
} = getConfig();

export default publicRuntimeConfig;
