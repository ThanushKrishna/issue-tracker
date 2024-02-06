'use client';

import { Button, TextField, Callout, Text } from '@radix-ui/themes'
import React, { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import axios from 'axios'
import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation'
import {zodResolver} from '@hookform/resolvers/zod';
import { createIssueSchema } from '@/app/validationSchema';
import { z } from 'zod';
import ErrorMessage from '@/app/components/ErrorMessage';
import Spinner from '@/app/components/Spinner';
import "easymde/dist/easymde.min.css";
import delay from 'delay';

const SimpleMDE = dynamic(() => import('react-simplemde-editor'), {
  ssr: false
});

type IssueForm = z.infer<typeof createIssueSchema>;

const NewIssuePage = async () => {

  const router = useRouter();
  const {register, control, handleSubmit, formState: { errors }} = useForm<IssueForm>(
    {
      resolver: zodResolver(createIssueSchema)
    }
  );
  const [error, setError] = useState('');
  const [isSubmitted, setSubmitted] = useState(false);
  await delay(2000);

  const onSubmit = handleSubmit(async (data) => {
    try {
      setSubmitted(true);
      await axios.post('/api/issues', data);
      router.push('/issues')                      
    } catch (error) {    
      setSubmitted(false);        
      setError('An unexpected error occurred.');            
    }
  })


  return (
    <div className='p-3 max-w-xl space-y-3'>
       {error && (
        <Callout.Root color="red" className='mb-5'>
          <Callout.Text>{error}</Callout.Text>
        </Callout.Root>
      )}
        <form className='space-y-3'     
        onSubmit={onSubmit}
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