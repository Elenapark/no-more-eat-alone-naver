import * as admin from 'firebase-admin';
import debug from '../utils/debug';

type FirebaseAdminConfig = {
  databaseurl: string;
  credential: {
    privateKey: string;
    clientEmail: string;
    projectId: string;
  };
};

const log = debug('Firebase Admin | ');

export class FirebaseAdmin {
  private static instance: FirebaseAdmin;
  private constructor() {
    this.bootstrap();
  }

  static getInstance() {
    if (!FirebaseAdmin.instance) {
      FirebaseAdmin.instance = new FirebaseAdmin();
    }
    return FirebaseAdmin.instance;
  }

  private bootstrap() {
    if (admin.apps.length > 0) {
      log('bootstrap stop find alreadys app');
      return;
    }

    log('bootstrap start');

    const config: FirebaseAdminConfig = {
      databaseurl: process.env.DATA_BASE_URL || '',
      credential: {
        privateKey: process.env.PRIVATE_KEY?.replace(/\\n/gm, '\n') || '',
        clientEmail: process.env.CLIENT_EMAIL || '',
        projectId: process.env.PROJECT_ID || '',
      },
    };

    admin.initializeApp({
      databaseURL: config.databaseurl,
      credential: admin.credential.cert(config.credential),
    });

    FirebaseAdmin.instance = new FirebaseAdmin();
    log('bootstrap end');
  }

  get FireStore(): FirebaseFirestore.Firestore {
    if (!FirebaseAdmin.instance) {
      this.bootstrap();
    }
    return admin.firestore();
  }

  get Auth(): admin.auth.Auth {
    if (!FirebaseAdmin.instance) {
      this.bootstrap();
    }
    return admin.auth();
  }
}
