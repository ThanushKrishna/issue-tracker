'use client';

import { Button, TextField, Callout, Text } from '@radix-ui/themes'
import React, { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import SimpleMDE from "react-simplemde-editor";
import {zodResolver} from '@hookform/resolvers/zod';
import { createIssueSchema } from '@/app/validationSchema';
import { z } from 'zod';
import ErrorMessage from '@/app/components/ErrorMessage';
import Spinner from '@/app/components/Spinner';
import "easymde/dist/easymde.min.css";

type IssueForm = z.infer<typeof createIssueSchema>;

const NewIssuePage = () => {

  const router = useRouter();
  const {register, control, handleSubmit, formState: { errors }} = useForm<IssueForm>(
    {
      resolver: zodResolver(createIssueSchema)
    }
  );
  const [error, setError] = useState('');
  const [isSubmitted, setSubmitted] = useState(false);


  return (
    <div className='p-3 max-w-xl space-y-3'>
       {error && (
        <Callout.Root color="red" className='mb-5'>
          <Callout.Text>{error}</Callout.Text>
        </Callout.Root>
      )}
        <form         
        onSubmit={handleSubmit(async (data) => {
          try {
            setSubmitted(true);
            await axios.post('/api/issues', data);
            router.push('/issues')                      
          } catch (error) {    
            setSubmitted(false);        
            setError('An unexpected error occurred.');            
          }
        })}
        >
        <TextField.Root>
            <TextField.Input placeholder='Title' {...register('title')} />
        </TextField.Root>
        <ErrorMessage>{errors.title?.message}</ErrorMessage>        
        <Controller
            name='description'
            control={control}
            render={({field}) => (
                <SimpleMDE {...field} />
            )}>
        </Controller>        
        <ErrorMessage>{errors.description?.message}</ErrorMessage>        
        <Button disabled={isSubmitted}> Submit New Issue {isSubmitted && <Spinner/> }</Button>
        </form>
    </div>
  )
}

export default NewIssuePage