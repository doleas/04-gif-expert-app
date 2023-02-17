import { fireEvent, render, screen } from '@testing-library/react';
import { AddCategory } from '../../src/components/AddCategory';

describe('Prueba AddCategory', () => { 
    test('Debe de cambiar el valor de la caja de texto', () => { 
        render( <AddCategory onNewCategory = { () => {} } /> );
        // screen.debug();
        const input = screen.getByRole('textbox');

        //para disparar los eventos
        fireEvent.input( input, { target: { value: 'Saitama' }});

        expect(input.value).toBe('Saitama');
    }); 
});