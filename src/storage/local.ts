import JSStorage from './index'
import { StorageType } from './../utils/types'

const localStorage = new JSStorage(StorageType.localStorage)

export default localStorage
