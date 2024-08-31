import React from 'react'
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from './ui/form'
import { UseFormReturn } from 'react-hook-form';
import { Input } from './ui/input';

interface InputProps{
    form:UseFormReturn<any, undefined>
    name:string,
    label:string, 
    type?:string, 
    placeholder?:string
}

export default function FormInput({form, name, label, type='text', placeholder}:InputProps) {
  return (
    <FormField
    control={form.control}
    name={name}
    render={({ field }) => (
      <FormItem>
        <FormLabel>{label}</FormLabel>
        <FormControl>
          <Input placeholder={placeholder} {...field} type={type} />
        </FormControl>
        <FormMessage />
      </FormItem>
    )}
  />
  )
}
