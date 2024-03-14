import { fireEvent, render, screen } from '@testing-library/react';
import Post from '.';
import PostComment from '.';

describe('Teste para o componente PostComment', () => {
  test('Deve renderizar o componente corretamente', () => {
    render(<PostComment />);
    expect(screen.getByText('Comentar')).toBeInTheDocument();
  });

  test('Deve adicionar dois comentários corretamente', () => {
    render(<Post />);
      
    const textarea = screen.getByTestId('comment-input'); 
    
    fireEvent.change(textarea, { target: { value: 'Primeiro comentário' } });
    fireEvent.submit(screen.getByTestId('post-comments-form'));

    fireEvent.change(textarea, { target: { value: 'Segundo comentário' } });
    fireEvent.submit(screen.getByTestId('post-comments-form'));

    expect(screen.getByText('Primeiro comentário')).toBeInTheDocument();
    expect(screen.getByText('Segundo comentário')).toBeInTheDocument();
  });
});


