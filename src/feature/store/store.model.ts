import { FirebaseAdmin } from '@/src/feature/common/firebase';
import debug from '@/src/feature/common/utils/debug';
import { firestore } from 'firebase-admin';
import { Store } from './schemas/store.schema';

const STORE_COLLECTION_NAME = 'store';
const STORE_SAMPLE_COLLECTION_NAME = 'store-sample';

const log = debug('Server | Model | Store');

class StoreModel {
  private model: firestore.Firestore;
  private collection: firestore.CollectionReference;
  private sampleCollection: firestore.CollectionReference;

  constructor() {
    this.model = FirebaseAdmin.getInstance().FireStore;
    this.collection = this.model.collection(STORE_COLLECTION_NAME);
    this.sampleCollection = this.model.collection(STORE_SAMPLE_COLLECTION_NAME);
  }

  async getSampleStore(): Promise<Store[]> {
    const res = await this.sampleCollection.get();

    if (res.empty) {
      log(STORE_SAMPLE_COLLECTION_NAME, 'is empty');
      return [];
    }

    const store = res.docs.map((doc) => doc.data() as Store);
    log(store);

    return store;
  }
}

export const storeModel = new StoreModel();
