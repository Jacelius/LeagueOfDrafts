import { atom } from 'jotai'
import { atomWithStorage } from 'jotai/utils'

const textAtom = atom('hello')
const darkModeAtom = atomWithStorage('darkMode', false)

export { textAtom, darkModeAtom }