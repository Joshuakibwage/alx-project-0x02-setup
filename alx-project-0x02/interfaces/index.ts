

export interface CardProps {
    title: string,
    content: string
}


export interface PostModalProps {
  onClose: () => void;
  onSubmit: (post: PostData) => void;
}