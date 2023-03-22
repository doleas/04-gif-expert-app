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
    
    test('Debe de llamr onNewCategory si el input tiene un valor', () => { 
        
        const inputValue = 'Saitama';
        // To_Do: ????
        //levantamos nuestro sujeto de pruebas
        render( <AddCategory onNewCategory = { () => {} } /> );
        //la referencia al input y la referencia al formulario
        const input = screen.getByRole('textbox');
        const form  = screen.getByRole('form');
        //disparemos los eventos
        fireEvent.input( input, { target: { value: inputValue }});
        //disparamos el submit del formulario
        fireEvent.submit( form );
        // screen.debug();
        expect( input.value ).toBe('');
    });
});