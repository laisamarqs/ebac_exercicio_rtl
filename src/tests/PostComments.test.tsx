import { fireEvent, render, screen } from '@testing-library/react';
import Post from '../components/PostComments';
import PostComment from '../components/PostComments';
import PostComments from '../components/PostComments';

describe('Inserção de Comentários', () => {
  it('Deve ser capaz de inserir dois comentários', async () => {
    
    render(<PostComments />);

    
    const commentInput = screen.getByTestId('comment-input');
    fireEvent.change(commentInput, { target: { value: 'I understand nothing. — Michael Scott' } });

    
    const submitButton = screen.getByTestId('submit-button');
    fireEvent.click(submitButton);

    
    expect(screen.getByText('I understand nothing. — Michael Scott')).toBeInTheDocument();

    
    fireEvent.change(commentInput, { target: { value: 'I stopped caring a long time ago. - Creed Bratton' } });
    fireEvent.click(submitButton);

    
    expect(screen.getByText('I stopped caring a long time ago. - Creed Bratton')).toBeInTheDocument();
  });
});

