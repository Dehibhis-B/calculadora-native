import { useEffect, useRef, useState } from "react";

enum Operator {
    add = '+',
    subtract = '-',  // ← Corregido
    multiply = '*',
    divide = '/',
}

export const useCalculator = () => {
    const [formula, setFormula] = useState('0');
    const [number, setNumber] = useState('0');
    const [prevNumber, setPrevNumber] = useState('0');  // ← Corregido

    const lastOperation = useRef<Operator>();

    useEffect(() => {
        if (lastOperation.current) {
            const firstFormulaPart = formula.split(' ').at(0);
            setFormula(`${firstFormulaPart} ${lastOperation.current} ${number}`);
        } else {
            setFormula(number);
        }
    }, [number]);

    useEffect(() => {
        const result = calculateSubResult();  // ← Corregido
        setPrevNumber(`${result}`);
    }, [formula]);  // ← Cambiado a [formula] para mayor precisión

    const clean = () => {
        setNumber('0');
        setPrevNumber('0');
        setFormula('0');
        lastOperation.current = undefined;
    }

    const toggleSign = () => {  // ← Corregido typo
        if (number.includes('-')) {
            setNumber(number.replace('-', ''));
        } else {
            setNumber('-' + number);
        }
    }

    const deleteLast = () => {  // ← Nombre más descriptivo
        if (number.length === 1 || (number.length === 2 && number.startsWith('-'))) {
            setNumber('0');
            return;
        }
        
        setNumber(number.slice(0, -1));
    }

    const setLastNumber = () => {
        calculateResult();  // ← Asegura que el resultado esté actualizado
        // Remover punto decimal final si existe
        const finalNumber = number.endsWith('.') ? number.slice(0, -1) : number;
        setPrevNumber(finalNumber);
        setNumber('0');
    }

    const divideOperation = () => {
        setLastNumber();
        lastOperation.current = Operator.divide;
    }

    const multiplyOperation = () => {
        setLastNumber();
        lastOperation.current = Operator.multiply;
    }

    const subtractOperation = () => {  // ← Corregido
        setLastNumber();
        lastOperation.current = Operator.subtract;
    }

    const addOperation = () => {
        setLastNumber();
        lastOperation.current = Operator.add;
    }

    const calculateSubResult = () => {  // ← Corregido
        const [firstNumberStr, operation, secondNumberStr] = formula.split(' ');
        const num1 = Number(firstNumberStr);
        const num2 = Number(secondNumberStr);

        if (isNaN(num2)) return num1;

        switch (operation) {
            case Operator.add:
                return num1 + num2;
            case Operator.subtract:  // ← Corregido
                return num1 - num2;
            case Operator.multiply:
                return num1 * num2;
            case Operator.divide:
                return num2 === 0 ? 0 : num1 / num2;  // ← Evitar división por cero
            default:
                return num1;
        }
    }

    const calculateResult = () => {
        const result = calculateSubResult();  // ← Corregido
        setFormula(`${result}`);
        setNumber(`${result}`);
        setPrevNumber('0');
        lastOperation.current = undefined;
    }

    const buildNumber = (numberStr: string) => {
    // No permitir múltiples puntos decimales
    if (number.includes('.') && numberStr === '.') return;

    // Si el número actual es "0" (no negativo) y se presiona algo que no es punto
    if (number === '0' && numberStr !== '.') {
        if (numberStr === '0') {
            // Si presiona "0" y ya es "0", mantener "0"
            return;
        }
        // Reemplazar el "0" inicial con el nuevo número
        setNumber(numberStr);
        return;
    }

    // Si el número actual es "-0" y se presiona algo que no es punto
    if (number === '-0' && numberStr !== '.') {
        if (numberStr === '0') {
            // Si presiona "0" y ya es "-0", mantener "-0"
            return;
        }
        // Reemplazar el "-0" con el nuevo número negativo
        setNumber('-' + numberStr);
        return;
    }

    // Para todos los demás casos, concatenar normalmente
    setNumber(number + numberStr);
};

    return {
        // Properties
        formula,
        number,
        prevNumber,  // ← Corregido
        
        // Methods
        buildNumber,
        clean,
        toggleSign,  // ← Corregido
        deleteLast,  // ← Mantener compatibilidad o cambiar
        divideOperation,
        multiplyOperation,
        subtractOperation,  // ← Corregido
        addOperation,
        calculateResult
    };
};