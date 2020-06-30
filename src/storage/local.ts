import JSStorage from './index'
import { StorageType } from './../utils/types'

const JSLocalStorage = new JSStorage(StorageType.localStorage)

export default JSLocalStorage
