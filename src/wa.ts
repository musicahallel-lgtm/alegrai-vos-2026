// Monta um link de WhatsApp (wa.me) com mensagem pré-preenchida.
export function waLink(numero: string, mensagem: string): string {
  return `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`
}
