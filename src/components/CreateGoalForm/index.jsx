import React, { useContext } from 'react';
import { FormStyled } from './styles';
import ButtonComp from '../ButtonComp';
import SelectField from "../SelectField";
import { TextField } from '@material-ui/core';
import { apiKabit } from '../../utils/apis';
import { TokenContext } from '../../providers/UserToken';
import { GroupsSubscriptionsContext } from '../../providers/groupsSubscriptions';

import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const CreateGoalForm = () => {
    const { userToken } = useContext(TokenContext);
    const { editGroupId } = useContext(GroupsSubscriptionsContext)

    const schema = yup.object().shape({
        title: yup
                .string()
                .required('Campo obrigatório'),
        difficulty: yup
                .string()
                .required('Campo obrigatório'),
    })

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmitFunction = ({ title, difficulty }) => {
        apiKabit
        .post(`/goals/`, {
            title: title,
            difficulty: difficulty,
            how_much_achieved: 0,
            group: editGroupId,
        }, {
            headers: {
                Authorization: `Bearer ${userToken}`,
              },
        })
        .then((response) => {
            console.log(response)
        })
        .catch((error) => {
            console.log(error);
        })
    }

    return (
    <FormStyled>
        <TextField
            label='title' 
            {...register('title')}
            helperText={errors.title?.message} 
        />

        <SelectField 
            register={register} 
            name='difficulty' 
            options={['Muito fácil', 'Fácil', 'Intermediário', 'Difícil', 'Muito difícil']}
        />
        {errors.difficulty?.message}

        <ButtonComp type="submit" PropFunction={handleSubmit(onSubmitFunction)}>Criar Meta</ButtonComp>        
    </FormStyled>
    );
}

export default CreateGoalForm;
