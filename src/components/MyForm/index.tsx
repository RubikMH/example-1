/* eslint-disable @typescript-eslint/strict-boolean-expressions */
'use client'
import CFrom from '@/containers/CFrom'

import React from 'react'

import { Formik, Field, Form } from 'formik'
import * as Yup from 'yup'
import Button from '../Button'

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  topic: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  text: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
})
const MyForm = () => {
  return (
    <div className="w-full ">
      <Formik
        validationSchema={SignupSchema}
        initialValues={{
          email: '',
          name: '',
          topic: '',
          text: '',
        }}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2))
            actions.setSubmitting(false)
          }, 1000)
        }}
      >
        {({
          handleSubmit,
          handleChange,
          handleBlur,
          values,
          errors,
          touched,
        }) => (
          <Form
            className="flex flex-col gap-4 max-w-sm mx-auto"
            onSubmit={handleSubmit}
          >
            <CFrom>
              <label className="my-2 text-lg font-bold" htmlFor={'name'}>
                Name
              </label>
              <Field
                className="bg-[#E8D0B3] border border-gray-300 
         text-sm rounded-lg block w-full p-2.5 "
                type="text"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
                name={'name'}
              />
              {errors.name && touched.name ? (
                <div className="text-red-600">{errors.name}</div>
              ) : null}
            </CFrom>
            <CFrom>
              <label className="my-2 text-lg font-bold" htmlFor={'email'}>
                Email
              </label>
              <Field
                className="bg-[#E8D0B3] border border-gray-300 
         text-sm rounded-lg block w-full p-2.5 "
                type="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                name={'email'}
              />
              {errors.email && touched.email ? (
                <div className="text-red-600">{errors.email}</div>
              ) : null}
            </CFrom>
            <CFrom>
              <label className="my-2 text-lg font-bold" htmlFor={'topic'}>
                Topic
              </label>
              <Field
                className="bg-[#E8D0B3] border border-gray-300 
         text-sm rounded-lg block w-full p-2.5 "
                type="text"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.topic}
                name={'topic'}
              />
              {errors.topic && touched.topic ? (
                <div className="text-red-600">{errors.topic}</div>
              ) : null}
            </CFrom>
            <CFrom>
              <label className="my-2 text-lg font-bold" htmlFor={'topic'}>
                Message
              </label>
              <textarea
                className="bg-[#E8D0B3] border border-gray-300
                 text-sm rounded-lg block h-28 w-full p-2.5  "
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.text}
                name={'text'}
              />
              {errors.text && touched.text ? (
                <div className="text-red-600">{errors.text}</div>
              ) : null}
            </CFrom>
            <Button primary type="submit">
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default MyForm
