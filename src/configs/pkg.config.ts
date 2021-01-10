import { IBuild, IDotEnv } from '@/interfaces';

const envConfig: IDotEnv = (process.env as unknown) as IDotEnv;

export const buildConfig: IBuild = envConfig?.BUILD_DATA || {
  BUILDTIME: '',
  MODE: '',
  VERSION: '',
  VERSION_DASH: '',
  VERSION_HASH: '',
  VERSION_NUMBER: '',
};
