import JSStorage from './index'
import { StorageType } from '../utils/types'

const JSSessionStorage = new JSStorage(StorageType.sessionStorage)

export default JSSessionStorage
