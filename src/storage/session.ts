import JSStorage from './index'
import { StorageType } from '../utils/types'

const sessionStorage = new JSStorage(StorageType.sessionStorage)

export default sessionStorage
