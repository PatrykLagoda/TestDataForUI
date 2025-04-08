export interface RevisionMetadataResponse {
    items: Item[]
  }
  
  export interface Item {
    title: string
    page_id: number
    rev: number
    tid: string
    namespace: number
    user_id: number
    user_text: string
    timestamp: string
    comment: string
    tags: string[]
    restrictions: any[]
    page_language: string
    redirect: boolean
  }