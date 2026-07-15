import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { db, isFirebaseConfigured } from '../firebase'
import type { Inscricao } from '../types'

export async function criarInscricao(data: Inscricao): Promise<void> {
  if (!isFirebaseConfigured || !db) {
    throw new Error('INSCRICOES_INDISPONIVEIS')
  }
  await addDoc(collection(db, 'inscricoes'), {
    ...data,
    criadoEm: serverTimestamp(),
  })
}
