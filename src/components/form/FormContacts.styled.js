import styled from 'styled-components';
import { Field, Form } from 'formik';

export const Box = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: ${p => p.theme.space[3]}px;
  background-color: #f5f5f5;
  border: 1px solid #ddd;
  border-radius: 0;
  padding: 20px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;

export const Input = styled(Field)`
  width: 300px;
  margin-top: ${p => p.theme.space[2]}px;
  padding: 10px;
  border-radius: 0;
  border: 1px solid #ccc;
  :hover,
  :focus {
    border-color: #999;
    outline: none;
  }
`;

export const InputName = styled.label`
  display: flex;
  flex-direction: column;
  margin-top: ${p => p.theme.space[2]}px;
  color: #333;
`;

export const SubmitButton = styled.button`
  margin-top: ${p => p.theme.space[3]}px;
  display: flex;
  justify-content: center;
  width: 140px;
  padding: 10px;
  color: #333;
  background-color: #e6e6e6;
  border: 1px solid #ccc;
  border-radius: 0;
  :hover,
  :focus {
    color: white;
    background-color: #999;
    border-color: #999;
  }
`;
