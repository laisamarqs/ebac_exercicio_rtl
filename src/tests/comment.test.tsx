import { fireEvent, render, screen } from '@testing-library/react';
import Post from '../components/PostComments'; 


describe('Inserção de Comentários', () => {
    it('Deve ser capaz de inserir dois comentários', async () => {
        render(<Post />);
        
        const commentInput = screen.getByTestId('comment-input');
        const submitButton = screen.getByTestId('submit-button');

        fireEvent.change(commentInput, { target: { value: 'I understand nothing. — Michael Scott' } });
        fireEvent.click(submitButton);
        expect(screen.getByText('I understand nothing. — Michael Scott')).toBeInTheDocument();

        fireEvent.change(commentInput, { target: { value: 'I stopped caring a long time ago. - Creed Bratton' } });
        fireEvent.click(submitButton);
        expect(screen.getByText('I stopped caring a long time ago. - Creed Bratton')).toBeInTheDocument();
    });
});  
