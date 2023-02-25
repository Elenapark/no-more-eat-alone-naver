import { getApps, initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import getConfig from 'next/config';
import debug from '../utils/debug';

const log = debug('FirebaseClient:Auth');

const { publicRuntimeConfig } = getConfig();

const FirebaseClientConfig = {
  apiKey: publicRuntimeConfig.publicApiKey,
  authDomain: publicRuntimeConfig.authDomain,
  projectId: publicRuntimeConfig.projectId,
};

export class FirebaseAuthClient {
  private static instance: FirebaseAuthClient;

  private constructor() {
    this.bootstrap();
  }

  private static init() {
    if (!FirebaseAuthClient.instance) {
      FirebaseAuthClient.instance = new FirebaseAuthClient();
    }
  }

  static getInstance() {
    this.init();
    return FirebaseAuthClient.instance;
  }

  private bootstrap() {
    if (getApps().length > 0) {
      log('bootstrap stop find alreadys app');
      return;
    }
    log('bootstrap start');
    initializeApp(FirebaseClientConfig);
    log('bootstrap end');
  }

  get Auth() {
    FirebaseAuthClient.init();
    return getAuth();
  }
}
